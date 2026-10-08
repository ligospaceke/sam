// src/pages/home.js
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  S.pages.home = function () {
    var d = S.data;
    var tagline = S.store.settings().tagline;

    var path = d.path
      .map(function (p) {
        return "<li><b>" + H.esc(p[0]) + "</b><small>" + H.esc(p[1]) + "</small></li>";
      })
      .join("");
    var chips = d.dimensions
      .map(function (x) {
        return "<li>" + H.esc(x) + "</li>";
      })
      .join("");

    var html =
      '<section class="hero"><div class="wrap hero-grid">' +
      '<div class="hero-copy">' +
      '<p class="eyebrow">Founder · L.I.G.O. SPACE</p>' +
      "<h1>Samuel M.K.<span class=\"alias\">the boy who was called Smaltal</span></h1>" +
      '<p class="lead">' + H.esc(tagline) + "</p>" +
      '<div class="cta"><a class="btn primary" href="#/story">Read the story</a>' +
      '<a class="btn ghost" href="#/framework">The Synchronized Human System™</a></div>' +
      "</div>" +
      '<div class="hero-mark" aria-hidden="true">' + S.logo() + "</div>" +
      "</div></section>" +
      // quick facts
      '<section class="wrap reveal"><div class="facts">' +
      '<div class="card"><span class="k">Born</span>' + H.esc(d.site.born) + ", in a church compound.</div>" +
      '<div class="card"><span class="k">A voice</span>Praise-and-worship soloist, poet and minister of the Gospel.</div>' +
      '<div class="card"><span class="k">Builds</span>L.I.G.O. SPACE and the emerging Synchronized Human System™.</div>' +
      "</div></section>" +
      // the path
      '<section class="section"><div class="wrap reveal">' +
      '<p class="eyebrow">The journey</p><h2>Not leaving music behind. Expanding.</h2>' +
      '<p class="lead" style="max-width:56ch">The young man who learned how to move people through music became a man asking deeper questions about people themselves.</p>' +
      '<ol class="path">' + path + "</ol></div></section>" +
      // the proposition
      '<section class="wrap reveal"><div class="pull">' +
      '<p class="eyebrow">The central proposition</p>' +
      "<blockquote><p>Most people are not lost; they are simply unsynchronized.</p></blockquote>" +
      '<ul class="chips">' + chips + "</ul>" +
      '<a class="btn primary" href="#/framework">Explore the six dimensions</a></div></section>' +
      // two teasers
      '<section class="section"><div class="wrap two">' +
      '<a class="card reveal" href="#/story/loud"><p class="eyebrow">A voice that could not stay hidden</p>' +
      "<h3>From warnings in rented houses to broken benches in a standing ovation.</h3>" +
      "<p>The story of Smaltal, and a PEFA Church song launch nobody forgot.</p></a>" +
      '<a class="card reveal" href="#/ligo"><p class="eyebrow">The vision</p>' +
      "<h3>" + H.esc(d.site.motto) + "</h3>" +
      "<p>L.I.G.O. SPACE is not simply about building an organization. It is about building pathways.</p></a>" +
      "</div></section>" +
      // closing
      '<section class="wrap reveal" style="text-align:center;padding-bottom:24px">' +
      '<p class="eyebrow">' + H.esc(d.site.crown) + "</p>" +
      "<h2>The story is still being written.</h2>" +
      '<div class="cta" style="justify-content:center"><a class="btn ghost" href="#/contact">Get in touch</a></div></section>';

    return { title: "Samuel M.K. (Smaltal): Founder of L.I.G.O. SPACE", html: html };
  };
})();
