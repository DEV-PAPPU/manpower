"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Passenger_Add_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Add.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Add.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        passenger_name: '',
        passenger_father_name: '',
        passenger_phone: '',
        passenger_gurdian_no: '',
        passenger_date_of_birth: '',
        passport_no: '',
        passport_source: '',
        passport_expire_date: '',
        old_passport_no: '',
        passenger_gender: '',
        passenger_area: '',
        is_approved: '',
        district_id: '',
        agent_id: '',
        passenger_photo: ''
      },
      agents: [],
      districts: []
    };
  },
  methods: {
    addPassenger: function addPassenger() {},
    changeImg: function changeImg() {
      var image = document.getElementById('file');
      var form_img = this.form.passenger_photo = image.files[0];
      var output = document.getElementById('uploadPreview');
      output.src = URL.createObjectURL(form_img);
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("agents").then(function (res) {
      _this.agents = res.data;
    });
    axios.get("districts").then(function (res) {
      _this.districts = res.data;
    });
  }
});

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Add.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Add.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Add_vue_vue_type_template_id_1da257c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=1da257c6& */ "./resources/js/components/Pages/Passenger/Add.vue?vue&type=template&id=1da257c6&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Passenger/Add.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_1da257c6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Add_vue_vue_type_template_id_1da257c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Passenger/Add.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Add.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Add.vue?vue&type=template&id=1da257c6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Add.vue?vue&type=template&id=1da257c6& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_1da257c6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_1da257c6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_1da257c6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Add.vue?vue&type=template&id=1da257c6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Add.vue?vue&type=template&id=1da257c6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Add.vue?vue&type=template&id=1da257c6&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Add.vue?vue&type=template&id=1da257c6& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Passenger Enter"),
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "btn bg-light btn-sm",
              attrs: { to: { name: "PassengerList" } },
            },
            [_vm._v("Back To List")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "form" }, [
          _c(
            "form",
            {
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.addPassenger.apply(null, arguments)
                },
              },
            },
            [
              _c("form", [
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "PassengerName" } }, [
                        _vm._v("Passenger Name "),
                      ]),
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
                        attrs: {
                          required: "",
                          id: "PassengerName",
                          name: "PassengerName",
                          placeholder: "Please enter PassengerName ",
                          tabindex: "",
                          type: "text",
                          value: "",
                        },
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
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "FatherName" } }, [
                        _vm._v("Father's Name "),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.passenger_father_name,
                            expression: "form.passenger_father_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          required: "",
                          id: "FatherName",
                          name: "FatherName",
                          placeholder: "Please enter FatherName ",
                          tabindex: "",
                          type: "text",
                          value: "",
                        },
                        domProps: { value: _vm.form.passenger_father_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "passenger_father_name",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "PhoneNo1" } }, [
                        _vm._v("Phone No (Primary)"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.passenger_phone,
                            expression: "form.passenger_phone",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: {
                          required: "",
                          id: "PhoneNo1",
                          name: "PhoneNo1",
                          placeholder: "Please enter PhoneNo1 ",
                          tabindex: "",
                          type: "text",
                          value: "",
                        },
                        domProps: { value: _vm.form.passenger_phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "passenger_phone",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(0),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _vm._m(2),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "PerDistrictId" } }, [
                        _vm._v("District "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control filter-select",
                          attrs: { required: "" },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("=== Select ==="),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.districts, function (district) {
                            return _c(
                              "option",
                              {
                                key: district.id,
                                domProps: { value: district.id },
                              },
                              [_vm._v(_vm._s(district.name))]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _vm._m(6),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "AgentId" } }, [
                        _vm._v("Agent Name"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          staticClass: "form-control",
                          attrs: { required: "" },
                        },
                        [
                          _c("option", { attrs: { value: "" } }, [
                            _vm._v("=== Select ==="),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "none" } }, [
                            _vm._v("None"),
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.agents, function (item) {
                            return _c(
                              "option",
                              { key: item.id, domProps: { value: item.id } },
                              [_vm._v(_vm._s(item.agent_name))]
                            )
                          }),
                        ],
                        2
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(7),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c(
                        "label",
                        { attrs: { id: "PhotoPathLabel", for: "PhotoPath" } },
                        [_vm._v("Photo")]
                      ),
                      _c("br"),
                      _vm._v(" "),
                      _c("input", {
                        staticStyle: { width: "103px" },
                        attrs: { required: "", type: "file", id: "file" },
                        on: { change: _vm.changeImg },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _vm._m(8),
                ]),
                _vm._v(" "),
                _vm._m(9),
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
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "PerAddress" } }, [
          _vm._v("Gurdian's No "),
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            required: "",
            id: "EmrgncyPhoneNo",
            name: "EmrgncyPhoneNo",
            placeholder: "Please enter Gurdian's No ",
            type: "text",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "DOB" } }, [_vm._v("Date of Birth ")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control dtpicker",
          attrs: {
            id: "DOB",
            name: "DOB",
            placeholder: "Please enter DOB ",
            tabindex: "",
            type: "date",
            value: "",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "PassportNo" } }, [_vm._v("Passport No ")]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            required: "",
            id: "PassportNo",
            name: "PassportNo",
            placeholder: "Please enter PassportNo ",
            tabindex: "",
            type: "text",
            value: "",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "PassportExpireDate" } }, [
          _vm._v("Passport Expire Date "),
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control dtpicker",
          attrs: {
            id: "PassportExpireDate",
            name: "PassportExpireDate",
            placeholder: "Please enter passport expire date",
            type: "text",
            value: "",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "PassportNo" } }, [
          _vm._v("Old Passport No "),
        ]),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: {
            required: "",
            id: "OldPassportNo",
            name: "OldPassportNo",
            placeholder: "Please enter OldPassportNo",
            type: "text",
            value: "",
          },
        }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "Gender" } }, [_vm._v("Gender ")]),
        _vm._v(" "),
        _c(
          "select",
          {
            staticClass: "form-control filter-select",
            attrs: { id: "Gender", required: "" },
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("=== Select ===")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "1" } }, [_vm._v("Male")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Female")]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("label", { attrs: { for: "PassportSource" } }, [
          _vm._v("Passport Source"),
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            staticClass: "form-control filter-select",
            attrs: {
              required: "",
              id: "PassportSource",
              name: "PassportSource",
              tabindex: "",
            },
          },
          [
            _c("option", { attrs: { value: "" } }, [_vm._v("=== Select ===")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "1" } }, [_vm._v("Self")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("Process")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("Agent")]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "skin skin-square square-skin" }, [
        _c("label", [_vm._v("Is Approved")]),
        _vm._v(" "),
        _c("select", { staticClass: "form-control filter-select" }, [
          _c("option", { attrs: { value: "" } }, [_vm._v("=== Select ===")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "0" } }, [_vm._v("Approved")]),
          _vm._v(" "),
          _c("option", { attrs: { value: "1" } }, [_vm._v("Pending")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2" }, [
      _c("div", { staticClass: "Preview" }, [
        _c("img", {
          staticClass: "image",
          attrs: { src: "", id: "uploadPreview", alt: "" },
        }),
      ]),
    ])
  },
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