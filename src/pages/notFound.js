// src/pages/notFound.js
(function () {
  var S = window.SMK;
  S.pages = S.pages || {};
  S.pages.notFound = function () {
    return {
      title: "Page not found: Samuel M.K.",
      html:
        '<div class="wrap page-head" style="text-align:center;padding-bottom:80px">' +
        '<p class="eyebrow">404</p><h1 style="margin-inline:auto">That page is not on the map.</h1>' +
        '<p style="margin-inline:auto">Not every path is built yet.</p>' +
        '<div class="cta" style="justify-content:center"><a class="btn primary" href="#/">Back home</a></div></div>'
    };
  };
})();
