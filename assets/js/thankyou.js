/* Thank-you page: turn the Stripe session id into an on-page receipt with
   instant download links. Falls back to generic copy if the lookup fails. */
(function () {
  'use strict';
  var area = document.getElementById('download-area');
  if (!area) return;

  var sid = new URLSearchParams(window.location.search).get('session_id');
  if (!sid) return; // no session (direct visit) — keep the generic copy

  area.innerHTML =
    '<strong>What happens next</strong>' +
    '<p>Preparing your receipt…</p>';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function money(cents, currency) {
    if (typeof cents !== 'number') return null;
    try {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: currency || 'USD' }).format(cents / 100);
    } catch (e) {
      return '$' + (cents / 100).toFixed(2);
    }
  }

  function row(label, value, cls) {
    return '<div class="r-row' + (cls ? ' ' + cls : '') + '"><span class="k">' + label + '</span><span class="v">' + value + '</span></div>';
  }

  fetch('/api/get-download?session_id=' + encodeURIComponent(sid))
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || !d.ok) throw new Error('lookup failed');
      var rc = d.receipt || {};
      var cur = rc.currency || 'USD';

      var rows = '';
      if (rc.orderRef) rows += row('Order', '#' + esc(rc.orderRef));
      if (rc.created) {
        rows += row('Date', esc(new Date(rc.created * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })));
      }
      if (rc.email) rows += row('Email', esc(rc.email), 'r-break');
      rows += row(esc(d.editionName), money(rc.amountSubtotal != null ? rc.amountSubtotal : rc.amountTotal, cur) || 'Paid', 'r-item');
      if (rc.amountShipping) rows += row('Shipping', money(rc.amountShipping, cur));
      if (rc.amountTax) rows += row('Tax', money(rc.amountTax, cur));

      var total = money(rc.amountTotal, cur);
      var companion = d.companionUrl
        ? '<a class="buy outline" href="' + d.companionUrl + '">Download the fillable tools (PDF)</a>'
        : '';
      // Companion app ships with the adult edition for now. The tokened link
      // unlocks the app on the buyer's device.
      var app = d.appUrl
        ? '<a class="buy outline" href="' + d.appUrl + '">Open the companion app</a>'
        : '';
      var appFine = d.appUrl
        ? '<p class="r-fine">The companion app is your journal on your phone: every entry, the daily check-in, habit tracker, scorecard and weekly board meeting. Open it on your phone and add it to your home screen — the button above unlocks it, and your progress saves on your device (early access).</p>'
        : '';
      var shippedNote = d.shipped
        ? '<p class="r-fine">Your printed journal ships to the address you provided — the digital edition above is included with your order.</p>'
        : '';
      var fine =
        '<p class="r-fine">Download links stay valid for 7 days and also arrive by email. Save the PDF once it downloads — it prints on standard 8.5 × 11 in paper.' +
        (d.companionUrl
          ? ' The fillable tools are the Daily CEO Check-In, Seven-Day Habit Tracker and Weekly Board Meeting — type into them and reuse them every week.'
          : '') +
        '</p>';

      area.className = 'receipt';
      area.innerHTML =
        '<div class="r-head"><strong>You Are the CEO of You</strong><span>Receipt</span></div>' +
        '<div class="r-rows">' + rows + '</div>' +
        (total ? '<div class="r-total"><span>Total paid</span><span class="v">' + total + '</span></div>' : '') +
        '<div class="r-dl">' +
          '<a class="buy" href="' + d.url + '">Download your journal (PDF)</a>' +
          companion +
          app +
        '</div>' +
        shippedNote +
        fine +
        appFine;

      var sub = document.getElementById('ty-sub');
      if (sub) {
        sub.innerHTML = rc.email
          ? 'Here&rsquo;s your receipt — a copy is also headed to <strong>' + esc(rc.email) + '</strong>.'
          : 'Here&rsquo;s your receipt. A copy is on its way to the email you used at checkout.';
      }

      var actions = document.createElement('div');
      actions.className = 'r-actions';
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'buy outline';
      btn.textContent = 'Print receipt';
      btn.addEventListener('click', function () { window.print(); });
      actions.appendChild(btn);
      area.insertAdjacentElement('afterend', actions);
    })
    .catch(function () {
      area.className = 'steps-box';
      area.innerHTML =
        '<strong>What happens next</strong>' +
        '<p>Your payment is confirmed. We’re finalizing your order — your download link will arrive by email within a few minutes (check spam if it’s shy).</p>' +
        '<p>Didn’t get it? Email support@youaretheceoofyou.com and we’ll sort it out.</p>';
    });
})();
