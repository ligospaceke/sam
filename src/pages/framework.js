// src/pages/framework.js
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  S.pages.framework = function () {
    var dims = S.data.dimensions
      .map(function (n, i) {
        return '<div class="dim reveal"><span class="n">0' + (i + 1) + "</span><h3>" + H.esc(n) + "</h3></div>";
      })
      .join("");

    var html =
      '<div class="wrap page-head"><p class="eyebrow">An emerging framework</p>' +
      "<h1>The Synchronized Human System™</h1>" +
      "<p>Developed through Samuel's continuing thinking about human development and human possibility.</p></div>" +
      '<section class="wrap section" style="padding-top:24px"><div class="pull reveal">' +
      '<p class="eyebrow">The central proposition</p>' +
      "<blockquote><p>Most people are not lost; they are simply unsynchronized.</p></blockquote></div></section>" +
      '<section class="wrap" style="padding-bottom:24px"><p class="eyebrow">Six dimensions</p>' +
      "<h2>What happens when they begin working together?</h2>" +
      '<div class="dims">' + dims + "</div></section>" +
      '<section class="section"><div class="narrow reveal">' +
      "<h2>Where the questions came from</h2>" +
      '<div class="prose">' +
      "<p>Why can someone have ability but lack opportunity?</p>" +
      "<p>Why can someone have a dream but lack structure?</p>" +
      "<p>Why can a person be surrounded by people and still feel disconnected?</p>" +
      "<p>Why can communities possess resources while the people who need them remain unable to access them?</p>" +
      "<p>Why do different parts of human life sometimes seem to work against one another?</p>" +
      "<p class=\"beat\">And perhaps the biggest question:</p>" +
      "<blockquote>What happens when the different dimensions of a human being begin working together?</blockquote>" +
      "<p>For Samuel, the goal is not merely to create another concept. It is to build something that can eventually help people understand themselves, connect their different dimensions and move toward greater alignment.</p>" +
      "</div>" +
      '<p class="note">The framework is not presented as an established scientific theory. It is an evolving body of thought intended to be explored, researched, tested and strengthened through engagement with psychology, human development, measurement and other relevant disciplines.</p>' +
      '<div class="cta"><a class="btn ghost" href="#/story/framework">Read it in the story</a>' +
      '<a class="btn primary" href="#/ligo">See L.I.G.O. SPACE</a></div>' +
      "</div></section>";

    return { title: "The Synchronized Human System™: Samuel M.K.", html: html };
  };
})();
