webpackJsonp([3],{

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(67)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(53),
  /* template */
  __webpack_require__(63),
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


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      title: "路由A"
    };
  },
  methods: {},
  computed: {},
  components: {}
};

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.a-wrap[data-v-5c10dcfa] {\n  font-size: 16px;\n}\n[data-dpr=\"1\"] .a-wrap[data-v-5c10dcfa] {\n  font-size: 16px;\n}\n[data-dpr=\"2\"] .a-wrap[data-v-5c10dcfa] {\n  font-size: 32px;\n}\n[data-dpr=\"2.5\"] .a-wrap[data-v-5c10dcfa] {\n  font-size: 40px;\n}\n[data-dpr=\"2.75\"] .a-wrap[data-v-5c10dcfa] {\n  font-size: 44px;\n}\n[data-dpr=\"3\"] .a-wrap[data-v-5c10dcfa] {\n  font-size: 48px;\n}\n[data-dpr=\"4\"] .a-wrap[data-v-5c10dcfa] {\n  font-size: 64px;\n}\n.a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 14px;\n}\n[data-dpr=\"1\"] .a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 14px;\n}\n[data-dpr=\"2\"] .a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 28px;\n}\n[data-dpr=\"2.5\"] .a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 35px;\n}\n[data-dpr=\"2.75\"] .a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 38.5px;\n}\n[data-dpr=\"3\"] .a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 42px;\n}\n[data-dpr=\"4\"] .a-wrap dl dd[data-v-5c10dcfa] {\n  font-size: 56px;\n}\n.a-wrap[data-v-5c10dcfa] {\n  padding-bottom: 2.66667rem;\n}\ndl dt[data-v-5c10dcfa] {\n  line-height: 0.53333rem;\n  font-weight: 600;\n  margin: 0.26667rem 0;\n}\ndl dd[data-v-5c10dcfa] {\n  line-height: 0.53333rem;\n  margin: 0.13333rem 0;\n}\nul[data-v-5c10dcfa] {\n  margin-top: 0.66667rem;\n}\nul li[data-v-5c10dcfa] {\n    line-height: 0.66667rem;\n    margin: 0.26667rem 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "a-wrap"
  }, [_c('h4', {
    domProps: {
      "textContent": _vm._s(_vm.title)
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_vm._v("vue")]), _vm._v(" "), _c('dd', [_vm._v("（饿了么教程看明白，想通透）")]), _vm._v(" "), _c('dd'), _vm._v(" "), _c('dd', [_vm._v("组件的按需加载（减少主文件的体积，模块切割，按需加载）")]), _vm._v(" "), _c('dd', [_vm._v("热更新（单页应用中修改代码后实现局部更新）")]), _vm._v(" "), _c('dd', [_vm._v("node服务和java或者php服务的共存")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_vm._v("vue-router")]), _vm._v(" "), _c('dd', [_c('a', {
    staticClass: "fc-link",
    attrs: {
      "href": "https://segmentfault.com/a/1190000008082838"
    }
  }, [_vm._v("单页面router教程")])]), _vm._v(" "), _c('dd', [_vm._v("router-link-active会根据router的名字匹配  /vue 和 /vuex 会同时拥有激活的类名")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_vm._v("node")]), _vm._v(" "), _c('dd', [_vm._v("node基础（深入浅出nodejs）")]), _vm._v(" "), _c('dd', [_vm._v("node连接mysql数据库")]), _vm._v(" "), _c('dd', [_vm._v("实现前后端分离，node作为作为中间服务器（渲染页面、转发请求....）"), _c('a', {
    staticClass: "fc-link",
    attrs: {
      "href": "https://segmentfault.com/a/1190000007992200"
    }
  }, [_vm._v("教程地址")])]), _vm._v(" "), _c('dd')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_vm._v("webpack")]), _vm._v(" "), _c('dd', [_c('a', {
    staticClass: "fc-link",
    attrs: {
      "href": "https://segmentfault.com/a/1190000007892189"
    }
  }, [_vm._v("教程地址")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('dl', [_c('dt', [_vm._v("java")]), _vm._v(" "), _c('dd', [_vm._v("java基础，启动简单的服务器，处理请求，连接数据库，简单的sql查询等简单应用场景")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("4.es6精通 （深入浅出es6）")]), _vm._v(" "), _c('li', [_vm._v("5.webpack精通 （问题收集，解决方案整理）")]), _vm._v(" "), _c('li', [_vm._v("6.单元测试的编写")]), _vm._v(" "), _c('li', [_vm._v("8.自动生成api文档")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', [_vm._v("可以做的事情")]), _vm._v(" "), _c('li', [_vm._v("1.看sagmentdefault上面的关于node、es6、vue的文章部分")]), _vm._v(" "), _c('li')])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5c10dcfa", module.exports)
  }
}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("96ccbd7c", content, false);
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

/***/ })

});