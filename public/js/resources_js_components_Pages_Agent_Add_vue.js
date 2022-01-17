"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Agent_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      form: {
        agent_name: '',
        agent_area: '',
        agent_phone: '',
        agent_address: '',
        agent_email: '',
        district_id: '',
        agent_is_approved: ''
      },
      errors: '',
      districts: []
    };
  },
  methods: {
    addAgent: function addAgent() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default().post('add-agent', this.form).then(function (response) {
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

    axios__WEBPACK_IMPORTED_MODULE_0___default().get('districts').then(function (response) {
      _this2.districts = response.data;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Pages/Agent/Add.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Add.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_2b16cc31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=2b16cc31& */ "./resources/js/components/Pages/Agent/Add.vue?vue&type=template&id=2b16cc31&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Agent/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_2b16cc31___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_2b16cc31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Agent/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Agent/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Agent/Add.vue?vue&type=template&id=2b16cc31&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Add.vue?vue&type=template&id=2b16cc31& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_2b16cc31___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_2b16cc31___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_2b16cc31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=2b16cc31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Add.vue?vue&type=template&id=2b16cc31&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Add.vue?vue&type=template&id=2b16cc31&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Add.vue?vue&type=template&id=2b16cc31& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              _vm._v("AgentEntry"),
            ]),
            _vm._v(" "),
            _c(
              "router-link",
              {
                staticClass: "btn bg-light btn-sm",
                attrs: { to: { name: "AgentList" } },
              },
              [_vm._v("Back To List")]
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
                  return _vm.addAgent.apply(null, arguments)
                },
              },
            },
            [
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Username" } }, [
                      _vm._v("Agent Name"),
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
                      attrs: { required: "", type: "text" },
                      domProps: { value: _vm.form.agent_name },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "agent_name", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.agent_name
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.agent_name[0])),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "agent_email" } }, [
                      _vm._v("Agent Email"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.agent_email,
                          expression: "form.agent_email",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", type: "agent_email" },
                      domProps: { value: _vm.form.agent_email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "agent_email", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.agent_email
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.agent_email[0])),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Peragent_address" } }, [
                      _vm._v("Phone No (Primary)"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.agent_phone,
                          expression: "form.agent_phone",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { required: "", type: "text" },
                      domProps: { value: _vm.form.agent_phone },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "agent_phone", $event.target.value)
                        },
                      },
                    }),
                    _vm._v(" "),
                    _vm.errors.agent_phone
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.agent_phone[0])),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "UserRole" } }, [
                      _vm._v("District"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.district_id,
                            expression: "form.district_id",
                          },
                        ],
                        staticClass: "form-control filter-select",
                        attrs: { id: "UserRole" },
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
                              "district_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select District --"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.districts, function (district) {
                          return _c(
                            "option",
                            {
                              key: district.id,
                              domProps: { value: district.id },
                            },
                            [_vm._v(_vm._s(district.district_name))]
                          )
                        }),
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.errors.district_id
                      ? _c("small", { staticClass: "form-text text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.district_id[0])),
                        ])
                      : _vm._e(),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-5" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Peragent_address" } }, [
                      _vm._v("Agent Area"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.agent_area,
                          expression: "form.agent_area",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.agent_area },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "agent_area", $event.target.value)
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-7" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "Peragent_address" } }, [
                      _vm._v("Office  Agent Address"),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.agent_address,
                          expression: "form.agent_address",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.agent_address },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "agent_address",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-4" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "UserStatus" } }, [
                      _vm._v("Is Approved"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_is_approved,
                            expression: "form.agent_is_approved",
                          },
                        ],
                        staticClass: "form-control filter-select",
                        attrs: { id: "UserStatus" },
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
                              "agent_is_approved",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select Status --"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "0" } }, [
                          _vm._v("Active"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "1" } }, [
                          _vm._v("In Active"),
                        ]),
                      ]
                    ),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _vm._m(0),
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