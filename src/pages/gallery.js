// src/pages/gallery.js — masonry gallery + lightbox. Photos live in assets/ and are listed in data.js (gallery).
(function () {
  var S = window.SMK, H = S.h, cur = 0, box;
  S.pages = S.pages || {};
  S.pages.gallery = function () {
    var g = S.data.gallery;
    var imgs = g.map(function (p, i) {
      return '<figure class="shot reveal"><img src="' + H.esc(p.file) + '" alt="' + H.esc(p.caption) + '" loading="lazy" data-lb="' + i + '"><figcaption>' + H.esc(p.caption) + "</figcaption></figure>";
    }).join("");
    var html = '<div class="wrap page-head"><p class="eyebrow">Gallery</p><h1>Moments, mark and music.</h1><p>Photographs of Samuel M.K. and the SMK mark.</p></div>' +
      '<section class="section"><div class="wrap"><div class="masonry">' + imgs + "</div>" +
      (g.length < 3 ? '<p class="more">More photographs are on the way.</p>' : "") + "</div></section>";
    return { title: "Gallery: Samuel M.K.", html: html };
  };
  function show(i) {
    var g = S.data.gallery; cur = (i + g.length) % g.length;
    if (!box) { box = document.createElement("div"); box.className = "lb"; document.body.appendChild(box); }
    box.innerHTML = '<button class="lbx" data-lbx="close" aria-label="Close">✕</button><button class="lbx l" data-lbx="prev" aria-label="Previous">‹</button>' +
      '<img src="' + H.esc(g[cur].file) + '" alt="' + H.esc(g[cur].caption) + '"><button class="lbx r" data-lbx="next" aria-label="Next">›</button>';
    box.hidden = false;
  }
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-lb]"); if (t) return show(+t.getAttribute("data-lb"));
    var b = e.target.closest("[data-lbx]"), k = b && b.getAttribute("data-lbx");
    if (k === "next") show(cur + 1); else if (k === "prev") show(cur - 1); else if (k === "close" || e.target === box) box.hidden = true;
  });
  document.addEventListener("keydown", function (e) {
    if (!box || box.hidden) return;
    if (e.key === "Escape") box.hidden = true; if (e.key === "ArrowRight") show(cur + 1); if (e.key === "ArrowLeft") show(cur - 1);
  });
})();
