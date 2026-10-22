// Local test harness for the delivery functions. Run: node tests/run-tests.mjs
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import { signToken, verifyToken, PLINK_EDITIONS } from '../netlify/functions/lib/token.mjs';

process.env.DOWNLOAD_SECRET = 'test-download-secret';
process.env.STRIPE_WEBHOOK_SECRET = 'whsec_testsecret';
delete process.env.RESEND_API_KEY; // webhook should succeed without email configured
delete process.env.SITE_URL;

const { default: webhook } = await import('../netlify/functions/stripe-webhook.mjs');
const { default: download } = await import('../netlify/functions/download.mjs');
const { default: getDownload } = await import('../netlify/functions/get-download.mjs');

let passed = 0;
async function test(name, fn) {
  try { await fn(); passed++; console.log('PASS', name); }
  catch (e) { console.error('FAIL', name, '\n ', e.message); process.exitCode = 1; }
}

// --- token lib ---
await test('token round-trips', () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 1000 }, 'k');
  const p = verifyToken(t, 'k');
  assert.equal(p.ed, 'adult');
});
await test('expired token rejected', () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() - 1 }, 'k');
  assert.equal(verifyToken(t, 'k'), null);
});
await test('tampered token rejected', () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 1000 }, 'k');
  const [body, sig] = t.split('.');
  const evil = Buffer.from(JSON.stringify({ sid: 'cs_1', ed: 'hs', exp: Date.now() + 1000 })).toString('base64url');
  assert.equal(verifyToken(`${evil}.${sig}`, 'k'), null);
  assert.equal(verifyToken(t, 'other-key'), null);
});

// --- webhook ---
function stripeSigned(payload, secret) {
  const t = Math.floor(Date.now() / 1000);
  const v1 = crypto.createHmac('sha256', secret).update(`${t}.${payload}`).digest('hex');
  return `t=${t},v1=${v1}`;
}
function webhookReq(payload, sig) {
  return new Request('https://ceoofyou.netlify.app/api/stripe-webhook', {
    method: 'POST',
    headers: { 'stripe-signature': sig },
    body: payload,
  });
}
const sessionEvent = JSON.stringify({
  type: 'checkout.session.completed',
  data: { object: {
    id: 'cs_test_abc123',
    payment_status: 'paid',
    payment_link: Object.keys(PLINK_EDITIONS)[0],
    customer_details: { email: 'buyer@example.com', name: 'Test Buyer' },
  } },
});

await test('webhook accepts valid signature (no email configured)', async () => {
  const res = await webhook(webhookReq(sessionEvent, stripeSigned(sessionEvent, 'whsec_testsecret')));
  assert.equal(res.status, 200);
  const body = await res.json();
  assert.equal(body.emailed, false);
});
await test('webhook rejects bad signature', async () => {
  const res = await webhook(webhookReq(sessionEvent, stripeSigned(sessionEvent, 'wrong')));
  assert.equal(res.status, 400);
});
await test('webhook rejects stale timestamp', async () => {
  const t = Math.floor(Date.now() / 1000) - 3600;
  const v1 = crypto.createHmac('sha256', 'whsec_testsecret').update(`${t}.${sessionEvent}`).digest('hex');
  const res = await webhook(webhookReq(sessionEvent, `t=${t},v1=${v1}`));
  assert.equal(res.status, 400);
});
await test('webhook ignores other event types', async () => {
  const p = JSON.stringify({ type: 'invoice.paid', data: { object: {} } });
  const res = await webhook(webhookReq(p, stripeSigned(p, 'whsec_testsecret')));
  assert.equal(res.status, 200);
});
await test('webhook sends buyer email + internal order alert', async () => {
  process.env.RESEND_API_KEY = 're_test_fake';
  process.env.ORDER_ALERT_EMAILS = 'a@x.com, b@y.com,c@z.com';
  const realFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, opts) => {
    assert.ok(String(url).includes('api.resend.com'));
    calls.push(JSON.parse(opts.body));
    return new Response('{"id":"em_1"}', { status: 200 });
  };
  try {
    const res = await webhook(webhookReq(sessionEvent, stripeSigned(sessionEvent, 'whsec_testsecret')));
    assert.equal(res.status, 200);
    assert.equal((await res.json()).emailed, true);
    assert.equal(calls.length, 2); // buyer receipt + team alert
    assert.deepEqual(calls[0].to, ['buyer@example.com']);
    assert.deepEqual(calls[1].to, ['a@x.com', 'b@y.com', 'c@z.com']);
    assert.ok(calls[1].subject.startsWith('New order'));
    assert.ok(calls[1].text.includes('buyer@example.com'));
  } finally {
    globalThis.fetch = realFetch;
    delete process.env.RESEND_API_KEY;
    delete process.env.ORDER_ALERT_EMAILS;
  }
});

