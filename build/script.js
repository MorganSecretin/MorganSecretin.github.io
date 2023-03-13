function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// Affiche ou cache les projets et un des boutons (plus/moins)
function toggleProjects() {
  var d = document.getElementsByClassName("d1");
  var show = document.getElementById("showprojets");
  var hide1 = document.getElementById("hideprojets1");
  var hide2 = document.getElementById("hideprojets2");

  // Affiche ou Cache les projets
  var _iterator = _createForOfIteratorHelper(d),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var div = _step.value;
      div.hidden = !div.hidden;
    }

    // Affiche soit plus soit moins
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (hide1.style.display != "none") {
    hide1.style.display = "none";
    hide2.style.display = "none";
    show.style.display = "block";
  } else {
    hide1.style.display = "block";
    hide2.style.display = "block";
    show.style.display = "none";
  }
}

// Affiche ou cache la totalité des détails pour les projets
function toggleDetailsProjetAll() {
  // L'inverse de la situation présente (affiché/caché)
  var show = Boolean(!document.getElementById("plus1").hidden);
  document.getElementById("plus1").hidden = show;
  document.getElementById("plus2").hidden = show;
  document.getElementById("plus3").hidden = show;
  document.getElementById("plus4").hidden = show;
  document.getElementById("plus5").hidden = show;
  document.getElementById("plus6").hidden = show;
}

// Affiche ou cache la totalité des détails pour les projets selon la situation présente
function setHideDetailsProjetAll(_boolean) {
  if (document.getElementById("plus1").hidden != _boolean) {
    toggleDetailsProjetAll();
  }
}

// Affiche ou cache selon l'id fournie le détail d'un projet
function detailsProjet(id) {
  var detail = document.getElementById(id);
  detail.hidden = !detail.hidden;
}

// Affiche ou Cache les liens de la navBar
function toggleHeader() {
  if (document.getElementById("toggleheader_img").getAttribute("src") == "img/OpenMenuBar.png") {
    document.getElementById("toggleheader_img").src = "img/CloseMenuBar.png";
  } else {
    document.getElementById("toggleheader_img").src = "img/OpenMenuBar.png";
  }
  var link = document.getElementsByClassName("headlink");
  var _iterator2 = _createForOfIteratorHelper(link),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var a = _step2.value;
      if (a.style.display == "inline-block" || a.style.display == "block") {
        a.style.display = "none";
      } else if (window.innerWidth < 750) {
        a.style.display = "block";
      } else {
        a.style.display = "inline-block";
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

// Changement de taille de l'écran
window.onresize = doOnResize;
function doOnResize() {
  // Element lien de la navBar et bouton navBar
  if (window.innerWidth <= 750) {
    document.getElementById("toggleheader").style.display = "inline-block";
    var link = document.getElementsByClassName("headlink");
    var _iterator3 = _createForOfIteratorHelper(link),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var a = _step3.value;
        a.style.display = "none";
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  } else {
    document.getElementById("toggleheader").style.display = "none";
    var _link = document.getElementsByClassName("headlink");
    var _iterator4 = _createForOfIteratorHelper(_link),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var a = _step4.value;
        a.style.display = "inline-block";
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }
  var boutonsDetails = document.getElementsByClassName("boutondetail");

  // Cache les boutons détails et Affiche les details
  if (window.innerWidth >= 1000) {
    setHideDetailsProjetAll(false);
    var _iterator5 = _createForOfIteratorHelper(boutonsDetails),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var bouton = _step5.value;
        bouton.hidden = true;
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }
  // Affiche les boutons détails et Cache les details
  else {
    setHideDetailsProjetAll(true);
    var _iterator6 = _createForOfIteratorHelper(boutonsDetails),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var bouton = _step6.value;
        bouton.hidden = false;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
}
//# sourceMappingURL=script.js.map