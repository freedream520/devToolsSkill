webpackJsonp([2],{

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(53)

	var Component = __webpack_require__(18)(
	  /* script */
	  __webpack_require__(55),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  "data-v-50465eac",
	  /* cssModules */
	  null
	)
	Component.options.__file = "/Users/wangyu/github/devToolsSkill/vueStack/src/components/login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-50465eac", Component.options)
	  } else {
	    hotAPI.reload("data-v-50465eac", Component.options)
	  }
	})()}

	module.exports = Component.exports


/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(14)("39481aac", content, false);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-50465eac&scoped=true!../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./login.vue", function() {
	     var newContent = require("!!../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-50465eac&scoped=true!../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./login.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, "\nh4[data-v-50465eac] {\n  line-height: 1.06667rem;\n}\n.input[data-v-50465eac] {\n  display: block;\n  width: 80%;\n  margin: 0.26667rem auto;\n  line-height: 1.06667rem;\n}\n", ""]);

	// exports


/***/ },

/***/ 55:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      title: "登陆",
	      name: "lucy12"
	    };
	  },
	  methods: {
	    login: function login() {
	      this.$router.replace("/");
	    }
	  },
	  computed: {},
	  components: {}
	};

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('h4', {
	    staticClass: "text-center",
	    domProps: {
	      "textContent": _vm._s(_vm.title)
	    }
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.name),
	      expression: "name"
	    }],
	    staticClass: "input",
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": (_vm.name)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.name = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('span', {
	    staticClass: "btn btn-blue btn-block",
	    on: {
	      "click": _vm.login
	    }
	  }, [_vm._v("确认")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-50465eac", module.exports)
	  }
	}

/***/ }

});