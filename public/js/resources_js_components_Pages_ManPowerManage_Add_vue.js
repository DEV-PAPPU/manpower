"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_ManPowerManage_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      searchFrom: {
        passport_no: ''
      },
      date: '',
      form: {
        passenger_id: '',
        passenger_name: '',
        passport_no: '',
        trade: '',
        company_name: '',
        agent_name: '',
        passport_source: ''
      },
      passports: []
    };
  },
  methods: {
    searchPassport: function searchPassport() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('manpower-search-passport', this.searchFrom).then(function (res) {
        var passenger = res.data.data;

        if (passenger) {
          _this.form = passenger;
        }

        if (res.data.msg) {
          Toast.fire({
            icon: 'error',
            title: res.data.msg
          });
        }
      });
    },
    addPassport: function addPassport() {
      var _this2 = this;

      var items = this.passports.filter(function (a) {
        return a.passport_no == _this2.form.passport_no;
      });

      if (!this.form.passport_no) {
        Toast.fire({
          icon: 'error',
          title: 'Please add passport'
        });
      } else if (items.length) {
        Toast.fire({
          icon: 'error',
          title: 'Already added this passport'
        });
      } else {
        //  let passport = {
        //     passenger_name: this.form.passenger_name,
        //     passport_no: this.form.passport_no,
        //     trade: this.form.trade,
        //     company_name: this.form.company_name,
        //     agent_name: this.form.agent_name,
        //     passport_source: this.form.passport_source,
        //  };
        this.passports.push(this.form);
        this.form = '';
      }
    },
    removePassport: function removePassport(item) {
      var index = this.passports.indexOf(item);
      this.passports.splice(index, 1);
    },
    submitPassport: function submitPassport() {
      if (!this.date) {
        Toast.fire({
          icon: 'error',
          title: 'Please Select Date'
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post('add-manpower-passport', {
          date: this.date,
          passport: this.passports
        }).then(function (res) {
          Toast.fire({
            icon: 'success',
            title: 'MP Added'
          });
        })["catch"](function (e) {
          Toast.fire({
            icon: 'error',
            title: 'Something is wrong!'
          });
        });
      }
    }
  },
  mounted: function mounted() {
    var today = new Date().toLocaleDateString();
    this.form.date = today;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.search_btn[data-v-9dda0f90]{\r\n    margin-top: 30px;\n}\ntable.dataTable thead th[data-v-9dda0f90], table.dataTable thead td[data-v-9dda0f90] {\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    color: rgb(43, 43, 43);\n}\n.table td[data-v-9dda0f90], .table th[data-v-9dda0f90] {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #e3e6f0;\r\n    font-size: 14;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_9dda0f90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_9dda0f90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_9dda0f90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pages/ManPowerManage/Add.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Pages/ManPowerManage/Add.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_9dda0f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=9dda0f90&scoped=true& */ "./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=template&id=9dda0f90&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _Add_vue_vue_type_style_index_0_id_9dda0f90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css& */ "./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_9dda0f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_9dda0f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "9dda0f90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/ManPowerManage/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_9dda0f90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=style&index=0&id=9dda0f90&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=template&id=9dda0f90&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=template&id=9dda0f90&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_9dda0f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_9dda0f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_9dda0f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=9dda0f90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=template&id=9dda0f90&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=template&id=9dda0f90&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/ManPowerManage/Add.vue?vue&type=template&id=9dda0f90&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {}, [
    _c("div", { staticClass: "card shadow mb-4" }, [
      _c(
        "div",
        {
          staticClass:
            "card-header py-3 d-flex flex-row align-items-center justify-content-between",
        },
        [
          _c("h6", { staticClass: "m-0 font-weight-bold text-white" }, [
            _vm._v("Man Power Enter"),
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn bg-light btn-sm",
              attrs: { to: { name: "MPLIST" } },
            },
            [_vm._v("Back To List")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "form" }, [
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "PassengerName" } }, [
                  _vm._v("Date"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.date,
                      expression: "date",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "date" },
                  domProps: { value: _vm.date },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.date = $event.target.value
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3" }, [
              _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "PassengerName" } }, [
                  _vm._v("Search Passoort"),
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.searchFrom.passport_no,
                      expression: "searchFrom.passport_no",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.searchFrom.passport_no },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.searchFrom,
                        "passport_no",
                        $event.target.value
                      )
                    },
                  },
                }),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "search_btn col-md-4" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-success px-3",
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.searchPassport.apply(null, arguments)
                    },
                  },
                },
                [
                  _vm._v("Search"),
                  _c("i", { staticClass: "mx-2 fas fa-plus-circle" }),
                ]
              ),
            ]),
          ]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group row" }, [
              _c("div", { staticClass: "col-md-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "DOB" } }, [
                    _vm._v("Passport No."),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.passport_no,
                        expression: "form.passport_no",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.passport_no },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "passport_no", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.passenger_name,
                        expression: "form.passenger_name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.passenger_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.form,
                          "passenger_name",
                          $event.target.value
                        )
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-2" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "trade" } }, [_vm._v("Trade")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.trade,
                        expression: "form.trade",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.trade },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "trade", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3" }, [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "comapnyname" } }, [
                    _vm._v("Company Name"),
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.company_name,
                        expression: "form.company_name",
                      },
                    ],
                    staticClass: "form-control",
                    attrs: { readonly: "", type: "text" },
                    domProps: { value: _vm.form.company_name },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "company_name", $event.target.value)
                      },
                    },
                  }),
                ]),
              ]),
              _vm._v(" "),
              _vm.form.passport_source == "self" ||
              _vm.form.passport_source == "proccess"
                ? _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "agent" } }, [
                        _vm._v("Passenger Source "),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.passport_source,
                            expression: "form.passport_source",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { readonly: "", type: "text" },
                        domProps: { value: _vm.form.passport_source },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "passport_source",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ])
                : _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "agent" } }, [
                        _vm._v("Agent "),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_name,
                            expression: "form.agent_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { readonly: "", type: "text" },
                        domProps: { value: _vm.form.agent_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
              _vm._v(" "),
              _c("div", { staticClass: "search_btn col-md-1" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn px-3 py-2 btn-success",
                    on: {
                      click: function ($event) {
                        $event.preventDefault()
                        return _vm.addPassport.apply(null, arguments)
                      },
                    },
                  },
                  [_c("i", { staticClass: "ml-1 fas fa-plus-circle" })]
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _vm.passports
                ? _c("div", { staticClass: "database__table" }, [
                    _c(
                      "table",
                      {
                        staticClass: "table table-hover table-bordered",
                        attrs: { id: "example" },
                      },
                      [
                        _vm._m(0),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.passports, function (passport) {
                            return _c("tr", { key: passport.passport_no }, [
                              _c("td", [_vm._v(_vm._s(passport.passport_no))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm._v(_vm._s(passport.passenger_name)),
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(passport.trade))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(passport.company_name))]),
                              _vm._v(" "),
                              passport.passport_source == "self" ||
                              passport.passport_source == "process"
                                ? _c("td", [
                                    _vm._v(_vm._s(passport.passport_source)),
                                  ])
                                : _c("td", [
                                    _vm._v(_vm._s(passport.agent_name)),
                                  ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-success btn-sm",
                                    on: {
                                      click: function ($event) {
                                        return _vm.removePassport(passport)
                                      },
                                    },
                                  },
                                  [_vm._v("Remove")]
                                ),
                              ]),
                            ])
                          }),
                          0
                        ),
                      ]
                    ),
                  ])
                : _vm._e(),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "div",
                { staticClass: "col-md-4", staticStyle: { clear: "both" } },
                [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-success",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.submitPassport.apply(null, arguments)
                        },
                      },
                    },
                    [_vm._v("Save Changes")]
                  ),
                ]
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Passport No.")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Trade")]),
        _vm._v(" "),
        _c("th", [_vm._v("Company Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Agent")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);