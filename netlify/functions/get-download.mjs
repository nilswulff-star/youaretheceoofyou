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

  // Receipt details for the thank-you page. The order reference is derived
  // from the PaymentIntent id (falls back to the session id) — stable, short,
  // and matches what support can look up in Stripe.
  const refSource = String(session.payment_intent || session.id || sid);

  return json({
    ok: true,
    edition,
    editionName: EDITION_NAMES[edition],
    shipped: Boolean(session.shipping_details || session.collected_information?.shipping_details),
    url: `${origin}/download?t=${token}`,
    companionUrl: edition === 'adult' ? `${origin}/download?t=${token}&f=companion` : undefined,
    receipt: {
      orderRef: refSource.slice(-8).toUpperCase(),
      created: typeof session.created === 'number' ? session.created : null,
      email: session.customer_details?.email || null,
      name: session.customer_details?.name || null,
      amountSubtotal: typeof session.amount_subtotal === 'number' ? session.amount_subtotal : null,
      amountTax: session.total_details?.amount_tax ?? 0,
      amountShipping: session.total_details?.amount_shipping ?? 0,
      amountTotal: typeof session.amount_total === 'number' ? session.amount_total : null,
      currency: (session.currency || 'usd').toUpperCase(),
    },
  });
};
