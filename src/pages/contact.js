// src/pages/contact.js
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  S.pages.contact = function () {
    var d = S.data.site;
    var phone = S.store.settings().phone;
    var html =
      '<div class="wrap page-head"><p class="eyebrow">Get in touch</p>' +
      "<h1>Let's build pathways together.</h1>" +
      "<p>Reach the L.I.G.O. SPACE team directly.</p></div>" +
      '<section class="wrap section" style="padding-top:24px"><div class="two">' +
      '<a class="card reveal" href="tel:' + H.esc(phone.replace(/\s+/g, "")) + '"><p class="eyebrow">Call the team</p>' +
      "<h3>" + H.esc(phone) + "</h3><p>L.I.G.O. SPACE team line.</p></a>" +
      '<a class="card reveal" href="' + H.esc(d.website) + '" target="_blank" rel="noopener"><p class="eyebrow">Website</p>' +
      "<h3>ligospace.co.ke</h3><p>The institution's own site.</p></a>" +
      "</div></section>";
    return { title: "Contact: Samuel M.K.", html: html };
  };
})();
