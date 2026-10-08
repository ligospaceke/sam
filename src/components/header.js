// src/components/header.js — glass header + slide-in drawer (one nav, two presentations)
(function () {
  var S = window.SMK;
  S.nav = [
    { key: "", label: "Home", href: "#/" },
    { key: "story", label: "The Story", href: "#/story" },
    { key: "framework", label: "The Framework", href: "#/framework" },
    { key: "ligo", label: "L.I.G.O. SPACE", href: "#/ligo" },
    { key: "faith-family", label: "Faith & Family", href: "#/faith-family" },
    { key: "contact", label: "Contact", href: "#/contact" }
  ];
  function links() {
    return S.nav.map(function (n) {
      return '<a href="' + n.href + '" data-nav="' + n.key + '">' + S.h.esc(n.label) + "</a>";
    }).join("");
  }
  S.header = function () {
    var phone = S.store.settings().phone;
    return (
      '<header class="site-header"><div class="wrap bar">' +
      '<button class="icon-btn menu-btn" data-action="menu" aria-expanded="false" aria-controls="drawer" aria-label="Menu">☰</button>' +
      '<a class="brand" href="#/" aria-label="Samuel M.K., home">' + S.logo(40) +
      "<span><b>Samuel M.K.</b><small>Smaltal · Founder, L.I.G.O. SPACE</small></span></a>" +
      '<nav class="nav" aria-label="Main">' + links() + "</nav>" +
      '<button class="icon-btn" data-action="theme" aria-label="Switch light or dark">◐</button>' +
      '<a class="btn primary sm head-cta" href="#/contact">Get in touch</a></div></header>' +
      '<div class="scrim" data-action="menu"></div>' +
      '<aside id="drawer" class="drawer" aria-label="Menu">' +
      '<button class="icon-btn" data-action="menu" aria-label="Close menu">✕</button>' +
      '<nav class="dnav">' + links() + "</nav>" +
      '<div class="dbot"><b>What crowns us: Love.</b>' +
      '<a class="btn primary" href="tel:' + S.h.esc(phone.replace(/\s+/g, "")) + '">Call ' + S.h.esc(phone) + "</a>" +
      '<button class="btn ghost" data-action="theme" type="button">Switch light / dark</button></div></aside>'
    );
  };
  S.setActive = function (key) {
    Array.prototype.forEach.call(document.querySelectorAll(".nav a,.dnav a"), function (a) {
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    document.body.classList.remove("menu-open");
    Array.prototype.forEach.call(document.querySelectorAll('[aria-controls="drawer"]'), function (b) { b.setAttribute("aria-expanded", "false"); });
  };
})();
