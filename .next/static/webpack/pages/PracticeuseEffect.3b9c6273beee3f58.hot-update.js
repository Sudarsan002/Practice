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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/PracticeuseEffect.js\",\n    _s = $RefreshSig$();\n\n\n\nconst PracticeuseEffect = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details]; // return [...people, details];??\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"Add Person\")), people.map(person => {\n    const {\n      id,\n      name,\n      mail\n    } = person;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.onsubmit,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 16\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 10\n      }\n    }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 10\n      }\n    }));\n  }));\n};\n\n_s(PracticeuseEffect, \"ayJV2hiH34Tm8Qi82Xhh2NWBo0A=\");\n\n_c = PracticeuseEffect;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PracticeuseEffect);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#00cccc\",\n    width: \"400px\",\n    padding: \"30px\",\n    marginLeft: \"35%\",\n    marginTop: \"20%\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  onsubmit: {\n    color: \"red\",\n    display: \"flex\",\n    justifyContent: \"center\",\n    padding: \"30px\",\n    background: \"#00cccc\"\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"PracticeuseEffect\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFGRDtJQUdOQyxjQUFjLEVBQUMsUUFIVDtJQUlOTixPQUFPLEVBQUMsTUFKRjtJQUtORixVQUFVLEVBQUM7RUFMTDtBQXBDSSxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1ByYWN0aWNldXNlRWZmZWN0LmpzP2Q5YjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBQcmFjdGljZXVzZUVmZmVjdCA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttYWlsLCBzZXRNYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGVvcGxlLCBzZXRQZW9wbGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuYW1lICYmIG1haWwpIHtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSB7IG5hbWUsIG1haWwgfTtcbiAgICAgIHNldFBlb3BsZSgocGVvcGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ucGVvcGxlLCBkZXRhaWxzXTtcbiAgICAgICAgLy8gcmV0dXJuIFsuLi5wZW9wbGUsIGRldGFpbHNdOz8/XG4gICAgICB9KTtcbiAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICBzZXRNYWlsKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiBkZXRhaWxzXCIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgXG4gICAgPGgxIHN0eWxlPXtzdHlsZXMuaDF9PlJlZ2lzdHJhdGlvbiBGb3JtPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5OYW1lfT5cbiAgICAgIFxuICAgICAgICA8bGFiZWwgPiBOYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgaWQ9XCJOYW1lXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZSBoZXJlXCJcbiAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuTmFtZX0+XG4gICAgICAgIDxsYWJlbD4gRW1haWw6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIkUtbWFpbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1haWwgaGVyZVwiXG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgICAgdmFsdWU9e21haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgIFxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+QWRkIFBlcnNvbjwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICB7XG4gICAgICBwZW9wbGUubWFwKChwZXJzb24pPT57XG4gICAgICAgICBjb25zdHtpZCxuYW1lLG1haWx9PXBlcnNvblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGVzLm9uc3VibWl0fT5cbiAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgPGgyPjwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfSlcbiAgICB9XG5cbjwvPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZXVzZUVmZmVjdDtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb3JtOiB7XG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGNjY2NcIixcbiAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgIG1hcmdpbkxlZnQ6XCIzNSVcIixcbiAgICBtYXJnaW5Ub3A6XCIyMCVcIlxuICAgXG4gIH0sXG4gIGlucHV0VHlwZToge1xuICAgIGJvcmRlcjogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBtYXJnaW5Ub3A6XCIxMHB4XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luTGVmdDpcIjM3JVwiLFxuICAgIG1hcmdpblRvcDpcIjI0cHhcIlxuICB9LFxuICBOYW1lOntcbiAgICBtYXJnaW5MZWZ0OlwiMjAlXCJcbiAgfSxcbiAgaDE6e1xuICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcblxuICB9LFxuICBvbnN1Ym1pdDp7XG4gICAgY29sb3I6XCJyZWRcIixcbiAgICBkaXNwbGF5OlwiZmxleFwiLFxuICAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgICBwYWRkaW5nOlwiMzBweFwiLFxuICAgICBiYWNrZ3JvdW5kOlwiIzAwY2NjY1wiXG4gIH1cbiAgXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcmFjdGljZXVzZUVmZmVjdCIsIm5hbWUiLCJzZXROYW1lIiwibWFpbCIsInNldE1haWwiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZm9ybSIsImgxIiwiTmFtZSIsImlucHV0VHlwZSIsImJ1dHRvbiIsIm1hcCIsInBlcnNvbiIsImlkIiwib25zdWJtaXQiLCJjb2xvciIsImJhY2tncm91bmQiLCJ3aWR0aCIsInBhZGRpbmciLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PracticeuseEffect.js\n"));

/***/ })

});