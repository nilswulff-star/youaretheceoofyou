// Shared HMAC-signed download token helpers.
// Token format: base64url(JSON payload) + "." + base64url(HMAC-SHA256 signature)
// Stateless: no database needed. Secret lives in the DOWNLOAD_SECRET env var.
import crypto from 'node:crypto';

function b64url(buf) {
  return Buffer.from(buf).toString('base64url');
}

export function signToken(payload, secret) {
  const body = b64url(JSON.stringify(payload));
  const sig = b64url(crypto.createHmac('sha256', secret).update(body).digest());
  return `${body}.${sig}`;
}

export function verifyToken(token, secret, { ignoreExp = false } = {}) {
  if (typeof token !== 'string' || token.length > 2048) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  const expected = b64url(crypto.createHmac('sha256', secret).update(body).digest());
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let payload;
  try {
    payload = JSON.parse(Buffer.from(body, 'base64url').toString('utf8'));
  } catch {
    return null;
  }
  if (!payload || typeof payload.exp !== 'number' || (!ignoreExp && Date.now() > payload.exp)) return null;
  return payload;
}

// Map a Stripe Payment Link id to the edition it sells.
// Printed products include the digital edition, so they map to the same files.
export const PLINK_EDITIONS = {
  plink_1USeemFKOqpWsfA4Z1COmtO1: 'adult', // Digital Journal — $29.99
  plink_1USeiIFKOqpWsfA4OCiC5PJq: 'adult', // Printed Journal + Digital — $39.99
  plink_1USekiFKOqpWsfA4eW5ZgkQG: 'hs',    // High School Edition (Digital) — $29.99
  plink_1USeo4FKOqpWsfA4mBiCFM5i: 'hs',    // High School Edition (Printed + Digital) — $39.99
};

export const EDITION_NAMES = {
  adult: 'You Are the CEO of You — Digital Journal',
  hs: 'You Are the CEO of You — High School Edition',
};

export const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000; // links valid for 7 days
