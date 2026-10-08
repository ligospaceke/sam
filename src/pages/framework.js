// src/pages/framework.js
(function () {
  var S = window.SMK, H = S.h;
  S.pages = S.pages || {};
  var verbs = ["Execute", "Process", "Feel", "Know", "Connect", "Align"];
  S.pages.framework = function () {
    var dims = S.data.dimensions.map(function (n, i) {
      return '<div class="card top dim reveal d' + ((i % 4) + 1) + '"><span class="n">0' + (i + 1) + "</span><h3>" + H.esc(n) + '</h3><p class="verb">→ ' + verbs[i] + "</p></div>";
    }).join("");
    var qs = ["Why can someone have ability but lack opportunity?", "Why can someone have a dream but lack structure?", "Why can a person be surrounded by people and still feel disconnected?", "Why can communities hold resources while the people who need them cannot reach them?", "Why do different parts of human life seem to work against one another?"]
      .map(function (q) { return "<li>" + H.esc(q) + "</li>"; }).join("");
    var html =
      '<div class="wrap page-head"><p class="eyebrow">An emerging framework</p><h1>The Synchronized Human System™</h1>' +
      "<p>One idea, tested against real lives: when body, mind, heart, identity, relationships and purpose work together, a person moves.</p></div>" +
      '<section class="section"><div class="wrap reveal"><div class="pull"><p class="eyebrow">The central proposition</p>' +
      "<blockquote><p>Most people are not lost; they are simply unsynchronized.</p></blockquote></div></div></section>" +
      '<section class="section alt"><div class="wrap"><div class="head reveal"><p class="eyebrow">Six dimensions</p><h2>Each one has a job.</h2>' +
      "<p>Body executes. Mind processes. Heart feels. Identity knows. Relationships connect. Purpose aligns.</p></div>" +
      '<div class="grid g3">' + dims + "</div></div></section>" +
      '<section class="section"><div class="narrow reveal"><p class="eyebrow">Where it came from</p><h2>Questions before answers.</h2>' +
      '<ul class="qs">' + qs + "</ul>" +
      '<blockquote class="bq">What happens when the different dimensions of a human being begin working together?</blockquote>' +
      "<p>The aim is not another concept. It is something that can help people understand themselves, connect their dimensions and move toward alignment.</p>" +
      '<p class="note"><b>An honest note.</b> The framework is not presented as established science. It is an evolving body of thought, to be explored, researched, tested and strengthened with psychology, human development, measurement and other disciplines.</p>' +
      '<div class="cta"><a class="btn ghost" href="#/story/builder">Read it in the story</a><a class="btn primary" href="#/ligo">See his work</a></div></div></section>';
    return { title: "The Synchronized Human System™: Samuel M.K.", html: html };
  };
})();
