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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details];\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, \"Add Person\"));\n};\n\n_s(PracticeuseEffect, \"ayJV2hiH34Tm8Qi82Xhh2NWBo0A=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#00cccc\",\n    width: \"400px\",\n    padding: \"30px\",\n    // display:\"flex\",\n    // justifyContent:\"center\"\n    marginLeft: \"35%\",\n    marginTop: \"50%\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BSEg7SUFJSkMsT0FBTyxFQUFFLE1BSkw7SUFLSjtJQUNBO0lBQ0FDLFVBQVUsRUFBQyxLQVBQO0lBUUpDLFNBQVMsRUFBQztFQVJOLENBRE87RUFZYlAsU0FBUyxFQUFFO0lBQ1RRLE1BQU0sRUFBRSxTQURDO0lBRVRKLEtBQUssRUFBRSxLQUZFO0lBR1RGLEtBQUssRUFBRSxPQUhFO0lBSVRHLE9BQU8sRUFBRSxLQUpBO0lBS1RJLFlBQVksRUFBRSxLQUxMO0lBTVRGLFNBQVMsRUFBQztFQU5ELENBWkU7RUFvQmJOLE1BQU0sRUFBRTtJQUNORSxVQUFVLEVBQUUsT0FETjtJQUVOSyxNQUFNLEVBQUUsU0FGRjtJQUdOSCxPQUFPLEVBQUUsS0FISDtJQUlORCxLQUFLLEVBQUUsS0FKRDtJQUtOSyxZQUFZLEVBQUUsS0FMUjtJQU1OUCxLQUFLLEVBQUUsT0FORDtJQU9OSSxVQUFVLEVBQUMsS0FQTDtJQVFOQyxTQUFTLEVBQUM7RUFSSixDQXBCSztFQThCYlIsSUFBSSxFQUFDO0lBQ0hPLFVBQVUsRUFBQztFQURSLENBOUJRO0VBaUNiUixFQUFFLEVBQUM7SUFDRFksT0FBTyxFQUFDLE1BRFA7SUFFREMsY0FBYyxFQUFDO0VBRmQ7QUFqQ1UsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9QcmFjdGljZXVzZUVmZmVjdC5qcz9kOWI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJhY3RpY2V1c2VFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmFtZSAmJiBtYWlsKSB7XG4gICAgICBjb25zdCBkZXRhaWxzID0geyBuYW1lLCBtYWlsIH07XG4gICAgICBzZXRQZW9wbGUoKHBlb3BsZSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLnBlb3BsZSwgZGV0YWlsc107XG4gICAgICB9KTtcbiAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICBzZXRNYWlsKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiBkZXRhaWxzXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBzdHlsZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgIFxuICAgIDxoMSBzdHlsZT17c3R5bGVzLmgxfT5SZWdpc3RyYXRpb24gRm9ybTwvaDE+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuTmFtZX0+XG4gICAgICBcbiAgICAgICAgPGxhYmVsID4gTmFtZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiTmFtZVwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLk5hbWV9PlxuICAgICAgICA8bGFiZWw+IEVtYWlsOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJFLW1haWxcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBtYWlsIGhlcmVcIlxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfVxuICAgICAgICAgIHZhbHVlPXttYWlsfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICBcbiAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259PkFkZCBQZXJzb248L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZXVzZUVmZmVjdDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb3JtOiB7XG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGNjY2NcIixcbiAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgIC8vIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgLy8ganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIlxuICAgIG1hcmdpbkxlZnQ6XCIzNSVcIixcbiAgICBtYXJnaW5Ub3A6XCI1MCVcIlxuICAgXG4gIH0sXG4gIGlucHV0VHlwZToge1xuICAgIGJvcmRlcjogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBtYXJnaW5Ub3A6XCIxMHB4XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luTGVmdDpcIjM3JVwiLFxuICAgIG1hcmdpblRvcDpcIjI0cHhcIlxuICB9LFxuICBOYW1lOntcbiAgICBtYXJnaW5MZWZ0OlwiMjAlXCJcbiAgfSxcbiAgaDE6e1xuICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcblxuICB9XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmFjdGljZXVzZUVmZmVjdCIsIm5hbWUiLCJzZXROYW1lIiwibWFpbCIsInNldE1haWwiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZm9ybSIsImgxIiwiTmFtZSIsImlucHV0VHlwZSIsImJ1dHRvbiIsImNvbG9yIiwiYmFja2dyb3VuZCIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});