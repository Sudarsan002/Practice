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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\";\n\n\nconst PracticeuseEffect = () => {\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log('Sudarsan');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"500px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    padding: \"30px\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"30%\",\n    color: \"red\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"20%\",\n    borderRadius: \"5px\",\n    color: \"white\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0EsTUFBTUUsaUJBQWlCLEdBQUcsTUFBTTtFQUU5QixNQUFNQyxZQUFZLEdBQUVDLENBQUQsSUFBSztJQUNyQkEsQ0FBQyxDQUFDQyxjQUFGO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7RUFDRixDQUhEOztFQUlBLG9CQUNFO0lBQU0sS0FBSyxFQUFFQyxNQUFNLENBQUNDLElBQXBCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBRUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBREYsZUFFRTtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsRUFBRSxFQUFDLE1BRkw7SUFHRSxXQUFXLEVBQUMsc0JBSGQ7SUFJRSxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsU0FKaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLENBRkEsZUFVSjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQUNNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsY0FETixlQUVNO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsRUFBRSxFQUFDLFFBQXRCO0lBQStCLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxTQUE3QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRk4sQ0FWSSxlQWFFO0lBQVEsS0FBSyxFQUFFRixNQUFNLENBQUNHLE1BQXRCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBYkYsQ0FERjtBQWlCRCxDQXZCRDs7S0FBTVQ7QUF5Qk4sK0RBQWVBLGlCQUFmO0FBRUEsTUFBTU0sTUFBTSxHQUFHO0VBQ2JDLElBQUksRUFBRTtJQUNKRyxLQUFLLEVBQUUsT0FESDtJQUVKQyxVQUFVLEVBQUUsU0FGUjtJQUdKQyxLQUFLLEVBQUUsT0FISDtJQUlKQyxPQUFPLEVBQUUsTUFKTDtJQUtKQyxhQUFhLEVBQUUsUUFMWDtJQU1KQyxjQUFjLEVBQUUsUUFOWjtJQU9KQyxPQUFPLEVBQUM7RUFQSixDQURPO0VBVWJSLFNBQVMsRUFBRTtJQUNUUyxNQUFNLEVBQUUsU0FEQztJQUVUTCxLQUFLLEVBQUMsS0FGRztJQUdURixLQUFLLEVBQUM7RUFIRyxDQVZFO0VBZWJELE1BQU0sRUFBRTtJQUNORSxVQUFVLEVBQUUsT0FETjtJQUVOTSxNQUFNLEVBQUUsU0FGRjtJQUdORCxPQUFPLEVBQUUsS0FISDtJQUlOSixLQUFLLEVBQUMsS0FKQTtJQUtOTSxZQUFZLEVBQUMsS0FMUDtJQU1OUixLQUFLLEVBQUM7RUFOQTtBQWZLLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJhY3RpY2V1c2VFZmZlY3QuanM/ZDliOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNldXNlRWZmZWN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdD0oZSk9PntcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICBjb25zb2xlLmxvZygnU3VkYXJzYW4nKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gPlxuXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiTmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgIC8+PC9kaXY+XG48ZGl2PlxuICAgICAgPGxhYmVsPiBFbWFpbDogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiRS1tYWlsXCIgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9IC8+PC9kaXY+XG4gICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSA+QWRkIFBlcnNvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNldXNlRWZmZWN0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvcm06IHtcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2Y2ZjZmNlwiLFxuICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOlwiMzBweFwiXG4gIH0sXG4gIGlucHV0VHlwZToge1xuICAgIGJvcmRlcjogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6XCIzMCVcIixcbiAgICBjb2xvcjpcInJlZFwiLFxuICB9LFxuICBidXR0b246IHtcbiAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgYm9yZGVyOiBcIiMxYThjZmZcIixcbiAgICBwYWRkaW5nOiBcIjdweFwiLFxuICAgIHdpZHRoOlwiMjAlXCIsXG4gICAgYm9yZGVyUmFkaXVzOlwiNXB4XCIsXG4gICAgY29sb3I6XCJ3aGl0ZVwiLFxuICBcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByYWN0aWNldXNlRWZmZWN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImZvcm0iLCJpbnB1dFR5cGUiLCJidXR0b24iLCJjb2xvciIsImJhY2tncm91bmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});