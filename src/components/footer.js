// src/components/footer.js
(function () {
  var S = window.SMK;
  var H = S.h;

  S.footer = function () {
    var d = S.data.site;
    var phone = S.store.settings().phone;
    return (
      '<footer class="site-footer"><div class="wrap foot">' +
      "<div><b>" + H.esc(d.motto) + "</b><br>" + H.esc(d.crown) + "</div>" +
      "<div>" +
      '<a href="tel:' + H.esc(phone.replace(/\s+/g, "")) + '">' + H.esc(phone) + "</a> · " +
      '<a href="' + H.esc(d.website) + '" rel="noopener" target="_blank">ligospace.co.ke</a> · ' +
      '<a href="#/admin">Admin</a>' +
      "</div>" +
      "<div>© " + new Date().getFullYear() + " " + H.esc(d.name) + "</div>" +
      "</div></footer>"
    );
  };
})();
