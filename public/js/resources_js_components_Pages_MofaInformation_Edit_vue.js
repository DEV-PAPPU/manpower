"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_MofaInformation_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        passenger_id: '',
        requisition_visainfo_id: '',
        discount: ''
      },
      passengers: [],
      visa_trades: [],
      errors: ''
    };
  },
  methods: {
    updateMofa: function updateMofa() {
      var _this = this;

      var id = this.$route.params.id;
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("update-mofaInformation/".concat(id), this.form).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: response.data.msg
        });
        _this.errors = '';
      })["catch"](function (e) {
        _this.errors = e.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("passengers").then(function (res) {
      _this2.passengers = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("visa-trades").then(function (res) {
      _this2.visa_trades = res.data;
    });
    var id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("edit-mofaInformation/".concat(id)).then(function (res) {
      _this2.form = res.data;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Pages/MofaInformation/Edit.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/Pages/MofaInformation/Edit.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_0c0e9ae0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=0c0e9ae0& */ "./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=template&id=0c0e9ae0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_0c0e9ae0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_0c0e9ae0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/MofaInformation/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=template&id=0c0e9ae0&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=template&id=0c0e9ae0& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0c0e9ae0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0c0e9ae0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_0c0e9ae0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=0c0e9ae0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=template&id=0c0e9ae0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=template&id=0c0e9ae0&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MofaInformation/Edit.vue?vue&type=template&id=0c0e9ae0& ***!
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
  return _c("div", [
    _c("div", {}, [
      _c("div", { staticClass: "card shadow mb-4" }, [
        _c(
          "div",
          {
            staticClass:
              "card-header py-3 d-flex flex-row align-items-center justify-content-between",
          },
          [
            _c("h6", { staticClass: "m-0 font-weight-bold text-white" }, [
              _vm._v("Mofa Edit"),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn btn-success btn-sm",
                attrs: { to: { name: "MofaInformationlist" } },
              },
              [_vm._v("Back To List\n                ")]
            ),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.updateMofa.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "UserRole" } }, [
                      _vm._v("Passenger"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.passenger_id,
                            expression: "form.passenger_id",
                          },
                        ],
                        staticClass: "form-control filter-select",
                        attrs: { required: "" },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "passenger_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select passenger --"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.passengers, function (item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [
                              _c("p", [
                                _vm._v(
                                  "PP: " +
                                    _vm._s(item.passenger_name) +
                                    " > " +
                                    _vm._s(item.agent_name) +
                                    " "
                                ),
                              ]),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.passenger_id
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.passenger_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "UserRole" } }, [
                      _vm._v("Visa & Trade"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.requisition_visainfo_id,
                            expression: "form.requisition_visainfo_id",
                          },
                        ],
                        staticClass: "form-control filter-select",
                        attrs: { required: "" },
                        on: {
                          change: function ($event) {
                            var $$selectedVal = Array.prototype.filter
                              .call($event.target.options, function (o) {
                                return o.selected
                              })
                              .map(function (o) {
                                var val = "_value" in o ? o._value : o.value
                                return val
                              })
                            _vm.$set(
                              _vm.form,
                              "requisition_visainfo_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select passenger --"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.visa_trades, function (item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [
                              _c("p", [
                                _vm._v(
                                  "visa: " +
                                    _vm._s(item.visa_no) +
                                    " > Trade: " +
                                    _vm._s(item.trade) +
                                    " > Salary: " +
                                    _vm._s(item.salary) +
                                    " \n                                            Price: " +
                                    _vm._s(item.price_reference) +
                                    "\n                                        "
                                ),
                              ]),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.passenger_id
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.passenger_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "email" } }, [
                      _vm._v("Discount"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.discount,
                          expression: "form.discount",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.form.discount },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "discount", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _vm._m(0),
              ]),
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
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-4", staticStyle: { clear: "both" } }, [
        _c(
          "button",
          { staticClass: "btn btn-success", attrs: { type: "submit" } },
          [_vm._v("Save Changes")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-danger", attrs: { type: "reset" } },
          [_vm._v("Cancel")]
        ),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);