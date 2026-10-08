// src/utilities/auth.js
// MOCK login for the local admin panel. It only gates the editing screens in this
// browser; it is NOT real security (anyone can read this file). Before relying on
// it anywhere real, replace checkCredentials/session with a server-side check.
(function () {
  var S = window.SMK;
  var USER = "samuel";
  var PASS = "synchronized";
  var FLAG = "smk-admin";

  S.auth = {
    checkCredentials: function (u, p) {
      return String(u).trim().toLowerCase() === USER && String(p) === PASS;
    },
    login: function () {
      try {
        sessionStorage.setItem(FLAG, "1");
      } catch (e) {}
    },
    logout: function () {
      try {
        sessionStorage.removeItem(FLAG);
      } catch (e) {}
    },
    isIn: function () {
      try {
        return sessionStorage.getItem(FLAG) === "1";
      } catch (e) {
        return false;
      }
    }
  };
})();
