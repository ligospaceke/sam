// src/pages/contact.js
(function () {
  var S = window.SMK, H = S.h;
  S.pages = S.pages || {};
  S.pages.contact = function () {
    var d = S.data.site, phone = S.store.settings().phone, tel = phone.replace(/\s+/g, "");
    var wa = "https://wa.me/" + tel.replace(/^0/, "254") + "?text=" + encodeURIComponent("Hello Samuel, I found you through your site and would like to connect.");
    var html =
      '<div class="wrap page-head"><p class="eyebrow">Get in touch</p><h1>Let us build pathways together.</h1>' +
      "<p>Partnerships, mentorship, invitations to speak or sing, or a simple hello. Reach the L.I.G.O. SPACE team directly.</p></div>" +
      '<section class="section"><div class="wrap"><div class="grid g3">' +
      '<a class="card top reveal" href="tel:' + H.esc(tel) + '"><p class="eyebrow">Call</p><h3>' + H.esc(phone) + "</h3><p>The L.I.G.O. SPACE team line.</p></a>" +
      '<a class="card top reveal d2" href="' + H.esc(wa) + '" target="_blank" rel="noopener"><p class="eyebrow">WhatsApp</p><h3>Send a message</h3><p>Opens WhatsApp with a greeting ready to go.</p></a>' +
      '<a class="card top reveal d3" href="' + H.esc(d.website) + '" target="_blank" rel="noopener"><p class="eyebrow">Website</p><h3>ligospace.co.ke</h3><p>The institution\'s own home online.</p></a>' +
      "</div></div></section>";
    return { title: "Contact: Samuel M.K.", html: html };
  };
})();
