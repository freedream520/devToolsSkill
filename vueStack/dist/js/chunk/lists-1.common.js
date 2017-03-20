webpackJsonp([1],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(68)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(64),
  /* scopeId */
  "data-v-601a03c8",
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangyu/github/devToolsSkill/vueStack/src/components/lists/lists.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] lists.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-601a03c8", Component.options)
  } else {
    hotAPI.reload("data-v-601a03c8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      title: "animate",
      data: [],
      detailShow: {
        show: false
      },
      filmMsg: {}
    };
  },
  created: function created() {
    var self = this;
    var url = "http://rc.mgtv.com/msite/rank";

    var param = {
      c: 3,
      limit: 4,
      t: "day",
      callback: "aaa"
    };
    this.$http.jsonp(url, param).then(function (response) {
      console.log(response.body.data);
      this.data = response.body.data;
    }, function (error) {
      console.log("error:", error);
    });
  },
  methods: {},
  computed: {},
  components: {}
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\nul.group[data-v-601a03c8] {\n  margin: 0.53333rem 0.26667rem;\n}\nul.group > li[data-v-601a03c8] {\n    width: 50%;\n    display: inline-block;\n    padding: 0.13333rem;\n    margin: 0.13333rem 0;\n    box-sizing: border-box;\n}\nul.group > li .name[data-v-601a03c8] {\n      line-height: 0.66667rem;\n}\nul.group > li .info[data-v-601a03c8] {\n      line-height: 0.66667rem;\n}\nul.group > li img[data-v-601a03c8] {\n      width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.data), function(group, i) {
    return _c('div', [_c('ul', {
      staticClass: "group"
    }, [_c('h2', {
      staticClass: "group-title"
    }, [_vm._v(_vm._s(group.ctxt))]), _vm._v(" "), _vm._l((group.body), function(item, j) {
      return _c('router-link', {
        attrs: {
          "to": '/film/detail/' + i + '-' + j,
          "tag": "li"
        }
      }, [_c('p', {
        staticClass: "name",
        domProps: {
          "textContent": _vm._s(item.name)
        }
      }), _vm._v(" "), _c('img', {
        attrs: {
          "src": item.image
        }
      }), _vm._v(" "), _c('p', {
        staticClass: "info",
        domProps: {
          "textContent": _vm._s(item.info)
        }
      })])
    })], 2)])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-601a03c8", module.exports)
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("201b3e13", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-601a03c8&scoped=true!../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue", function() {
     var newContent = require("!!../../../node_modules/.npminstall/css-loader/0.25.0/css-loader/index.js!../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/style-rewriter.js?id=data-v-601a03c8&scoped=true!../../../node_modules/.npminstall/sass-loader/4.1.1/sass-loader/index.js!../../../node_modules/.npminstall/vue-loader/10.3.0/vue-loader/lib/selector.js?type=styles&index=0!./lists.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});