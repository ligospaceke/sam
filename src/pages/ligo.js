// src/pages/ligo.js — the LIGO://SPACE manifesto, rendered as a system
(function () {
  var S = window.SMK, H = S.h;
  S.pages = S.pages || {};
  function chain(a) { return '<div class="chain">' + a.map(function (x, i) { return "<span>" + H.esc(x) + "</span>" + (i < a.length - 1 ? "<i>→</i>" : ""); }).join("") + "</div>"; }
  S.pages.ligo = function () {
    var d = S.data.site;
    var layers = [["Body", "Execute"], ["Mind", "Process"], ["Heart", "Feel"], ["Identity", "Know"], ["Social", "Connect"], ["Purpose", "Align"]]
      .map(function (l, i) { return '<div class="tile reveal d' + ((i % 4) + 1) + '"><b>' + l[0] + "</b><span>→ " + l[1] + "</span></div>"; }).join("");
    var rules = ["Do not waste the seed.", "Every life matters.", "Humanity first.", "From foundation to action."]
      .map(function (r, i) { return '<div class="card top reveal d' + (i + 1) + '"><span class="n">0' + (i + 1) + "</span><h3>" + r + "</h3></div>"; }).join("");
    var spaces = ["opportunity", "dignity", "learning", "connection", "creativity", "mentorship", "technology", "purpose", "human possibility"]
      .map(function (x) { return "<li>" + x + "</li>"; }).join("");
    var html =
      '<div class="wrap page-head"><p class="eyebrow">The work</p><h1>What he is building: LIGO://SPACE</h1>' +
      "<p>" + H.esc(d.motto) + " The human-centered institution Samuel founded in Kajiado South, written the way he thinks: as a system.</p></div>" +
      '<section class="section"><div class="wrap"><div class="head reveal"><p class="eyebrow">Step one</p><h2>Define humanity as the root system.</h2>' +
      "<p>Import potential, direction, opportunity, connection, purpose and love. Then look for the gap.</p></div>" +
      '<pre class="term reveal" aria-label="Detect drought of direction"><span class="c">// DETECT drought_of_direction</span>\n<span class="k">IF</span>   PEOPLE_EXIST\n<span class="k">AND</span>  POTENTIAL_EXISTS\n<span class="k">AND</span>  OPPORTUNITIES_EXIST\n<span class="k">BUT</span>  CONNECTIONS_FAIL\n<span class="k">THEN</span> SYSTEM.STATUS = <span class="s">"UNSYNCHRONIZED"</span></pre></div></section>' +
      '<section class="section alt"><div class="wrap"><div class="head reveal"><p class="eyebrow">Step two</p><h2>Initialize S.H.S.™</h2><p>Six layers, each with one verb. Synchronize the human, the potential and the path.</p></div>' +
      '<div class="grid">' + layers + "</div></div></section>" +
      '<section class="section"><div class="wrap"><div class="head reveal"><p class="eyebrow">Step three</p><h2>If alignment is true.</h2></div>' +
      '<div class="reveal">' + chain(["Potential", "Opportunity", "Action", "Impact", "Community", "Humanity"]) + "</div>" +
      '<div class="head reveal" style="margin-top:44px"><h2>If not, go back.</h2><p>Nothing is thrown away. The system returns to the foundation.</p></div>' +
      '<div class="reveal">' + chain(["Return to foundation", "Reassess", "Realign", "Reconnect", "Reactivate"]) + "</div></div></section>" +
      '<section class="section alt"><div class="wrap"><div class="head reveal"><p class="eyebrow">Global rule</p><h2>Four lines that never change.</h2></div>' +
      '<div class="grid">' + rules + "</div></div></section>" +
      '<section class="section"><div class="wrap"><div class="head reveal"><p class="eyebrow">The loop</p><h2>While humanity is becoming.</h2></div>' +
      '<pre class="term reveal"><span class="k">while</span> (humanity.is_becoming()) {\n  listen();      learn();     connect();\n  create();      empower();   synchronize();\n  serve();\n}\n\nLIGO_SPACE.prototype.future = <span class="s">∞</span>;</pre></div></section>' +
      '<section class="cta-band"><div class="wrap reveal"><p class="eyebrow">Output</p>' +
      '<p class="not">Not just a platform.<br>Not just an organization.<br>Not just an opportunity hub.</p>' +
      "<h2>A human synchronization space.</h2>" + chain(["Love", "Humanity", "Possibility", "Action", "Legacy"]) +
      '<p class="eyebrow" style="margin-top:26px">A space for</p><ul class="chips">' + spaces + "</ul>" +
      '<a class="btn primary" href="' + H.esc(d.website) + '" target="_blank" rel="noopener">Visit L.I.G.O. SPACE</a> <a class="btn ghost" href="#/story/builder">How it began</a></div></section>';
    return { title: "L.I.G.O. SPACE: Samuel M.K.", html: html };
  };
})();
