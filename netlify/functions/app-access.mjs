// Unlocks the companion app for buyers: GET /api/app-access?t=<signed token>
// Accepts the same HMAC-signed tokens as /download. The download links expire
// after 7 days to protect the PDF files; for app access the signature alone
// proves a real purchase (buyers often open their app link weeks later), so
// an expired-but-genuine token still unlocks. Adult edition only for now —
// the app's content is the adult journal.
import { verifyToken } from './lib/token.mjs';

export const config = { path: '/api/app-access' };

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
  });

export default async (req) => {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) return json({ ok: false, error: 'not_configured' }, 500);

  const t = new URL(req.url).searchParams.get('t') || '';
  const payload = verifyToken(t, secret, { ignoreExp: true });
  if (!payload) return json({ ok: false, error: 'bad_token' }, 403);
  if (payload.ed !== 'adult') return json({ ok: false, error: 'edition' }, 403);

  return json({ ok: true, edition: payload.ed });
};
