"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/PracticeuseEffect",{

/***/ "./pages/PracticeuseEffect.js":
/*!************************************!*\
  !*** ./pages/PracticeuseEffect.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const onClick = () => {\n    setIsError(!isError);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_s(PracticeuseEffect, \"nuypb+f9Nxg/KgT6SR98slCiVks=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"800px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"2px\",\n    color: \"red\"\n  },\n  button: {\n    background: \"#1a8cff\",\n    border: \"#1a8cff\",\n    padding: \"5px\",\n    width: \"20%\",\n    borderRadius: \"5px\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxNQUFNO0VBQUE7O0VBQzlCLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCSCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7O0VBRUEsTUFBTUksT0FBTyxHQUFHLE1BQU07SUFDcEJELFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7RUFDRCxDQUZEOztFQUdBLG9CQUNFO0lBQU0sS0FBSyxFQUFFRyxNQUFNLENBQUNDLElBQXBCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBRUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBREYsZUFFRTtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsRUFBRSxFQUFDLE1BRkw7SUFHRSxXQUFXLEVBQUMsc0JBSGQ7SUFJRSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsU0FKaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLENBRkEsZUFVSjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQUNNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsY0FETixlQUVNO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsRUFBRSxFQUFDLFFBQXRCO0lBQStCLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxTQUE3QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRk4sQ0FWSSxlQWFFO0lBQVEsS0FBSyxFQUFFRixNQUFNLENBQUNHLE1BQXRCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBYkYsQ0FERjtBQWlCRCxDQXZCRDs7R0FBTVA7O0tBQUFBO0FBeUJOLCtEQUFlQSxpQkFBZjtBQUVBLE1BQU1JLE1BQU0sR0FBRztFQUNiQyxJQUFJLEVBQUU7SUFDSkcsS0FBSyxFQUFFLE9BREg7SUFFSkMsVUFBVSxFQUFFLFNBRlI7SUFHSkMsS0FBSyxFQUFFLE9BSEg7SUFJSkMsT0FBTyxFQUFFLE1BSkw7SUFLSkMsYUFBYSxFQUFFLFFBTFg7SUFNSkMsY0FBYyxFQUFFO0VBTlosQ0FETztFQVNiUCxTQUFTLEVBQUU7SUFDVFEsTUFBTSxFQUFFLFNBREM7SUFFVEosS0FBSyxFQUFDLEtBRkc7SUFHVEYsS0FBSyxFQUFDO0VBSEcsQ0FURTtFQWNiRCxNQUFNLEVBQUU7SUFDTkUsVUFBVSxFQUFFLFNBRE47SUFFTkssTUFBTSxFQUFFLFNBRkY7SUFHTkMsT0FBTyxFQUFFLEtBSEg7SUFJTkwsS0FBSyxFQUFDLEtBSkE7SUFLTk0sWUFBWSxFQUFDO0VBTFA7QUFkSyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ByYWN0aWNldXNlRWZmZWN0LmpzP2Q5YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBQcmFjdGljZXVzZUVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgW2lzRXJyb3IsIHNldElzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0SXNFcnJvcighaXNFcnJvcik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gc3R5bGU9e3N0eWxlcy5mb3JtfT5cblxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBpZD1cIk5hbWVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZSBoZXJlXCJcbiAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAvPjwvZGl2PlxuPGRpdj5cbiAgICAgIDxsYWJlbD4gRW1haWw6IDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkUtbWFpbFwiIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfSAvPjwvZGl2PlxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+QWRkIFBlcnNvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNldXNlRWZmZWN0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvcm06IHtcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2Y2ZjZmNlwiLFxuICAgIHdpZHRoOiBcIjgwMHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgaW5wdXRUeXBlOiB7XG4gICAgYm9yZGVyOiBcIiNmNmY2ZjZcIixcbiAgICB3aWR0aDpcIjJweFwiLFxuICAgIGNvbG9yOlwicmVkXCJcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZDogXCIjMWE4Y2ZmXCIsXG4gICAgYm9yZGVyOiBcIiMxYThjZmZcIixcbiAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgIHdpZHRoOlwiMjAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOlwiNXB4XCJcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByYWN0aWNldXNlRWZmZWN0IiwiaXNFcnJvciIsInNldElzRXJyb3IiLCJvbkNsaWNrIiwic3R5bGVzIiwiZm9ybSIsImlucHV0VHlwZSIsImJ1dHRvbiIsImNvbG9yIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});