// --- download ---
await test('download serves the right PDF for a valid token', async () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 60000 }, 'test-download-secret');
  const res = await download(new Request(`https://x.test/download?t=${encodeURIComponent(t)}`));
  assert.equal(res.status, 200);
  assert.equal(res.headers.get('content-type'), 'application/pdf');
  const buf = Buffer.from(await res.arrayBuffer());
  assert.equal(buf.subarray(0, 5).toString(), '%PDF-');
  assert.ok(buf.length > 100000);
});
await test('download serves HS edition PDF', async () => {
  const t = signToken({ sid: 'cs_2', ed: 'hs', exp: Date.now() + 60000 }, 'test-download-secret');
  const res = await download(new Request(`https://x.test/download?t=${encodeURIComponent(t)}`));
  assert.equal(res.status, 200);
  assert.ok(res.headers.get('content-disposition').includes('High School'));
});
await test('download serves companion tools for adult tokens', async () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 60000 }, 'test-download-secret');
  const res = await download(new Request(`https://x.test/download?t=${encodeURIComponent(t)}&f=companion`));
  assert.equal(res.status, 200);
  assert.ok(res.headers.get('content-disposition').includes('Companion'));
  const buf = Buffer.from(await res.arrayBuffer());
  assert.equal(buf.subarray(0, 5).toString(), '%PDF-');
});
await test('companion is not served for HS tokens', async () => {
  const t = signToken({ sid: 'cs_2', ed: 'hs', exp: Date.now() + 60000 }, 'test-download-secret');
  const res = await download(new Request(`https://x.test/download?t=${encodeURIComponent(t)}&f=companion`));
  assert.equal(res.status, 404);
});
await test('download rejects expired/garbage tokens', async () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() - 1 }, 'test-download-secret');
  assert.equal((await download(new Request(`https://x.test/download?t=${t}`))).status, 410);
  assert.equal((await download(new Request('https://x.test/download?t=garbage'))).status, 410);
  assert.equal((await download(new Request('https://x.test/download'))).status, 410);
});

