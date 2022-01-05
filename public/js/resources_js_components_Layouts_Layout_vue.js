"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Layouts_Layout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Pages_Dashboard_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Pages/Dashboard/Dashboard.vue */ "./resources/js/components/Pages/Dashboard/Dashboard.vue");
/* harmony import */ var _Menus_SuperAdminMenus_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menus/SuperAdminMenus.vue */ "./resources/js/components/Layouts/Menus/SuperAdminMenus.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SuperAdminMenu: _Menus_SuperAdminMenus_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Dashboard: _Pages_Dashboard_Dashboard_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      text: 'hello',
      iSAdmin: true
    };
  },
  methods: {
    menu: function menu() {
      // this.iSAdmin = !this.iSAdmin
      var note = document.querySelector(".sidebar");
      note.classList.toggle('toggled');
    },
    logout: function logout() {
      var _this = this;

      var token = localStorage.getItem('token');
      axios__WEBPACK_IMPORTED_MODULE_0___default().get('logout', {
        headers: {
          "Authorization": "Bearer ".concat(token)
        }
      }).then(function (res) {
        _this.$store.commit('SET_AUTHENTICATED', false);

        _this.$store.commit('SET_USER', '');

        localStorage.removeItem("token");

        _this.$router.push({
          name: 'Login'
        });
      });
    }
  },
  mounted: function mounted() {
    console.log(currentRouteName);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Enter and leave animations can use different */\r\n/* durations and timing functions.              */\r\n/* .slide-fade-enter-active {\r\n  transition: all .3s ease;\r\n} */\n.slide-fade-leave-active[data-v-4759768a] {\r\n  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.slide-fade-enter[data-v-4759768a]\r\n/* .slide-fade-leave-active below version 2.1.8 */ {\r\n  transform: translateX(10px);\n}\n.slide-fade-leave-to[data-v-4759768a]\r\n/* .slide-fade-leave-active below version 2.1.8 */ {\r\n  transform: translateX(-10px);\r\n  opacity: 0;\r\n/* left__sidebar */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_4759768a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_4759768a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_4759768a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/Layouts/Layout.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Layouts/Layout.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layout_vue_vue_type_template_id_4759768a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=4759768a&scoped=true& */ "./resources/js/components/Layouts/Layout.vue?vue&type=template&id=4759768a&scoped=true&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/Layouts/Layout.vue?vue&type=script&lang=js&");
/* harmony import */ var _Layout_vue_vue_type_style_index_0_id_4759768a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css& */ "./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_4759768a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Layout_vue_vue_type_template_id_4759768a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4759768a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/Layout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/Menus/SuperAdminMenus.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Layouts/Menus/SuperAdminMenus.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SuperAdminMenus_vue_vue_type_template_id_528c0884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuperAdminMenus.vue?vue&type=template&id=528c0884& */ "./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=template&id=528c0884&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _SuperAdminMenus_vue_vue_type_template_id_528c0884___WEBPACK_IMPORTED_MODULE_0__.render,
  _SuperAdminMenus_vue_vue_type_template_id_528c0884___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/Menus/SuperAdminMenus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Dashboard/Dashboard.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Pages/Dashboard/Dashboard.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4e7572f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4e7572f3& */ "./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=template&id=4e7572f3&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Dashboard_vue_vue_type_template_id_4e7572f3___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dashboard_vue_vue_type_template_id_4e7572f3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Dashboard/Dashboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Layouts/Layout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Layouts/Layout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_style_index_0_id_4759768a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=style&index=0&id=4759768a&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Layouts/Layout.vue?vue&type=template&id=4759768a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Layout.vue?vue&type=template&id=4759768a&scoped=true& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_4759768a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_4759768a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_4759768a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Layout.vue?vue&type=template&id=4759768a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=template&id=4759768a&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=template&id=528c0884&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=template&id=528c0884& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminMenus_vue_vue_type_template_id_528c0884___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminMenus_vue_vue_type_template_id_528c0884___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminMenus_vue_vue_type_template_id_528c0884___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuperAdminMenus.vue?vue&type=template&id=528c0884& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=template&id=528c0884&");


/***/ }),

