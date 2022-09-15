"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Practice",{

/***/ "./pages/Practice.js":
/*!***************************!*\
  !*** ./pages/Practice.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/Practice.js\",\n    _s = $RefreshSig$();\n\n\n\nconst Practice = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details]; // return [...people, details];??\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.wholebody,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"Add Details\")), people.map(person => {\n    const {\n      id,\n      name,\n      mail\n    } = person;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.onsubmit,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 16\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 15\n      }\n    }, \"Name:\", name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }\n    }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, \"Mail:\", mail)));\n  }));\n};\n\n_s(Practice, \"ayJV2hiH34Tm8Qi82Xhh2NWBo0A=\");\n\n_c = Practice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Practice);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#00cccc\",\n    width: \"400px\",\n    padding: \"30px\",\n    marginLeft: \"35%\",\n    marginTop: \"20%\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  onsubmit: {\n    color: \"Black\",\n    // display:\"flex\",\n    //  justifyContent:\"center\",\n    padding: \"10px\",\n    background: \"#f6f6f6\",\n    marginTop: \"10%\",\n    width: \"440px\",\n    marginLeft: \"35%\"\n  },\n  wholebody: {\n    background: \"black\",\n    width: \"100%\",\n    heigh\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Practice\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixJQUFJLEVBQUM7SUFDSFcsVUFBVSxFQUFDO0VBRFIsQ0E1QlE7RUErQmJaLEVBQUUsRUFBQztJQUNEZ0IsT0FBTyxFQUFDLE1BRFA7SUFFREMsY0FBYyxFQUFDO0VBRmQsQ0EvQlU7RUFvQ2JWLFFBQVEsRUFBQztJQUNQQyxLQUFLLEVBQUMsT0FEQztJQUVQO0lBQ0E7SUFDQ0csT0FBTyxFQUFDLE1BSkY7SUFLTkYsVUFBVSxFQUFDLFNBTEw7SUFNTkksU0FBUyxFQUFDLEtBTko7SUFPTkgsS0FBSyxFQUFFLE9BUEQ7SUFRTkUsVUFBVSxFQUFDO0VBUkwsQ0FwQ0k7RUE4Q2JkLFNBQVMsRUFBQztJQUNSVyxVQUFVLEVBQUMsT0FESDtJQUVSQyxLQUFLLEVBQUMsTUFGRTtJQUdSUTtFQUhRO0FBOUNHLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHJhY3RpY2UuanM/NGE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5hbWUgJiYgbWFpbCkge1xuICAgICAgY29uc3QgZGV0YWlscyA9IHsgbmFtZSwgbWFpbCB9O1xuICAgICAgc2V0UGVvcGxlKChwZW9wbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5wZW9wbGUsIGRldGFpbHNdO1xuICAgICAgICAvLyByZXR1cm4gWy4uLnBlb3BsZSwgZGV0YWlsc107Pz9cbiAgICAgIH0pO1xuICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgIHNldE1haWwoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIGRldGFpbHNcIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy53aG9sZWJvZHl9PlxuICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgXG4gICAgPGgxIHN0eWxlPXtzdHlsZXMuaDF9PlJlZ2lzdHJhdGlvbiBGb3JtPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5OYW1lfT5cbiAgICAgIFxuICAgICAgICA8bGFiZWwgPiBOYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJOYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZSBoZXJlXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuTmFtZX0+XG4gICAgICAgIDxsYWJlbD4gRW1haWw6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIkUtbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1haWwgaGVyZVwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgICAgdmFsdWU9e21haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+QWRkIERldGFpbHM8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAge1xuICAgICAgcGVvcGxlLm1hcCgocGVyc29uKT0+e1xuICAgICAgICAgY29uc3R7aWQsbmFtZSxtYWlsfT1wZXJzb25cbiAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3N0eWxlcy5vbnN1Ym1pdH0+XG4gICAgICAgICA8ZGl2PjxoND5OYW1lOntuYW1lfTwvaDQ+PC9kaXY+XG4gICAgICAgIDxkaXY+IDxwPk1haWw6e21haWx9PC9wPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH0pXG4gICAgfVxuXG48L2Rpdj5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2U7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgYmFja2dyb3VuZDogXCIjMDBjY2NjXCIsXG4gICAgd2lkdGg6IFwiNDAwcHhcIixcbiAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgICBtYXJnaW5MZWZ0OlwiMzUlXCIsXG4gICAgbWFyZ2luVG9wOlwiMjAlXCJcbiAgIFxuICB9LFxuICBpbnB1dFR5cGU6IHtcbiAgICBib3JkZXI6IFwiI2Y2ZjZmNlwiLFxuICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgcGFkZGluZzogXCI1cHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgbWFyZ2luVG9wOlwiMTBweFwiLFxuICB9LFxuICBidXR0b246IHtcbiAgICBiYWNrZ3JvdW5kOiBcImJsYWNrXCIsXG4gICAgYm9yZGVyOiBcIiMxYThjZmZcIixcbiAgICBwYWRkaW5nOiBcIjdweFwiLFxuICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIG1hcmdpbkxlZnQ6XCIzNyVcIixcbiAgICBtYXJnaW5Ub3A6XCIyNHB4XCJcbiAgfSxcbiAgTmFtZTp7XG4gICAgbWFyZ2luTGVmdDpcIjIwJVwiXG4gIH0sXG4gIGgxOntcbiAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG5cbiAgfSxcbiAgb25zdWJtaXQ6e1xuICAgIGNvbG9yOlwiQmxhY2tcIixcbiAgICAvLyBkaXNwbGF5OlwiZmxleFwiLFxuICAgIC8vICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICBwYWRkaW5nOlwiMTBweFwiLFxuICAgICBiYWNrZ3JvdW5kOlwiI2Y2ZjZmNlwiLFxuICAgICBtYXJnaW5Ub3A6XCIxMCVcIixcbiAgICAgd2lkdGg6IFwiNDQwcHhcIixcbiAgICAgbWFyZ2luTGVmdDpcIjM1JVwiLFxuICB9LFxuICB3aG9sZWJvZHk6e1xuICAgIGJhY2tncm91bmQ6XCJibGFja1wiLFxuICAgIHdpZHRoOlwiMTAwJVwiLFxuICAgIGhlaWdoXG4gIH1cbiAgXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmFjdGljZSIsIm5hbWUiLCJzZXROYW1lIiwibWFpbCIsInNldE1haWwiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwid2hvbGVib2R5IiwiZm9ybSIsImgxIiwiTmFtZSIsImlucHV0VHlwZSIsImJ1dHRvbiIsIm1hcCIsInBlcnNvbiIsImlkIiwib25zdWJtaXQiLCJjb2xvciIsImJhY2tncm91bmQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Practice.js\n"));

/***/ })

});