// src/services/store.js
// The only place pages read content from. Edits made in the admin panel are kept
// as overrides in localStorage and layered over the seed data in data.js.
// To go to a real backend later, swap load()/save() for fetch() calls.
(function () {
  var S = window.SMK;
  var KEY = "smk-overrides";

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      var o = raw ? JSON.parse(raw) : null;
      return o && typeof o === "object" ? o : {};
    } catch (e) {
      return {};
    }
  }
  function save(o) {
    try {
      localStorage.setItem(KEY, JSON.stringify(o));
      return true;
    } catch (e) {
      return false;
    }
  }
  function clone(x) {
    return JSON.parse(JSON.stringify(x));
  }

  S.store = {
    chapters: function () {
      var ov = load().chapters || {};
      return S.data.chapters.map(function (c) {
        var m = ov[c.id];
        return m ? { id: c.id, img: c.img, kicker: m.kicker, title: m.title, body: m.body, edited: true } : clone(c);
      });
    },
    chapter: function (id) {
      var list = this.chapters();
      for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
      return null;
    },
    saveChapter: function (id, patch) {
      var o = load();
      o.chapters = o.chapters || {};
      o.chapters[id] = { kicker: patch.kicker, title: patch.title, body: patch.body };
      return save(o);
    },
    resetChapter: function (id) {
      var o = load();
      if (o.chapters) delete o.chapters[id];
      return save(o);
    },
    settings: function () {
      var d = S.data.site;
      var ov = load().settings || {};
      return { phone: ov.phone || d.phone, tagline: ov.tagline || d.tagline };
    },
    saveSettings: function (s) {
      var o = load();
      o.settings = { phone: s.phone, tagline: s.tagline };
      return save(o);
    },
    resetAll: function () {
      try {
        localStorage.removeItem(KEY);
        return true;
      } catch (e) {
        return false;
      }
    }
  };
})();
