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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const onClick = () => {\n    setIsError(!isError);\n  };\n\n  return {\n    /* <button onClick={onClick}>Pres here..</button>\n    {isError && (\n     <div>\n       {\" \"}\n       <a href=\"http://localhost:3001/PracticeuseEffect\">helo</a>\n     </div>\n    )} */\n  } < div > /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, \"        \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 17\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Add Person\")));\n};\n\n_s(PracticeuseEffect, \"nuypb+f9Nxg/KgT6SR98slCiVks=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    // justifyContent: \"center\",\n    background: \"black\",\n    width: \"800px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\"\n  },\n  inputType: {\n    border: \"#f6f6f6\"\n  },\n  button: {\n    background: \"#1a8cff\",\n    border: \"#1a8cff\",\n    padding: \"5px\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxNQUFNO0VBQUE7O0VBQzlCLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCSCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7O0VBRUEsTUFBTUksT0FBTyxHQUFHLE1BQU07SUFDcEJELFVBQVUsQ0FBQyxDQUFDRCxPQUFGLENBQVY7RUFDRCxDQUZEOztFQUdBLE9BRUk7SUFBQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQU5NLElBU0NHLEdBVEQsZ0JBVUEsbUpBQVU7SUFBTSxLQUFLLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBcEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFDTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBRE0sZUFFTjtJQUFPLElBQUksRUFBQyxNQUFaO0lBQW1CLEVBQUUsRUFBQyxNQUF0QjtJQUE2QixXQUFXLEVBQUMsc0JBQXpDO0lBQWdFLEtBQUssRUFBRUQsTUFBTSxDQUFDRSxTQUE5RTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRk0sZUFHTjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsY0FERixlQUVFO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsRUFBRSxFQUFDLFFBQXRCO0lBQStCLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxTQUE3QztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkYsQ0FITSxlQU9OO0lBQVEsS0FBSyxFQUFFRixNQUFNLENBQUNHLE1BQXRCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBUE0sQ0FBVixDQVpKO0FBMEJELENBaENEOztHQUFNUjs7S0FBQUE7QUFpQ04sK0RBQWVBLGlCQUFmO0FBRUEsTUFBTUssTUFBTSxHQUFHO0VBQ2JDLElBQUksRUFBRTtJQUNKRyxLQUFLLEVBQUUsT0FESDtJQUVKO0lBQ0FDLFVBQVUsRUFBRSxPQUhSO0lBSUpDLEtBQUssRUFBQyxPQUpGO0lBS0pDLE9BQU8sRUFBQyxNQUxKO0lBTUpDLGFBQWEsRUFBQyxRQU5WO0lBT0pDLGNBQWMsRUFBQztFQVBYLENBRE87RUFVYlAsU0FBUyxFQUFDO0lBQ1JRLE1BQU0sRUFBQztFQURDLENBVkc7RUFhYlAsTUFBTSxFQUFDO0lBQ0xFLFVBQVUsRUFBQyxTQUROO0lBRUxLLE1BQU0sRUFBQyxTQUZGO0lBR0xDLE9BQU8sRUFBQztFQUhIO0FBYk0sQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcz9kOWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJhY3RpY2V1c2VFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0Vycm9yLCBzZXRJc0Vycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIHNldElzRXJyb3IoIWlzRXJyb3IpO1xuICB9O1xuICByZXR1cm4gKFxuICBcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlByZXMgaGVyZS4uPC9idXR0b24+XG5cbiAgICAgIHtpc0Vycm9yICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9QcmFjdGljZXVzZUVmZmVjdFwiPmhlbG88L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG5cbiAgICAgIDxkaXY+XG4gICAgICA8PiAgICAgICAgPGZvcm0gc3R5bGU9e3N0eWxlcy5mb3JtfT5cbiAgICAgICAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+IEVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJFLW1haWxcIiBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5BZGQgUGVyc29uPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC8+XG4gICAgICBcbiAgICAgXG5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZXVzZUVmZmVjdDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb3JtOiB7XG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICAvLyBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgd2lkdGg6XCI4MDBweFwiLFxuICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJcbiAgfSxcbiAgaW5wdXRUeXBlOntcbiAgICBib3JkZXI6XCIjZjZmNmY2XCJcbiAgfSxcbiAgYnV0dG9uOntcbiAgICBiYWNrZ3JvdW5kOlwiIzFhOGNmZlwiLFxuICAgIGJvcmRlcjpcIiMxYThjZmZcIixcbiAgICBwYWRkaW5nOlwiNXB4XCJcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJhY3RpY2V1c2VFZmZlY3QiLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsIm9uQ2xpY2siLCJkaXYiLCJzdHlsZXMiLCJmb3JtIiwiaW5wdXRUeXBlIiwiYnV0dG9uIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});