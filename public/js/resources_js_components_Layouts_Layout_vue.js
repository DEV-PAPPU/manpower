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
/* harmony import */ var _Menus_AdminMenu_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menus/AdminMenu.vue */ "./resources/js/components/Layouts/Menus/AdminMenu.vue");
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
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    SuperAdminMenu: _Menus_SuperAdminMenus_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AdminMenu: _Menus_AdminMenu_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
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
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  methods: {
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
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  data: function data() {
    return {
      passenger: '',
      user: '',
      company: '',
      passport: ''
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get('dashboard-status').then(function (res) {
      _this.passenger = res.data.passenger;
      _this.user = res.data.user;
      _this.company = res.data.company;
      _this.passport = res.data.passport;
    });
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
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* Enter and leave animations can use different */\r\n/* durations and timing functions.              */\r\n/* .slide-fade-enter-active {\r\n  transition: all .3s ease;\r\n} */\n.slide-fade-leave-active[data-v-4759768a] {\r\n  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);\n}\n.slide-fade-enter[data-v-4759768a]\r\n/* .slide-fade-leave-active below version 2.1.8 */ {\r\n  transform: translateX(10px);\n}\n.slide-fade-leave-to[data-v-4759768a]\r\n/* .slide-fade-leave-active below version 2.1.8 */ {\r\n  transform: translateX(-10px);\r\n  opacity: 0;\r\n/* left__sidebar */\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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

/***/ "./resources/js/components/Layouts/Menus/AdminMenu.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Layouts/Menus/AdminMenu.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AdminMenu_vue_vue_type_template_id_4ac16512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminMenu.vue?vue&type=template&id=4ac16512& */ "./resources/js/components/Layouts/Menus/AdminMenu.vue?vue&type=template&id=4ac16512&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _AdminMenu_vue_vue_type_template_id_4ac16512___WEBPACK_IMPORTED_MODULE_0__.render,
  _AdminMenu_vue_vue_type_template_id_4ac16512___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Layouts/Menus/AdminMenu.vue"
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
/* harmony import */ var _SuperAdminMenus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuperAdminMenus.vue?vue&type=script&lang=js& */ "./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SuperAdminMenus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
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

/***/ "./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminMenus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SuperAdminMenus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/SuperAdminMenus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SuperAdminMenus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Dashboard/Dashboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/Layouts/Menus/AdminMenu.vue?vue&type=template&id=4ac16512&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Layouts/Menus/AdminMenu.vue?vue&type=template&id=4ac16512& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMenu_vue_vue_type_template_id_4ac16512___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMenu_vue_vue_type_template_id_4ac16512___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminMenu_vue_vue_type_template_id_4ac16512___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AdminMenu.vue?vue&type=template&id=4ac16512& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/AdminMenu.vue?vue&type=template&id=4ac16512&");


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
          [
            _vm.AuthUser.role == "superadmin"
              ? [_c("SuperAdminMenu")]
              : _vm._e(),
            _vm._v(" "),
            _vm.AuthUser.role == "admin" ? [_c("AdminMenu")] : _vm._e(),
          ],
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
              _c("span", { staticClass: "mt-4" }),
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
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/AdminMenu.vue?vue&type=template&id=4ac16512&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Layouts/Menus/AdminMenu.vue?vue&type=template&id=4ac16512& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                    attrs: { to: { name: "PassengerList" } },
                  },
                  [_vm._v("Passenger List")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "AgentList" } },
                  },
                  [_vm._v("Agent")]
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
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "sidebar-divider" }),
      _vm._v(" "),
      _vm._m(3),
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
          attrs: { href: "#" },
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
      _c("li", { staticClass: "nav-item" }, [
        _vm._m(1),
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
                  _vm._v("Data Management :"),
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
                    attrs: { to: { name: "PassengerList" } },
                  },
                  [_vm._v("Passenger List")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "AgentList" } },
                  },
                  [_vm._v("Agent")]
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
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "addRequisition" } },
                  },
                  [_vm._v("Add Requisition")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "MofaInformationlist" } },
                  },
                  [_vm._v("Mofa-VISA")]
                ),
              ],
              1
            ),
          ]
        ),
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
              id: "InfocollapsePages",
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
                  _vm._v("Info Management:"),
                ]),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "PassportList" } },
                  },
                  [_vm._v("Passenger Status")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "InterviewEntry" } },
                  },
                  [_vm._v("Interview Entry")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "STMLIST" } },
                  },
                  [_vm._v("STM LIST")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "MPLIST" } },
                  },
                  [_vm._v("MP RCV")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "TKTLists" } },
                  },
                  [_vm._v("TKT Lists")]
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
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "District" } },
                  },
                  [_vm._v("District")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "Country" } },
                  },
                  [_vm._v("Country Lists")]
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "collapse-item",
                    attrs: { to: { name: "Sector" } },
                  },
                  [_vm._v("Sector Lists")]
                ),
              ],
              1
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "a",
          {
            staticClass: "nav-link",
            attrs: { href: "#" },
            on: { click: _vm.logout },
          },
          [
            _c("i", { staticClass: "fas fa-sign-out-alt" }),
            _vm._v(" "),
            _c("span", [_vm._v("Logout")]),
          ]
        ),
      ]),
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
          "data-target": "#InfocollapsePages",
          "aria-expanded": "true",
          "aria-controls": "InfocollapsePages",
        },
      },
      [
        _c("i", { staticClass: "fas fa-fw fa-folder" }),
        _vm._v(" "),
        _c("span", [_vm._v("Info Management")]),
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
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-primary shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row no-gutters align-items-center" }, [
                _c("div", { staticClass: "col mr-2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-xs font-weight-bold text-primary text-uppercase mb-1",
                    },
                    [
                      _vm._v(
                        "\n                                Total Passengers"
                      ),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "h5 mb-0 font-weight-bold text-gray-800" },
                    [_vm._v(_vm._s(_vm.passenger))]
                  ),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
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
              _c("div", { staticClass: "row no-gutters align-items-center" }, [
                _c("div", { staticClass: "col mr-2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-xs font-weight-bold text-success text-uppercase mb-1",
                    },
                    [_vm._v("\n                                Total Users")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "h5 mb-0 font-weight-bold text-gray-800" },
                    [_vm._v(_vm._s(_vm.user))]
                  ),
                ]),
                _vm._v(" "),
                _vm._m(1),
              ]),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
        _c("div", { staticClass: "card border-left-info shadow h-100 py-2" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "row no-gutters align-items-center" }, [
              _c("div", { staticClass: "col mr-2" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "text-xs font-weight-bold text-info text-uppercase mb-1",
                  },
                  [
                    _vm._v(
                      "Total Passport Management\n                            "
                    ),
                  ]
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
                        [_vm._v(_vm._s(_vm.passport))]
                      ),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _vm._m(2),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-xl-3 col-md-6 mb-4" }, [
        _c(
          "div",
          { staticClass: "card border-left-warning shadow h-100 py-2" },
          [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row no-gutters align-items-center" }, [
                _c("div", { staticClass: "col mr-2" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-xs font-weight-bold text-warning text-uppercase mb-1",
                    },
                    [_vm._v("\n                                Total Company")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "h5 mb-0 font-weight-bold text-gray-800" },
                    [_vm._v(_vm._s(_vm.company))]
                  ),
                ]),
                _vm._v(" "),
                _vm._m(3),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
    _vm._v(" "),
    _vm._m(4),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-calendar fa-2x text-gray-300" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-user-plus fa-2x text-gray-300" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-clipboard-list fa-2x text-gray-300" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-auto" }, [
      _c("i", { staticClass: "fas fa-comments fa-2x text-gray-300" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
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
              _c("span", { staticClass: "float-right" }, [_vm._v("Complete!")]),
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
            _c("div", { staticClass: "card bg-secondary text-white shadow" }, [
              _c("div", { staticClass: "card-body" }, [
                _vm._v(
                  "\n                            Secondary\n                            "
                ),
                _c("div", { staticClass: "text-white-50 small" }, [
                  _vm._v("#858796"),
                ]),
              ]),
            ]),
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
    ])
  },
]
render._withStripped = true



/***/ })

}]);