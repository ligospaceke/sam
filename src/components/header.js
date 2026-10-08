// src/components/header.js
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

  S.header = function () {
    var links = S.nav
      .map(function (n) {
        return '<a href="' + n.href + '" data-nav="' + n.key + '">' + n.label + "</a>";
      })
      .join("");
    return (
      '<header class="site-header"><div class="wrap bar">' +
      '<a class="brand" href="#/" aria-label="Samuel M.K., home">' +
      S.logo(40) +
      "<span><b>Samuel M.K.</b><small>Smaltal · Founder, L.I.G.O. SPACE</small></span></a>" +
      '<nav id="nav" class="nav" aria-label="Main">' + links + "</nav>" +
      '<button class="icon-btn" data-action="theme" aria-label="Switch between light and dark">◐</button>' +
      '<button class="icon-btn menu-btn" data-action="menu" aria-expanded="false" aria-controls="nav" aria-label="Open menu">☰</button>' +
      "</div></header>"
    );
  };

  // Mark the current page in the nav (aria-current) and close the mobile menu.
  S.setActive = function (key) {
    var links = document.querySelectorAll("#nav a");
    Array.prototype.forEach.call(links, function (a) {
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    var nav = document.getElementById("nav");
    var btn = document.querySelector('[data-action="menu"]');
    if (nav) nav.classList.remove("open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  };
})();
