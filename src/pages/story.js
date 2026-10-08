// src/pages/story.js
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  function pad(n) {
    return (n < 10 ? "0" : "") + n;
  }

  S.pages.story = function () {
    var list = S.store.chapters();
    var toc = list
      .map(function (c) {
        return '<li><a href="#/story/' + H.esc(c.id) + '">' + H.esc(shortTitle(c)) + "</a></li>";
      })
      .join("");
    var chapters = list
      .map(function (c, i) {
        return (
          '<section class="chapter reveal" id="ch-' + H.esc(c.id) + '">' +
          '<p class="eyebrow">' + pad(i + 1) + " · " + H.esc(c.kicker) + "</p>" +
          "<h2>" + H.esc(c.title) + "</h2>" +
          '<div class="prose">' + H.fmtBody(c.body) + "</div></section>"
        );
      })
      .join("");

    var html =
      '<div class="wrap page-head"><p class="eyebrow">Who is Samuel M.K.?</p>' +
      "<h1>Before there was L.I.G.O. SPACE, there was Smaltal.</h1>" +
      "<p>Born 21 July 1990, in a church compound. A singer, a minister, a thinker, a builder.</p></div>" +
      '<div class="wrap section" style="padding-top:32px"><div class="story-grid">' +
      '<aside class="toc" aria-label="Chapters"><ol>' + toc + "</ol></aside>" +
      '<article class="narrow" style="margin:0;width:100%">' + chapters + "</article>" +
      "</div></div>";

    return { title: "The Story: Samuel M.K. (Smaltal)", html: html };
  };

  // Short labels for the side list: use the kicker, which the founder-story headings suit.
  function shortTitle(c) {
    return c.kicker;
  }
})();
