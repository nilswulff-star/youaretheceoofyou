/* You Are the CEO of You — site JS
   Kept external per Cloudflare-safe deploy pattern (no inline JS). */

(function () {
  'use strict';

  /* ============================================================
     STRIPE CHECKOUT CONFIGURATION
     ------------------------------------------------------------
     Create each product in Stripe (Dashboard -> Product catalog),
     generate a Payment Link for it, and paste the link URL below.
     Recommended Payment Link settings:
       - Confirmation page: redirect to https://youaretheceoofyou.com/thank-you/
       - Collect shipping address: ON for the printed products only
       - Allow promotion codes: optional
     Until a link is filled in, its buttons scroll to the checkout
     section and show a "checkout opens soon" notice instead.
     ============================================================ */
  var PAYMENT_LINKS = {
    'adult-digital': '',   // Digital journal — $29.99
    'adult-print':   '',   // Printed journal + digital — $39.99 + shipping
    'hs-digital':    '',   // High school edition, digital — $29.99
    'hs-print':      ''    // High school edition, printed + digital — $39.99 + shipping
  };

  /* Wire buy buttons */
  document.querySelectorAll('a[data-product]').forEach(function (btn) {
    var link = PAYMENT_LINKS[btn.getAttribute('data-product')];
    if (link) {
      btn.href = link;
      btn.rel = 'noopener';
    } else {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var target = document.getElementById('checkout');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        showPendingNotice();
      });
    }
  });

  function showPendingNotice() {
    var host = document.querySelector('#checkout .offer-head') || document.getElementById('checkout');
    if (!host) return;
    var note = document.getElementById('checkout-pending');
    if (!note) {
      note = document.createElement('p');
      note.id = 'checkout-pending';
      note.className = 'pending-note';
      note.setAttribute('role', 'status');
      note.textContent = 'Online checkout opens soon. Payment processing is being connected.';
      host.appendChild(note);
    }
    note.classList.remove('flash');
    void note.offsetWidth; /* restart animation */
    note.classList.add('flash');
  }

  /* Lightbox for journal page samples (present on the adult page only) */
  var lb = document.getElementById('lightbox');
  if (lb) {
    var img = document.getElementById('lb-img'),
        cap = document.getElementById('lb-cap'),
        btn = document.getElementById('lb-close'),
        last = null;
    var open = function (t) {
      var i = t.querySelector('img');
      img.src = i.src;
      img.alt = i.alt;
      cap.textContent = t.querySelector('span').textContent;
      lb.classList.add('open');
      last = t;
      btn.focus();
    };
    var close = function () {
      lb.classList.remove('open');
      if (last) last.focus();
    };
    document.querySelectorAll('.thumb').forEach(function (t) {
      t.addEventListener('click', function () { open(t); });
    });
    btn.addEventListener('click', close);
    lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('open')) close();
    });
  }
})();