// --- get-download (Stripe API mocked) ---
await test('get-download exchanges a paid session for a link', async () => {
  process.env.STRIPE_SECRET_KEY = 'sk_test_fake';
  const realFetch = globalThis.fetch;
  globalThis.fetch = async (url) => {
    assert.ok(String(url).includes('/v1/checkout/sessions/cs_test_ok'));
    return new Response(JSON.stringify({
      id: 'cs_test_ok', payment_status: 'paid',
      payment_link: Object.keys(PLINK_EDITIONS)[2],
      shipping_details: null,
      payment_intent: 'pi_3TESTrefABCD1234',
      created: 1760000000,
      customer_details: { email: 'buyer@example.com', name: 'Test Buyer' },
      amount_subtotal: 2999,
      amount_total: 3246,
      currency: 'usd',
      total_details: { amount_tax: 247, amount_shipping: 0 },
    }), { status: 200 });
  };
  try {
    const res = await getDownload(new Request('https://ceoofyou.netlify.app/api/get-download?session_id=cs_test_ok_1234567890'));
    assert.equal(res.status, 200);
    const d = await res.json();
    assert.equal(d.ok, true);
    assert.equal(d.edition, 'hs');
    assert.ok(d.url.startsWith('https://ceoofyou.netlify.app/download?t='));
    assert.equal(d.companionUrl, undefined); // companion ships with the adult edition only
    const token = new URL(d.url).searchParams.get('t');
    assert.equal(verifyToken(token, 'test-download-secret').ed, 'hs');
    // receipt details for the thank-you page
    assert.equal(d.receipt.orderRef, 'ABCD1234');
    assert.equal(d.receipt.email, 'buyer@example.com');
    assert.equal(d.receipt.amountSubtotal, 2999);
    assert.equal(d.receipt.amountTax, 247);
    assert.equal(d.receipt.amountTotal, 3246);
    assert.equal(d.receipt.currency, 'USD');
    assert.equal(d.receipt.created, 1760000000);
  } finally { globalThis.fetch = realFetch; }
});
await test('get-download rejects unpaid sessions and bad ids', async () => {
  const realFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(JSON.stringify({ payment_status: 'unpaid' }), { status: 200 });
  try {
    assert.equal((await getDownload(new Request('https://x.test/api/get-download?session_id=cs_test_unpaid_123456'))).status, 402);
    assert.equal((await getDownload(new Request('https://x.test/api/get-download?session_id=DROP%20TABLE'))).status, 400);
  } finally { globalThis.fetch = realFetch; }
});

// --- app-access (companion app unlock) ---
const { default: appAccess } = await import('../netlify/functions/app-access.mjs');
await test('app-access unlocks a valid adult token', async () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 1000 }, 'test-download-secret');
  const res = await appAccess(new Request(`https://x.test/api/app-access?t=${t}`));
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
});
await test('app-access accepts an expired (signature-valid) adult token', async () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() - 1000 }, 'test-download-secret');
  const res = await appAccess(new Request(`https://x.test/api/app-access?t=${t}`));
  assert.equal(res.status, 200);
  assert.equal((await res.json()).ok, true);
});
await test('app-access rejects HS tokens, tampered tokens and garbage', async () => {
  const hs = signToken({ sid: 'cs_1', ed: 'hs', exp: Date.now() + 1000 }, 'test-download-secret');
  assert.equal((await appAccess(new Request(`https://x.test/api/app-access?t=${hs}`))).status, 403);
  const wrongKey = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 1000 }, 'other-key');
  assert.equal((await appAccess(new Request(`https://x.test/api/app-access?t=${wrongKey}`))).status, 403);
  assert.equal((await appAccess(new Request('https://x.test/api/app-access?t=garbage'))).status, 403);
  assert.equal((await appAccess(new Request('https://x.test/api/app-access'))).status, 403);
});
await test('app-access team code: refuses when unset, matches when set, rejects wrong code', async () => {
  delete process.env.APP_PREVIEW_CODE;
  assert.equal((await appAccess(new Request('https://x.test/api/app-access?code=anything'))).status, 403);
  process.env.APP_PREVIEW_CODE = 'team-demo-code';
  const ok = await appAccess(new Request('https://x.test/api/app-access?code=team-demo-code'));
  assert.equal(ok.status, 200);
  assert.equal((await ok.json()).ok, true);
  assert.equal((await appAccess(new Request('https://x.test/api/app-access?code=wrong-code'))).status, 403);
  // a code never unlocks via the token path, and tokens still work alongside it
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() + 1000 }, 'test-download-secret');
  assert.equal((await appAccess(new Request(`https://x.test/api/app-access?t=${t}`))).status, 200);
  delete process.env.APP_PREVIEW_CODE;
});
await test('download still rejects expired tokens (ignoreExp is app-access only)', async () => {
  const t = signToken({ sid: 'cs_1', ed: 'adult', exp: Date.now() - 1000 }, 'test-download-secret');
  const res = await download(new Request(`https://x.test/download?t=${t}`));
  assert.ok(res.status === 403 || res.status === 410, `expected 403/410, got ${res.status}`);
});

console.log(`\n${passed} tests passed${process.exitCode ? ' (with failures)' : ''}`);