/***/ "./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=template&id=4e7572f3&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=template&id=4e7572f3& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4e7572f3___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4e7572f3___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4e7572f3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=template&id=4e7572f3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=template&id=4e7572f3&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=template&id=4759768a&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Layout.vue?vue&type=template&id=4759768a&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex", attrs: { id: "wrapper" } },
    [
      [
        _c(
          "transition",
          { attrs: { name: "slide-fade" } },
          [_vm.iSAdmin ? [_c("SuperAdminMenu")] : _vm._e()],
          2
        ),
      ],
      _vm._v(" "),
      _c("div", { attrs: { id: "content-wrapper" } }, [
        _c("div", { attrs: { id: "content" } }, [
          _c(
            "nav",
            {
              staticClass:
                "navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow",
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-link rounded-circle mr-3",
                  attrs: { id: "sidebarToggleTop" },
                  on: { click: _vm.menu },
                },
                [_c("i", { staticClass: "fa fa-bars" })]
              ),
              _vm._v(" "),
              _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "topbar-divider d-none d-sm-block" }),
                _vm._v(" "),
                _c("li", { staticClass: "nav-item dropdown no-arrow" }, [
                  _c(
                    "a",
                    {
                      staticClass: "nav-link dropdown-toggle",
                      attrs: {
                        href: "#",
                        id: "userDropdown",
                        role: "button",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "mr-2 d-none d-lg-inline text-gray-600 small",
                        },
                        [_vm._v(_vm._s(_vm.AuthUser.name))]
                      ),
                      _vm._v(" "),
                      _c("img", {
                        staticClass: "img-profile rounded-circle",
                        attrs: { src: "img/undraw_profile.svg" },
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "dropdown-menu dropdown-menu-right shadow animated--grow-in",
                      attrs: { "aria-labelledby": "userDropdown" },
                    },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" }),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "#" },
                          on: { click: _vm.logout },
                        },
                        [
                          _c("i", {
                            staticClass:
                              "fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400",
                          }),
                          _vm._v(
                            "\n                                Logout\n                            "
                          ),
                        ]
                      ),
                    ]
                  ),
                ]),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-fluid" },
            [
              _c(
                "div",
                {
                  staticClass:
                    "d-sm-flex align-items-center justify-content-between mb-4",
                },
                [
                  _c("h1", { staticClass: "h3 mb-0 text-gray-800" }, [
                    _vm._v(_vm._s(_vm.currentRouteName)),
                  ]),
                  _vm._v(" "),
                  _vm._m(3),
                ]
              ),
              _vm._v(" "),
              _vm.currentRouteName == "Dashboard"
                ? [_c("Dashboard")]
                : _vm._e(),
              _vm._v(" "),
              _c("router-view"),
            ],
            2
          ),
        ]),
      ]),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown no-arrow d-sm-none" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "searchDropdown",
            role: "button",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false",
          },
        },
        [_c("i", { staticClass: "fas fa-search fa-fw" })]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in",
          attrs: { "aria-labelledby": "searchDropdown" },
        },
        [
          _c(
            "form",
            { staticClass: "form-inline mr-auto w-100 navbar-search" },
            [
              _c("div", { staticClass: "input-group" }, [
                _c("input", {
                  staticClass: "form-control bg-light border-0 small",
                  attrs: {
                    type: "text",
                    placeholder: "Search for...",
                    "aria-label": "Search",
                    "aria-describedby": "basic-addon2",
                  },
                }),
                _vm._v(" "),
                _c("div", { staticClass: "input-group-append" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                    },
                    [_c("i", { staticClass: "fas fa-search fa-sm" })]
                  ),
                ]),
              ]),
            ]
          ),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-user fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v(
        "\n                                Profile\n                            "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
      _c("i", { staticClass: "fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" }),
      _vm._v(
        "\n                                Settings\n                            "
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm",
        attrs: { href: "#" },
      },
      [
        _c("i", { staticClass: "fas fa-download fa-sm text-white-50" }),
        _vm._v(" Generate Report"),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=template&id=528c0884&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=template&id=528c0884& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    {
      staticClass:
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion",
      attrs: { id: "accordionSidebar" },
    },
    [
      _c(
        "a",
        {
          staticClass:
            "sidebar-brand d-flex align-items-center justify-content-center",
          attrs: { href: "index.html" },
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "sidebar-brand-text mx-3" }, [
            _vm._v(_vm._s(_vm.AuthUser.name) + "."),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider my-0" }),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "nav-item active" },
        [
          _c(
            "router-link",
            { staticClass: "nav-link", attrs: { to: { name: "Dashboard" } } },
            [
              _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
              _vm._v(" "),
              _c("span", [_vm._v("Dashboard")]),
            ]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider" }),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-heading" }, [
        _vm._v("\n        Interface\n    "),
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider" }),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-heading" }, [
        _vm._v("\n        Addons\n    "),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapsePages",
              "aria-labelledby": "headingPages",
              "data-parent": "#accordionSidebar",
            },
          },
          [
            _c(
              "div",
              { staticClass: "bg-white py-2 collapse-inner rounded" },
              [
                _c("h6", { staticClass: "collapse-header" }, [
                  _vm._v("Login Screens:"),
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "AddPassenger" } },
                  },
                  [_vm._v("Add Passenger")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "Companies" } },
                  },
                  [_vm._v("Company List")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "collapse-item",
                    attrs: { href: "login.html" },
                  },
                  [_vm._v("Login")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "collapse-item",
                    attrs: { href: "register.html" },
                  },
                  [_vm._v("Register")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider" }),
      _vm._v(" "),
      _c("div", { staticClass: "sidebar-heading" }, [
        _vm._v("\n        All Settings\n    "),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "collapse",
            attrs: {
              id: "collapseTwo",
              "aria-labelledby": "headingTwo",
              "data-parent": "#accordionSidebar",
            },
          },
          [
            _c(
              "div",
              { staticClass: "bg-white py-2 collapse-inner rounded" },
              [
                _c("h6", { staticClass: "collapse-header" }, [
                  _vm._v("Custom Components:"),
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "UserManagement" } },
                  },
                  [_vm._v("User Management")]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "collapse-item",
                    attrs: { href: "cards.html" },
                  },
                  [_vm._v("Lookup Data")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _vm._m(4),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "sidebar-brand-icon rotate-n-15" }, [
      _c("i", { staticClass: "fas fa-laugh-wink" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c(
        "a",
        {
          staticClass: "nav-link collapsed",
          attrs: {
            href: "#",
            "data-toggle": "collapse",
            "data-target": "#collapseUtilities",
            "aria-expanded": "true",
            "aria-controls": "collapseUtilities",
          },
        },
        [
          _c("i", { staticClass: "fas fa-fw fa-wrench" }),
          _vm._v(" "),
          _c("span", [_vm._v("Utilities")]),
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse",
          attrs: {
            id: "collapseUtilities",
            "aria-labelledby": "headingUtilities",
            "data-parent": "#accordionSidebar",
          },
        },
        [
          _c("div", { staticClass: "bg-white py-2 collapse-inner rounded" }, [
            _c("h6", { staticClass: "collapse-header" }, [
              _vm._v("Custom Utilities:"),
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "collapse-item",
                attrs: { href: "utilities-color.html" },
              },
              [_vm._v("Colors")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "collapse-item",
                attrs: { href: "utilities-border.html" },
              },
              [_vm._v("Borders")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "collapse-item",
                attrs: { href: "utilities-animation.html" },
              },
              [_vm._v("Animations")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "collapse-item",
                attrs: { href: "utilities-other.html" },
              },
              [_vm._v("Other")]
            ),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#collapsePages",
          "aria-expanded": "true",
          "aria-controls": "collapsePages",
        },
      },
      [
        _c("i", { staticClass: "fas fa-fw fa-folder" }),
        _vm._v(" "),
        _c("span", [_vm._v("Management")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          href: "#",
          "data-toggle": "collapse",
          "data-target": "#collapseTwo",
          "aria-expanded": "true",
          "aria-controls": "collapseTwo",
        },
      },
      [
        _c("i", { staticClass: "fas fa-fw fa-cog" }),
        _vm._v(" "),
        _c("span", [_vm._v("Seeting")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link", attrs: { href: "tables.html" } }, [
        _c("i", { staticClass: "fas fa-fw fa-table" }),
        _vm._v(" "),
        _c("span", [_vm._v("Tables")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=template&id=4e7572f3&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=template&id=4e7572f3& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-primary shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-xs font-weight-bold text-primary text-uppercase mb-1",
                        },
                        [
                          _vm._v(
                            "\n                                Earnings (Monthly)"
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "h5 mb-0 font-weight-bold text-gray-800",
                        },
                        [_vm._v("$40,000")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-calendar fa-2x text-gray-300",
                      }),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-success shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-xs font-weight-bold text-success text-uppercase mb-1",
                        },
                        [
                          _vm._v(
                            "\n                                Earnings (Annual)"
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "h5 mb-0 font-weight-bold text-gray-800",
                        },
                        [_vm._v("$215,000")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-dollar-sign fa-2x text-gray-300",
                      }),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-info shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-xs font-weight-bold text-info text-uppercase mb-1",
                        },
                        [_vm._v("Tasks\n                            ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "row no-gutters align-items-center" },
                        [
                          _c("div", { staticClass: "col-auto" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "h5 mb-0 mr-3 font-weight-bold text-gray-800",
                              },
                              [_vm._v("50%")]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col" }, [
                            _c(
                              "div",
                              { staticClass: "progress progress-sm mr-2" },
                              [
                                _c("div", {
                                  staticClass: "progress-bar bg-info",
                                  staticStyle: { width: "50%" },
                                  attrs: {
                                    role: "progressbar",
                                    "aria-valuenow": "50",
                                    "aria-valuemin": "0",
                                    "aria-valuemax": "100",
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass:
                          "fas fa-clipboard-list fa-2x text-gray-300",
                      }),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
          _c(
            "div",
            { staticClass: "card border-left-warning shadow h-100 py-2" },
            [
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row no-gutters align-items-center" },
                  [
                    _c("div", { staticClass: "col mr-2" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-xs font-weight-bold text-warning text-uppercase mb-1",
                        },
                        [
                          _vm._v(
                            "\n                                Pending Requests"
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "h5 mb-0 font-weight-bold text-gray-800",
                        },
                        [_vm._v("18")]
                      ),
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-auto" }, [
                      _c("i", {
                        staticClass: "fas fa-comments fa-2x text-gray-300",
                      }),
                    ]),
                  ]
                ),
              ]),
            ]
          ),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-8 col-lg-7" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-header bg-primary py-3 d-flex flex-row align-items-center justify-content-between",
              },
              [
                _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                  _vm._v("Earnings Overview"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown no-arrow" }, [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-toggle",
                      attrs: {
                        href: "#",
                        role: "button",
                        id: "dropdownMenuLink",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c("i", {
                        staticClass:
                          "fas fa-ellipsis-v fa-sm fa-fw text-gray-400",
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "dropdown-menu dropdown-menu-right shadow animated--fade-in",
                      attrs: { "aria-labelledby": "dropdownMenuLink" },
                    },
                    [
                      _c("div", { staticClass: "dropdown-header" }, [
                        _vm._v("Dropdown Header:"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Another action")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" }),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Something else here")]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "chart-area" }, [
                _c("canvas", { attrs: { id: "myAreaChart" } }),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-lg-5" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-header py-3 d-flex flex-row align-items-center justify-content-between",
              },
              [
                _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                  _vm._v("Revenue Sources"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown no-arrow" }, [
                  _c(
                    "a",
                    {
                      staticClass: "dropdown-toggle",
                      attrs: {
                        href: "#",
                        role: "button",
                        id: "dropdownMenuLink",
                        "data-toggle": "dropdown",
                        "aria-haspopup": "true",
                        "aria-expanded": "false",
                      },
                    },
                    [
                      _c("i", {
                        staticClass:
                          "fas fa-ellipsis-v fa-sm fa-fw text-gray-400",
                      }),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "dropdown-menu dropdown-menu-right shadow animated--fade-in",
                      attrs: { "aria-labelledby": "dropdownMenuLink" },
                    },
                    [
                      _c("div", { staticClass: "dropdown-header" }, [
                        _vm._v("Dropdown Header:"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Action")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Another action")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "dropdown-divider" }),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "dropdown-item", attrs: { href: "#" } },
                        [_vm._v("Something else here")]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "chart-pie pt-4 pb-2" }, [
                _c("canvas", { attrs: { id: "myPieChart" } }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4 text-center small" }, [
                _c("span", { staticClass: "mr-2" }, [
                  _c("i", { staticClass: "fas fa-circle text-primary" }),
                  _vm._v(" Direct\n                        "),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-2" }, [
                  _c("i", { staticClass: "fas fa-circle text-success" }),
                  _vm._v(" Social\n                        "),
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "mr-2" }, [
                  _c("i", { staticClass: "fas fa-circle text-info" }),
                  _vm._v(" Referral\n                        "),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6 mb-4" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c("div", { staticClass: "card-header py-3" }, [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Projects"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("Server Migration "),
                _c("span", { staticClass: "float-right" }, [_vm._v("20%")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar bg-danger",
                  staticStyle: { width: "20%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "20",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("Sales Tracking "),
                _c("span", { staticClass: "float-right" }, [_vm._v("40%")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar bg-warning",
                  staticStyle: { width: "40%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "40",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("Customer Database "),
                _c("span", { staticClass: "float-right" }, [_vm._v("60%")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar",
                  staticStyle: { width: "60%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "60",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("Payout Details "),
                _c("span", { staticClass: "float-right" }, [_vm._v("80%")]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress mb-4" }, [
                _c("div", {
                  staticClass: "progress-bar bg-info",
                  staticStyle: { width: "80%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "80",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  },
                }),
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "small font-weight-bold" }, [
                _vm._v("Account Setup "),
                _c("span", { staticClass: "float-right" }, [
                  _vm._v("Complete!"),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "progress" }, [
                _c("div", {
                  staticClass: "progress-bar bg-success",
                  staticStyle: { width: "100%" },
                  attrs: {
                    role: "progressbar",
                    "aria-valuenow": "100",
                    "aria-valuemin": "0",
                    "aria-valuemax": "100",
                  },
                }),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-primary text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Primary\n                            "
                  ),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#4e73df"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-success text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Success\n                            "
                  ),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#1cc88a"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-info text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Info\n                            "
                  ),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#36b9cc"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-warning text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Warning\n                            "
                  ),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#f6c23e"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-danger text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Danger\n                            "
                  ),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#e74a3b"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c(
                "div",
                { staticClass: "card bg-secondary text-white shadow" },
                [
                  _c("div", { staticClass: "card-body" }, [
                    _vm._v(
                      "\n                            Secondary\n                            "
                    ),
                    _c("div", { staticClass: "text-white-50 small" }, [
                      _vm._v("#858796"),
                    ]),
                  ]),
                ]
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-light text-black shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Light\n                            "
                  ),
                  _c("div", { staticClass: "text-black-50 small" }, [
                    _vm._v("#f8f9fc"),
                  ]),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-lg-6 mb-4" }, [
              _c("div", { staticClass: "card bg-dark text-white shadow" }, [
                _c("div", { staticClass: "card-body" }, [
                  _vm._v(
                    "\n                            Dark\n                            "
                  ),
                  _c("div", { staticClass: "text-white-50 small" }, [
                    _vm._v("#5a5c69"),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 mb-4" }, [
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c("div", { staticClass: "card-header py-3" }, [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Illustrations"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "text-center" }, [
                _c("img", {
                  staticClass: "img-fluid px-3 px-sm-4 mt-3 mb-4",
                  staticStyle: { width: "25rem" },
                  attrs: { src: "img/undraw_posting_photo.svg", alt: "..." },
                }),
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Add some quality, svg illustrations to your project courtesy of "
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      target: "_blank",
                      rel: "nofollow",
                      href: "https://undraw.co/",
                    },
                  },
                  [_vm._v("unDraw")]
                ),
                _vm._v(
                  ", a\n                        constantly updated collection of beautiful svg images that you can use\n                        completely free and without attribution!"
                ),
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  attrs: {
                    target: "_blank",
                    rel: "nofollow",
                    href: "https://undraw.co/",
                  },
                },
                [
                  _vm._v(
                    "Browse Illustrations on\n                        unDraw →"
                  ),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card shadow mb-4" }, [
            _c("div", { staticClass: "card-header py-3" }, [
              _c("h6", { staticClass: "m-0 font-weight-bold text-primary" }, [
                _vm._v("Development Approach"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("p", [
                _vm._v(
                  "SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce\n                        CSS bloat and poor page performance. Custom CSS classes are used to create\n                        custom components and custom utility classes."
                ),
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _vm._v(
                  "Before working with this theme, you should become familiar with the\n                        Bootstrap framework, especially the utility classes."
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);