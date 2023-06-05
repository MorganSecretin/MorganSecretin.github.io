/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/ToggleHeaderButton.js":
/*!**********************************!*\
  !*** ./js/ToggleHeaderButton.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ToogleHeaderButton; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ToogleHeaderButton = /*#__PURE__*/function () {
  function ToogleHeaderButton(header) {
    var _this = this;
    _classCallCheck(this, ToogleHeaderButton);
    _defineProperty(this, "openHeader", void 0);
    _defineProperty(this, "closeHeader", void 0);
    _defineProperty(this, "navBar", void 0);
    this.openHeader = header.querySelector('.openHeader');
    this.closeHeader = header.querySelector('.closeHeader');
    this.navBar = header.querySelector('.navBar');

    // Situation initiale
    this.windowGrow();

    // Ajout des evenement
    this.openHeader.addEventListener('click', function (event) {
      event.preventDefault();
      _this.showNavBar();
    });
    this.closeHeader.addEventListener('click', function (event) {
      event.preventDefault();
      _this.hideNavBar();
    });
    window.addEventListener('resize', function (event) {
      _this.windowGrow();
    });
  }
  _createClass(ToogleHeaderButton, [{
    key: "windowGrow",
    value: function windowGrow() {
      if (window.innerWidth > 750) {
        this.showNavBar();
        this.closeHeader.classList.add('hide');
      } else {
        this.hideNavBar();
      }
    }
  }, {
    key: "showNavBar",
    value: function showNavBar() {
      this.openHeader.classList.add('hide');
      this.closeHeader.classList.remove('hide');
      this.navBar.classList.remove('hide');
    }
  }, {
    key: "hideNavBar",
    value: function hideNavBar() {
      this.openHeader.classList.remove('hide');
      this.closeHeader.classList.add('hide');
      this.navBar.classList.add('hide');
    }
  }]);
  return ToogleHeaderButton;
}();


/***/ }),

/***/ "./js/TypeProject.js":
/*!***************************!*\
  !*** ./js/TypeProject.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var TypeProject = Object.freeze({
  SCOLAIRE: Symbol('scolaire'),
  PERSONNEL: Symbol('personnel'),
  ENTREPRISE: Symbol('entreprise')
});
/* harmony default export */ __webpack_exports__["default"] = (TypeProject);

/***/ }),

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TypeProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TypeProject.js */ "./js/TypeProject.js");

