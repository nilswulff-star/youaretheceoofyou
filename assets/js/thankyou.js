/* Thank-you page: turn the Stripe session id into an instant download. */
(function () {
  'use strict';
  var area = document.getElementById('download-area');
  if (!area) return;

  var sid = new URLSearchParams(window.location.search).get('session_id');
  if (!sid) return; // no session (direct visit) — keep the generic copy

  area.innerHTML =
    '<strong>What happens next</strong>' +
    '<p>Preparing your download…</p>';

  fetch('/api/get-download?session_id=' + encodeURIComponent(sid))
    .then(function (r) { return r.json(); })
    .then(function (d) {
      if (!d || !d.ok) throw new Error('lookup failed');
      var shippedNote = d.shipped
        ? '<p>Your printed journal will ship to the address you provided. The digital edition below is included with your order.</p>'
        : '';
      var companion = d.companionUrl
        ? '<p style="margin-top:6px"><a class="buy outline" href="' + d.companionUrl + '">Download the fillable tools (PDF)</a></p>' +
          '<p>The companion: Daily CEO Check-In, Seven-Day Habit Tracker and Weekly Board Meeting — type into it and reuse it every week.</p>'
        : '';
      // Companion app ships with the adult edition for now (same gate as the fillable tools).
      var app = d.companionUrl
        ? '<p style="margin-top:6px"><a class="buy outline" href="/app/">Open the companion app</a></p>' +
          '<p>Your journal on your phone: every entry, the daily check-in, habit tracker, scorecard and weekly board meeting. Open it on your phone and add it to your home screen — your progress saves on your device (early access).</p>'
        : '';
      area.innerHTML =
        '<strong>Your journal is ready</strong>' +
        '<p>' + d.editionName + '</p>' +
        shippedNote +
        '<p style="margin-top:6px"><a class="buy" href="' + d.url + '">Download your journal (PDF)</a></p>' +
        companion +
        app +
        '<p>These links also arrive by email and stay valid for 7 days. Save the PDFs once they download — they print on standard 8.5 × 11 in paper.</p>';
    })
    .catch(function () {
      area.innerHTML =
        '<strong>What happens next</strong>' +
        '<p>Your payment is confirmed. We’re finalizing your order — your download link will arrive by email within a few minutes (check spam if it’s shy).</p>' +
        '<p>Didn’t get it? Email support@youaretheceoofyou.com and we’ll sort it out.</p>';
    });
})();
