# You Are the CEO of You — youaretheceoofyou.com

Landing + sales site for the guided journal **You Are the CEO of You** by Mark Hanna,
in two editions (Adult and High School). Static site, no build step.

## Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | Adult edition landing + checkout |
| `/highschool/` | `highschool/index.html` | High School edition landing + checkout |
| `/thank-you/` | `thank-you/index.html` | Stripe post-payment confirmation page |

Shared assets live in `assets/` (`css/styles.css`, `js/app.js`, `img/`).
All JS is external (no inline scripts) so Cloudflare-style email obfuscation or
HTML rewriting can never corrupt it.

## Workflow

1. **Edit** files on a branch (or main for small copy fixes).
2. **Test locally** — no build step needed:
   ```
   python3 -m http.server 8080
   # visit http://localhost:8080/ and /highschool/
   ```
3. **Push** to GitHub.
4. **Publish** — Netlify is connected to this repo and auto-deploys on push to `main`
   (deploy previews on pull requests). Custom domain: **youaretheceoofyou.com**.

### Netlify setup (one-time)
- New site from Git → pick this repo → build command: *none*, publish directory: `.`
  (`netlify.toml` already declares this).
- Domain settings → add `youaretheceoofyou.com` (+ `www` redirect) and point DNS
  (Netlify DNS or a CNAME/ALIAS at the registrar). HTTPS is automatic.

## Connecting Stripe (ecommerce)

The buy buttons are wired through `assets/js/app.js` → `PAYMENT_LINKS`.
Until a link is set, buttons scroll to the checkout section and show
"Online checkout opens soon."

One-time setup in the Stripe Dashboard (stripe.com):

1. **Products** (Product catalog → Add product) — DIGITAL ONLY (decided Oct 21, 2026; printed editions dropped):
   - Digital journal — $29.99
   - The High School Journal, digital — $29.99 (page shows Coming Soon until launch)
2. For each product, create a **Payment Link**:
   - After payment → redirect to `https://youaretheceoofyou.com/thank-you/`
   - Collect shipping address: **on** for printed products only
   - Optionally enable promotion codes and Apple Pay / Google Pay (on by default)
3. Paste each Payment Link URL into `PAYMENT_LINKS` in `assets/js/app.js`, push, done.

## Digital delivery (implemented)

Three Netlify Functions in `netlify/functions/` handle fulfillment with
HMAC-signed, 7-day expiring download links — no database:

| Route | Purpose |
|---|---|
| `POST /api/stripe-webhook` | Stripe `checkout.session.completed` → verifies signature, emails the buyer a unique download link (Resend) |
| `GET /download?t=…` | Validates the signed token and streams the right PDF from `private/pdfs/` (publicly blocked path) |
| `GET /api/get-download?session_id=…` | Thank-you page exchanges the paid Checkout Session for an instant download link |

The payment links redirect to `/thank-you/?session_id={CHECKOUT_SESSION_ID}`,
so buyers get the file immediately AND by email. Run tests: `node tests/run-tests.mjs`.

**Environment variables** (Netlify → Site configuration → Environment variables):

| Var | Value |
|---|---|
| `DOWNLOAD_SECRET` | Long random string (signs download tokens) |
| `STRIPE_SECRET_KEY` | Stripe secret (or restricted) key — used only to read Checkout Sessions |
| `STRIPE_WEBHOOK_SECRET` | Signing secret (`whsec_…`) of the webhook endpoint in Stripe |
| `RESEND_API_KEY` | From resend.com (verify youaretheceoofyou.com as a sending domain) |
| `EMAIL_FROM` | e.g. `You Are the CEO of You <downloads@youaretheceoofyou.com>` |
| `SITE_URL` | Optional; defaults to the request host |

Until `RESEND_API_KEY` is set, the webhook logs and skips email (thank-you-page
delivery still works). Stripe retries the webhook if email sending fails.

## Pre-launch checklist (placeholders still in the pages)

