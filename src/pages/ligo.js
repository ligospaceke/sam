// src/pages/ligo.js
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  S.pages.ligo = function () {
    var d = S.data.site;
    var spaces = ["opportunity", "dignity", "learning", "connection", "creativity", "mentorship", "technology", "purpose", "human possibility"];
    var chips = spaces
      .map(function (x) {
        return "<li>" + H.esc(x) + "</li>";
      })
      .join("");
    var links = [
      ["Connecting people to opportunities.", "Connecting communities to systems."],
      ["Connecting ideas to action.", "Connecting people to people."]
    ];

    var html =
      '<div class="wrap page-head"><p class="eyebrow">The vision</p>' +
      "<h1>L.I.G.O. SPACE</h1>" +
      "<p>" + H.esc(d.motto) + "</p></div>" +
      '<section class="wrap section" style="padding-top:24px"><div class="two">' +
      '<div class="card reveal"><h3>A much larger question</h3>' +
      "<p>What if opportunity, dignity, purpose, technology, relationships, learning and human development could be connected rather than treated as separate things?</p>" +
      "<p>What began as a vision for youth and positive transformation expanded into a broader human-centered ecosystem.</p></div>" +
      '<div class="card reveal"><h3>Building pathways</h3>' +
      "<p>L.I.G.O. SPACE is not simply about building an organization. It is about building pathways.</p>" +
      "<p>" + links[0].concat(links[1]).map(H.esc).join("<br>") + "</p>" +
      "<p>And ultimately, connecting human potential to possibility.</p></div>" +
      "</div></section>" +
      '<section class="wrap reveal"><div class="pull">' +
      '<p class="eyebrow">A space for</p><ul class="chips">' + chips + "</ul>" +
      "<blockquote><p>" + H.esc(d.motto) + "</p></blockquote>" +
      '<p class="eyebrow" style="margin:0">' + H.esc(d.crown) + "</p></div></section>" +
      '<section class="section"><div class="wrap" style="text-align:center">' +
      '<p>A human-centered institution in Kajiado South, Kenya.</p>' +
      '<div class="cta" style="justify-content:center">' +
      '<a class="btn primary" href="' + H.esc(d.website) + '" target="_blank" rel="noopener">Visit ligospace.co.ke</a>' +
      '<a class="btn ghost" href="#/story/ligo">How it began</a></div></div></section>';

    return { title: "L.I.G.O. SPACE: Samuel M.K.", html: html };
  };
})();
