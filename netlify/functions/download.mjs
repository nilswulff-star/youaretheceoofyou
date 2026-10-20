// Serves the journal PDF for a valid, unexpired signed token: /download?t=…
// PDFs live in private/pdfs/ (blocked from direct public access by a forced
// redirect in netlify.toml) and are bundled with this function via
// included_files.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { verifyToken } from './lib/token.mjs';

export const config = { path: '/download' };

const FILES = {
  adult: { file: 'adult.pdf', download: 'You Are the CEO of You - Digital Journal.pdf' },
  hs: { file: 'highschool.pdf', download: 'You Are the CEO of You - High School Edition.pdf' },
};

// The fillable companion tools ship with the adult edition.
const EXTRAS = {
  adult: { companion: { file: 'companion.pdf', download: 'You Are the CEO of You - Fillable Companion Tools.pdf' } },
};

async function loadPdf(name) {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const candidates = [
    path.resolve(process.cwd(), 'private/pdfs', name),
    path.resolve(here, '../../private/pdfs', name),
    path.resolve(here, 'private/pdfs', name),
    path.resolve('/var/task/private/pdfs', name),
  ];
  for (const p of candidates) {
    try {
      return await readFile(p);
    } catch {
      /* try next */
    }
  }
  return null;
}

function page(title, message, status) {
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>${title}</title>
<style>body{margin:0;background:#fff;color:#000;font-family:Helvetica,Arial,sans-serif;display:flex;min-height:100vh;align-items:center;justify-content:center}
main{max-width:520px;padding:32px;border-top:6px solid #E8740F}
h1{font-size:28px;text-transform:uppercase;margin:0 0 12px}p{color:#3A3A3A;line-height:1.6;margin:0 0 10px}a{color:#B85A00;font-weight:bold}</style></head>
<body><main><h1>${title}</h1><p>${message}</p><p><a href="/">Back to the site</a></p></main></body></html>`,
    { status, headers: { 'content-type': 'text/html; charset=utf-8' } },
  );
}

export default async (req) => {
  const secret = process.env.DOWNLOAD_SECRET;
  if (!secret) return page('Not available', 'Downloads are not configured yet. Please contact support.', 500);

  const params = new URL(req.url).searchParams;
  const t = params.get('t');
  const payload = t ? verifyToken(t, secret) : null;
  if (!payload) {
    return page(
      'Link expired',
      'This download link is invalid or has expired. Links work for 7 days after purchase — email support@youaretheceoofyou.com and we’ll send you a fresh one.',
      410,
    );
  }

  const extra = params.get('f');
  const entry = extra ? EXTRAS[payload.ed]?.[extra] : FILES[payload.ed];
  if (!entry) return page('Not found', 'We could not match this link to a journal edition. Please contact support.', 404);

  const pdf = await loadPdf(entry.file);
  if (!pdf) {
    console.error('PDF missing from bundle:', entry.file);
    return page('Almost ready', 'The file is being prepared. Please try again shortly or reply to your order email.', 503);
  }

  return new Response(pdf, {
    status: 200,
    headers: {
      'content-type': 'application/pdf',
      'content-disposition': `attachment; filename="${entry.download}"`,
      'cache-control': 'private, no-store',
      'x-robots-tag': 'noindex',
    },
  });
};
