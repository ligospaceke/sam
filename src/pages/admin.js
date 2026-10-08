// src/pages/admin.js: login, dashboard, chapter editor.
(function () {
  var S = window.SMK;
  var H = S.h;
  S.pages = S.pages || {};

  S.pages["admin/login"] = function () {
    return {
      title: "Admin sign in: Samuel M.K.",
      html:
        '<div class="wrap admin-wrap"><div class="admin-card">' +
        '<p class="eyebrow">Admin</p><h1 style="font-size:1.8rem">Sign in</h1>' +
        '<p class="hint">Edits are saved in this browser only.</p>' +
        '<form data-form="login" autocomplete="off">' +
        '<p class="err" id="login-err" hidden></p>' +
        '<div class="field"><label for="u">Username</label><input id="u" name="u" required autocapitalize="none"></div>' +
        '<div class="field"><label for="p">Password</label><input id="p" name="p" type="password" required></div>' +
        '<button class="btn primary" type="submit">Sign in</button>' +
        "</form></div></div>"
    };
  };

  S.pages.admin = function () {
    var chapters = S.store.chapters();
    var s = S.store.settings();
    var rows = chapters
      .map(function (c) {
        return (
          '<li><div class="t">' + H.esc(c.title) +
          (c.edited ? '<span class="badge">edited</span>' : "") +
          "<small>" + H.esc(c.kicker) + "</small></div>" +
          '<a class="btn ghost sm" href="#/admin/edit/' + H.esc(c.id) + '">Edit</a></li>'
        );
      })
      .join("");

    return {
      title: "Admin: Samuel M.K.",
      html:
        '<div class="wrap admin-wrap">' +
        '<div class="admin-bar"><h1>Admin</h1><div>' +
        '<a class="btn ghost sm" href="#/">View site</a> ' +
        '<button class="btn ghost sm" data-action="logout" type="button">Sign out</button></div></div>' +
        '<div class="admin-card wide" style="margin-bottom:24px"><h2 style="font-size:1.3rem">Site details</h2>' +
        '<form data-form="settings">' +
        '<div class="field"><label for="ph">Team phone</label><input id="ph" name="phone" value="' + H.esc(s.phone) + '" required></div>' +
        '<div class="field"><label for="tg">Home page tagline</label><input id="tg" name="tagline" value="' + H.esc(s.tagline) + '" required></div>' +
        '<button class="btn primary sm" type="submit">Save details</button></form></div>' +
        '<div class="admin-card wide"><h2 style="font-size:1.3rem">Story chapters</h2>' +
        '<ul class="rows">' + rows + "</ul>" +
        '<p class="hint" style="margin-top:18px">Changes live in this browser (localStorage). ' +
        '<button class="btn ghost sm" data-action="reset-all" type="button">Reset everything to the original text</button></p></div>' +
        "</div>"
    };
  };

  S.pages["admin/edit"] = function (params) {
    var c = S.store.chapter(params.id);
    if (!c) return S.pages.notFound();
    return {
      title: "Edit: " + c.title,
      html:
        '<div class="wrap admin-wrap"><div class="admin-bar"><h1>Edit chapter</h1>' +
        '<a class="btn ghost sm" href="#/admin">Back</a></div>' +
        '<div class="admin-card wide"><form data-form="edit" data-id="' + H.esc(c.id) + '">' +
        '<div class="field"><label for="k">Label</label><input id="k" name="kicker" value="' + H.esc(c.kicker) + '" required></div>' +
        '<div class="field"><label for="t">Title</label><input id="t" name="title" value="' + H.esc(c.title) + '" required></div>' +
        '<div class="field"><label for="b">Text</label><textarea id="b" name="body" required>' + H.esc(c.body) + "</textarea>" +
        '<span class="hint">Blank line = new paragraph. Start a line with &gt; for a quote, or with - for a list.</span></div>' +
        '<button class="btn primary" type="submit">Save chapter</button> ' +
        '<button class="btn ghost" type="button" data-action="reset-chapter" data-id="' + H.esc(c.id) + '">Restore original</button>' +
        "</form></div></div>"
    };
  };
})();
