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

1. **Products** (Product catalog → Add product):
   - Digital journal — $29.99
   - Printed journal + digital — $39.99 (+ shipping)
   - High School digital — $29.99
   - High School printed + digital — $39.99 (+ shipping)
2. For each product, create a **Payment Link**:
   - After payment → redirect to `https://youaretheceoofyou.com/thank-you/`
   - Collect shipping address: **on** for printed products only
   - Optionally enable promotion codes and Apple Pay / Google Pay (on by default)
3. Paste each Payment Link URL into `PAYMENT_LINKS` in `assets/js/app.js`, push, done.

**Digital delivery note:** Stripe Payment Links take payment but do not deliver
files. Options, simplest first:
- Put the download link in the Payment Link's custom confirmation message and on
  `/thank-you/` (fast to launch; the URL is technically shareable).
- Use a fulfillment layer for secure, expiring download links (e.g. a small
  Netlify Function + Stripe webhook, or a digital-delivery service).
Decide before launch and update `/thank-you/`.

## Pre-launch checklist (placeholders still in the pages)

- [x] Stripe payment links pasted into `assets/js/app.js` (all 4 created Oct 20, 2026; live mode)
- [ ] Stripe account verification completed (business details + bank) — payments won't process until done
- [ ] Stripe statement descriptor changed from "ODIN CAPITAL" (Settings → Business → Public details)
- [ ] Stripe Tax registration (tax auto-collection is ON but needs a TX registration to calculate) — review with CPA
- [ ] Shipping rate for printed journals (links collect a US shipping address but charge $0 shipping today)
- [ ] Digital-delivery method decided; `/thank-you/` updated
- [ ] Support email (appears in gift sections, FAQs, footer, thank-you page)
- [ ] Refund policy (FAQ + footer link)
- [ ] Privacy policy page (footer link)
- [ ] Shipping cost / method / ship date for printed journals (FAQ + plan cards)
- [ ] Gift option at checkout confirmed (email-the-recipient wording)
- [ ] Intro video for the "Let me tell you why I wrote this" section (adult page placeholder)
- [ ] High School edition: confirm pricing (currently shown matching adult: $29.99 / $39.99)
- [ ] High School edition: cover art + sample page images (currently reuses the adult cover)
- [ ] Final proofread by Mark

## Brand

White background, black typography, orange accent `#E8740F` (hover `#B85A00`).
Headings: Oswald (uppercase). Body: Public Sans. Step-line motif = growth chart.
