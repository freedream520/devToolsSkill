webpackJsonp([5],{

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(74)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(76),
	  /* template */
	  __webpack_require__(77),
	  /* scopeId */
	  "data-v-44742256",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/wangyu/github/devToolsSkill/vueStack/src/components/lists/detail/detail.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-44742256", Component.options)
	  } else {
	    hotAPI.reload("data-v-44742256", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(14)("5f950aff", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-44742256&scoped=true!../../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue", function() {
	     var newContent = require("!!../../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-44742256&scoped=true!../../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./detail.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },

/***/ 76:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      filename: ""
	    };
	  },
	  props: {
	    name: Number
	  },
	  created: function created() {
	    this.filename = this.$route.params.name;
	  },
	  methods: {},
	  computed: {},
	  components: {}
	};

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._v("\n  1231231\n  "), _c('p', {
	    domProps: {
	      "textContent": _vm._s(_vm.filename)
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-44742256", module.exports)
	  }
	}

/***/ }

});