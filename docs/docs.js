/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"docs": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/docs/index.js","vendors~docs~reactSimpleTree","vendors~docs"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/docs/app.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".root {\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  left: 0;\n  top: 0;\n  width: 100% !important;\n  height: 100% !important;\n  font-family: \"Open Sans\", sans-serif;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/docs/components/footer/footer.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".footer {\n  display: inline-flex;\n  justify-content: center;\n  width: 100%;\n  height: 30px;\n}\n\n.version {\n  font-size: 9pt;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/docs/components/main/main.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".main {\n  display: inline-flex;\n  justify-content: center;\n  flex-grow: 2;\n  width: 100%;\n  padding-top: 100px;\n  padding-bottom: 100px;\n}\n\n.markdown {\n  width: 80%;\n  padding-top: 100px;\n  padding-bottom: 100px;\n  text-align: center;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/docs/components/navigation/navigation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".nav {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  width: 100%;\n  height: 50px;\n  color: #fff;\n  background-color: #01579b;\n  background-image: linear-gradient(to right, #002f6c, #01579b);\n}\n\n.title {\n  align-content: right;\n  flex-grow: 2;\n  flex-shrink: 2;\n  margin-top: auto;\n  margin-bottom: auto;\n  font-size: 12pt;\n  margin-left: 15px;\n}\n\n.contacts {\n  margin-top: auto;\n  margin-bottom: auto;\n  display: inline-flex;\n  margin-right: 15px;\n}\n\n.contacts .contactLabel {\n  display: inline-flex;\n  font-size: 12pt;\n  color: #fff;\n  text-decoration: none !important;\n}\n\n.contacts :hover {\n  color: #002f6c;\n}\n\n.contacts .contactLabel .icon {\n  font-size: 18pt;\n  vertical-align: bottom;\n}\n\n.contacts .contactLabel .label {\n  margin-left: 5px;\n  vertical-align: bottom;\n}\n", ""]);


/***/ }),

/***/ "./src/docs/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/docs/components/index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/docs/app.css");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_2__);
 // internal

 // css



var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "root"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Navigation"], {
    title: "react-simple-tree"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Main"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Footer"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/docs/app.css":
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/docs/app.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/docs/components/footer/footer.css":
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/docs/components/footer/footer.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/docs/components/footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/docs/components/footer/footer.css");
/* harmony import */ var _footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_css__WEBPACK_IMPORTED_MODULE_1__);
 // css


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$version = _ref.version,
      version = _ref$version === void 0 ? "1.0" : _ref$version;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "version"
  }, "LICENSED UNDER ISC"));
});

/***/ }),

/***/ "./src/docs/components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/docs/components/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/docs/components/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/docs/components/main/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Main", function() { return _main__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./src/docs/components/main/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/docs/components/main/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_simple_tree_react_simple_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/react-simple-tree/react-simple-tree.js");
 // css

 // internal


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_simple_tree_react_simple_tree__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./src/docs/components/main/main.css":
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/docs/components/main/main.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/docs/components/navigation/contactLabel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/docs/components/navigation/navigation.css");
/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_navigation_css__WEBPACK_IMPORTED_MODULE_1__);
 // css


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? "" : _ref$icon,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? "" : _ref$label,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? "" : _ref$link,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      _ref$iconStyle = _ref.iconStyle,
      iconStyle = _ref$iconStyle === void 0 ? {} : _ref$iconStyle,
      _ref$labelStyle = _ref.labelStyle,
      labelStyle = _ref$labelStyle === void 0 ? {} : _ref$labelStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "".concat(link),
    target: "_blank",
    className: "contactLabel",
    title: "".concat(title),
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "icon ".concat(icon),
    style: iconStyle
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "label",
    style: labelStyle
  }, label));
});

/***/ }),

/***/ "./src/docs/components/navigation/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contactLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/docs/components/navigation/contactLabel.js");
/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/docs/components/navigation/navigation.css");
/* harmony import */ var _navigation_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_navigation_css__WEBPACK_IMPORTED_MODULE_2__);
 // internal

 // css



