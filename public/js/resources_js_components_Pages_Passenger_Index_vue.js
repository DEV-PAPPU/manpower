"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Passenger_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery/dist/jquery.min.js */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery_dist_jquery_min_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var datatables_net_dt_js_dataTables_dataTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! datatables.net-dt/js/dataTables.dataTables */ "./node_modules/datatables.net-dt/js/dataTables.dataTables.js");
/* harmony import */ var datatables_net_dt_js_dataTables_dataTables__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(datatables_net_dt_js_dataTables_dataTables__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var datatables_net_dt_css_jquery_dataTables_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! datatables.net-dt/css/jquery.dataTables.min.css */ "./node_modules/datatables.net-dt/css/jquery.dataTables.min.css");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';
 //Datatable Modules





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {},
      passengers: [],
      passenger: ''
    };
  },
  methods: {
    loadagents: function loadagents() {
      var _this = this;

      //API Call
      axios__WEBPACK_IMPORTED_MODULE_4___default().get("passengers").then(function (res) {
        _this.passengers = res.data;
        setTimeout(function () {
          jquery__WEBPACK_IMPORTED_MODULE_3___default()(".dbtable").DataTable({
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
            pageLength: 10,
            "scrollX": true
          });
        });
      });
    },
    deletePassenger: function deletePassenger(item) {
      var _this2 = this;

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios__WEBPACK_IMPORTED_MODULE_4___default().post("delete-passenger/".concat(item.id)).then(function (res) {
            if (res.data.msg) {
              Toast.fire({
                icon: 'success',
                title: res.data.msg
              });

              var index = _this2.passengers.indexOf(item);

              _this2.passengers.splice(index, 1);

              axios__WEBPACK_IMPORTED_MODULE_4___default().get("passengers").then(function (res) {
                _this2.passengers = res.data;
              });
            }

            if (res.data.error_msg) {
              Toast.fire({
                icon: 'error',
                title: res.data.error_msg
              });
            }
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.loadagents();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ntable.dataTable thead th[data-v-4d317837], table.dataTable thead td[data-v-4d317837] {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n    color: rgb(43, 43, 43);\n}\n.table td[data-v-4d317837], .table th[data-v-4d317837] {\r\n    padding: 0.75rem;\r\n    vertical-align: top;\r\n    border-top: 1px solid #e3e6f0;\r\n    font-size: 14;\n}\n.edit_icon[data-v-4d317837], .delete_icon[data-v-4d317837]{\r\n    font-size: 18px;\r\n    padding: 0px 3px;\n}\n.edit_icon[data-v-4d317837]{\r\n    color: rgb(37, 102, 223);\n}\n.delete_icon[data-v-4d317837]{\r\n    color: rgb(238, 12, 12);\n}\n@media only screen and (max-width: 1000px){\n.database__table[data-v-4d317837]{\r\n    overflow-x: scroll;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4d317837_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4d317837_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4d317837_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Index.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_4d317837_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=4d317837&scoped=true& */ "./resources/js/components/Pages/Passenger/Index.vue?vue&type=template&id=4d317837&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Passenger/Index.vue?vue&type=script&lang=js&");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_4d317837_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css& */ "./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_4d317837_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_4d317837_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4d317837",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Passenger/Index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_4d317837_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=style&index=0&id=4d317837&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Index.vue?vue&type=template&id=4d317837&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Index.vue?vue&type=template&id=4d317837&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4d317837_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4d317837_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_4d317837_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=4d317837&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=template&id=4d317837&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=template&id=4d317837&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Index.vue?vue&type=template&id=4d317837&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "card shadow mb-4" }, [
      _c(
        "div",
        {
          staticClass:
            "card-header py-3 d-flex flex-row align-items-center justify-content-between",
        },
        [
          _c("h6", { staticClass: "m-0 font-weight-bold text-white" }, [
            _vm._v("Passenger List"),
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn bg-light btn-sm",
              attrs: { to: { name: "AddPassenger" } },
            },
            [_vm._v("Add Passenger")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "database__table" }, [
          _c(
            "table",
            { staticClass: "table table-hover table-bordered dbtable" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.passengers, function (item) {
                  return _c("tr", { key: item.id }, [
                    _c("td", [_vm._v(_vm._s(item.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passenger_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passenger_date_of_birth))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passport_no))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.old_passport_no))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passport_expire_date))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passenger_phone))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passenger_father_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passenger_gurdian_no))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.district_name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.passport_source))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(item.agent_name))]),
                    _vm._v(" "),
                    _c(
                      "td",
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "PassengerEdit",
                                params: { id: item.id },
                              },
                            },
                          },
                          [_c("i", { staticClass: "far edit_icon fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            on: {
                              click: function ($event) {
                                return _vm.deletePassenger(item)
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "fas delete_icon fa-trash-alt",
                            }),
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "PassengerFile",
                                params: { id: item.id },
                              },
                            },
                          },
                          [
                            _c("i", {
                              staticClass: "edit_icon fas fa-align-justify",
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ])
                }),
                0
              ),
            ]
          ),
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
    return _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModalCenter",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "exampleModalCenterTitle",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered",
            attrs: { role: "document" },
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalCenterTitle" },
                  },
                  [_vm._v("Modal title")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "close",
                    attrs: {
                      type: "button",
                      "data-dismiss": "modal",
                      "aria-label": "Close",
                    },
                  },
                  [
                    _c("span", { attrs: { "aria-hidden": "true" } }, [
                      _vm._v("×"),
                    ]),
                  ]
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", { staticClass: "database__table" }, [
                  _c(
                    "table",
                    { staticClass: "table table-hover table-bordered" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Visa No")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Trade")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Qty")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Available Qty")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Salary")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Price")]),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("tbody", [
                        _c("tr", [
                          _c("td", [_vm._v("data")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("data")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("data")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("data")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("data")]),
                          _vm._v(" "),
                          _c("td", [_vm._v("data")]),
                        ]),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button", "data-dismiss": "modal" },
                  },
                  [_vm._v("Close")]
                ),
              ]),
            ]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticStyle: { width: "60px" } }, [_vm._v("S/L")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [
          _vm._v("Passenger Name"),
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("DOB")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Passport No")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [
          _vm._v("Old Passport No"),
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [
          _vm._v("Passport Exp D"),
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Mobile")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Father Name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Gurdian's No")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("District")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "90px" } }, [
          _vm._v("Passport Source"),
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Agent Name")]),
        _vm._v(" "),
        _c("th", { staticStyle: { width: "100px" } }, [_vm._v("Actions")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);