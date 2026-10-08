// src/components/logo.js
// The L.I.G.O. SPACE mark, exactly as drawn in the site loader, but coloured with
// theme tokens so the cream arch stays visible on both light and dark greys.
(function () {
  var S = window.SMK;
  S.logo = function (size) {
    var sz = size ? ' width="' + size + '" height="' + size + '"' : "";
    return (
      '<svg class="logo" viewBox="0 0 96 96"' + sz + ' aria-hidden="true" focusable="false">' +
      '<circle cx="48" cy="48" r="44" fill="none" style="stroke:var(--gold)" stroke-width="3" opacity=".9"/>' +
      '<g class="rays" style="stroke:var(--gold)" stroke-width="3" stroke-linecap="round">' +
      '<path d="M48 6v8M48 82v8M6 48h8M82 48h8M18 18l6 6M72 72l6 6M18 78l6-6M72 24l6-6"/></g>' +
      '<circle cx="48" cy="36" r="10" style="fill:var(--gold)"/>' +
      '<path d="M22 70q26-34 52 0" fill="none" style="stroke:var(--logo-arm)" stroke-width="7" stroke-linecap="round"/>' +
      "</svg>"
    );
  };
})();
