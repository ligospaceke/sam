// src/router.js: hash routing (#/, #/story, #/story/:id, #/admin ...).
(function () {
  var S = window.SMK;
  var H = S.h;
  var lastKey = null;

  function parse() {
    var raw = (location.hash || "").replace(/^#\/?/, "").split("?")[0];
    var parts = raw.split("/").filter(Boolean).map(decodeURIComponent);
    return parts;
  }

  function go(hash) {
    if (location.hash === hash) S.route();
    else location.hash = hash;
  }

  S.route = function () {
    var parts = parse();
    var head = parts[0] || "";
    var fn;
    var params = {};
    var key = head;

    if (head === "admin") {
      var sub = parts[1] || "";
      if (sub === "login") {
        if (S.auth.isIn()) return go("#/admin");
        fn = S.pages["admin/login"];
        key = "admin/login";
      } else {
        if (!S.auth.isIn()) return go("#/admin/login");
        if (sub === "edit" && parts[2]) {
          fn = S.pages["admin/edit"];
          params.id = parts[2];
          key = "admin/edit/" + parts[2];
        } else {
          fn = S.pages.admin;
          key = "admin";
        }
      }
    } else {
      var name = head === "" ? "home" : head;
      // Own properties only, so "#/constructor" or "#/__proto__" fall through to the 404 page.
      fn = Object.prototype.hasOwnProperty.call(S.pages, name) ? S.pages[name] : null;
      if (head === "story" && parts[1]) params.id = parts[1];
    }
    if (!fn) {
      fn = S.pages.notFound;
      key = "404";
    }

    var view = document.getElementById("view");

    // Moving between chapters on the Story page: just scroll, don't rebuild.
    if (head === "story" && lastKey === "story" && document.getElementById("ch-" + (params.id || "__"))) {
      document.getElementById("ch-" + params.id).scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    var out = fn(params);
    view.innerHTML = out.html;
    document.title = out.title;
    S.setActive(head === "admin" || key === "404" ? "__none__" : head);
    lastKey = head === "story" ? "story" : key;

    var target = head === "story" && params.id ? document.getElementById("ch-" + params.id) : null;
    if (target) target.scrollIntoView({ block: "start" });
    else window.scrollTo(0, 0);
    H.reveal();
    if (!target) view.focus({ preventScroll: true });
  };

  S.go = go;
  window.addEventListener("hashchange", S.route);
})();
