// src/utilities/helpers.js
(function () {
  var S = window.SMK;
  var H = (S.h = {});

  H.esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  // Turn the plain-text body format into HTML (always escaped).
  H.fmtBody = function (text) {
    return String(text || "")
      .split(/\n\s*\n/)
      .map(function (block) {
        block = block.trim();
        if (!block) return "";
        if (/^>\s?/.test(block)) {
          return "<blockquote>" + H.esc(block.replace(/^>\s?/gm, "")).replace(/\n/g, "<br>") + "</blockquote>";
        }
        var lines = block.split("\n");
        if (
          lines.every(function (l) {
            return /^-\s+/.test(l);
          })
        ) {
          return (
            '<ul class="ticks">' +
            lines
              .map(function (l) {
                return "<li>" + H.esc(l.replace(/^-\s+/, "")) + "</li>";
              })
              .join("") +
            "</ul>"
          );
        }
        var cls = block.length < 46 ? ' class="beat"' : "";
        return "<p" + cls + ">" + H.esc(block).replace(/\n/g, "<br>") + "</p>";
      })
      .join("");
  };

  var toastTimer;
  H.toast = function (msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.remove("show");
    }, 2400);
  };

  // Reveal-on-scroll for any .reveal element currently on the page.
  var io;
  H.reveal = function () {
    var els = document.querySelectorAll(".reveal:not(.in)");
    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!("IntersectionObserver" in window) || reduce) {
      Array.prototype.forEach.call(els, function (e) {
        e.classList.add("in");
      });
      return;
    }
    if (!io) {
      io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (en) {
            if (en.isIntersecting) {
              en.target.classList.add("in");
              io.unobserve(en.target);
            }
          });
        },
        { threshold: 0.08 }
      );
    }
    Array.prototype.forEach.call(els, function (e) {
      io.observe(e);
    });
  };

  H.theme = function () {
    var cur = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", cur);
    try {
      localStorage.setItem("smk-theme", cur);
    } catch (e) {}
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", cur === "light" ? "#dcdee3" : "#1c1d21");
  };
})();
