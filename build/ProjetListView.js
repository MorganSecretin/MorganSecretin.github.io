function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import renderProjectThumbnail from "./renderProjectThumbnail.js";
import data from "./data.js";
var ProjetListView = /*#__PURE__*/function () {
  function ProjetListView(element) {
    var _this = this;
    _classCallCheck(this, ProjetListView);
    _defineProperty(this, "searchForm", void 0);
    _defineProperty(this, "element", void 0);
    this.element = element;
    // détection de la soumission du formulaire de recherche
    this.searchForm = this.element.querySelector('.searchForm');
    this.searchForm.addEventListener('submit', function (event) {
      return _this.handleSearchFormSubmit(event);
    });

    // ajout de la liste des types dans l'html
    this.searchForm.querySelector("#select_types").innerHTML = this.setTypes();
  }
  _createClass(ProjetListView, [{
    key: "renderProjectList",
    value: function renderProjectList() {
      var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var ordering = arguments.length > 2 ? arguments[2] : undefined;
      // calcul de la fonction de tri selon le paramètre ordering
      var sortingFunction;
      if (ordering == '-date') {
        sortingFunction = function sortingFunction(a, b) {
          return b.date.localeCompare(a.date);
        };
      }

      // parcours du tableau + génération du code HTML de la projectList
      var html = '';
      data.filter(function (project) {
        return project.title.toLowerCase().includes(search.toLowerCase());
      }) // recherche
      .filter(function (project) {
        return project.type.toLowerCase().includes(types.toLowerCase());
      }) // type
      .sort(sortingFunction) // tri
      .forEach(function (project) {
        return html += renderProjectThumbnail(project);
      }); // génération du HTML
      // maj de la page HTML
      this.element.querySelector('.results_projects').innerHTML = html;
    }
  }, {
    key: "handleSearchFormSubmit",
    value: function handleSearchFormSubmit(event) {
      event.preventDefault();
      var searchInput = this.searchForm.querySelector('[name=search]'),
        orderingSelect = this.searchForm.querySelector('[name=ordering]'),
        typesSelect = this.searchForm.querySelector('[name=types]');
      this.renderGameList(typesSelect.value, searchInput.value, orderingSelect.value);
    }
  }, {
    key: "setTypes",
    value: function setTypes() {
      var _this2 = this;
      var listTypes = '';
      data.forEach(function (project) {
        // récupération de tout les types d'un projet
        var typesString = project.type.split(' ');
        typesString.forEach(function (type) {
          // ajoute si n'existe pas
          if (!listTypes.toLowerCase().includes(type.toLowerCase())) {
            listTypes = listTypes + " " + type;
          }
        });
      });

      // Creation de l'html
      return listTypes.split(" ").forEach(function (type) {
        return _this2.renderTypeOption(type);
      });
    }
  }, {
    key: "renderTypeOption",
    value: function renderTypeOption(type) {
      return "\n        <option value=\"".concat(type, "\">").concat(type, "</option>\n        ");
    }
  }]);
  return ProjetListView;
}();
export { ProjetListView as default };
//# sourceMappingURL=ProjetListView.js.map