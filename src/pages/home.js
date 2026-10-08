// src/pages/home.js — hero → overlapping tiles → journey → proposition → teasers → closing
(function () {
  var S = window.SMK, H = S.h;
  S.pages = S.pages || {};
  S.pages.home = function () {
    var d = S.data, tagline = S.store.settings().tagline;
    var tiles = [["1990", "Born in a church compound"], ["6", "Dimensions in the S.H.S.™"], ["7", "Verbs in the loop, from listen to serve"], ["∞", "The future, by design"]]
      .map(function (t) { return '<div class="tile"><b>' + H.esc(t[0]) + "</b><span>" + H.esc(t[1]) + "</span></div>"; }).join("");
    var path = d.path.map(function (p, i) {
      return '<li class="card top reveal d' + (i + 1) + '"><span class="n">0' + (i + 1) + "</span><b>" + H.esc(p[0]) + "</b><small>" + H.esc(p[1]) + "</small></li>";
    }).join("");
    var chips = d.dimensions.map(function (x) { return "<li>" + H.esc(x) + "</li>"; }).join("");
    var html =
      '<section class="hero"><div class="wrap hero-grid"><div>' +
      '<p class="eyebrow">Singer · Minister · Thinker · Builder</p>' +
      '<h1>Samuel M.K.<span class="alias">the boy once called Smaltal</span></h1>' +
      '<p class="lead">' + H.esc(tagline) + "</p>" +
      '<div class="cta"><a class="btn primary" href="#/story">Read the story</a><a class="btn ghost" href="#/gallery">See the gallery</a></div></div>' +
      '<div class="hero-mark"><div class="hero-photo"><img src="assets/6.jpg" alt="Samuel M.K. in worship">' + S.logo(84) + "</div></div></div></section>" +
      '<div class="wrap tiles reveal"><div class="grid">' + tiles + "</div></div>" +
      '<section class="section"><div class="wrap"><div class="head reveal"><p class="eyebrow">The journey</p>' +
      "<h2>Not leaving music behind. Expanding it.</h2>" +
      "<p>The young man who learned to move people through song began asking deeper questions about people themselves.</p></div>" +
      '<ol class="path">' + path + "</ol></div></section>" +
      '<section class="section alt"><div class="wrap reveal"><div class="pull">' +
      '<p class="eyebrow">The central proposition</p>' +
      "<blockquote><p>Most people are not lost; they are simply unsynchronized.</p></blockquote>" +
      '<ul class="chips">' + chips + "</ul>" +
      '<a class="btn primary" href="#/framework">Explore the six dimensions</a></div></div></section>' +
      '<section class="section"><div class="wrap"><div class="grid g3">' +
      '<a class="card top has-img reveal" href="#/story/voice"><img src="assets/5.jpg" alt="" loading="lazy"><div class="bd"><p class="eyebrow">A voice that could not stay hidden</p><h3>From warnings in rented houses to broken benches in a standing ovation.</h3><p>The Smaltal story, and a PEFA Church song launch nobody forgot.</p></div></a>' +
      '<a class="card top has-img reveal d2" href="#/story/builder"><img src="assets/3.jpg" alt="" loading="lazy"><div class="bd"><p class="eyebrow">The builder</p><h3>From music to human possibility.</h3><p>The questions behind the Synchronized Human System™ and the institution he founded.</p></div></a>' +
      '<a class="card top has-img reveal d3" href="#/story/home"><img src="assets/8.jpg" alt="" loading="lazy"><div class="bd"><p class="eyebrow">The foundation</p><h3>Above every title stands faith. Behind every vision, a home.</h3><p>The private world that carries the public work.</p></div></a>' +
      "</div></div></section>" +
      '<section class="section"><div class="wrap"><div class="head reveal"><p class="eyebrow">Moments</p><h2>The man behind the mic, the pen and the plan.</h2></div><div class="strip reveal">' +
      [10, 7, 4, 2].map(function (n) { return '<img src="assets/' + n + '.jpg" alt="Samuel M.K." loading="lazy">'; }).join("") +
      '</div><p style="text-align:center;margin-top:26px"><a class="btn ghost" href="#/gallery">Open the gallery</a></p></div></section>' +
      '<section class="cta-band"><div class="wrap reveal"><p class="eyebrow">' + H.esc(d.site.crown) + "</p>" +
      "<h2>The story is still being written.</h2><p>If you believe people deserve opportunity, dignity and a path, let us talk.</p>" +
      '<a class="btn primary" href="#/contact">Get in touch</a> <a class="btn ghost" href="#/story">Start from the beginning</a></div></section>';
    return { title: "Samuel M.K. (Smaltal): Singer, minister, thinker, builder", html: html };
  };
})();