var navigation = function navigation(props) {
  var _props$title = props.title,
      title = _props$title === void 0 ? "" : _props$title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "nav"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contacts"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contactLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: "fab fa-github",
    label: "jtkwon",
    link: "https://github.com/jtkwon",
    title: "Github",
    iconStyle: {
      color: "#fff",
      borderRadius: "50%",
      backgroundColor: "#000"
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contactLabel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    icon: "fab fa-linkedin",
    label: "jtkwon",
    link: "https://www.linkedin.com/in/jtkwon/",
    title: "Linkedin",
    iconStyle: {
      color: "#0077B5",
      boxShadow: "0px 0px 0px 2px #01579b inset",
      backgroundColor: "#fff",
      marginLeft: "10px"
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (navigation);

/***/ }),

/***/ "./src/docs/components/navigation/navigation.css":
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__("./node_modules/css-loader/dist/cjs.js!./src/docs/components/navigation/navigation.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/docs/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/docs/App.js");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));

/***/ }),

/***/ "./src/react-simple-tree/react-simple-tree.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReactSimpleTree =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReactSimpleTree, _React$Component);

  function ReactSimpleTree(props) {
    _classCallCheck(this, ReactSimpleTree);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactSimpleTree).call(this, props));
  }

  _createClass(ReactSimpleTree, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "TEST");
    }
  }]);

  return ReactSimpleTree;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ReactSimpleTree);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9kb2NzL2NvbXBvbmVudHMvbWFpbi9tYWluLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9jb21wb25lbnRzL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvQXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9kb2NzL2FwcC5jc3M/NTcwZCIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzP2Q2ZmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvY29tcG9uZW50cy9mb290ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9jb21wb25lbnRzL21haW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvY29tcG9uZW50cy9tYWluL21haW4uY3NzPzY1NzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NvbnRhY3RMYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9jcy9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY3NzP2NmNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvY3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0LXNpbXBsZS10cmVlL3JlYWN0LXNpbXBsZS10cmVlLmpzIl0sIm5hbWVzIjpbIkFwcCIsInZlcnNpb24iLCJwcm9wcyIsImljb24iLCJsYWJlbCIsImxpbmsiLCJ0aXRsZSIsInN0eWxlIiwiaWNvblN0eWxlIiwibGFiZWxTdHlsZSIsIm5hdmlnYXRpb24iLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmRDb2xvciIsImJveFNoYWRvdyIsIm1hcmdpbkxlZnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJSZWFjdFNpbXBsZVRyZWUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7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Ozs7OzZCQUVRO0FBQ1AsYUFBTywrRUFBUDtBQUNEOzs7O0VBUDJCbUIsNENBQUssQ0FBQ0MsUzs7QUFVckJGLDhFQUFmLEUiLCJmaWxlIjoiZG9jcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJkb2NzXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvZG9jcy9pbmRleC5qc1wiLFwidmVuZG9yc35kb2NzfnJlYWN0U2ltcGxlVHJlZVwiLFwidmVuZG9yc35kb2NzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucm9vdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4udmVyc2lvbiB7XFxuICBmb250LXNpemU6IDlwdDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZsZXgtZ3JvdzogMjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xcbn1cXG5cXG4ubWFya2Rvd24ge1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTU3OWI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDJmNmMsICMwMTU3OWIpO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYWxpZ24tY29udGVudDogcmlnaHQ7XFxuICBmbGV4LWdyb3c6IDI7XFxuICBmbGV4LXNocmluazogMjtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi5jb250YWN0cyB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbn1cXG5cXG4uY29udGFjdHMgLmNvbnRhY3RMYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi5jb250YWN0cyA6aG92ZXIge1xcbiAgY29sb3I6ICMwMDJmNmM7XFxufVxcblxcbi5jb250YWN0cyAuY29udGFjdExhYmVsIC5pY29uIHtcXG4gIGZvbnQtc2l6ZTogMThwdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbi5jb250YWN0cyAuY29udGFjdExhYmVsIC5sYWJlbCB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG59XFxuXCIsIFwiXCJdKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGludGVybmFsXG5pbXBvcnQgeyBOYXZpZ2F0aW9uLCBNYWluLCBGb290ZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG4vLyBjc3NcbmltcG9ydCBcIi4vYXBwLmNzc1wiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICA8TmF2aWdhdGlvbiB0aXRsZT1cInJlYWN0LXNpbXBsZS10cmVlXCIgLz5cbiAgICAgIDxNYWluIC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiKTtcblxuaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG59XG5cbnZhciBvcHRpb25zID0ge31cblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYgKGNvbnRlbnQubG9jYWxzKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBjc3NcbmltcG9ydCBcIi4vZm9vdGVyLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyB2ZXJzaW9uID0gXCIxLjBcIiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVyc2lvblwiPntgTElDRU5TRUQgVU5ERVIgSVNDYH08L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG4iLCJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vbWFpblwiO1xuXG5leHBvcnQgeyBOYXZpZ2F0aW9uLCBNYWluLCBGb290ZXIgfTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbi8vIGNzc1xuaW1wb3J0IFwiLi9tYWluLmNzc1wiO1xuLy8gaW50ZXJuYWxcbmltcG9ydCBSZWFjdFNpbXBsZVRyZWUgZnJvbSBcIi4uLy4uLy4uL3JlYWN0LXNpbXBsZS10cmVlL3JlYWN0LXNpbXBsZS10cmVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxSZWFjdFNpbXBsZVRyZWUgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gY3NzXG5pbXBvcnQgXCIuL25hdmlnYXRpb24uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICh7XG4gIGljb24gPSBcIlwiLFxuICBsYWJlbCA9IFwiXCIsXG4gIGxpbmsgPSBcIlwiLFxuICB0aXRsZSA9IFwiXCIsXG4gIHN0eWxlID0ge30sXG4gIGljb25TdHlsZSA9IHt9LFxuICBsYWJlbFN0eWxlID0ge31cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8YVxuICAgICAgaHJlZj17YCR7bGlua31gfVxuICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3RMYWJlbFwiXG4gICAgICB0aXRsZT17YCR7dGl0bGV9YH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICA+XG4gICAgICA8aSBjbGFzc05hbWU9e2BpY29uICR7aWNvbn1gfSBzdHlsZT17aWNvblN0eWxlfSAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGFiZWxcIiBzdHlsZT17bGFiZWxTdHlsZX0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2E+XG4gICk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW50ZXJuYWxcbmltcG9ydCBDb250YWN0TGFiZWwgZnJvbSBcIi4vY29udGFjdExhYmVsXCI7XG4vLyBjc3NcbmltcG9ydCBcIi4vbmF2aWdhdGlvbi5jc3NcIjtcblxuY29uc3QgbmF2aWdhdGlvbiA9IHByb3BzID0+IHtcbiAgY29uc3QgeyB0aXRsZSA9IFwiXCIgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj57dGl0bGV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzXCI+XG4gICAgICAgIDxDb250YWN0TGFiZWxcbiAgICAgICAgICBpY29uPVwiZmFiIGZhLWdpdGh1YlwiXG4gICAgICAgICAgbGFiZWw9XCJqdGt3b25cIlxuICAgICAgICAgIGxpbms9XCJodHRwczovL2dpdGh1Yi5jb20vanRrd29uXCJcbiAgICAgICAgICB0aXRsZT1cIkdpdGh1YlwiXG4gICAgICAgICAgaWNvblN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMFwiXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPENvbnRhY3RMYWJlbFxuICAgICAgICAgIGljb249XCJmYWIgZmEtbGlua2VkaW5cIlxuICAgICAgICAgIGxhYmVsPVwianRrd29uXCJcbiAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2p0a3dvbi9cIlxuICAgICAgICAgIHRpdGxlPVwiTGlua2VkaW5cIlxuICAgICAgICAgIGljb25TdHlsZT17e1xuICAgICAgICAgICAgY29sb3I6IFwiIzAwNzdCNVwiLFxuICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMHB4IDJweCAjMDE1NzliIGluc2V0XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCJcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uO1xuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdmlnYXRpb24uY3NzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC5qc1wiO1xuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUmVhY3RTaW1wbGVUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+VEVTVDwvZGl2PjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdFNpbXBsZVRyZWU7XG4iXSwic291cmNlUm9vdCI6IiJ9