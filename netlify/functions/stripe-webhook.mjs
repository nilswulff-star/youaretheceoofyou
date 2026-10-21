// Stripe webhook: on checkout.session.completed, email the buyer a unique,
// expiring download link for the edition they bought.
//
// Env vars (set in Netlify → Site configuration → Environment variables):
//   STRIPE_WEBHOOK_SECRET  — signing secret of the Stripe webhook endpoint (whsec_…)
//   DOWNLOAD_SECRET        — long random string used to sign download tokens
//   RESEND_API_KEY         — API key from resend.com for sending the email
//   EMAIL_FROM             — optional, e.g. "You Are the CEO of You <downloads@youaretheceoofyou.com>"
//   SITE_URL               — optional, overrides the link host (defaults to the request host)
import crypto from 'node:crypto';
import { signToken, PLINK_EDITIONS, EDITION_NAMES, TOKEN_TTL_MS } from './lib/token.mjs';

export const config = { path: '/api/stripe-webhook' };

const SIG_TOLERANCE_SECONDS = 300;

function verifyStripeSignature(payload, header, secret) {
  if (!header) return false;
  const parts = Object.fromEntries(
    header.split(',').map((p) => {
      const i = p.indexOf('=');
      return [p.slice(0, i).trim(), p.slice(i + 1)];
    }),
  );
  const t = parts.t;
  const v1 = parts.v1;
  if (!t || !v1) return false;
  const age = Math.abs(Date.now() / 1000 - Number(t));
  if (!Number.isFinite(age) || age > SIG_TOLERANCE_SECONDS) return false;
  const expected = crypto.createHmac('sha256', secret).update(`${t}.${payload}`).digest('hex');
  const a = Buffer.from(v1);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function formatAmount(cents, currency) {
  if (typeof cents !== 'number') return null;
  try {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: (currency || 'usd').toUpperCase() }).format(cents / 100);
  } catch {
    return `$${(cents / 100).toFixed(2)}`;
  }
}

function emailHtml({ name, editionName, url, companionUrl, appUrl, expiresDays, total, orderRef }) {
  const first = (name || '').trim().split(/\s+/)[0] || 'there';
  const receiptLine = total || orderRef
    ? `<p style="margin:0 0 22px;color:#3A3A3A;font-size:14px;border:1px solid #e5e5e5;border-left:4px solid #E8740F;padding:10px 14px">${total ? `Total paid: <strong style="color:#000">${total}</strong>` : ''}${total && orderRef ? ' &nbsp;·&nbsp; ' : ''}${orderRef ? `Order <strong style="color:#000">#${orderRef}</strong>` : ''}</p>`
    : '';
  const companionBlock = companionUrl
    ? `<p style="margin:18px 0 0"><a href="${companionUrl}" style="display:inline-block;background:#ffffff;color:#000000;border:2px solid #000000;text-decoration:none;font-weight:bold;font-size:15px;padding:13px 24px">Download the fillable tools</a></p>
    <p style="margin:10px 0 0;color:#3A3A3A;font-size:13px;line-height:1.5">The companion PDF: Daily CEO Check-In, Seven-Day Habit Tracker and Weekly Board Meeting — type into it and reuse it every week.</p>`
    : '';
  const appBlock = appUrl
    ? `<p style="margin:18px 0 0"><a href="${appUrl}" style="display:inline-block;background:#E8740F;color:#ffffff;text-decoration:none;font-weight:bold;font-size:15px;padding:14px 24px">Open the companion app</a></p>
    <p style="margin:10px 0 0;color:#3A3A3A;font-size:13px;line-height:1.5">Your journal on your phone: every entry, the Daily CEO Check-In, habit tracker, scorecard and weekly board meeting. Open the link on your phone and add it to your home screen. Early access — your progress saves on your device.</p>`
    : '';
  return `<!doctype html>
<html><body style="margin:0;padding:0;background:#f4f4f4;font-family:Helvetica,Arial,sans-serif;color:#000">
<div style="max-width:560px;margin:0 auto;padding:32px 20px">
  <div style="background:#ffffff;border-top:6px solid #E8740F;padding:36px 32px">
    <h1 style="margin:0 0 6px;font-size:26px;line-height:1.15;text-transform:uppercase">Your journal is ready.</h1>
    <p style="margin:0 0 22px;color:#3A3A3A;font-size:15px">Thank you for your order, ${first}.</p>
    ${receiptLine}
    <p style="margin:0 0 10px;font-size:16px"><strong>${editionName}</strong></p>
    <p style="margin:0 0 26px;color:#3A3A3A;font-size:15px;line-height:1.55">Your download link is below. It works for ${expiresDays} days — save the PDF to your device once it downloads. It prints on standard 8.5&nbsp;&times;&nbsp;11&nbsp;in paper.</p>
    <a href="${url}" style="display:inline-block;background:#000000;color:#ffffff;text-decoration:none;font-weight:bold;font-size:16px;padding:16px 28px">Download your journal</a>
    ${companionBlock}
    ${appBlock}
    <p style="margin:26px 0 0;color:#3A3A3A;font-size:13px;line-height:1.5">If a button doesn't work, copy this link into your browser:<br><span style="word-break:break-all">${url}</span></p>
  </div>
  <p style="margin:18px 4px;color:#777;font-size:12px;line-height:1.5">You are the CEO of you. Your next chapter starts with your next decision.<br>Questions about your order? Email support@youaretheceoofyou.com or just reply to this email.</p>
</div>
</body></html>`;
}

