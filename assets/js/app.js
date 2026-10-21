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
    // Digital only — printed editions are not sold.
    'adult-digital': 'https://buy.stripe.com/00w3cva74azn1Sv7fN1B600', // Digital journal — $29.99
    'hs-digital':    'https://buy.stripe.com/6oU9ATgvsePD0OrarZ1B602'  // The High School Journal, digital — $29.99 (page shows Coming Soon until launch)
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

  /* --- Motion polish: scroll-reveal + buy-bar entrance --- */
  document.documentElement.classList.add('js');
  var motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (motionOK && 'IntersectionObserver' in window) {
    var selectors = [
      '.intro', '.results li', '.depts .dept', '.entries li', '.steps li',
      '.samples .thumb', '.tools .intro', '.plan', '.who li', '.gallery figure',
      '.toollist li', '.note-band .wrap > *', '.about .portrait', '.about-copy',
      '.family-copy', '.gift-main', '.faq details', '.outcomes-foot',
      '.hs-band .wrap > *', '.close > *',
    ];
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('inview');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    var perParent = new WeakMap();
    document.querySelectorAll(selectors.join(',')).forEach(function (el) {
      var parent = el.parentElement || document.body;
      var i = perParent.get(parent) || 0;
      perParent.set(parent, i + 1);
      el.classList.add('reveal');
      el.style.transitionDelay = Math.min(i * 55, 330) + 'ms';
      io.observe(el);
    });
  }

  /* Buy bar appears once the reader is past the hero */
  var bar = document.querySelector('.buybar');
  if (bar) {
    if (!motionOK) {
      bar.classList.add('bb-show');
    } else {
      var reveal = function () {
        if (window.scrollY > 420) {
          bar.classList.add('bb-show');
          window.removeEventListener('scroll', reveal);
        }
      };
      window.addEventListener('scroll', reveal, { passive: true });
      reveal();
    }
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
