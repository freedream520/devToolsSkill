webpackJsonp([2],{

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(63)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(65),
	  /* template */
	  __webpack_require__(66),
	  /* scopeId */
	  "data-v-5c10dcfa",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/wangyu/github/devToolsSkill/vueStack/src/components/RouterB.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] RouterB.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5c10dcfa", Component.options)
	  } else {
	    hotAPI.reload("data-v-5c10dcfa", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(14)("96ccbd7c", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-5c10dcfa&scoped=true!../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./RouterB.vue", function() {
	     var newContent = require("!!../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-5c10dcfa&scoped=true!../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./RouterB.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\n.link-lists[data-v-5c10dcfa] {\n  padding: 0.26667rem;\n}\n.link-lists li[data-v-5c10dcfa] {\n    line-height: 0.66667rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      title: "路由B"
	    };
	  },
	  methods: {},
	  computed: {},
	  components: {}
	};

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', {
	    domProps: {
	      "textContent": _vm._s(_vm.title)
	    }
	  }), _vm._v(" "), _c('ul', {
	    staticClass: "link-lists"
	  }, [_c('li', [_c('router-link', {
	    attrs: {
	      "to": "/router1"
	    }
	  }, [_vm._v("跳转到本页路由(footer不会变)：/router1")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/routerC"
	    }
	  }, [_vm._v("跳转到顶层路由：/routerC")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
	    attrs: {
	      "to": "/login"
	    }
	  }, [_vm._v("点击跳转到根路由：/login")])], 1)])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5c10dcfa", module.exports)
	  }
	}

/***/ }

});