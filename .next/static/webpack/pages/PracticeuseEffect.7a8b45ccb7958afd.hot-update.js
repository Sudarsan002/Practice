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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const handleChange = e => {\n    setName;\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log('Sudarsan');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    style: styles.inputType,\n    value: mail,\n    onChange: handleChange,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_s(PracticeuseEffect, \"84Q76vkm/WcplWLmbv4kjBf7flQ=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"500px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    padding: \"30px\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"30%\",\n    color: \"red\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"20%\",\n    borderRadius: \"5px\",\n    color: \"white\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQSxNQUFNRSxpQkFBaUIsR0FBRyxNQUFNO0VBQUE7O0VBRzlCLE1BQU0sQ0FBQ0MsSUFBRCxFQUFNQyxPQUFOLElBQWVILCtDQUFRLENBQUMsRUFBRCxDQUE3QjtFQUNBLE1BQU0sQ0FBQ0ksSUFBRCxFQUFNQyxPQUFOLElBQWVMLCtDQUFRLENBQUMsRUFBRCxDQUE3Qjs7RUFFQSxNQUFNTSxZQUFZLEdBQUVDLENBQUQsSUFBSztJQUN0QkosT0FBTztFQUVSLENBSEQ7O0VBSUEsTUFBTUssWUFBWSxHQUFFRCxDQUFELElBQUs7SUFDckJBLENBQUMsQ0FBQ0UsY0FBRjtJQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0VBQ0YsQ0FIRDs7RUFJQSxvQkFDRTtJQUFNLEtBQUssRUFBRUMsTUFBTSxDQUFDQyxJQUFwQjtJQUEwQixRQUFRLEVBQUVMLFlBQXBDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsZ0JBRUE7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxnQkFDRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGFBREYsZUFFRTtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsRUFBRSxFQUFDLE1BRkw7SUFHRSxXQUFXLEVBQUMsc0JBSGQ7SUFJRSxLQUFLLEVBQUVOLElBSlQ7SUFLRSxLQUFLLEVBQUVVLE1BQU0sQ0FBQ0UsU0FMaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZGLENBRkEsZUFXSjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQUNNO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsY0FETixlQUVNO0lBQU8sSUFBSSxFQUFDLE1BQVo7SUFBbUIsRUFBRSxFQUFDLFFBQXRCO0lBQStCLEtBQUssRUFBRUYsTUFBTSxDQUFDRSxTQUE3QztJQUF3RCxLQUFLLEVBQUVWLElBQS9EO0lBQXFFLFFBQVEsRUFBRUUsWUFBL0U7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUZOLENBWEksZUFjRTtJQUFRLEtBQUssRUFBRU0sTUFBTSxDQUFDRyxNQUF0QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGdCQWRGLENBREY7QUFrQkQsQ0FoQ0Q7O0dBQU1kOztLQUFBQTtBQWtDTiwrREFBZUEsaUJBQWY7QUFFQSxNQUFNVyxNQUFNLEdBQUc7RUFDYkMsSUFBSSxFQUFFO0lBQ0pHLEtBQUssRUFBRSxPQURIO0lBRUpDLFVBQVUsRUFBRSxTQUZSO0lBR0pDLEtBQUssRUFBRSxPQUhIO0lBSUpDLE9BQU8sRUFBRSxNQUpMO0lBS0pDLGFBQWEsRUFBRSxRQUxYO0lBTUpDLGNBQWMsRUFBRSxRQU5aO0lBT0pDLE9BQU8sRUFBQztFQVBKLENBRE87RUFVYlIsU0FBUyxFQUFFO0lBQ1RTLE1BQU0sRUFBRSxTQURDO0lBRVRMLEtBQUssRUFBQyxLQUZHO0lBR1RGLEtBQUssRUFBQztFQUhHLENBVkU7RUFlYkQsTUFBTSxFQUFFO0lBQ05FLFVBQVUsRUFBRSxPQUROO0lBRU5NLE1BQU0sRUFBRSxTQUZGO0lBR05ELE9BQU8sRUFBRSxLQUhIO0lBSU5KLEtBQUssRUFBQyxLQUpBO0lBS05NLFlBQVksRUFBQyxLQUxQO0lBTU5SLEtBQUssRUFBQztFQU5BO0FBZkssQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcz9kOWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJhY3RpY2V1c2VFZmZlY3QgPSAoKSA9PiB7XG4gIFxuXG4gIGNvbnN0IFtuYW1lLHNldE5hbWVdPXVzZVN0YXRlKCcnKVxuICBjb25zdCBbbWFpbCxzZXRNYWlsXT11c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XG4gICAgc2V0TmFtZVxuICAgIFxuICB9XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdD0oZSk9PntcbiAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICBjb25zb2xlLmxvZygnU3VkYXJzYW4nKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gPlxuXG4gICAgPGRpdj5cbiAgICAgIDxsYWJlbD4gTmFtZTogPC9sYWJlbD5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGlkPVwiTmFtZVwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAvPjwvZGl2PlxuPGRpdj5cbiAgICAgIDxsYWJlbD4gRW1haWw6IDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkUtbWFpbFwiIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfSB2YWx1ZT17bWFpbH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz48L2Rpdj5cbiAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259ID5BZGQgUGVyc29uPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2V1c2VFZmZlY3Q7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNTAwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6XCIzMHB4XCJcbiAgfSxcbiAgaW5wdXRUeXBlOiB7XG4gICAgYm9yZGVyOiBcIiNmNmY2ZjZcIixcbiAgICB3aWR0aDpcIjMwJVwiLFxuICAgIGNvbG9yOlwicmVkXCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6XCIyMCVcIixcbiAgICBib3JkZXJSYWRpdXM6XCI1cHhcIixcbiAgICBjb2xvcjpcIndoaXRlXCIsXG4gIFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUHJhY3RpY2V1c2VFZmZlY3QiLCJuYW1lIiwic2V0TmFtZSIsIm1haWwiLCJzZXRNYWlsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsImZvcm0iLCJpbnB1dFR5cGUiLCJidXR0b24iLCJjb2xvciIsImJhY2tncm91bmQiLCJ3aWR0aCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});