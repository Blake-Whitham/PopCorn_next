webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Popcorn_next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar stringHash = __webpack_require__(/*! string-hash */ \"./node_modules/string-hash/index.js\");\n\nfunction Login() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors; // initialize the hook\n  // const [error, setError] = useState(false);\n\n\n  var onSubmit = function onSubmit(data) {\n    // eslint-disable-next-line no-param-reassign\n    data.password = stringHash(\"\".concat(data.password + pepper + data.userName));\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/check', data).then(function () {\n      return props.setUser(data.userName);\n    })[\"catch\"](function () {\n      return setError(true);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit(onSubmit),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"userNameInput\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"userNameInput\",\n          name: \"userName\",\n          ref: register({\n            required: true\n          }),\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"passwordInput\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"passwordInput\",\n          name: \"password\",\n          ref: register,\n          type: \"password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 9\n        }, this), errors.password && 'Password is required.']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        children: \"New User\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Login, \"iyH731LTjAbxnbpM16EGorBPneQ=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"]];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzdHJpbmdIYXNoIiwicmVxdWlyZSIsIkxvZ2luIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwib25TdWJtaXQiLCJkYXRhIiwicGFzc3dvcmQiLCJwZXBwZXIiLCJ1c2VyTmFtZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJwcm9wcyIsInNldFVzZXIiLCJzZXRFcnJvciIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLG1CQUFPLENBQUMsd0RBQUQsQ0FBMUI7O0FBRWUsU0FBU0MsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGlCQUNhQywrREFBTyxFQURwQjtBQUFBLE1BQ3RCQyxRQURzQixZQUN0QkEsUUFEc0I7QUFBQSxNQUNaQyxZQURZLFlBQ1pBLFlBRFk7QUFBQSxNQUNFQyxNQURGLFlBQ0VBLE1BREYsRUFDd0I7QUFDdEQ7OztBQUNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLElBQUQsRUFBVTtBQUN6QjtBQUNBQSxRQUFJLENBQUNDLFFBQUwsR0FBZ0JULFVBQVUsV0FBSVEsSUFBSSxDQUFDQyxRQUFMLEdBQWdCQyxNQUFoQixHQUF5QkYsSUFBSSxDQUFDRyxRQUFsQyxFQUExQjtBQUNBQyxnREFBSyxDQUNGQyxJQURILENBQ1EsUUFEUixFQUNrQkwsSUFEbEIsRUFFR00sSUFGSCxDQUVRO0FBQUEsYUFBTUMsS0FBSyxDQUFDQyxPQUFOLENBQWNSLElBQUksQ0FBQ0csUUFBbkIsQ0FBTjtBQUFBLEtBRlIsV0FHUztBQUFBLGFBQU1NLFFBQVEsQ0FBQyxJQUFELENBQWQ7QUFBQSxLQUhUO0FBSUQsR0FQRDs7QUFTQSxzQkFDRTtBQUFBLDJCQUNFO0FBQU0sY0FBUSxFQUFFWixZQUFZLENBQUNFLFFBQUQsQ0FBNUI7QUFBQSw4QkFDQTtBQUFPLGVBQU8sRUFBQyxlQUFmO0FBQUEsK0JBQ0U7QUFDRSxZQUFFLEVBQUMsZUFETDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsYUFBRyxFQUFFSCxRQUFRLENBQUM7QUFBRWMsb0JBQVEsRUFBRTtBQUFaLFdBQUQsQ0FIZjtBQUlFLGNBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFVQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkEsZUFXQTtBQUFPLGVBQU8sRUFBQyxlQUFmO0FBQUEsZ0NBQ0U7QUFDRSxZQUFFLEVBQUMsZUFETDtBQUVFLGNBQUksRUFBQyxVQUZQO0FBR0UsYUFBRyxFQUFFZCxRQUhQO0FBSUUsY0FBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQU9HRSxNQUFNLENBQUNHLFFBQVAsSUFBbUIsdUJBUHRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhBLGVBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FwQkEsZUFxQkE7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCQSxlQXNCQTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTRCRDs7R0F4Q3VCUCxLO1VBQ3FCQyx1RDs7O0tBRHJCRCxLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IHN0cmluZ0hhc2ggPSByZXF1aXJlKCdzdHJpbmctaGFzaCcpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0LCBlcnJvcnMgfSA9IHVzZUZvcm0oKTsgLy8gaW5pdGlhbGl6ZSB0aGUgaG9va1xuICAvLyBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoZGF0YSkgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGRhdGEucGFzc3dvcmQgPSBzdHJpbmdIYXNoKGAke2RhdGEucGFzc3dvcmQgKyBwZXBwZXIgKyBkYXRhLnVzZXJOYW1lfWApO1xuICAgIGF4aW9zXG4gICAgICAucG9zdCgnL2NoZWNrJywgZGF0YSlcbiAgICAgIC50aGVuKCgpID0+IHByb3BzLnNldFVzZXIoZGF0YS51c2VyTmFtZSkpXG4gICAgICAuY2F0Y2goKCkgPT4gc2V0RXJyb3IodHJ1ZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cblxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxiciAvPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZElucHV0XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkLid9XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5OZXcgVXNlcjwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})