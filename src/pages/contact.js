// src/pages/contact.js
(function () {
  var S = window.SMK, H = S.h;
  S.pages = S.pages || {};
  S.pages.contact = function () {
    var d = S.data.site, phone = S.store.settings().phone, tel = phone.replace(/\s+/g, "");
    var wa = "https://wa.me/" + tel.replace(/^\+/, "").replace(/^0/, "254") + "?text=" + encodeURIComponent("Hello Samuel, I found you through your site and would like to connect.");
    var html =
      '<div class="wrap page-head"><p class="eyebrow">Get in touch</p><h1>Let us build pathways together.</h1>' +
      "<p>Invitations to sing or speak, partnerships, mentorship, or a simple hello. Reach Samuel directly.</p></div>" +
      '<section class="section"><div class="wrap"><div class="grid g3">' +
      '<a class="card top reveal" href="tel:' + H.esc(tel) + '"><p class="eyebrow">Call</p><h3>' + H.esc(phone) + "</h3><p>Samuel\'s direct line.</p></a>" +
      '<a class="card top reveal d2" href="' + H.esc(wa) + '" target="_blank" rel="noopener"><p class="eyebrow">WhatsApp</p><h3>Send a message</h3><p>Opens WhatsApp with a greeting ready to go.</p></a>' +
      (d.email ? '<a class="card top reveal d3" href="mailto:' + H.esc(d.email) + '"><p class="eyebrow">Email</p><h3>' + H.esc(d.email) + '</h3><p>Write to Samuel.</p></a>' : '') + '<a class="card top reveal d3" href="' + H.esc(d.website) + '" target="_blank" rel="noopener"><p class="eyebrow">Website</p><h3>L.I.G.O. SPACE</h3><p>The institution he founded, online.</p></a>' +
      "</div></div></section>";
    return { title: "Contact: Samuel M.K.", html: html };
  };
})();
