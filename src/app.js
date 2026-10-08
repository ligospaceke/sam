// src/app.js: kernel. Mounts header/footer, wires delegated events, starts the router.
(function () {
  var S = window.SMK;
  var H = S.h;

  function mountChrome() {
    document.getElementById("header").innerHTML = S.header();
    document.getElementById("footer").innerHTML = S.footer();
  }

  document.addEventListener("click", function (e) {
    var el = e.target.closest ? e.target.closest("[data-action]") : null;
    if (!el) return;
    var act = el.getAttribute("data-action");

    if (act === "theme") return H.theme();

    if (act === "menu") {
      var nav = document.getElementById("nav");
      var open = nav.classList.toggle("open");
      el.setAttribute("aria-expanded", open ? "true" : "false");
      return;
    }
    if (act === "logout") {
      S.auth.logout();
      return S.go("#/admin/login");
    }
    if (act === "reset-chapter") {
      if (!window.confirm("Restore the original text for this chapter?")) return;
      S.store.resetChapter(el.getAttribute("data-id"));
      H.toast("Chapter restored");
      return S.go("#/admin");
    }
    if (act === "reset-all") {
      if (!window.confirm("Reset all chapters and details to the original text?")) return;
      S.store.resetAll();
      mountChrome();
      H.toast("Everything reset");
      return S.route();
    }
  });

  document.addEventListener("submit", function (e) {
    var form = e.target.closest ? e.target.closest("[data-form]") : null;
    if (!form) return;
    e.preventDefault();
    var kind = form.getAttribute("data-form");
    var f = form.elements;

    if (kind === "login") {
      if (S.auth.checkCredentials(f.u.value, f.p.value)) {
        S.auth.login();
        return S.go("#/admin");
      }
      var err = document.getElementById("login-err");
      err.textContent = "That username or password is not right.";
      err.hidden = false;
      return;
    }
    if (kind === "settings") {
      var ok = S.store.saveSettings({ phone: f.phone.value.trim(), tagline: f.tagline.value.trim() });
      mountChrome();
      H.toast(ok ? "Details saved" : "Could not save (browser storage is blocked)");
      return;
    }
    if (kind === "edit") {
      var saved = S.store.saveChapter(form.getAttribute("data-id"), {
        kicker: f.kicker.value.trim(),
        title: f.title.value.trim(),
        body: f.body.value
      });
      H.toast(saved ? "Chapter saved" : "Could not save (browser storage is blocked)");
      if (saved) S.go("#/admin");
    }
  });

  mountChrome();
  S.route();
})();
