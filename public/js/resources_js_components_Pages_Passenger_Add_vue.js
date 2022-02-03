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
        district_id: '',
        agent_id: '',
        passenger_photo: ''
      },
      agents: [],
      districts: []
    };
  },
  methods: {
    addPassenger: function addPassenger() {
      var _this = this;

      var data = new FormData();
      data.append('passenger_name', this.form.passenger_name);
      data.append('passenger_father_name', this.form.passenger_father_name);
      data.append('passenger_phone', this.form.passenger_phone);
      data.append('passport_no', this.form.passport_no);
      data.append('passport_source', this.form.passport_source);
      data.append('passenger_gurdian_no', this.form.passenger_gurdian_no);
      data.append('passenger_date_of_birth', this.form.passenger_date_of_birth);
      data.append('passport_expire_date', this.form.passport_expire_date);
      data.append('old_passport_no', this.form.old_passport_no);
      data.append('passenger_gender', this.form.passenger_gender);
      data.append('district_id', this.form.district_id);
      data.append('agent_id', this.form.agent_id);
      data.append('passenger_photo', document.getElementById('file').files[0]);
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('add-passenger', data).then(function (response) {
        if (response.data.error_msg) {
          Toast.fire({
            icon: 'error',
            title: response.data.error_msg
          });
        }

        if (response.data.msg) {
          Toast.fire({
            icon: 'success',
            title: response.data.msg
          });

          _this.$router.push({
            name: 'PassengerList'
          });
        }
      })["catch"](function (e) {
        alert('Someting is Wrong');
      });
    },
    changeImg: function changeImg(e) {
      var _this2 = this;

      var image = document.getElementById('file'); // this.form.passenger_photo = image.files[0];

      var form_img = image.files[0];
      var output = document.getElementById('uploadPreview');
      output.src = URL.createObjectURL(form_img);
      var file = e.target.files[0];
      var reader = new FileReader();

      if (file['size'] < 2111775) {
        reader.onloadend = function (file) {
          //console.log('RESULT', reader.result)
          _this2.form.passenger_photo = reader.result;
        };

        reader.readAsDataURL(file);
      } else {
        alert('File size can not be bigger than 2 MB');
      }
    } // changeImg(e){
    //     var image = document.getElementById('file');
    //     this.form.passenger_photo = image.files[0];
    //     let form_img  = image.files[0];
    //     var output = document.getElementById('uploadPreview');
    //     output.src = URL.createObjectURL(form_img);
    // }

  },
  mounted: function mounted() {
    var _this3 = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get("agents").then(function (res) {
      _this3.agents = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("districts").then(function (res) {
      _this3.districts = res.data;
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
            _vm._v("Passenger Entry"),
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
                      attrs: { required: "", type: "text" },
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
                      attrs: { required: "", type: "text" },
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
                      attrs: { required: "", type: "number" },
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
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "PerAddress" } }, [
                      _vm._v("Gurdian's No "),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.passenger_gurdian_no,
                          expression: "form.passenger_gurdian_no",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.form.passenger_gurdian_no },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "passenger_gurdian_no",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-md-2" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "DOB" } }, [
                      _vm._v("Date of Birth "),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.passenger_date_of_birth,
                          expression: "form.passenger_date_of_birth",
                        },
                      ],
                      staticClass: "form-control dtpicker",
                      attrs: { required: "", type: "date" },
                      domProps: { value: _vm.form.passenger_date_of_birth },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "passenger_date_of_birth",
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
                    _c("label", { attrs: { for: "PassportNo" } }, [
                      _vm._v("Passport No "),
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
                      attrs: { required: "", type: "text" },
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
                    _c("label", { attrs: { for: "PassportExpireDate" } }, [
                      _vm._v("Passport Expire Date "),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.passport_expire_date,
                          expression: "form.passport_expire_date",
                        },
                      ],
                      staticClass: "form-control dtpicker",
                      attrs: { required: "", type: "date" },
                      domProps: { value: _vm.form.passport_expire_date },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "passport_expire_date",
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
                    _c("label", { attrs: { for: "PassportNo" } }, [
                      _vm._v("Old Passport No "),
                    ]),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.old_passport_no,
                          expression: "form.old_passport_no",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "text" },
                      domProps: { value: _vm.form.old_passport_no },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "old_passport_no",
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
                    _c("label", { attrs: { for: "Gender" } }, [
                      _vm._v("Gender "),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.passenger_gender,
                            expression: "form.passenger_gender",
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
                              "passenger_gender",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select --"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "male" } }, [
                          _vm._v("Male"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "female" } }, [
                          _vm._v("Female"),
                        ]),
                      ]
                    ),
                  ]),
                ]),
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
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.district_id,
                            expression: "form.district_id",
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
                          _vm._v("-- Select --"),
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
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group row" }, [
                _c("div", { staticClass: "col-md-3" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "PassportSource" } }, [
                      _vm._v("Passport Source"),
                    ]),
                    _vm._v(" "),
                    _c(
                      "select",
                      {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.passport_source,
                            expression: "form.passport_source",
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
                              "passport_source",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select --"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "self" } }, [
                          _vm._v("Self"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "process" } }, [
                          _vm._v("Process"),
                        ]),
                        _vm._v(" "),
                        _c("option", { attrs: { value: "agent" } }, [
                          _vm._v("Agent"),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                _vm._v(" "),
                _vm.form.passport_source == "agent"
                  ? _c("div", { staticClass: "col-md-3" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "AgentId" } }, [
                          _vm._v("Agent Name"),
                        ]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.agent_id,
                                expression: "form.agent_id",
                              },
                            ],
                            staticClass: "form-control",
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
                                  "agent_id",
                                  $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                )
                              },
                            },
                          },
                          [
                            _c("option", { attrs: { value: "" } }, [
                              _vm._v("-- Select --"),
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "null" } }, [
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
                    ])
                  : _vm._e(),
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
                _vm._m(0),
              ]),
              _vm._v(" "),
              _vm._m(1),
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