var data = [{
  title: 'agar.IUT',
  imgUrl: 'img/Projet/Projet10.PNG',
  type: _TypeProject_js__WEBPACK_IMPORTED_MODULE_0__["default"].SCOLAIRE,
  languages: 'typescript',
  tools: 'git',
  others: 'node babel',
  technos: "    ",
  skills: "travail-d'\xE9quipe \n\t\td\xE9couverte-nouvelle-technologie \n\t\td\xE9ploiement-d'application",
  date: "2023-04-14",
  littleDescription: 'Ce projet est un serveur en javascript pour jouer a un jeu basé sur "agar.io".',
  link: 'http://lol',
  titleLink: 'lol',
  bigDescription: "C'est un de mes projets personnels les plus\n        ambitieux. J'y ai passer beaucoup d'heure en python pour arriver \xE0\n        un r\xE9sultat bien avancer. Seuleument, j'ai beaucoup trop appris sur\n        la programmation ce qui ma oblig\xE9 \xE0 recommencer ce code plusieurs\n        fois. Au final, j'ai d\xE9cid\xE9 de le passer dans une version java avec\n        la biblioth\xE9que JavaFX. Cela me permet d'apprendre par moi m\xEAme\n        dans un logiciel qui un jour pourrai vraiment servir. La version\n        java est toujours en cours sur GitHub.",
  active: true
}, {
  title: 'Tutorat',
  imgUrl: 'img/Projet/Projet6.jpg',
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "java javafx json git scolaire",
  skills: "travail-d'\xE9quipe \n\t\td\xE9couverte-nouvelle-technologie \n\t\td\xE9ploiement-d'application",
  date: "2022-05-31",
  littleDescription: 'Ce logiciel permet de lier un tuteur et un tutoré.',
  link: 'https://youtu.be/mbyExsb27oA',
  titleLink: 'Vidéo du projet',
  bigDescription: "Il y avait diverses conditions \xE0 respecter et\n\t\t\t\t\tplusieurs fonctions \xE0 implementer. Durant ce projet, j'ai pu\n\t\t\t\t\td\xE9velopper mes connaissances en Java. J'ai ainsi utilis\xE9 des outils\n\t\t\t\t\ttels que JavaFX pour l'interface, les Graphes pour r\xE9aliser les\n\t\t\t\t\tcalculs, BufferedWriter, BufferedReader et Gson pour les\n\t\t\t\t\tsauvegardes. A la fin, nous avons rendu un projet fonctionnel et\n\t\t\t\t\tcomplet.",
  active: false
}, {
  title: 'Classification',
  imgUrl: 'img/Projet/Projet7.jpg',
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "java javafx csv git scolaire",
  skills: "travail-d'\xE9quipe \n\t\td\xE9couverte-nouvelle-technologie \n\t\td\xE9ploiement-d'application",
  date: "2022-12-02",
  littleDescription: 'Ce logiciel classifie des données avec la méthode kNN et affiche un graphique.',
  link: '',
  titleLink: '',
  bigDescription: "En groupe de 4 nous avons cr\xE9\xE9 ce logiciel afin d'afficher \n\t\t\t\t\tdes donn\xE9es classifi\xE9es. Nous avons la capacit\xE9 d'y ajouter des \n\t\t\t\t\tdonn\xE9es inconnues afin qu'elles soient automatiquement class\xE9es dans la\n\t\t\t\t\tcat\xE9gorie la plus probable en utilisant la m\xE9thode kNN. Nous utilisons \n\t\t\t\t\t\xE9galement une m\xE9thode de test de la robutesse des r\xE9glages. Les r\xE9glages\n\t\t\t\t\tsont modifiables et donc la m\xE9thode de test utilise les donn\xE9es \xE0 sa \n\t\t\t\t\tdisposition pour calculer le pourcentage de la robustesse. (g\xE9n\xE9ralement\n\t\t\t\t\tkNN obtient de faibles r\xE9sultats). La difficult\xE9 de ce projet a \xE9t\xE9 de \n\t\t\t\t\tfaire en sorte que le programme soit g\xE9n\xE9rique et que les donn\xE9es soient \n\t\t\t\t\tle moins possible affich\xE9es par du code en dur.",
  active: false
}, {
  title: 'CHESSCAPE',
  imgUrl: 'img/Projet/Projet1.png',
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "java agile git scolaire",
  skills: "travail-d'\xE9quipe \n\t\td\xE9couverte-nouvelle-technologie \n\t\td\xE9ploiement-d'application",
  date: "2022-09-06",
  littleDescription: "C'est un jeux d'\xE9checs type rogue-like en projet agile avec\n\t\t\t\t\tde la programmation en java.",
  link: '',
  titleLink: '',
  bigDescription: "Par \xE9quipe de 6, nous devions programmer ce jeu en\n\t\t\t\t\t3 jours. De comp\xE9tences et exp\xE9riences diff\xE9rentes, nous nous\n\t\t\t\t\tsommes tir\xE9s vers le haut. J\u2019ai pu aider mes camarades car certains\n\t\t\t\t\tn'avaient jamais programm\xE9 en java. Je pense avoir aid\xE9 \xE0 la\n\t\t\t\t\tcontinuit\xE9 de notre projet et \xE0 la bonne humeur de notre groupe.\n\t\t\t\t\tJ\u2019ai moi m\xEAme pu \xEAtre aid\xE9 sur l\u2019utilisation de Git. A la fin de\n\t\t\t\t\tnos Sprints de 2 heures, nous avons pu pr\xE9senter un jeu d'\xE9checs\n\t\t\t\t\tstyle rogue-like fonctionnel et int\xE9ressant.",
  active: false
}, {
  title: "SMM: Safe Money Manager",
  imgUrl: "img/Projet/Projet3.JPG",
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "python pygame personnel",
  skills: "d\xE9ploiement-d'application",
  date: "2020-10-01",
  littleDescription: "J'ai pour objectif de cr\xE9\xE9r un gestionnaire de compte.",
  link: "",
  titleLink: "",
  bigDescription: "C'est un de mes projets personnels les plus\n        ambitieux. J'y ai passer beaucoup d'heure en python pour arriver \xE0\n        un r\xE9sultat bien avancer. Seuleument, j'ai beaucoup trop appris sur\n        la programmation ce qui ma oblig\xE9 \xE0 recommencer ce code plusieurs\n        fois. Au final, j'ai d\xE9cid\xE9 de le passer dans une version java avec\n        la biblioth\xE9que JavaFX. Cela me permet d'apprendre par moi m\xEAme\n        dans un logiciel qui un jour pourrai vraiment servir. La version\n        java est toujours en cours sur GitHub.",
  active: false
}, {
  title: "PCDD",
  imgUrl: "img/Projet/Projet4.JPG",
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "python cryptage personnel",
  skills: "algorithmie interface",
  date: "2021-03-13",
  littleDescription: "PCDD est un logiciel de cryptage de mot de passe en Python.",
  link: "",
  titleLink: "",
  bigDescription: "Je l'ai cr\xE9\xE9 en 1\xE9re au lyc\xE9e lorsque j'ai\n        d\xE9couvert une m\xE9thode de cryptage. Je voulais faire par moi m\xEAme ce\n        logiciel afin de profiter de son utilisation. Il est fini et\n        fonctionnel. Un jour, je pourrai peut \xEAtre cr\xE9\xE9 une version en\n        JavaFX.",
  active: false
}, {
  title: "Escape Game Passengers",
  imgUrl: "img/Projet/Projet5.JPG",
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "genially trello scolaire",
  skills: "travail-d'\xE9quipe \n\t\td\xE9couverte-nouvelle-technologie \n\t\td\xE9ploiement-d'application",
  date: "2022-05-11",
  littleDescription: "Ce projet est un escape game r\xE9alis\xE9 en Genially.",
  link: "https://view.genial.ly/627bc2a76c53040011928c4f/interactive-content-passengers",
  titleLink: "Acc\xE8s Genially",
  bigDescription: "J'\xE9tais dans une\n        \xE9quipe de 3. Nous avons principalement appris la gestion de projet.\n        J'y ai d\xE9couvert des outils comme Trello pour g\xE9rer un projet et\n        TeamGantt pour cr\xE9er un diagramme de Gantt. C'\xE9tait tr\xE8s\n        satisfaisant de travailler sur ce projet. D'autant plus que le but\n        final \xE9t\xE9 de le faire tester aux diff\xE9rents groupes de la promo. Je\n        me suis donc investie de bon coeur et je suis assez fier de notre\n        travail.",
  active: false
}, {
  title: "Use Heat",
  imgUrl: "img/Projet/Projet2.JPG",
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "html css scolaire",
  skills: "travail-d'\xE9quipe \n\t\tdesign-site-web",
  date: "2021-10-08",
  littleDescription: "En projet de 1re ann\xE9e, nous avons par \xE9quipe de 2 cr\xE9\xE9s un\n        site web.",
  link: "res/Use Heat/indexBis.html",
  titleLink: "Voir le site",
  bigDescription: "Voir Use\n        heat</a> <br>Le site se base sur une entreprise fictive de notre\n    cr\xE9ation. Mon camarade avais de bien meilleur comp\xE9tence que moi en\n    html, css et javaScript. N\xE9anmoins, nous nous sommes tr\xE9s bien\n    r\xE9partie le travail. J'ai donc pu apprendre sur le taf\n    l'utilisation de ces languages web. Nous avons cr\xE9\xE9 un site de\n    vente de chauffage minant de la cryptommonaie. Nous \xE9tions\n    passionn\xE9s par le sujet de notre travail. Nous nous sommes donc\n    donner \xE0 fond. Le rendu est beau et donne envie malgr\xE9s qu'il ne\n    soit pas fonctionnel car demander dans les consignes.",
  active: false
}, {
  title: "Veille Info Bot",
  imgUrl: "img/Projet/Projet8.PNG",
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "python tkinter api personnel",
  skills: "travail-d'\xE9quipe\n\t\td\xE9couverte-nouvelle-technologie",
  date: "2023-01-10",
  littleDescription: "Ce logiciel affiche des articles internet \n\t\tutilisant une API afin de faire de la veille informatique.",
  link: "https://github.com/SolaireFR/VeilleInfoBot",
  titleLink: "Voir le depot",
  bigDescription: "TXT",
  active: false
}, {
  title: "Api Pizzeria",
  imgUrl: "img/Projet/Projet9.png",
  type: '',
  languages: '',
  tools: '',
  others: '',
  technos: "java tomcat api scolaire",
  skills: "travail-d'\xE9quipe \n\t\td\xE9couverte-nouvelle-technologie \n\t\td\xE9ploiement-d'application",
  date: "2023-03-06",
  littleDescription: "Ce projet est une api rest sur une pizzeria \n\t\tavec des get, post, delete, et autres avec le serveur tomcat.",
  link: "",
  titleLink: "",
  bigDescription: "TXT",
  active: false
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./js/page/AboutView.js":
/*!******************************!*\
  !*** ./js/page/AboutView.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AboutView; }
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./js/page/View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AboutView = /*#__PURE__*/function (_View) {
  _inherits(AboutView, _View);
  var _super = _createSuper(AboutView);
  function AboutView(element) {
    var _this;
    _classCallCheck(this, AboutView);
    _this = _super.call(this, element);
    fetch('./html/about.html').then(function (response) {
      return response.text();
    }).then(function (responseText) {
      return _this.showFileContent(responseText);
    });
    return _this;
  }
  return _createClass(AboutView);
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./js/page/CareerView.js":
/*!*******************************!*\
  !*** ./js/page/CareerView.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CareerView; }
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./js/page/View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CareerView = /*#__PURE__*/function (_View) {
  _inherits(CareerView, _View);
  var _super = _createSuper(CareerView);
  function CareerView(element) {
    var _this;
    _classCallCheck(this, CareerView);
    _this = _super.call(this, element);
    fetch('./html/career.html').then(function (response) {
      return response.text();
    }).then(function (responseText) {
      return _this.showFileContent(responseText);
    });
    return _this;
  }
  return _createClass(CareerView);
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./js/page/DetailsView.js":
/*!********************************!*\
  !*** ./js/page/DetailsView.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DetailsView; }
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./js/page/View.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.js */ "./js/data.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Router.js */ "./js/page/Router.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DetailsView = /*#__PURE__*/function (_View) {
  _inherits(DetailsView, _View);
  var _super = _createSuper(DetailsView);
  function DetailsView(element) {
    var _this;
    _classCallCheck(this, DetailsView);
    _this = _super.call(this, element);
    fetch('./html/details.html').then(function (response) {
      return response.text();
    }).then(function (responseText) {
      _this.showFileContent(responseText);
      // TEMPO
      _Router_js__WEBPACK_IMPORTED_MODULE_2__["default"].navigate('/details');
    });
    return _this;
  }
  _createClass(DetailsView, [{
    key: "renderProjectDetails",
    value: function renderProjectDetails() {
      var _this2 = this;
      _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (project) {
        if (project.active == true) {
          _this2.element.querySelector('h2').innerHTML = project.title;
          _this2.element.querySelector('img').src = project.imgUrl;
          _this2.element.querySelector('a').href = project.link;
          _this2.element.querySelector('a').innerHTML = project.titleLink;
          _this2.element.querySelector('p').innerHTML = project.bigDescription;
          _this2.initList(project);
        }
      });
    }
  }, {
    key: "initList",
    value: function initList(project) {
      // Technos
      var html = '';
      project.technos.split(' ').forEach(function (techno) {
        html += "\n\t\t\t<li>\n\t\t\t\t".concat(techno, "\n\t\t\t</li>");
      });
      this.element.querySelector('.techUsed').innerHTML = html;

      // Skills
      html = '';
      project.skills.split(' ').forEach(function (skill) {
        html += "\n\t\t\t<li>\n\t\t\t\t".concat(skill.replaceAll('-', ' '), "\n\t\t\t</li>");
      });
      this.element.querySelector('.gainSkills').innerHTML = html;
    }
  }]);
  return DetailsView;
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./js/page/ProjectsView.js":
/*!*********************************!*\
  !*** ./js/page/ProjectsView.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProjectsView; }
/* harmony export */ });
/* harmony import */ var _renderProjectThumbnail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderProjectThumbnail.js */ "./js/renderProjectThumbnail.js");
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.js */ "./js/data.js");
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.js */ "./js/page/View.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router.js */ "./js/page/Router.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ProjectsView = /*#__PURE__*/function (_View) {
  _inherits(ProjectsView, _View);
  var _super = _createSuper(ProjectsView);
  function ProjectsView(element) {
    var _this;
    _classCallCheck(this, ProjectsView);
    _this = _super.call(this, element);
    fetch('./html/projects.html').then(function (response) {
      return response.text();
    }).then(function (responseText) {
      _this.showFileContentAndProjects(responseText);
      _this.initDetailsLinks();
      window.addEventListener('resize', function (event) {
        _this.chooseAnimation();
      });
      _this.initFilterToggler();
    });
    return _this;
  }
  _createClass(ProjectsView, [{
    key: "initDetailsLinks",
    value: function initDetailsLinks() {
      var listLink = this.element.querySelectorAll('.project_div');
      listLink.forEach(function (projectHTML) {
        var link = projectHTML.querySelector('.project_div_text>a');
        link.addEventListener('click', function (event) {
          event.preventDefault();

          // Activation du bon projet
          _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (project) {
            if (project.title.replaceAll(' ', '-') == link.className.split(' ')[0]) {
              project.active = true;
            }
          });

          // Changement page
          _Router_js__WEBPACK_IMPORTED_MODULE_3__["default"].navigate('/details');
        });
      });
    }
  }, {
    key: "initFilterToggler",
    value: function initFilterToggler() {
      var _this2 = this;
      var filterToggler = this.element.querySelector('.minimum>h4');
      filterToggler.addEventListener('click', function (event) {
        var filter = _this2.element.querySelector('.filter');
        if (!filter.classList.contains('hide')) {
          filter.classList.add('hide');
        } else {
          filter.classList.remove('hide');
        }
      });
    }
  }, {
    key: "chooseAnimation",
    value: function chooseAnimation() {
      if (window.innerWidth > 500) {
        this.element.querySelectorAll('.project_div').forEach(function (projectDiv) {
          var divText = projectDiv.querySelector('.project_div_text');
          var img = projectDiv.querySelector('.project_img');
          divText.classList.add('hideSlow');
          projectDiv.addEventListener('mouseover', function (event) {
            divText.classList.remove('hideSlow');
            divText.classList.add('showSlow');
          });
          projectDiv.addEventListener('mouseout', function (event) {
            divText.classList.remove('showSlow');
            divText.classList.add('hideSlow');
          });
        });
      } else {
        this.element.querySelectorAll('.project_div').forEach(function (projectDiv) {
          var divText = projectDiv.querySelector('.project_div_text');
          projectDiv.addEventListener('mouseover', function (event) {});
          projectDiv.addEventListener('mouseout', function (event) {});
          divText.classList.remove('hideSlow');
          divText.classList.remove('showSlow');
        });
      }
    }
  }, {
    key: "showFileContentAndProjects",
    value: function showFileContentAndProjects(html) {
      var _this3 = this;
      this.showFileContent(html);
      this.renderProjectList();

      // détection de la soumission du formulaire de recherche
      this.searchForm = this.element.querySelector('.searchForm');
      this.searchForm.addEventListener('submit', function (event) {
        return _this3.handleSearchFormSubmit(event);
      });
    }
  }, {
    key: "renderProjectList",
    value: function renderProjectList() {
      var technos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var languages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var apps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var others = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      var search = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
      var ordering = arguments.length > 5 ? arguments[5] : undefined;
      // calcul de la fonction de tri selon le paramètre ordering
      var sortingFunction;
      if (ordering == '-dateDown') {
        sortingFunction = function sortingFunction(a, b) {
          return b.date.localeCompare(a.date);
        };
      } else if (ordering == '-dateUp') {
        sortingFunction = function sortingFunction(a, b) {
          return a.date.localeCompare(b.date);
        };
      }

      // parcours du tableau + génération du code HTML de la projectList
      var html = '';
      _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].filter(function (project) {
        return project.title.toLowerCase().includes(search.toLowerCase());
      }) // recherche
      .filter(function (project) {
        var valid = false;
        technos.split(' ').forEach(function (techno) {
          if (project.technos.toLowerCase().includes(techno.toLowerCase())) {
            valid = true;
          }
        });
        return valid;
      }) // type
      .filter(function (project) {
        var valid = false;
        languages.split(' ').forEach(function (language) {
          if (project.technos.toLowerCase().includes(language.toLowerCase())) {
            valid = true;
          }
        });
        return valid;
      }) // langage
      .filter(function (project) {
        var valid = false;
        apps.split(' ').forEach(function (app) {
          if (project.technos.toLowerCase().includes(app.toLowerCase())) {
            valid = true;
          }
        });
        return valid;
      }) // app
      .filter(function (project) {
        var valid = false;
        others.split(' ').forEach(function (other) {
          if (project.technos.toLowerCase().includes(other.toLowerCase())) {
            valid = true;
          }
        });
        return valid;
      }) // other
      .sort(sortingFunction) // tri
      .forEach(function (project) {
        html += (0,_renderProjectThumbnail_js__WEBPACK_IMPORTED_MODULE_0__["default"])(project);
      }); // génération du HTML

      // maj de la page HTML
      this.element.querySelector('.result').innerHTML = html;

      // Reset des animations
      this.chooseAnimation();
    }
  }, {
    key: "handleSearchFormSubmit",
    value: function handleSearchFormSubmit(event) {
      event.preventDefault();
      var searchInput = this.searchForm.querySelector('[name=search]'),
        orderingSelect = this.searchForm.querySelector('[name=ordering]'),
        checkboxType = this.searchForm.querySelectorAll('.checkboxType'),
        checkboxLanguages = this.searchForm.querySelectorAll('.checkboxLanguage'),
        checkboxApps = this.searchForm.querySelectorAll('.checkboxApp'),
        checkboxOthers = this.searchForm.querySelectorAll('.checkboxOther');
      var technos = '';
      checkboxType.forEach(function (typeCheckbox) {
        if (typeCheckbox.checked) {
          technos += typeCheckbox.name + ' ';
        }
      });
      var languages = '';
      checkboxLanguages.forEach(function (languageCheckbox) {
        if (languageCheckbox.checked) {
          languages += languageCheckbox.name + ' ';
        }
      });
      var apps = '';
      checkboxApps.forEach(function (appCheckbox) {
        if (appCheckbox.checked) {
          apps += appCheckbox.name + ' ';
        }
      });
      var others = '';
      checkboxOthers.forEach(function (otherCheckbox) {
        if (otherCheckbox.checked) {
          others += otherCheckbox.name + ' ';
        }
      });
      this.renderProjectList(technos.substring(0, technos.length - 1), languages.substring(0, languages.length - 1), apps.substring(0, apps.length - 1), others.substring(0, others.length - 1), searchInput.value, orderingSelect.value);
    }
  }, {
    key: "setTypes",
    value: function setTypes() {
      var _this4 = this;
      var listTechnos = '';
      _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(function (project) {
        project.active = false;

        // récupération de tout les types d'un projet
        var technosString = project.technos.split(' ');
        technosString.forEach(function (techno) {
          // ajoute si n'existe pas
          if (!listTechnos.toLowerCase().includes(techno.toLowerCase())) {
            listTechnos = listTechnos + ' ' + techno;
          }
        });
      });

      // Creation de l'html
      return listTechnos.split(' ').forEach(function (techno) {
        return _this4.renderTechnoOption(techno);
      });
    }
  }, {
    key: "renderTechnoOption",
    value: function renderTechnoOption(techno) {
      return "\n        <option value=\"".concat(techno, "\">").concat(techno, "</option>\n        ");
    }
  }]);
  return ProjectsView;
}(_View_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./js/page/Router.js":
/*!***************************!*\
  !*** ./js/page/Router.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Router; }
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.js */ "./js/data.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classStaticPrivateFieldSpecSet(receiver, classConstructor, descriptor, value) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var Router = /*#__PURE__*/function () {
  function Router() {
    _classCallCheck(this, Router);
  }
  _createClass(Router, null, [{
    key: "setMenuElement",
    value: function setMenuElement(menuElement) {
      var _this = this;
      _classStaticPrivateFieldSpecSet(this, Router, _menuElement, menuElement);
      var menuLinks = _classStaticPrivateFieldSpecGet(this, Router, _menuElement).querySelectorAll('a');
      menuLinks.forEach(function (link) {
        return link.addEventListener('click', function (event) {
          event.preventDefault();
          var linkHref = event.currentTarget.getAttribute('href');
          if (_this.currentMenu) {
            _this.currentMenu.classList.remove('active');
          }
          _this.currentMenu = event.currentTarget;
          _this.currentMenu.classList.add('active');
          Router.navigate(linkHref);
        });
      });
    }
  }, {
    key: "navigate",
    value: function navigate(path) {
      var route = this.routes.find(function (route) {
        return route.path == path;
      });
      if (route) {
        // on masque la vue précédente
        if (this.currentRoute) {
          this.currentRoute.view.hide();
        }
        this.currentRoute = route;

        // Affichage des details d'un projet
        if (route.path == '/details') {
          route.view.renderProjectDetails();
        }
        // on désactive les détails des projets
        else if (route.path == '/projects') {
          _data_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(function (project) {
            project.active = false;
          });
        }

        // on affiche la nouvelle vue
        route.view.show();
      }

      // on retourne en haut de la page
      window.scrollTo(0, 0);
    }
  }]);
  return Router;
}();
_defineProperty(Router, "routes", []);
_defineProperty(Router, "currentRoute", void 0);
_defineProperty(Router, "currentMenu", void 0);
var _menuElement = {
  writable: true,
  value: void 0
};


