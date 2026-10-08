// src/pages/story.js — four short categories, not a long scroll
(function () {
  var S = window.SMK, H = S.h;
  S.pages = S.pages || {};
  S.pages.story = function () {
    var list = S.store.chapters();
    var jump = list.map(function (c) { return '<a class="pill" href="#/story/' + H.esc(c.id) + '">' + H.esc(c.kicker) + "</a>"; }).join("");
    var secs = list.map(function (c, i) {
      return '<section class="section' + (i % 2 ? " alt" : "") + '" id="ch-' + H.esc(c.id) + '"><div class="wrap"><div class="cat reveal">' +
        '<div class="cat-n">0' + (i + 1) + '</div><div><p class="eyebrow">' + H.esc(c.kicker) + "</p><h2>" + H.esc(c.title) +
        '</h2><div class="prose">' + H.fmtBody(c.body) + "</div></div></div></div></section>";
    }).join("");
    var html =
      '<div class="wrap page-head"><p class="eyebrow">The story</p><h1>Singer. Minister. Thinker. Builder.</h1>' +
      "<p>Four chapters, one man. Born 21 July 1990, in a church compound.</p><div class=\"pills\">" + jump + "</div></div>" +
      secs +
      '<section class="cta-band"><div class="wrap reveal"><p class="eyebrow">' + H.esc(S.data.site.crown) + "</p><h2>The story is still being written.</h2>" +
      '<a class="btn primary" href="#/contact">Get in touch</a> <a class="btn ghost" href="#/gallery">See the gallery</a></div></section>';
    return { title: "The Story: Samuel M.K. (Smaltal)", html: html };
  };
})();
