"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Pages_Agent_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var _assets_droppable_image_Drop_multiple_images_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/droppable_image/Drop_multiple_images.vue */ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    DropMultiImages: _assets_droppable_image_Drop_multiple_images_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      form: {
        agent_name: '',
        agent_address_area: '',
        agent_address_office: '',
        agent_email: '',
        district_id: '',
        agent_status: '',
        agent_phone: '',
        agent_imo_number: '',
        agent_wp_number: '',
        agent_ref_1_name: '',
        agent_ref_1_phone: '',
        agent_ref_1_imo_number: '',
        agent_ref_1_wp_number: '',
        agent_ref_2_name: '',
        agent_ref_2_phone: '',
        agent_ref_2_imo_number: '',
        agent_ref_2_wp_number: '',
        agent_ref_3_name: '',
        agent_ref_3_phone: '',
        agent_ref_3_imo_number: '',
        agent_ref_3_wp_number: '',
        images: []
      },
      errors: '',
      districts: [],
      image: false,
      images: []
    };
  },
  methods: {
    UpdateAgent: function UpdateAgent() {
      var _this = this;

      var id = this.$route.params.id;
      var data = new FormData();
      data.append('agent_name', this.form.agent_name);
      data.append('agent_address_area', this.form.agent_address_area);
      data.append('agent_address_office', this.form.agent_address_office);
      data.append('agent_email', this.form.agent_email);
      data.append('district_id', this.form.district_id.id);
      data.append('agent_status', this.form.agent_status);
      data.append('agent_phone', this.form.agent_phone);
      data.append('agent_imo_number', this.form.agent_imo_number);
      data.append('agent_wp_number', this.form.agent_wp_number);
      data.append('agent_ref_1_name', this.form.agent_ref_1_name);
      data.append('agent_ref_1_phone', this.form.agent_ref_2_phone);
      data.append('agent_ref_1_imo_number', this.form.agent_ref_1_imo_number);
      data.append('agent_ref_1_wp_number', this.form.agent_ref_1_wp_number);
      data.append('agent_ref_2_name', this.form.agent_ref_2_name);
      data.append('agent_ref_2_phone', this.form.agent_ref_2_phone);
      data.append('agent_ref_2_imo_number', this.form.agent_ref_2_imo_number);
      data.append('agent_ref_2_wp_number', this.form.agent_ref_2_wp_number);
      data.append('agent_ref_3_name', this.form.agent_ref_3_name);
      data.append('agent_ref_3_phone', this.form.agent_ref_3_phone);
      data.append('agent_ref_3_imo_number', this.form.agent_ref_3_imo_number);
      data.append('agent_ref_3_wp_number', this.form.agent_ref_3_wp_number);

      if (this.image) {
        data.append('image', document.getElementById('file').files[0]);
      }

      if (this.form.images) {
        for (var i = 0; i < this.form.images.length; i++) {
          var file = this.form.images[i];
          data.append('files[' + i + ']', file || '');
        }
      }

      var config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post("update-agent/".concat(id), data, config).then(function (response) {
        if (response.data.msg) {
          Toast.fire({
            icon: 'success',
            title: response.data.msg
          });

          _this.$router.push({
            name: 'AgentList'
          });
        }

        _this.errors = '';
      })["catch"](function (e) {
        _this.errors = e.response.data.errors;
      });
    },
    new_images: function new_images(event) {
      this.form.images = event;
    },
    img: function img(event) {
      this.image = true;
    },
    resetbtn: function resetbtn() {
      this.image = false;
    },
    deleteImage: function deleteImage(item) {
      var _this2 = this;

      if (window.confirm("Do you really want to delete?")) {
        axios__WEBPACK_IMPORTED_MODULE_0___default().post("delete-agent-image/".concat(item.agent_id)).then(function (res) {
          if (res.data.msg) {
            Toast.fire({
              icon: 'success',
              title: res.data.msg
            });

            var index = _this2.images.indexOf(item);

            _this2.images.splice(index, 1);
          } else {
            alert('Something is wrong reload page and try again');
          }
        });
      }
    },
    changeImg: function changeImg(e) {
      var image = document.getElementById('file');
      var form_img = image.files[0];
      var output = document.getElementById('uploadPreview');
      output.src = URL.createObjectURL(form_img);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    var id = this.$route.params.id;
    axios__WEBPACK_IMPORTED_MODULE_0___default().get("edit-agent/".concat(id)).then(function (res) {
      _this3.form = res.data.agent;
      _this3.form.district_id = res.data.district;
      _this3.images = res.data.images;
    });
    axios__WEBPACK_IMPORTED_MODULE_0___default().get('districts').then(function (response) {
      _this3.districts = response.data;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filelist: [],
      files: [],
      isEditingImage: false
    };
  },
  methods: {
    addFile: function addFile(e) {
      var _this = this;

      var droppedFiles = e.dataTransfer.files;
      if (!droppedFiles) return;
      e.currentTarget.classList.add('bg-green-300');

      _toConsumableArray(droppedFiles).forEach(function (f) {
        _this.files.push(f);
      });
    },
    removeFile: function removeFile(file) {
      this.files = this.files.filter(function (f) {
        return f != file;
      });
      this.$emit('new_images', this.filelist);
    },
    onChange: function onChange() {
      this.filelist = _toConsumableArray(this.$refs.file.files); // console.log(this.filelist);

      this.$emit('new_images', this.filelist);
    },
    remove: function remove(i) {
      this.filelist.splice(i, 1);
    },
    dragover: function dragover(event) {
      event.preventDefault(); // Add some visual fluff to show the user can drop its files

      if (!event.currentTarget.classList.contains('bg-green-300')) {
        event.currentTarget.classList.remove('bg-gray-100');
        event.currentTarget.classList.add('bg-green-300');
      }
    },
    dragleave: function dragleave(event) {
      // Clean up
      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    },
    drop: function drop(event) {
      event.preventDefault();
      this.$refs.file.files = event.dataTransfer.files;
      this.onChange(); // Trigger the onChange event manually
      // Clean up

      event.currentTarget.classList.add('bg-gray-100');
      event.currentTarget.classList.remove('bg-green-300');
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.agent_images[data-v-38ed3dac]{\r\n    width: 100px;\r\n    height: 70px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    border-radius: 10px;\r\n    border: solid rgb(44, 44, 180) 2px;\n}\n.agentimg[data-v-38ed3dac]{\r\n    position: relative;\n}\n.del-icon[data-v-38ed3dac]{\r\n    color: red;\r\n    cursor: pointer;\n}\n.agentImage[data-v-38ed3dac]{\r\n    width: 250px;\r\n    height: 165px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.imgdelete[data-v-b5359cc0] {\n    position: absolute;\n    top: -7px !important;\n    left: -4px !important;\n    background: red;\n    color: white;\n    border-radius: 70px !important;\n    width: 20px !important;\n}\n.image_drop[data-v-b5359cc0]{\n    border-radius: 8px;\n    border: dotted rgb(97, 207, 83) 2px;\n    padding: 40px 20px;\n}\n.cursor_pointer[data-v-b5359cc0]{\n    cursor: pointer;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_38ed3dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_38ed3dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_38ed3dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_style_index_0_id_b5359cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_style_index_0_id_b5359cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_style_index_0_id_b5359cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Pages/Agent/Edit.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Edit.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_38ed3dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=38ed3dac&scoped=true& */ "./resources/js/components/Pages/Agent/Edit.vue?vue&type=template&id=38ed3dac&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/Agent/Edit.vue?vue&type=script&lang=js&");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_38ed3dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css& */ "./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_38ed3dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Edit_vue_vue_type_template_id_38ed3dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "38ed3dac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/Agent/Edit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_multiple_images.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Drop_multiple_images_vue_vue_type_template_id_b5359cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true& */ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true&");
/* harmony import */ var _Drop_multiple_images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drop_multiple_images.vue?vue&type=script&lang=js& */ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=script&lang=js&");
/* harmony import */ var _Drop_multiple_images_vue_vue_type_style_index_0_id_b5359cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css& */ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Drop_multiple_images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Drop_multiple_images_vue_vue_type_template_id_b5359cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Drop_multiple_images_vue_vue_type_template_id_b5359cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b5359cc0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/assets/droppable_image/Drop_multiple_images.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/Agent/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drop_multiple_images.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_38ed3dac_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=style&index=0&id=38ed3dac&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_style_index_0_id_b5359cc0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=style&index=0&id=b5359cc0&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Pages/Agent/Edit.vue?vue&type=template&id=38ed3dac&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Pages/Agent/Edit.vue?vue&type=template&id=38ed3dac&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_38ed3dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_38ed3dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_38ed3dac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Edit.vue?vue&type=template&id=38ed3dac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=template&id=38ed3dac&scoped=true&");


/***/ }),

/***/ "./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_template_id_b5359cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_template_id_b5359cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drop_multiple_images_vue_vue_type_template_id_b5359cc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=template&id=38ed3dac&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/Agent/Edit.vue?vue&type=template&id=38ed3dac&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
              _vm._v("Agent Entry"),
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
              attrs: { enctype: "multipart/form-data" },
              on: {
                submit: function ($event) {
                  $event.preventDefault()
                  return _vm.UpdateAgent.apply(null, arguments)
                },
              },
            },
            [
              _c("fieldset", [
                _c("legend", [_vm._v("Agent Information")]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("div", { staticClass: "col-md-4" }, [
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
                        attrs: { type: "text" },
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
                      _vm._v(" "),
                      _vm.errors.agent_name
                        ? _c(
                            "small",
                            { staticClass: "form-text text-danger" },
                            [_vm._v(_vm._s(_vm.errors.agent_name[0]))]
                          )
                        : _vm._e(),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
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
                        attrs: { type: "agent_email" },
                        domProps: { value: _vm.form.agent_email },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_email",
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
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_phone",
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
                  _c("div", { staticClass: "col-md-4" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Whatsapp Number"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_wp_number,
                            expression: "form.agent_wp_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_wp_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_wp_number",
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
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Imo Number"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_imo_number,
                            expression: "form.agent_imo_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_imo_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_imo_number",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-4" }, [
                    _c(
                      "div",
                      { staticClass: "form-group" },
                      [
                        _c("label", { attrs: { for: "UserRole" } }, [
                          _vm._v("District"),
                        ]),
                        _vm._v(" "),
                        _c("v-select", {
                          attrs: {
                            label: "district_name",
                            placeholder: "Select District",
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
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Agent Address (Area)"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_address_area,
                            expression: "form.agent_address_area",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.agent_address_area },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_address_area",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Agent Address (Office)"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_address_office,
                            expression: "form.agent_address_office",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.agent_address_office },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_address_office",
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
                      _c("label", { attrs: { for: "UserStatus" } }, [
                        _vm._v("Current Status"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.agent_status,
                              expression: "form.agent_status",
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
                                "agent_status",
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
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Active"),
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v("In-Active"),
                          ]),
                        ]
                      ),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("h5", { staticClass: "mb-3" }, [
                    _vm._v("Reference information"),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-3" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "Username" } }, [
                        _vm._v("Name"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_1_name,
                            expression: "form.agent_ref_1_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.agent_ref_1_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_1_name",
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
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Phone"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_1_phone,
                            expression: "form.agent_ref_1_phone",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_1_phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_1_phone",
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
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Whatsapp Number"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_1_wp_number,
                            expression: "form.agent_ref_1_wp_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_1_wp_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_1_wp_number",
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
                      _c("label", { attrs: { for: "Peragent_address" } }, [
                        _vm._v("Imo Number"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_1_imo_number,
                            expression: "form.agent_ref_1_imo_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_1_imo_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_1_imo_number",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_2_name,
                            expression: "form.agent_ref_2_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.agent_ref_2_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_2_name",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_2_phone,
                            expression: "form.agent_ref_2_phone",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_2_phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_2_phone",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_2_wp_number,
                            expression: "form.agent_ref_2_wp_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_2_wp_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_2_wp_number",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_2_imo_number,
                            expression: "form.agent_ref_2_imo_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_2_imo_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_2_imo_number",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_3_name,
                            expression: "form.agent_ref_3_name",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.form.agent_ref_3_name },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_3_name",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_3_phone,
                            expression: "form.agent_ref_3_phone",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_3_phone },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_3_phone",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_3_wp_number,
                            expression: "form.agent_ref_3_wp_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_3_wp_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_3_wp_number",
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
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.agent_ref_3_imo_number,
                            expression: "form.agent_ref_3_imo_number",
                          },
                        ],
                        staticClass: "form-control",
                        attrs: { type: "number" },
                        domProps: { value: _vm.form.agent_ref_3_imo_number },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.form,
                              "agent_ref_3_imo_number",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ]),
                  ]),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c("dic", { staticClass: "col-md-3" }, [
                      _c("h5", { staticClass: "mt-3" }, [
                        _vm._v("Agent Profile image"),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        attrs: { type: "file", id: "file" },
                        on: { change: _vm.changeImg },
                      }),
                    ]),
                    _vm._v(" "),
                    _c("dic", { staticClass: "col-md-4" }, [
                      _c("h5", { staticClass: "mt-3" }, [
                        _vm._v("Image Preview"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "my-2 Preview" }, [
                        _c("img", {
                          staticClass: "agentImage",
                          attrs: { src: "", id: "uploadPreview", alt: "" },
                        }),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "dic",
                      { staticClass: "col-md-5" },
                      [
                        _c("h5", { staticClass: "my-3" }, [
                          _vm._v("Agent images"),
                        ]),
                        _vm._v(" "),
                        _c("DropMultiImages", {
                          on: {
                            new_images: function ($event) {
                              return _vm.new_images($event)
                            },
                          },
                        }),
                        _vm._v(" "),
                        _vm.images
                          ? _c("dic", { staticClass: "col-md-4" }, [
                              _c(
                                "div",
                                { staticClass: "d-flex flex-wrap" },
                                _vm._l(_vm.images, function (image) {
                                  return _c(
                                    "div",
                                    { key: image.id, staticClass: "agentimg" },
                                    [
                                      _c("div", { staticClass: "m-2" }, [
                                        _c("i", {
                                          staticClass: "del-icon fas fa-times",
                                          on: {
                                            click: function ($event) {
                                              return _vm.deleteImage(image)
                                            },
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c("img", {
                                          staticClass: "agent_images",
                                          attrs: {
                                            src: image.image,
                                            alt: "",
                                            srcset: "",
                                          },
                                        }),
                                      ]),
                                    ]
                                  )
                                }),
                                0
                              ),
                            ])
                          : _vm._e(),
                      ],
                      1
                    ),
                  ],
                  1
                ),
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
    return _c("div", { staticClass: "mt-8 form-group row" }, [
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



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/assets/droppable_image/Drop_multiple_images.vue?vue&type=template&id=b5359cc0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex items-center justify-center  text-center mt-2" },
    [
      _c(
        "div",
        {
          staticClass: "p-6 bg-gray-100 image_drop  ",
          on: {
            dragover: _vm.dragover,
            dragleave: _vm.dragleave,
            drop: _vm.drop,
          },
        },
        [
          _c("input", {
            ref: "file",
            staticClass: "w-px h-px opacity-0 overflow-hidden absolute",
            attrs: {
              type: "file",
              name: "fields[assetsFieldHandle][]",
              id: "assetsFieldHandle",
              accept: ".pdf,.jpg,.jpeg,.png",
              multiple: "",
            },
            on: { change: _vm.onChange },
          }),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm.filelist.length
            ? _c(
                "ul",
                { staticClass: "mt-4" },
                _vm._l(_vm.filelist, function (file) {
                  return _c(
                    "li",
                    { key: file.name, staticClass: "text-sm p-1" },
                    [
                      _vm._v("\n\n                " + _vm._s(file.name)),
                      _c(
                        "span",
                        {
                          staticClass: "ml-2",
                          attrs: { type: "button", title: "Remove file" },
                          on: {
                            click: function ($event) {
                              _vm.remove(_vm.filelist.indexOf(file))
                            },
                          },
                        },
                        [_vm._v("remove")]
                      ),
                    ]
                  )
                }),
                0
              )
            : _vm._e(),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "label",
      {
        staticClass: "mb-2 block cursor_pointer",
        attrs: { for: "assetsFieldHandle" },
      },
      [
        _c("p", { staticClass: "text-center" }, [
          _vm._v("\n                Drop your file\n                or "),
          _c("span", { staticClass: "underline" }, [_vm._v("click here ")]),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ })

}]);