- [x] Stripe payment links pasted into `assets/js/app.js` (all 4 created Oct 20, 2026; live mode)
- [x] Stripe account verification completed (Oct 21, 2026)
- [ ] Bank payout account added in Stripe (Settings → Business → Bank accounts and scheduling) — funds sit in the Stripe balance until this is done
- [ ] Stripe statement descriptor changed from "ODIN CAPITAL" (Settings → Business → Public details)
- [ ] Stripe Tax registration (tax auto-collection is ON but needs a TX registration to calculate) — review with CPA
- [x] Digital delivery built: webhook + signed links + instant thank-you download
- [x] Netlify env vars set: DOWNLOAD_SECRET, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, SITE_URL, RESEND_API_KEY
- [x] Stripe webhook endpoint created (`ceoofyou-download-delivery` → `https://youaretheceoofyou.com/api/stripe-webhook`, event: checkout.session.completed)
- [x] All 4 payment links redirect to `https://youaretheceoofyou.com/thank-you/?session_id={CHECKOUT_SESSION_ID}` (updated Oct 21, 2026)
- [x] DNS cutover complete: youaretheceoofyou.com live on Netlify DNS with HTTPS cert; redirects, webhook URL and SITE_URL all updated (Oct 21, 2026)
- [x] Resend: youaretheceoofyou.com verified as sending domain + API key set (Oct 21, 2026) — buyers now get the receipt email with download links
- [ ] End-to-end live test purchase + refund
- [x] Fillable companion PDF built (private/pdfs/companion.pdf, 61 form fields) and delivered with adult orders via /download?t=…&f=companion
- [x] Support email set to support@youaretheceoofyou.com site-wide — **needs a real mailbox/forward** (e.g. Cloudflare/ImprovMX email routing, or Google Workspace) before launch
- [x] Refund policy page at /refunds/ — DRAFT, Mark must review the terms before launch
- [x] Privacy policy page at /privacy/ — DRAFT, review before launch
- [x] Gift wording made honest (forward the download email / give printed copy)
- [ ] Intro video: the adult page now shows a "why I wrote this" quote band (see the TODO comment in index.html) — swap in Mark's video when it exists
- [x] High School pricing confirmed: $29.99 digital (printed editions dropped site-wide Oct 21)
- [x] High School: final cover + real page images from Nils's Oct 21 finalized version (hs-cover.jpg, entries 4/9/12/27)
- [ ] GoatCounter analytics: script is live on every page pointing at `ceoofyou.goatcounter.com` — create the free account at goatcounter.com with site code **ceoofyou** to activate (cookieless; privacy policy already reflects it)
- [ ] Launch-updates signups land in Netlify → Forms ("launch-updates") — turn on email notifications there
- [x] Free sample: /sample/you-are-the-ceo-of-you-sample.pdf (cover + Mark's note + Entry 1 + commitment + CTA page)
- [x] QR codes → Desktop\YOUARETHECEOOFYOU\marketing\qr — **discard qr-adult-printed.png and qr-hs-printed.png** (printed editions dropped); don't distribute qr-hs-digital.png until launch
- [ ] Stripe: deactivate the two printed payment links (adult $39.99, HS $39.99) and pause the HS digital link until launch — pending Nils's OK
- [ ] HS launch (next week): replace private/pdfs/highschool.pdf with the FINAL 77-page PDF (current file is the old 66-page version), then flip /highschool/ from Coming Soon to live buy buttons
- [ ] Adult launch: tomorrow (site already live and selling)
- [ ] Mark's intro video: place prominently on the landing page when Nils provides the file
- [ ] Netlify Forms: new form `hs-launch` (HS notify list) — enable email notifications alongside `launch-updates`
- [ ] Final proofread by Mark

## Brand

White background, black typography, orange accent `#E8740F` (hover `#B85A00`).
Headings: Oswald (uppercase). Body: Public Sans. Step-line motif = growth chart.