export default async (req) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 });

  const whSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const dlSecret = process.env.DOWNLOAD_SECRET;
  const resendKey = process.env.RESEND_API_KEY;
  if (!whSecret || !dlSecret) {
    console.error('Missing STRIPE_WEBHOOK_SECRET or DOWNLOAD_SECRET env var');
    return new Response('Server not configured', { status: 500 });
  }

  const payload = await req.text();
  if (!verifyStripeSignature(payload, req.headers.get('stripe-signature'), whSecret)) {
    return new Response('Invalid signature', { status: 400 });
  }

  let event;
  try {
    event = JSON.parse(payload);
  } catch {
    return new Response('Bad payload', { status: 400 });
  }

  if (event.type !== 'checkout.session.completed') {
    return new Response(JSON.stringify({ received: true, ignored: event.type }), { status: 200 });
  }

  const session = event.data?.object || {};
  if (session.payment_status !== 'paid') {
    return new Response(JSON.stringify({ received: true, ignored: 'not paid' }), { status: 200 });
  }

  const edition = PLINK_EDITIONS[session.payment_link];
  const email = session.customer_details?.email;
  if (!edition || !email) {
    console.warn('No edition mapping or email for session', session.id, session.payment_link);
    return new Response(JSON.stringify({ received: true, ignored: 'no mapping' }), { status: 200 });
  }

  const token = signToken({ sid: session.id, ed: edition, exp: Date.now() + TOKEN_TTL_MS }, dlSecret);
  const origin = process.env.SITE_URL || new URL(req.url).origin;
  const url = `${origin}/download?t=${token}`;
  const companionUrl = edition === 'adult' ? `${origin}/download?t=${token}&f=companion` : undefined;
  // Companion app is the adult edition for now; HS edition app comes later.
  // The token in the link unlocks the app on the buyer's device.
  const appUrl = edition === 'adult' ? `${origin}/app/?t=${token}` : undefined;
  const editionName = EDITION_NAMES[edition];

  if (!resendKey) {
    // Email not configured yet — don't fail the webhook; the thank-you page
    // still delivers the download via the session id.
    console.warn('RESEND_API_KEY not set; skipped email for', session.id);
    return new Response(JSON.stringify({ received: true, emailed: false }), { status: 200 });
  }

  const from = process.env.EMAIL_FROM || 'You Are the CEO of You <downloads@youaretheceoofyou.com>';
  const total = formatAmount(session.amount_total, session.currency);
  const orderRef = String(session.payment_intent || session.id || '').slice(-8).toUpperCase() || undefined;
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [email],
      subject: 'Your receipt + journal download — You Are the CEO of You',
      html: emailHtml({ name: session.customer_details?.name, editionName, url, companionUrl, appUrl, expiresDays: 7, total, orderRef }),
      text: `Thank you for your order.\n\n${editionName}${total ? `\nTotal paid: ${total}` : ''}${orderRef ? `\nOrder #${orderRef}` : ''}\n\nDownload your journal (link valid 7 days):\n${url}\n${companionUrl ? `\nDownload the fillable companion tools:\n${companionUrl}\n` : ''}${appUrl ? `\nOpen the companion app on your phone (add it to your home screen):\n${appUrl}\n` : ''}\nQuestions? Email support@youaretheceoofyou.com or just reply to this email.`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error('Resend error', res.status, body);
    // Return 500 so Stripe retries the webhook and the email gets another chance.
    return new Response('Email send failed', { status: 500 });
  }

  return new Response(JSON.stringify({ received: true, emailed: true }), { status: 200 });
};