/***/ }),

/***/ "./js/page/SkillsView.js":
/*!*******************************!*\
  !*** ./js/page/SkillsView.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SkillsView; }
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./js/page/View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SkillsView = /*#__PURE__*/function (_View) {
  _inherits(SkillsView, _View);
  var _super = _createSuper(SkillsView);
  function SkillsView(element) {
    var _this;
    _classCallCheck(this, SkillsView);
    _this = _super.call(this, element);
    fetch('./html/skills.html').then(function (response) {
      return response.text();
    }).then(function (responseText) {
      return _this.showFileContent(responseText);
    });
    return _this;
  }
  return _createClass(SkillsView);
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./js/page/View.js":
/*!*************************!*\
  !*** ./js/page/View.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ View; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/**
 * Classe de base des vues de notre application.
 * Permet d'associer une balise HTML à la vue et de l'afficher/masquer.
 */
var View = /*#__PURE__*/function () {
  /**
   * Balise HTML associée à la vue
   */

  function View(element) {
    _classCallCheck(this, View);
    _defineProperty(this, "element", void 0);
    this.element = element;
  }
  /**
   * Affiche la vue en lui ajoutant la classe CSS `active`
   */
  _createClass(View, [{
    key: "show",
    value: function show() {
      this.element.classList.remove('hide');
    }
    /**
     * Masque la vue en enlevant la classe CSS `active`
     */
  }, {
    key: "hide",
    value: function hide() {
      this.element.classList.add('hide');
    }
  }, {
    key: "showFileContent",
    value: function showFileContent(html) {
      this.element.innerHTML = html;
    }
  }]);
  return View;
}();


/***/ }),

