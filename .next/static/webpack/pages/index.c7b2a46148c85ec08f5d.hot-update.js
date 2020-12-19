webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/blake/Desktop/MVP/Popcorn_next/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar stringHash = __webpack_require__(/*! string-hash */ \"./node_modules/string-hash/index.js\");\n\nfunction Login() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors; // initialize the hook\n\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var onSubmit = function onSubmit(data) {\n    // eslint-disable-next-line no-param-reassign\n    data.password = stringHash(\"\".concat(data.password + data.userName));\n    axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/check', data).then(function () {\n      return props.setUser(data.userName);\n    })[\"catch\"](function () {\n      return setError(true);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit(onSubmit),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"userNameInput\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"userNameInput\",\n          name: \"userName\",\n          ref: register({\n            required: true\n          }),\n          type: \"text\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        htmlFor: \"passwordInput\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          id: \"passwordInput\",\n          name: \"password\",\n          ref: register,\n          type: \"password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 9\n        }, this), errors.password && 'Password is required.']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          href: \"/newUser\",\n          children: \"New User\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        children: \"Submit\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Login, \"Ccm2hGkZ9YYC26s0LGEleHJY0TU=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_3__[\"useForm\"]];\n});\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJzdHJpbmdIYXNoIiwicmVxdWlyZSIsIkxvZ2luIiwidXNlRm9ybSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwib25TdWJtaXQiLCJkYXRhIiwicGFzc3dvcmQiLCJ1c2VyTmFtZSIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJwcm9wcyIsInNldFVzZXIiLCJyZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBR0MsbUJBQU8sQ0FBQyx3REFBRCxDQUExQjs7QUFFZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUEsaUJBQ2FDLCtEQUFPLEVBRHBCO0FBQUEsTUFDdEJDLFFBRHNCLFlBQ3RCQSxRQURzQjtBQUFBLE1BQ1pDLFlBRFksWUFDWkEsWUFEWTtBQUFBLE1BQ0VDLE1BREYsWUFDRUEsTUFERixFQUN3Qjs7O0FBRHhCLGtCQUVKQyxzREFBUSxDQUFDLEtBQUQsQ0FGSjtBQUFBLE1BRXZCQyxLQUZ1QjtBQUFBLE1BRWhCQyxRQUZnQjs7QUFHOUIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCO0FBQ0FBLFFBQUksQ0FBQ0MsUUFBTCxHQUFnQlosVUFBVSxXQUFJVyxJQUFJLENBQUNDLFFBQUwsR0FBZ0JELElBQUksQ0FBQ0UsUUFBekIsRUFBMUI7QUFDQUMsZ0RBQUssQ0FDRkMsSUFESCxDQUNRLFFBRFIsRUFDa0JKLElBRGxCLEVBRUdLLElBRkgsQ0FFUTtBQUFBLGFBQU1DLEtBQUssQ0FBQ0MsT0FBTixDQUFjUCxJQUFJLENBQUNFLFFBQW5CLENBQU47QUFBQSxLQUZSLFdBR1M7QUFBQSxhQUFNSixRQUFRLENBQUMsSUFBRCxDQUFkO0FBQUEsS0FIVDtBQUlELEdBUEQ7O0FBU0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFNLGNBQVEsRUFBRUosWUFBWSxDQUFDSyxRQUFELENBQTVCO0FBQUEsOEJBQ0E7QUFBTyxlQUFPLEVBQUMsZUFBZjtBQUFBLCtCQUNFO0FBQ0UsWUFBRSxFQUFDLGVBREw7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGFBQUcsRUFBRU4sUUFBUSxDQUFDO0FBQUVlLG9CQUFRLEVBQUU7QUFBWixXQUFELENBSGY7QUFJRSxjQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZBLGVBV0E7QUFBTyxlQUFPLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQ0UsWUFBRSxFQUFDLGVBREw7QUFFRSxjQUFJLEVBQUMsVUFGUDtBQUdFLGFBQUcsRUFBRWYsUUFIUDtBQUlFLGNBQUksRUFBQztBQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFPR0UsTUFBTSxDQUFDTSxRQUFQLElBQW1CLHVCQVB0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYQSxlQW9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEJBLGVBcUJBO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQSwrQkFDRSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCQSxlQTBCQTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdDRDs7R0E1Q3VCVixLO1VBQ3FCQyx1RDs7O0tBRHJCRCxLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBzdHJpbmdIYXNoID0gcmVxdWlyZSgnc3RyaW5nLWhhc2gnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCwgZXJyb3JzIH0gPSB1c2VGb3JtKCk7IC8vIGluaXRpYWxpemUgdGhlIGhvb2tcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uU3VibWl0ID0gKGRhdGEpID0+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBkYXRhLnBhc3N3b3JkID0gc3RyaW5nSGFzaChgJHtkYXRhLnBhc3N3b3JkICsgZGF0YS51c2VyTmFtZX1gKTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QoJy9jaGVjaycsIGRhdGEpXG4gICAgICAudGhlbigoKSA9PiBwcm9wcy5zZXRVc2VyKGRhdGEudXNlck5hbWUpKVxuICAgICAgLmNhdGNoKCgpID0+IHNldEVycm9yKHRydWUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogdHJ1ZSB9KX1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIC8+XG5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8YnIgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRJbnB1dFwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAvPlxuICAgICAgICB7ZXJyb3JzLnBhc3N3b3JkICYmICdQYXNzd29yZCBpcyByZXF1aXJlZC4nfVxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxiciAvPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3VXNlclwiPlxuICAgICAgICAgIE5ldyBVc2VyXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})