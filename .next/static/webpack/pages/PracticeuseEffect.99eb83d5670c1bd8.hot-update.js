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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        Name: name,\n        Email: mail\n      };\n      console.log(details);\n    } else {\n      console.log(' details');\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_s(PracticeuseEffect, \"sRZUbCBBn3kFAczUIVK8BDHieAY=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"500px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    padding: \"30px\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"30%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"7px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"20%\",\n    borderRadius: \"5px\",\n    color: \"white\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxLQUhIO0lBSU5KLEtBQUssRUFBRSxLQUpEO0lBS05NLFlBQVksRUFBRSxLQUxSO0lBTU5SLEtBQUssRUFBRTtFQU5EO0FBakJLLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJhY3RpY2V1c2VFZmZlY3QuanM/ZDliOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNldXNlRWZmZWN0ID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYobmFtZSAmJiBtYWlsKXtcbiAgICAgIGNvbnN0IGRldGFpbHM9e05hbWU6bmFtZSxFbWFpbDptYWlsfTtcbiAgICAgIGNvbnNvbGUubG9nKGRldGFpbHMpXG4gICAgfVxuICAgIGVsc2V7XG4gICAgICBjb25zb2xlLmxvZygnIGRldGFpbHMnKVxuICAgIH1cblxuICB9O1xuICByZXR1cm4gKFxuICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIk5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD4gRW1haWw6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIkUtbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1haWwgaGVyZVwiIFxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfVxuICAgICAgICAgIHZhbHVlPXttYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259PkFkZCBQZXJzb248L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZXVzZUVmZmVjdDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb3JtOiB7XG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmNmY2ZjZcIixcbiAgICB3aWR0aDogXCI1MDBweFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogXCIzMHB4XCIsXG4gIH0sXG4gIGlucHV0VHlwZToge1xuICAgIGJvcmRlcjogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiMzAlXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBwYWRkaW5nOlwiNXB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOlwiN3B4XCJcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxuICAgIGJvcmRlcjogXCIjMWE4Y2ZmXCIsXG4gICAgcGFkZGluZzogXCI3cHhcIixcbiAgICB3aWR0aDogXCIyMCVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcblxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJhY3RpY2V1c2VFZmZlY3QiLCJuYW1lIiwic2V0TmFtZSIsIm1haWwiLCJzZXRNYWlsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkZXRhaWxzIiwiTmFtZSIsIkVtYWlsIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImZvcm0iLCJpbnB1dFR5cGUiLCJidXR0b24iLCJjb2xvciIsImJhY2tncm91bmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});