/***/ "./js/page/WelcomeView.js":
/*!********************************!*\
  !*** ./js/page/WelcomeView.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ WelcomeView; }
/* harmony export */ });
/* harmony import */ var _View_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.js */ "./js/page/View.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var WelcomeView = /*#__PURE__*/function (_View) {
  _inherits(WelcomeView, _View);
  var _super = _createSuper(WelcomeView);
  function WelcomeView(element) {
    var _this;
    _classCallCheck(this, WelcomeView);
    _this = _super.call(this, element);
    fetch('./html/welcome.html').then(function (response) {
      return response.text();
    }).then(function (responseText) {
      return _this.showFileContent(responseText);
    });
    return _this;
  }
  return _createClass(WelcomeView);
}(_View_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./js/renderProjectThumbnail.js":
/*!**************************************!*\
  !*** ./js/renderProjectThumbnail.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ renderProjectThumbnail; }
/* harmony export */ });
function renderProjectThumbnail(_ref) {
  var title = _ref.title,
    imgUrl = _ref.imgUrl,
    date = _ref.date,
    littleDescription = _ref.littleDescription,
    link = _ref.link,
    titleLink = _ref.titleLink,
    bigDescription = _ref.bigDescription;
  var dateShow = new Date(date);
  return "\n<div class=\"project_div\">\n    <img class=\"project_img\" src=\"".concat(imgUrl, "\" alt=\"\">\n    \n    <div class=\"project_div_text\">\n        <h2 class=\"project_title\">").concat(title, "</h2>\n        <time datetime=\"").concat(date, "\">").concat(dateShow.toLocaleDateString(), "</time>\n        <p class=\"little_description\">").concat(littleDescription, "</p>\n        <a class=\"").concat(title.replaceAll(' ', '-'), "\" href=\"/details\">D\xE9tails</a> <br>\n    </div>\n</div>");
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/Router.js */ "./js/page/Router.js");
/* harmony import */ var _ToggleHeaderButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleHeaderButton.js */ "./js/ToggleHeaderButton.js");
/* harmony import */ var _page_WelcomeView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/WelcomeView.js */ "./js/page/WelcomeView.js");
/* harmony import */ var _page_AboutView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/AboutView.js */ "./js/page/AboutView.js");
/* harmony import */ var _page_SkillsView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/SkillsView.js */ "./js/page/SkillsView.js");
/* harmony import */ var _page_CareerView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/CareerView.js */ "./js/page/CareerView.js");
/* harmony import */ var _page_ProjectsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/ProjectsView.js */ "./js/page/ProjectsView.js");
/* harmony import */ var _page_DetailsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/DetailsView.js */ "./js/page/DetailsView.js");









