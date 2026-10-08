// src/pages/faithFamily.js
// Renders the "faith" and "family" chapters straight from the store, so edits made
// in the admin panel show up here as well as on the Story page.
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  function block(c) {
    if (!c) return "";
    return (
      '<section class="card reveal" style="margin-bottom:20px;padding:clamp(24px,5vw,44px)">' +
      '<p class="eyebrow">' + H.esc(c.kicker) + "</p><h2>" + H.esc(c.title) + "</h2>" +
      '<div class="prose">' + H.fmtBody(c.body) + "</div></section>"
    );
  }

  S.pages["faith-family"] = function () {
    var html =
      '<div class="wrap page-head"><p class="eyebrow">Above the title. Behind the vision.</p>' +
      "<h1>Faith &amp; Family</h1>" +
      "<p>Above every title, project, ambition and idea stands Samuel's faith. Behind every public vision is a private world.</p></div>" +
      '<div class="narrow section" style="padding-top:24px">' +
      block(S.store.chapter("faith")) +
      block(S.store.chapter("family")) +
      "</div>";
    return { title: "Faith & Family: Samuel M.K.", html: html };
  };
})();
