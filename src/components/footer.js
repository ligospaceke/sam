// src/components/footer.js
(function () {
  var S = window.SMK, H = S.h;
  S.footer = function () {
    var d = S.data.site, phone = S.store.settings().phone;
    return (
      '<footer class="site-footer"><div class="wrap"><div class="fgrid">' +
      '<div><b class="fh">' + H.esc(d.name) + "</b><p>" + H.esc(d.motto) + '<br><span class="gold">' + H.esc(d.crown) + "</span></p></div>" +
      '<div><b class="fh">Explore</b>' + S.nav.map(function (n) { return '<a href="' + n.href + '">' + H.esc(n.label) + "</a>"; }).join("") + "</div>" +
      '<div><b class="fh">Reach the team</b>' +
      '<a href="tel:' + H.esc(phone.replace(/\s+/g, "")) + '">' + H.esc(phone) + "</a>" +
      '<a href="' + H.esc(d.website) + '" rel="noopener" target="_blank">ligospace.co.ke</a><a href="#/admin">Admin</a></div></div>' +
      '<div class="fcp">© ' + new Date().getFullYear() + " " + H.esc(d.name) + " · " + H.esc(d.org) + "</div></div></footer>"
    );
  };
})();
