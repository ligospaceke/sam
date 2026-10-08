// src/components/logo.js — the SMK mark (image), used in header, hero, splash, footer
(function () {
  var S = window.SMK;
  S.logo = function (size) {
    var sz = size ? ' width="' + size + '" height="' + size + '"' : "";
    return '<img class="logo" src="assets/logo.png"' + sz + ' alt="SMK, Samuel M.K. monogram">';
  };
})();
