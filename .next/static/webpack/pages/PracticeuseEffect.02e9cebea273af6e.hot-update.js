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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log(name, mail);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_s(PracticeuseEffect, \"sRZUbCBBn3kFAczUIVK8BDHieAY=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"500px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    padding: \"30px\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"30%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"7px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"20%\",\n    borderRadius: \"5px\",\n    color: \"white\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJhY3RpY2V1c2VFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhuYW1lLG1haWwpXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGZvcm0gc3R5bGU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsPiBFbWFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiRS1tYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbWFpbCBoZXJlXCIgXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgICAgdmFsdWU9e21haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+QWRkIFBlcnNvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByYWN0aWNldXNlRWZmZWN0O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvcm06IHtcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIGJhY2tncm91bmQ6IFwiI2Y2ZjZmNlwiLFxuICAgIHdpZHRoOiBcIjUwMHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgfSxcbiAgaW5wdXRUeXBlOiB7XG4gICAgYm9yZGVyOiBcIiNmNmY2ZjZcIixcbiAgICB3aWR0aDogXCIzMCVcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIHBhZGRpbmc6XCI1cHhcIixcbiAgICBib3JkZXJSYWRpdXM6XCI3cHhcIlxuICB9LFxuICBidXR0b246IHtcbiAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgYm9yZGVyOiBcIiMxYThjZmZcIixcbiAgICBwYWRkaW5nOiBcIjdweFwiLFxuICAgIHdpZHRoOiBcIjIwJVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuXG4gIH0sXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmFjdGljZXVzZUVmZmVjdCIsIm5hbWUiLCJzZXROYW1lIiwibWFpbCIsInNldE1haWwiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJmb3JtIiwiaW5wdXRUeXBlIiwiYnV0dG9uIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImJvcmRlciIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});