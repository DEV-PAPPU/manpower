"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Passenger_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        passenger_photo: '',
        company_id: '',
        sector_id: '',
        trade_id: '',
        passenger_note: '',
        passenger_discount: ''
      },
      agents: '',
      companies: '',
      districts: [],
      sectors: [],
      trades: [],
      image: false
    };
  },
  methods: {
    updatePassenger: function updatePassenger() {
      var _this = this;

      var id = this.$route.params.id;
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
      data.append('note', this.form.passenger_note);
      data.append('district_id', this.form.district_id.id);
      data.append('agent_id', this.form.agent_id.id);
      data.append('discount', this.form.passenger_discount);
      data.append('sector_id', this.form.sector_id.id);
      data.append('trade_id', this.form.trade_id);
      data.append('company_id', this.form.company_id.id);

      if (this.image) {
        data.append('passenger_photo', document.getElementById('file').files[0]);
      }

      axios__WEBPACK_IMPORTED_MODULE_1___default().post("update-passenger/".concat(id), data).then(function (response) {
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
        alert('Please check all fields');
      });
    },
    changeImg: function changeImg(e) {
      this.image = true;
      var image = document.getElementById('file'); // this.form.passenger_photo = image.files[0];

      var form_img = image.files[0];
      var output = document.getElementById('uploadPreview');
      output.src = URL.createObjectURL(form_img);
    },
    changeCompany: function changeCompany() {
      var _this2 = this;

      var id = this.form.company_id.id;
      axios__WEBPACK_IMPORTED_MODULE_1___default().get("search-sector-trade-by-company/".concat(id)).then(function (res) {
        _this2.trades = res.data.trade;
        _this2.sectors = res.data.sectors;

        if (res.data.msg) {
          Toast.fire({
            icon: 'error',
            title: res.data.msg
          });
        }
      });
    }
  },
  watch: {
    'form.company_id.id': {
      handler: function handler(newVal, oldVal) {
        this.changeCompany();
      },
      deep: true
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default().get("agents").then(function (res) {
      _this3.agents = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("districts").then(function (res) {
      _this3.districts = res.data;
    });
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("companies").then(function (res) {
      _this3.companies = res.data.companies;
    });
    var id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_1___default().get("edit-passenger/".concat(id)).then(function (res) {
      var passenger = res.data.passenger;
      _this3.form.passenger_name = passenger.passenger_name;
      _this3.form.passenger_father_name = passenger.passenger_father_name;
      _this3.form.passenger_phone = passenger.passenger_phone;
      _this3.form.passport_no = passenger.passport_no;
      _this3.form.passport_source = passenger.passport_source;
      _this3.form.passenger_gurdian_no = passenger.passenger_gurdian_no;
      _this3.form.passenger_date_of_birth = passenger.passenger_date_of_birth;
      _this3.form.passport_expire_date = passenger.passport_expire_date;
      _this3.form.old_passport_no = passenger.old_passport_no;
      _this3.form.passenger_gender = passenger.passenger_gender;
      _this3.form.passenger_note = passenger.passenger_note;
      _this3.form.passenger_discount = passenger.passenger_discount;
      _this3.form.district_id = res.data.district;
      _this3.form.company_id = res.data.company;
      _this3.form.trade_id = res.data.trade.id;
      _this3.form.sector_id = res.data.sector;
      _this3.form.agent_id = res.data.agent;

      _this3.changeCompany();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.passengerimage[data-v-426f4835]{\r\n    width: 230px;\r\n    height: 170px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_426f4835_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_426f4835_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_426f4835_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Edit.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Edit.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_426f4835_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=426f4835&scoped=true& */ "./resources/js/components/Pages/Passenger/Edit.vue?vue&type=template&id=426f4835&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Passenger/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_426f4835_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css& */ "./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_426f4835_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_426f4835_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "426f4835",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Passenger/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_426f4835_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=style&index=0&id=426f4835&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/Passenger/Edit.vue?vue&type=template&id=426f4835&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Passenger/Edit.vue?vue&type=template&id=426f4835&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_426f4835_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_426f4835_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_426f4835_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=426f4835&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=template&id=426f4835&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=template&id=426f4835&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Passenger/Edit.vue?vue&type=template&id=426f4835&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
            _vm._v("Passenger Edit"),
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
                  return _vm.updatePassenger.apply(null, arguments)
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
                      attrs: { type: "text" },
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
                      attrs: { type: "text" },
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
                      attrs: { type: "number" },
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
                _c("div", { staticClass: "col-md-3" }, [
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
                      attrs: { type: "date" },
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
                _c("div", { staticClass: "col-md-3" }, [
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
                      attrs: { type: "text" },
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
                _c("div", { staticClass: "col-md-3" }, [
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
                      attrs: { type: "date" },
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
                _c("div", { staticClass: "col-md-3" }, [
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
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-3" }, [
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
                _c("div", { staticClass: "col-md-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "PerDistrictId" } }, [
                        _vm._v("District "),
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "district_name",
                          placeholder: "Select",
                          options: _vm.districts,
                        },
                        model: {
                          value: _vm.form.district_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "district_id", $$v)
                          },
                          expression: "form.district_id",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
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
                  ? _c("div", { staticClass: "col-md-2" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "AgentId" } }, [
                            _vm._v("Agent Name"),
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "agent_name",
                              placeholder: "Select",
                              options: _vm.agents,
                            },
                            model: {
                              value: _vm.form.agent_id,
                              callback: function ($$v) {
                                _vm.$set(_vm.form, "agent_id", $$v)
                              },
                              expression: "form.agent_id",
                            },
                          }),
                        ],
                        1
                      ),
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
                      attrs: { type: "file", id: "file" },
                      on: { change: _vm.changeImg },
                    }),
                  ]),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-9" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c("label", { attrs: { for: "sector" } }, [_vm._v("Note")]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.passenger_note,
                          expression: "form.passenger_note",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { name: "", id: "", cols: "30", rows: "7" },
                      domProps: { value: _vm.form.passenger_note },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "passenger_note",
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
                _c("h5", { staticClass: "my-3" }, [_vm._v("Mofa Info")]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-3" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "UserRole" } }, [
                        _vm._v("Company"),
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "company_name",
                          placeholder: "-- Select company --",
                          options: _vm.companies,
                        },
                        model: {
                          value: _vm.form.company_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "company_id", $$v)
                          },
                          expression: "form.company_id",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-2" }, [
                  _c(
                    "div",
                    { staticClass: "form-group" },
                    [
                      _c("label", { attrs: { for: "sector" } }, [
                        _vm._v("Sector"),
                      ]),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          label: "sector_name",
                          placeholder: "Select",
                          options: _vm.sectors,
                        },
                        model: {
                          value: _vm.form.sector_id,
                          callback: function ($$v) {
                            _vm.$set(_vm.form, "sector_id", $$v)
                          },
                          expression: "form.sector_id",
                        },
                      }),
                    ],
                    1
                  ),
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
                            value: _vm.form.trade_id,
                            expression: "form.trade_id",
                          },
                        ],
                        staticClass: "form-control filter-select",
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
                              "trade_id",
                              $event.target.multiple
                                ? $$selectedVal
                                : $$selectedVal[0]
                            )
                          },
                        },
                      },
                      [
                        _c("option", { attrs: { value: "" } }, [
                          _vm._v("-- Select trade --"),
                        ]),
                        _vm._v(" "),
                        _vm._l(_vm.trades, function (item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [
                              _c("p", [
                                _vm._v(
                                  "Visa No: " +
                                    _vm._s(item.trade_visa_no) +
                                    " - Trade: " +
                                    _vm._s(item.trade) +
                                    "\n                                                - Ref: " +
                                    _vm._s(item.price_reference) +
                                    "\n                                            "
                                ),
                              ]),
                            ]
                          )
                        }),
                      ],
                      2
                    ),
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
                          value: _vm.form.passenger_discount,
                          expression: "form.passenger_discount",
                        },
                      ],
                      staticClass: "form-control",
                      attrs: { type: "number" },
                      domProps: { value: _vm.form.passenger_discount },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.form,
                            "passenger_discount",
                            $event.target.value
                          )
                        },
                      },
                    }),
                  ]),
                ]),
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
    return _c("div", { staticClass: "col-md-3" }, [
      _c("label", { attrs: { for: "sector" } }, [_vm._v("Image Preview")]),
      _vm._v(" "),
      _c("div", { staticClass: "Preview" }, [
        _c("img", {
          staticClass: "passengerimage",
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