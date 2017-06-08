webpackJsonp([2],{

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(70)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(56),
  /* template */
  __webpack_require__(65),
  /* scopeId */
  "data-v-44742256",
  /* cssModules */
  null
)
Component.options.__file = "E:\\github\\devToolsSkill\\vueStack\\src\\components\\lists\\detail\\detail.vue"
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


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      filmMsg: {}
    };
  },
  created: function created() {
    var self = this;
    var url = "http://rc.mgtv.com/msite/rank";
    var index = this.$route.params.index;
    index = index ? index.split("-") : [0, 0];
    console.log(index);
    var param = {
      c: 3,
      limit: 4,
      t: "day",
      callback: "aaa"
    };
    this.$http.jsonp(url, param).then(function (response) {
      console.log(response.body.data);
      this.filmMsg = response.body.data[index[0]].body[index[1]];
    }, function (error) {
      console.log("error:", error);
    });
  },
  methods: {
    back: function back() {

      this.$router.go(-1);
    }
  },
  computed: {},
  components: {}
};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.detail_wraper img[data-v-44742256] {\n  width: 7rem;\n}\n.detail_wraper .back[data-v-44742256] {\n  line-height: 1.06667rem;\n}\n.detail_wraper > p[data-v-44742256] {\n  line-height: 0.66667rem;\n}\n", ""]);

// exports


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail_wraper text-center"
  }, [_c('h3', {
    staticClass: "back text-left",
    on: {
      "click": _vm.back
    }
  }, [_vm._v("点击返回")]), _vm._v(" "), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.filmMsg.name)
    }
  }), _vm._v(" "), _c('img', {
    attrs: {
      "src": _vm.filmMsg.image,
      "alt": _vm.filmMsg.name
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.filmMsg.desc)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.filmMsg.info)
    }
  }), _vm._v(" "), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.filmMsg.title)
    }
  }), _vm._v(" "), _c('p', [_vm._v("播放地址："), _c('a', {
    attrs: {
      "href": _vm.filmMsg.play_url
    }
  }, [_vm._v("点击播放")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-44742256", module.exports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(60);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1)("5f950aff", content, false);
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

/***/ })

});