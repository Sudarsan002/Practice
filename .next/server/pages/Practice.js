"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/Practice";
exports.ids = ["pages/Practice"];
exports.modules = {

/***/ "./pages/Practice.js":
/*!***************************!*\
  !*** ./pages/Practice.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/pages/Practice.js\";\n\n\nconst Practice = () => {\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details]; // return [...people, details];??\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    style: styles.button,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, \"Add Details\")), people.map(person => {\n    const {\n      id,\n      name,\n      mail\n    } = person;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.onsubmit,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 16\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 10\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 15\n      }\n    }, \"Name:\", name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }\n    }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 15\n      }\n    }, \"Mail:\", mail)));\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Practice);\nconst styles = {\n  form: {\n    color: \"black\",\n    background: \"#00cccc\",\n    width: \"400px\",\n    padding: \"30px\",\n    marginLeft: \"35%\",\n    marginTop: \"20%\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  onsubmit: {\n    color: \"Black\",\n    // display:\"flex\",\n    //  justifyContent:\"center\",\n    padding: \"10px\",\n    background: \"#f6f6f6\",\n    marginTop: \"10%\",\n    width: \"440px\",\n    marginLeft: \"35%\"\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWMsRUFBQztFQUZkLENBL0JVO0VBb0NiVixRQUFRLEVBQUM7SUFDUEMsS0FBSyxFQUFDLE9BREM7SUFFUDtJQUNBO0lBQ0NHLE9BQU8sRUFBQyxNQUpGO0lBS05GLFVBQVUsRUFBQyxTQUxMO0lBTU5JLFNBQVMsRUFBQyxLQU5KO0lBT05ILEtBQUssRUFBRSxPQVBEO0lBUU5FLFVBQVUsRUFBQztFQVJMO0FBcENJLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1kZW1vLy4vcGFnZXMvUHJhY3RpY2UuanM/NGE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKG5hbWUgJiYgbWFpbCkge1xuICAgICAgY29uc3QgZGV0YWlscyA9IHsgbmFtZSwgbWFpbCB9O1xuICAgICAgc2V0UGVvcGxlKChwZW9wbGUpID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5wZW9wbGUsIGRldGFpbHNdO1xuICAgICAgICAvLyByZXR1cm4gWy4uLnBlb3BsZSwgZGV0YWlsc107Pz9cbiAgICAgIH0pO1xuICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgIHNldE1haWwoXCJcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiIGRldGFpbHNcIik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPGZvcm0gc3R5bGU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICBcbiAgICA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+UmVnaXN0cmF0aW9uIEZvcm08L2gxPlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLk5hbWV9PlxuICAgICAgXG4gICAgICAgIDxsYWJlbCA+IE5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cIk5hbWVcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5OYW1lfT5cbiAgICAgICAgPGxhYmVsPiBFbWFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiRS1tYWlsXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbWFpbCBoZXJlXCJcbiAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgICAgICB2YWx1ZT17bWFpbH1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufT5BZGQgRGV0YWlsczwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbiAgICB7XG4gICAgICBwZW9wbGUubWFwKChwZXJzb24pPT57XG4gICAgICAgICBjb25zdHtpZCxuYW1lLG1haWx9PXBlcnNvblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGVzLm9uc3VibWl0fT5cbiAgICAgICAgIDxkaXY+PGg0Pk5hbWU6e25hbWV9PC9oND48L2Rpdj5cbiAgICAgICAgPGRpdj4gPHA+TWFpbDp7bWFpbH08L3A+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfSlcbiAgICB9XG5cbjwvPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb3JtOiB7XG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMwMGNjY2NcIixcbiAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgIG1hcmdpbkxlZnQ6XCIzNSVcIixcbiAgICBtYXJnaW5Ub3A6XCIyMCVcIlxuICAgXG4gIH0sXG4gIGlucHV0VHlwZToge1xuICAgIGJvcmRlcjogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBtYXJnaW5Ub3A6XCIxMHB4XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luTGVmdDpcIjM3JVwiLFxuICAgIG1hcmdpblRvcDpcIjI0cHhcIlxuICB9LFxuICBOYW1lOntcbiAgICBtYXJnaW5MZWZ0OlwiMjAlXCJcbiAgfSxcbiAgaDE6e1xuICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcblxuICB9LFxuICBvbnN1Ym1pdDp7XG4gICAgY29sb3I6XCJCbGFja1wiLFxuICAgIC8vIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgLy8gIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgIHBhZGRpbmc6XCIxMHB4XCIsXG4gICAgIGJhY2tncm91bmQ6XCIjZjZmNmY2XCIsXG4gICAgIG1hcmdpblRvcDpcIjEwJVwiLFxuICAgICB3aWR0aDogXCI0NDBweFwiLFxuICAgICBtYXJnaW5MZWZ0OlwiMzUlXCIsXG4gIH0sXG4gIFxuICBcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlByYWN0aWNlIiwibmFtZSIsInNldE5hbWUiLCJtYWlsIiwic2V0TWFpbCIsInBlb3BsZSIsInNldFBlb3BsZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJmb3JtIiwiaDEiLCJOYW1lIiwiaW5wdXRUeXBlIiwiYnV0dG9uIiwibWFwIiwicGVyc29uIiwiaWQiLCJvbnN1Ym1pdCIsImNvbG9yIiwiYmFja2dyb3VuZCIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Practice.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/Practice.js"));
module.exports = __webpack_exports__;

})();