// Thank-you page helper: exchanges a paid Checkout Session id for a signed
// download link, so the buyer gets their file immediately after redirect.
// GET /api/get-download?session_id=cs_…
//
// Env vars: STRIPE_SECRET_KEY (restricted key with read access to Checkout
// Sessions is enough), DOWNLOAD_SECRET.
import { signToken, PLINK_EDITIONS, EDITION_NAMES, TOKEN_TTL_MS } from './lib/token.mjs';

export const config = { path: '/api/get-download' };

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
  });

export default async (req) => {
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const dlSecret = process.env.DOWNLOAD_SECRET;
  if (!stripeKey || !dlSecret) return json({ ok: false, error: 'not_configured' }, 500);

  const sid = new URL(req.url).searchParams.get('session_id') || '';
  if (!/^cs_[A-Za-z0-9_]{10,200}$/.test(sid)) return json({ ok: false, error: 'bad_session' }, 400);

  const res = await fetch(`https://api.stripe.com/v1/checkout/sessions/${sid}`, {
    headers: { Authorization: `Bearer ${stripeKey}` },
  });
  if (!res.ok) return json({ ok: false, error: 'not_found' }, 404);

  const session = await res.json();
  if (session.payment_status !== 'paid') return json({ ok: false, error: 'not_paid' }, 402);

  const edition = PLINK_EDITIONS[session.payment_link];
  if (!edition) return json({ ok: false, error: 'no_mapping' }, 404);

  const token = signToken({ sid, ed: edition, exp: Date.now() + TOKEN_TTL_MS }, dlSecret);
  const origin = process.env.SITE_URL || new URL(req.url).origin;

  return json({
    ok: true,
    edition,
    editionName: EDITION_NAMES[edition],
    shipped: Boolean(session.shipping_details || session.collected_information?.shipping_details),
    url: `${origin}/download?t=${token}`,
  });
};
