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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log('Sudarsan');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    style: styles.inputType,\n    value: mail,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_s(PracticeuseEffect, \"84Q76vkm/WcplWLmbv4kjBf7flQ=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"500px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    padding: \"30px\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"30%\",\n    color: \"red\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"20%\",\n    borderRadius: \"5px\",\n    color: \"white\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxNQUFNO0VBQUE7O0VBRzlCLE1BQU0sQ0FBQ0MsSUFBRCxFQUFNQyxPQUFOLElBQWVILCtDQUFRLENBQUMsRUFBRCxDQUE3QjtFQUNBLE1BQU0sQ0FBQ0ksSUFBRCxFQUFNQyxPQUFOLElBQWVMLCtDQUFRLENBQUMsRUFBRCxDQUE3Qjs7RUFFQSxNQUFNTSxZQUFZLEdBQUVDLENBQUQsSUFBSztJQUN0QkosT0FBTyxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFQO0VBQ0QsQ0FGRDs7RUFHQSxNQUFNQyxZQUFZLEdBQUVILENBQUQsSUFBSztJQUNyQkEsQ0FBQyxDQUFDSSxjQUFGO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7RUFDRixDQUhEOztFQUlBLG9CQUNFO0lBQU0sS0FBSyxFQUFFQyxNQUFNLENBQUNDLElBQXBCO0lBQTBCLFFBQVEsRUFBRUwsWUFBcEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFFQTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsYUFERixlQUVFO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxFQUFFLEVBQUMsTUFGTDtJQUdFLFdBQVcsRUFBQyxzQkFIZDtJQUlFLEtBQUssRUFBRVIsSUFKVDtJQUtFLEtBQUssRUFBRVksTUFBTSxDQUFDRSxTQUxoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRkYsQ0FGQSxlQVdKO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBQ007SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxjQUROLGVBRU07SUFBTyxJQUFJLEVBQUMsTUFBWjtJQUFtQixFQUFFLEVBQUMsUUFBdEI7SUFBK0IsS0FBSyxFQUFFRixNQUFNLENBQUNFLFNBQTdDO0lBQXdELEtBQUssRUFBRVosSUFBL0Q7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZOLENBWEksZUFjRTtJQUFRLEtBQUssRUFBRVUsTUFBTSxDQUFDRyxNQUF0QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQWRGLENBREY7QUFrQkQsQ0EvQkQ7O0dBQU1oQjs7S0FBQUE7QUFpQ04sK0RBQWVBLGlCQUFmO0FBRUEsTUFBTWEsTUFBTSxHQUFHO0VBQ2JDLElBQUksRUFBRTtJQUNKRyxLQUFLLEVBQUUsT0FESDtJQUVKQyxVQUFVLEVBQUUsU0FGUjtJQUdKQyxLQUFLLEVBQUUsT0FISDtJQUlKQyxPQUFPLEVBQUUsTUFKTDtJQUtKQyxhQUFhLEVBQUUsUUFMWDtJQU1KQyxjQUFjLEVBQUUsUUFOWjtJQU9KQyxPQUFPLEVBQUM7RUFQSixDQURPO0VBVWJSLFNBQVMsRUFBRTtJQUNUUyxNQUFNLEVBQUUsU0FEQztJQUVUTCxLQUFLLEVBQUMsS0FGRztJQUdURixLQUFLLEVBQUM7RUFIRyxDQVZFO0VBZWJELE1BQU0sRUFBRTtJQUNORSxVQUFVLEVBQUUsT0FETjtJQUVOTSxNQUFNLEVBQUUsU0FGRjtJQUdORCxPQUFPLEVBQUUsS0FISDtJQUlOSixLQUFLLEVBQUMsS0FKQTtJQUtOTSxZQUFZLEVBQUMsS0FMUDtJQU1OUixLQUFLLEVBQUM7RUFOQTtBQWZLLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJhY3RpY2V1c2VFZmZlY3QuanM/ZDliOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNldXNlRWZmZWN0ID0gKCkgPT4ge1xuICBcblxuICBjb25zdCBbbmFtZSxzZXROYW1lXT11c2VTdGF0ZSgnJylcbiAgY29uc3QgW21haWwsc2V0TWFpbF09dXNlU3RhdGUoJycpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpXG4gIH1cbiAgY29uc3QgaGFuZGxlU3VibWl0PShlKT0+e1xuICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgIGNvbnNvbGUubG9nKCdTdWRhcnNhbicpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGZvcm0gc3R5bGU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSA+XG5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPiBOYW1lOiA8L2xhYmVsPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJOYW1lXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgIC8+PC9kaXY+XG48ZGl2PlxuICAgICAgPGxhYmVsPiBFbWFpbDogPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiRS1tYWlsXCIgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9IHZhbHVlPXttYWlsfSAgLz48L2Rpdj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259ID5BZGQgUGVyc29uPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2V1c2VFZmZlY3Q7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6XCIzMHB4XCJcbiAgfSxcbiAgaW5wdXRUeXBlOiB7XG4gICAgYm9yZGVyOiBcIiNmNmY2ZjZcIixcbiAgICB3aWR0aDpcIjMwJVwiLFxuICAgIGNvbG9yOlwicmVkXCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6XCIyMCVcIixcbiAgICBib3JkZXJSYWRpdXM6XCI1cHhcIixcbiAgICBjb2xvcjpcIndoaXRlXCIsXG4gIFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJhY3RpY2V1c2VFZmZlY3QiLCJuYW1lIiwic2V0TmFtZSIsIm1haWwiLCJzZXRNYWlsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZm9ybSIsImlucHV0VHlwZSIsImJ1dHRvbiIsImNvbG9yIiwiYmFja2dyb3VuZCIsIndpZHRoIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});