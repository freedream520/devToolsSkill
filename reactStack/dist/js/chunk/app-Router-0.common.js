webpackJsonp([0],{

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(24);

var _BottomNav = __webpack_require__(76);

var _BottomNav2 = _interopRequireDefault(_BottomNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//  { path: '/contact',
//   sidebar: () => <div>联系我们!</div>,
//   main: () => <h2>联系我们</h2>
// }


var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return _react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"h1",
					null,
					" Router!"
				),
				_react2.default.createElement(
					"ul",
					null,
					_react2.default.createElement(
						"li",
						null,
						"1.redirect"
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"h3",
							null,
							"\u4F18\u70B9\uFF1A"
						),
						_react2.default.createElement(
							"p",
							null,
							"\u4E00\u4E2A\u8DEF\u7531\u4E0B\u53EF\u4EE5\u6E32\u67D3\u591A\u4E2A\u4E0D\u540C\u7684Route  \u5982\u65E2\u53EF\u4EE5\u6E32\u67D3sidebar \u4E5F\u53EF\u4EE5\u6E32\u67D3main\u7EC4\u4EF6  \u8FD9\u662Fvue\u96BE\u4EE5\u505A\u5230\u7684\u5730\u65B9   vue\u53EA\u6709\u4E00\u4E2Arouter-view"
						)
					),
					_react2.default.createElement(
						"li",
						null,
						_react2.default.createElement(
							"h3",
							null,
							"\u7F3A\u70B9\uFF1A"
						),
						_react2.default.createElement(
							"p",
							null,
							"\u56E0\u4E3A\u6CA1\u6709\u914D\u7F6E\u6587\u4EF6\uFF0C\u6240\u4EE5\u7236\u5B50\u5173\u7CFB\u662F\u901A\u8FC7url\u8FDB\u884C\u5224\u5B9A  \u800Cvue-router\u5219\u662F\u901A\u8FC7\u914D\u7F6E\u6587\u4EF6\u58F0\u660E\u7236\u5B50\u5173\u7CFB\uFF0C\u6240\u4EE5\u548Curl\u6CA1\u6709\u5173\u7CFB \u6240\u4EE5\u5B50\u8DEF\u7531\u7684\u8DEF\u5F84\u5FC5\u987B\u5D4C\u5957\u5728\u7236\u8DEF\u7531\u4E0B\u9762"
						)
					)
				),
				_react2.default.createElement(_BottomNav2.default, { test: "aaa" })
			);
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;
;

/***/ })

});
//# sourceMappingURL=app-Router-0.common.js.map?3e75e35d06593fa595fb