/* INIT */
var header = document.querySelector('body>header');
var toogleHeaderButton = new _ToggleHeaderButton_js__WEBPACK_IMPORTED_MODULE_1__["default"](header);

// Creation différentes des vues du site
var welcomeView = new _page_WelcomeView_js__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('.welcome')),
  aboutView = new _page_AboutView_js__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('.about')),
  skillsView = new _page_SkillsView_js__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector('.skills')),
  careerView = new _page_CareerView_js__WEBPACK_IMPORTED_MODULE_5__["default"](document.querySelector('.career')),
  projectsView = new _page_ProjectsView_js__WEBPACK_IMPORTED_MODULE_6__["default"](document.querySelector('.projects')),
  detailsView = new _page_DetailsView_js__WEBPACK_IMPORTED_MODULE_7__["default"](document.querySelector('.details'));

// mise en place du Router
var routes = [{
  path: '/',
  view: welcomeView
}, {
  path: '/welcome',
  view: welcomeView
}, {
  path: '/about',
  view: aboutView
}, {
  path: '/skills',
  view: skillsView
}, {
  path: '/career',
  view: careerView
}, {
  path: '/projects',
  view: projectsView
}, {
  path: '/details',
  view: detailsView
}];
_page_Router_js__WEBPACK_IMPORTED_MODULE_0__["default"].routes = routes;

// gestion des liens du menu (détection du clic et activation/désactivation)
_page_Router_js__WEBPACK_IMPORTED_MODULE_0__["default"].setMenuElement(document.querySelector('body>header nav'));

// chargement de la vue initiale selon l"URL demandée par l"utilisateur.rice (Deep linking)
_page_Router_js__WEBPACK_IMPORTED_MODULE_0__["default"].navigate('/');
console.log('Tout Fonctionne');
}();
/******/ })()
;
//# sourceMappingURL=main.bundle.js.map