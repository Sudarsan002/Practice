"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/D1",{

/***/ "./pages/D1.js":
/*!*********************!*\
  !*** ./pages/D1.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Foot\": function() { return /* binding */ Foot; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"UseArray\": function() { return /* binding */ UseArray; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/D1.js\",\n    _s = $RefreshSig$();\n\n\n\nconst Head = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styled.HeadContainer,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styled.HeadFont,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, \"Incresco Technologies\")));\n};\n\n_c = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\nconst Main = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styled.Main,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(UseArray, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n};\n_c2 = Main;\nconst UseArray = () => {\n  _s();\n\n  const bioData = [{\n    id: 0,\n    name: \"Sandy\",\n    age: \"21\",\n    role: \"SDE\"\n  }, {\n    id: 1,\n    name: \"Sanju\",\n    age: \"20\",\n    role: \"UI UX\"\n  }, {\n    id: 2,\n    name: \"Sudha\",\n    age: \"21\",\n    role: \"Marketing\"\n  }];\n  const [arr, setArr] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(bioData);\n\n  const clrAry = () => {\n    setArr([]);\n  };\n\n  const refresh = () => {\n    setArr(bioData);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, arr.map(ce => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styled.H1,\n    key: ce.id,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    style: {\n      marginLeft: \"20px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 10\n    }\n  }, \" Name:\", ce.name), \"    \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 64\n    }\n  }, \" Age:\", ce.age, \"     Role:\", ce.role))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: clrAry,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, \"Clear\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: refresh,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, \"REFRESH\"));\n}; // const [myVal,setMyVal]=useState(true)\n// const ChangeVal=()=>\n// {\n//     setMyVal(!myVal)\n// }\n// return(\n//     <>\n//         <h1>{myVal ? \"BYE\":\"HELLO\"}</h1> \n//         <button onClick={(event) =>{\n//             console.log(event);\n//         }}>\n//          Click Here\n//         </button>\n//     </>\n// )\n\n_s(UseArray, \"VNeX+Pv3knxONfJL87ZduE6+sLU=\");\n\n_c3 = UseArray;\nconst Foot = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styled.FootCont,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    style: styled.FootFont,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, \"Powered By Inc \")));\n};\n_c4 = Foot;\nconst styled = {\n  HeadContainer: {\n    padding: \"1.5rem 1px\",\n    backgroundColor: \"#000066\",\n    color: \"white\",\n    width: \"100%\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  HeadFont: {\n    padding: \"1px 50px\",\n    lineHeight: \"20px\"\n  },\n  FootCont: {\n    padding: \"1px 1px \",\n    width: \"100%\",\n    backgroundColor: \"#000066\"\n  },\n  FootFont: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    color: \"white\"\n  },\n  Main: {\n    heigth: \"100%\",\n    width: \"100%\",\n    minHeight: \"100vh\",\n    backgroundColor: \"#e6e6ff\",\n    marginTop: \"-20px\"\n  },\n  H1: {\n    padding: \"30px\",\n    display: \"flex\",\n    justifyContent: \"center\"\n  }\n};\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Head\");\n$RefreshReg$(_c2, \"Main\");\n$RefreshReg$(_c3, \"UseArray\");\n$RefreshReg$(_c4, \"Foot\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEscUJBREYsQ0FERixDQURGO0FBT0QsQ0FSTTtNQUFNRjtBQVViLE1BQU1sQixNQUFNLEdBQUc7RUFDYkMsYUFBYSxFQUFFO0lBQ2JvQixPQUFPLEVBQUUsWUFESTtJQUViQyxlQUFlLEVBQUUsU0FGSjtJQUdiQyxLQUFLLEVBQUUsT0FITTtJQUliQyxLQUFLLEVBQUUsTUFKTTtJQUtiQyxPQUFPLEVBQUUsTUFMSTtJQU1iQyxjQUFjLEVBQUU7RUFOSCxDQURGO0VBU2J4QixRQUFRLEVBQUU7SUFDUm1CLE9BQU8sRUFBRSxVQUREO0lBRVJNLFVBQVUsRUFBRTtFQUZKLENBVEc7RUFhYlIsUUFBUSxFQUFFO0lBQ1JFLE9BQU8sRUFBRSxVQUREO0lBRVJHLEtBQUssRUFBRSxNQUZDO0lBR1JGLGVBQWUsRUFBRTtFQUhULENBYkc7RUFrQmJGLFFBQVEsRUFBRTtJQUNSSyxPQUFPLEVBQUUsTUFERDtJQUVSQyxjQUFjLEVBQUUsUUFGUjtJQUdSSCxLQUFLLEVBQUU7RUFIQyxDQWxCRztFQXVCYnBCLElBQUksRUFBRTtJQUNKeUIsTUFBTSxFQUFFLE1BREo7SUFFSkosS0FBSyxFQUFFLE1BRkg7SUFHSkssU0FBUyxFQUFFLE9BSFA7SUFJSlAsZUFBZSxFQUFFLFNBSmI7SUFLSlEsU0FBUyxFQUFFO0VBTFAsQ0F2Qk87RUE4QmJkLEVBQUUsRUFBRTtJQUNGSyxPQUFPLEVBQUUsTUFEUDtJQUVGSSxPQUFPLEVBQUUsTUFGUDtJQUdGQyxjQUFjLEVBQUU7RUFIZDtBQTlCUyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0QxLmpzPzBhN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbiBjb25zdCBIZWFkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZWQuSGVhZENvbnRhaW5lcn0+XG4gICAgICAgIDxoMSBzdHlsZT17c3R5bGVkLkhlYWRGb250fT5JbmNyZXNjbyBUZWNobm9sb2dpZXM8L2gxPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSGVhZFxuXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZWQuTWFpbn0+XG4gICAgICA8VXNlQXJyYXkgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgVXNlQXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGJpb0RhdGEgPSBbXG4gICAgeyBpZDogMCwgbmFtZTogXCJTYW5keVwiLCBhZ2U6IFwiMjFcIiwgcm9sZTogXCJTREVcIiB9LFxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiU2FuanVcIiwgYWdlOiBcIjIwXCIsIHJvbGU6IFwiVUkgVVhcIiB9LFxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiU3VkaGFcIiwgYWdlOiBcIjIxXCIsIHJvbGU6IFwiTWFya2V0aW5nXCIgfSxcbiAgXTtcbiAgY29uc3QgW2Fyciwgc2V0QXJyXSA9IHVzZVN0YXRlKGJpb0RhdGEpO1xuICBcblxuICBjb25zdCBjbHJBcnkgPSAoKSA9PiB7XG4gICBzZXRBcnIoW10pXG4gIH07XG4gIGNvbnN0IHJlZnJlc2ggPSgpPT57XG4gICAgc2V0QXJyKGJpb0RhdGEpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2Fyci5tYXAoKGNlKSA9PiAoXG4gICAgICAgIDxoMSBzdHlsZT17c3R5bGVkLkgxfSBrZXk9e2NlLmlkfT5cbiAgICAgICAgIDxwIHN0eWxlPXt7bWFyZ2luTGVmdDpcIjIwcHhcIn19PiBOYW1lOntjZS5uYW1lfTwvcD4gICAgPHA+IEFnZTp7Y2UuYWdlfSAgICAgUm9sZTp7Y2Uucm9sZX08L3A+XG4gICAgICAgIDwvaDE+XG4gICAgICApKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2xyQXJ5fT5cbiAgICAgICAgQ2xlYXJcbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtyZWZyZXNofT5SRUZSRVNIPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5cbiAgICAvLyBjb25zdCBbbXlWYWwsc2V0TXlWYWxdPXVzZVN0YXRlKHRydWUpXG4gICAgLy8gY29uc3QgQ2hhbmdlVmFsPSgpPT5cbiAgICAvLyB7XG4gICAgLy8gICAgIHNldE15VmFsKCFteVZhbClcbiAgICAvLyB9XG4gICAgLy8gcmV0dXJuKFxuICAgIC8vICAgICA8PlxuICAgIC8vICAgICAgICAgPGgxPntteVZhbCA/IFwiQllFXCI6XCJIRUxMT1wifTwvaDE+IFxuICAgIC8vICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZXZlbnQpID0+e1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAvLyAgICAgICAgIH19PlxuICAgIC8vICAgICAgICAgIENsaWNrIEhlcmVcbiAgICAvLyAgICAgICAgIDwvYnV0dG9uPlxuICAgIC8vICAgICA8Lz5cbiAgICAvLyApXG5cblxuZXhwb3J0IGNvbnN0IEZvb3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlZC5Gb290Q29udH0+XG4gICAgICAgIDxwIHN0eWxlPXtzdHlsZWQuRm9vdEZvbnR9PlBvd2VyZWQgQnkgSW5jIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVkID0ge1xuICBIZWFkQ29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogXCIxLjVyZW0gMXB4XCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwNjZcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgSGVhZEZvbnQ6IHtcbiAgICBwYWRkaW5nOiBcIjFweCA1MHB4XCIsXG4gICAgbGluZUhlaWdodDogXCIyMHB4XCIsXG4gIH0sXG4gIEZvb3RDb250OiB7XG4gICAgcGFkZGluZzogXCIxcHggMXB4IFwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDA2NlwiLFxuICB9LFxuICBGb290Rm9udDoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gIH0sXG4gIE1haW46IHtcbiAgICBoZWlndGg6IFwiMTAwJVwiLFxuICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2U2ZTZmZlwiLFxuICAgIG1hcmdpblRvcDogXCItMjBweFwiLFxuICB9LFxuICBIMToge1xuICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxufTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJzdHlsZWQiLCJIZWFkQ29udGFpbmVyIiwiSGVhZEZvbnQiLCJNYWluIiwiVXNlQXJyYXkiLCJiaW9EYXRhIiwiaWQiLCJuYW1lIiwiYWdlIiwicm9sZSIsImFyciIsInNldEFyciIsImNsckFyeSIsInJlZnJlc2giLCJtYXAiLCJjZSIsIkgxIiwibWFyZ2luTGVmdCIsIkZvb3QiLCJGb290Q29udCIsIkZvb3RGb250IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwiaGVpZ3RoIiwibWluSGVpZ2h0IiwibWFyZ2luVG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/D1.js\n"));

/***/ })

});