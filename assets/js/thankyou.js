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
      area.innerHTML =
        '<strong>Your journal is ready</strong>' +
        '<p>' + d.editionName + '</p>' +
        shippedNote +
        '<p style="margin-top:6px"><a class="buy" href="' + d.url + '">Download your journal (PDF)</a></p>' +
        '<p>This link also arrives by email and stays valid for 7 days. Save the PDF once it downloads — it prints on standard 8.5 × 11 in paper.</p>';
    })
    .catch(function () {
      area.innerHTML =
        '<strong>What happens next</strong>' +
        '<p>Your payment is confirmed. We’re finalizing your order — your download link will arrive by email within a few minutes (check spam if it’s shy).</p>' +
        '<p>Didn’t get it? Reply to your Stripe receipt email and we’ll sort it out.</p>';
    });
})();
