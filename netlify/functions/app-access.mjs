// Unlocks the companion app for buyers: GET /api/app-access?t=<signed token>
// Accepts the same HMAC-signed tokens as /download. The download links expire
// after 7 days to protect the PDF files; for app access the signature alone
// proves a real purchase (buyers often open their app link weeks later), so
// an expired-but-genuine token still unlocks. Adult edition only for now —
// the app's content is the adult journal.
//
// Also accepts GET /api/app-access?code=<team access code> for demos, press
// and the team: set APP_PREVIEW_CODE in the Netlify environment variables.
// Rotate or delete the variable to invalidate the code. If it is unset, the
// code path always refuses.
import crypto from 'node:crypto';
import { verifyToken } from './lib/token.mjs';

// Constant-time comparison for strings of any length (hash first so the
// lengths always match).
function codeMatches(given, expected) {
  const a = crypto.createHash('sha256').update(String(given)).digest();
  const b = crypto.createHash('sha256').update(String(expected)).digest();
  return crypto.timingSafeEqual(a, b);
}

export const config = { path: '/api/app-access' };

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'private, no-store' },
  });

export default async (req) => {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) return json({ ok: false, error: 'not_configured' }, 500);

  const params = new URL(req.url).searchParams;

  const code = params.get('code') || '';
  if (code) {
    const expected = process.env.APP_PREVIEW_CODE || '';
    const ok = expected.length > 0 && code.length <= 128 && codeMatches(code.trim(), expected.trim());
    return ok ? json({ ok: true, via: 'code' }) : json({ ok: false, error: 'bad_code' }, 403);
  }

  const t = params.get('t') || '';
  const payload = verifyToken(t, secret, { ignoreExp: true });
  if (!payload) return json({ ok: false, error: 'bad_token' }, 403);
  if (payload.ed !== 'adult') return json({ ok: false, error: 'edition' }, 403);

  return json({ ok: true, edition: payload.ed });
};
