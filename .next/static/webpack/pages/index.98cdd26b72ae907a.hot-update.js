"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/Components/Practice.js":
/*!************************************!*\
  !*** ./src/Components/Practice.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/src/Components/Practice.js\",\n    _s = $RefreshSig$();\n\n\n\nconst Practice = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleMouseEnter = e => {\n    e.target.style.background = \"#b30000\";\n    setShowText(true);\n  };\n\n  const handleMouseLeave = e => {\n    e.target.style.background = \"black\";\n    setShowText(false);\n  };\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details]; // return [people, details];??\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, \"adsfnjlf\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.main,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.button,\n    onClick: handleSubmit,\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"Add Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }), people.map(person => {\n    const {\n      id,\n      name,\n      mail\n    } = person;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.onsubmit,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 15\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 19\n      }\n    }, \"Name:\", name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 15\n      }\n    }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 19\n      }\n    }, \"Mail:\", mail))));\n  })));\n};\n\n_s(Practice, \"F9z9UM9yuZBDXy74Cxk21B67tV8=\");\n\n_c = Practice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Practice);\nconst styles = {\n  form: {\n    // color: \"black\",\n    background: \"#f6f6f6\",\n    width: \"400px\",\n    padding: \"30px\",\n    borderRadius: \"10px\"\n  },\n  main: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    height: \"100vh\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\",\n    padding: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\",\n    textAlign: \"center\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  onsubmit: {\n    color: \"Black\",\n    // display:\"flex\",\n    //  justifyContent:\"center\",\n    padding: \"10px\",\n    background: \"#f6f6f6\",\n    marginTop: \"10%\",\n    width: \"440px\",\n    marginLeft: \"35%\"\n  }\n}; // import React, { useEffect, useState } from 'react'\n// // const Dummy = () => {\n// //     // const[state,setState]=useState('Sudarsan')\n// //     // const onChange=(e)=>{\n// //     //     const newValue =e.target.value;\n// //     //     setState(newValue)\n// //     // }\n// //     // const[me,setMe]=useState({firstName:\" \" ,  lastName:\" \"})\n// //     let addnum = [4,5,6]\n// //     let num = [1,2,3,...addnum]\n// //     console.log(addnum)\n// //     console.log(num)\n// //     const [count, setCount] = useState(0)\n// //     const name={\n// //         fName:\"Sudarsan\",\n// //         lName:\"Perumal\"\n// //     }\n// //     const Aname={\n// //         ...name,\n// //         rename:\"velan\",\n// //         // lName:\"Perumal\"\n// //     }\n// //     console.log(Aname)\n// //     return (\n// //         <div>\n// //             <h1> {count}</h1>\n// //             {/* {console.log(count)} */}\n// //             <button onClick={() => setCount((prevState) => prevState + 1)}>\n// //                 + Increment\n// //             </button>\n// //             <button onClick={() => setCount((prevState) => prevState - 1)}>\n// //                 - Decrement\n// //             </button>\n// //             <button onClick={() => setCount(0)}>reset</button>\n// //             {/* <input  placeholder='Write here...' onChange={(e)=>{\n// //                 console.log(e)\n// //             }}/>\n// //             {state} */}\n// //             {/* <input type='text' value={me.firstName} onChange={e=>setMe({...me, firstName:e.target.value})}/>\n// //             <input type='text' value={me.lirstName} onChange={e=>setMe({...me, lirstName:e.target.value})}/>\n// //              My Name is {me.firstName}\n// //               {JSON.stringify(me)} */}\n// //         </div>\n// //     )\n// // }\n// const Array = [\n//     { id: '1', name: 'Sudarsan' },\n//     { id: '2', name: 'Sai' },\n//     { id: '3', name: 'Jeeth' },\n//     { id: '4', name: 'Sreedhar' },\n// ]\n// const Books = [\n//     {\n//         id: '1',\n//         title: 'Think and Grow Rich',\n//         author: 'NAPOLEON HILL',\n//         img: 'https://m.media-amazon.com/images/I/412k8mJUP6L._AC_UF452,452_FMjpg_.jpg',\n//     },\n//     {\n//         id: '2',\n//         title: 'The Power of Habit',\n//         author: 'CHARLES DUHIGG',\n//         img: 'https://m.media-amazon.com/images/I/41IhmDI07KL._AC_UF452,452_FMjpg_.jpg',\n//     },\n//     {\n//         id: '3',\n//         author: 'Ross Welford',\n//         title: 'The 1000 year Old Boy',\n//         img: 'https://m.media-amazon.com/images/I/415EJav3hrL._AC_UF452,452_FMjpg_.jpg',\n//     },\n// ]\n// const BookList = () => {\n//     return (\n//         <div style={styles.main}>\n//             {Books.map((book) => {\n//                 return (\n//                     <div>\n//                         <Book key={book.id} {...book}></Book>\n//                     </div>\n//                 )\n//             })}\n//         </div>\n//     )\n// }\n// const Book = ({ img, title, author }) => {\n//     // const clickHandle = (e) => {\n//     //     if (text === 'Sudarsan') {\n//     //         setText('Sai')\n//     //     } else {\n//     //         setText('Velan')\n//     //     }\n//     // }\n//     // const [text, setText] = useState('Sudarsan')\n// //\n//     // const [person, setPerson] = useState(Array)\n//     // const removingItems = (id) => {\n//     //     let newPerson = person.filter((people) => people.id !== id)\n//     //     setPerson(newPerson)\n//     // }\n//     const [value,setValue]=useState(0)\n//     const onClick=()=>{\n//         setValue(0)\n//     }\n//     const intervalIncrease=()=>{\n//         setTimeout(()=>{\n//             setValue(value+1)\n//         },2000)\n//     }\n//     return (\n//         <div style={styles.book}>\n//             <span style={styles.Image}>\n//                 <img src={} />\n//             </span>\n//             <span style={styles.h1}>\n//                 <h1> {title}</h1>\n//             </span>\n//             <span style={styles.Author}>\n//                 <h4>{author} </h4>\n//             </span>\n//             {/* <button type=\"button\" onClick={handleClick}>\n//                 Click Here...!\n//             </button>\n//             <h1>{text}</h1>\n//             <button type=\"button\" onClick={clickHandle}>\n//                 Press here..!\n//             </button> */}\n//             {/* <div style={styles.Array}>\n//                 {person.map((props) => {\n//                     const { id, name } = props\n//                     return (\n//                         <div key={id}>\n//                             {name}\n//                         </div>\n//                     )\n//                 })}\n//             </div>\n//              */}\n//             {value}\n//             <button onClick={()=>setValue(value+1)}>Increment</button>\n//             <button onClick={()=>setValue(value-1)}>Decrement</button>\n//             <button onClick={onClick}>Reset </button>\n//          <h1>{value}</h1>\n//          <h1>   <button  style={styles.dummybtn} onClick={intervalIncrease}>Increment after 2sec</button></h1>\n//         </div>\n//     )\n// }\n// export default BookList\n// const styles = {\n//     main: {\n//         margin: '0%',\n//     },\n//     h1: {\n//         color: 'Black',\n//         fontWeight: '700',\n//     },\n//     booklist: {\n//         width: '90vw',\n//         margin: '5rem auto ',\n//         display: 'flex',\n//         flexDirecton: 'row',\n//     },\n//     book: {\n//         background: '#f6f6f6',\n//         borderRadius: '10px',\n//         padding: '15px',\n//         margin: '450px',\n//         marginTop: '10%',\n//     },\n//     Image: {\n//         alignItems: 'center',\n//         padding: '100px',\n//     },\n//     Author: {\n//         color: '#6179d8',\n//         letterSpacing: '2.5px',\n//     },\n//     Array: {\n//         padding: '10px',\n//         color: 'Black ',\n//         background: '#f6f6f6',\n//     },\n//     dummybtn: {\n//         color: 'white',\n//         background: 'Green',\n//         padding: '10px',\n//         borderRadius: '5px',\n//         marginLeft: '40%',\n//         border: 'Green',\n//     },\n//     removebtn: {\n//         color: 'white',\n//         background: '#4863A0',\n//         padding: '5px',\n//         borderRadius: '5px',\n//         border: '#7FFFD4',\n//     },\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Practice\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FMSjtJQU1SNkIsU0FBUyxFQUFFLEtBTkg7SUFPUlQsS0FBSyxFQUFFLE9BUEM7SUFRUlUsVUFBVSxFQUFFO0VBUko7QUEzQ0csQ0FBZixFQXVEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1ByYWN0aWNlLmpzP2M0YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW3Nob3dUZXh0LCBzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiNiMzAwMDBcIjtcbiAgICBzZXRTaG93VGV4dCh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICBzZXRTaG93VGV4dChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmFtZSAmJiBtYWlsKSB7XG4gICAgICBjb25zdCBkZXRhaWxzID0geyBuYW1lLCBtYWlsIH07XG4gICAgICBzZXRQZW9wbGUoKHBlb3BsZSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLnBlb3BsZSwgZGV0YWlsc107XG4gICAgICAgIC8vIHJldHVybiBbcGVvcGxlLCBkZXRhaWxzXTs/P1xuICAgICAgfSk7XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0TWFpbChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCIgZGV0YWlsc1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIGFkc2ZuamxmXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxmb3JtIHN0eWxlPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGgxIHN0eWxlPXtzdHlsZXMuaDF9PlJlZ2lzdHJhdGlvbiBGb3JtPC9oMT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuTmFtZX0+XG4gICAgICAgICAgICA8bGFiZWw+IE5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZSBoZXJlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuTmFtZX0+XG4gICAgICAgICAgICA8bGFiZWw+IEVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJFLW1haWxcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbWFpbCBoZXJlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgICAgICAgIHZhbHVlPXttYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSAgXG4gICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX0+QWRkIERldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgICB7c2hvd1RleHQgJiYgPGgxPkhpIC4uLiE8L2gxPn0gKi99XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQWRkIERldGFpbHNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICB7cGVvcGxlLm1hcCgocGVyc29uKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSwgbWFpbCB9ID0gcGVyc29uO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMub25zdWJtaXR9PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoND5cbiAgICAgICAgICAgICAgICAgIDxsaT5OYW1lOntuYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgPGxpPk1haWw6e21haWx9PC9saT5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2U7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIC8vIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgYmFja2dyb3VuZDogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNDAwcHhcIixcbiAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgIFxuICB9LFxuICBtYWluOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgfSxcblxuICBpbnB1dFR5cGU6IHtcbiAgICBib3JkZXI6IFwiI2Y2ZjZmNlwiLFxuICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgcGFkZGluZzogXCI1cHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgbWFyZ2luVG9wOiBcIjEwcHhcIixcbiAgICBwYWRkaW5nOlwiMTBweFwiXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luTGVmdDogXCIzNyVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMjRweFwiLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgfSxcbiAgTmFtZToge1xuICAgIG1hcmdpbkxlZnQ6IFwiMjAlXCIsXG4gIH0sXG4gIGgxOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gIH0sXG4gIG9uc3VibWl0OiB7XG4gICAgY29sb3I6IFwiQmxhY2tcIixcbiAgICAvLyBkaXNwbGF5OlwiZmxleFwiLFxuICAgIC8vICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIGJhY2tncm91bmQ6IFwiI2Y2ZjZmNlwiLFxuICAgIG1hcmdpblRvcDogXCIxMCVcIixcbiAgICB3aWR0aDogXCI0NDBweFwiLFxuICAgIG1hcmdpbkxlZnQ6IFwiMzUlXCIsXG4gIH0sXG59O1xuXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG4vLyAvLyBjb25zdCBEdW1teSA9ICgpID0+IHtcbi8vIC8vICAgICAvLyBjb25zdFtzdGF0ZSxzZXRTdGF0ZV09dXNlU3RhdGUoJ1N1ZGFyc2FuJylcbi8vIC8vICAgICAvLyBjb25zdCBvbkNoYW5nZT0oZSk9Pntcbi8vIC8vICAgICAvLyAgICAgY29uc3QgbmV3VmFsdWUgPWUudGFyZ2V0LnZhbHVlO1xuLy8gLy8gICAgIC8vICAgICBzZXRTdGF0ZShuZXdWYWx1ZSlcbi8vIC8vICAgICAvLyB9XG4vLyAvLyAgICAgLy8gY29uc3RbbWUsc2V0TWVdPXVzZVN0YXRlKHtmaXJzdE5hbWU6XCIgXCIgLCAgbGFzdE5hbWU6XCIgXCJ9KVxuLy8gLy8gICAgIGxldCBhZGRudW0gPSBbNCw1LDZdXG4vLyAvLyAgICAgbGV0IG51bSA9IFsxLDIsMywuLi5hZGRudW1dXG5cbi8vIC8vICAgICBjb25zb2xlLmxvZyhhZGRudW0pXG4vLyAvLyAgICAgY29uc29sZS5sb2cobnVtKVxuXG4vLyAvLyAgICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuXG4vLyAvLyAgICAgY29uc3QgbmFtZT17XG4vLyAvLyAgICAgICAgIGZOYW1lOlwiU3VkYXJzYW5cIixcbi8vIC8vICAgICAgICAgbE5hbWU6XCJQZXJ1bWFsXCJcbi8vIC8vICAgICB9XG4vLyAvLyAgICAgY29uc3QgQW5hbWU9e1xuLy8gLy8gICAgICAgICAuLi5uYW1lLFxuLy8gLy8gICAgICAgICByZW5hbWU6XCJ2ZWxhblwiLFxuLy8gLy8gICAgICAgICAvLyBsTmFtZTpcIlBlcnVtYWxcIlxuLy8gLy8gICAgIH1cbi8vIC8vICAgICBjb25zb2xlLmxvZyhBbmFtZSlcblxuLy8gLy8gICAgIHJldHVybiAoXG4vLyAvLyAgICAgICAgIDxkaXY+XG4vLyAvLyAgICAgICAgICAgICA8aDE+IHtjb3VudH08L2gxPlxuLy8gLy8gICAgICAgICAgICAgey8qIHtjb25zb2xlLmxvZyhjb3VudCl9ICovfVxuLy8gLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgKyAxKX0+XG4vLyAvLyAgICAgICAgICAgICAgICAgKyBJbmNyZW1lbnRcbi8vIC8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgocHJldlN0YXRlKSA9PiBwcmV2U3RhdGUgLSAxKX0+XG4vLyAvLyAgICAgICAgICAgICAgICAgLSBEZWNyZW1lbnRcbi8vIC8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudCgwKX0+cmVzZXQ8L2J1dHRvbj5cbi8vIC8vICAgICAgICAgICAgIHsvKiA8aW5wdXQgIHBsYWNlaG9sZGVyPSdXcml0ZSBoZXJlLi4uJyBvbkNoYW5nZT17KGUpPT57XG4vLyAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbi8vIC8vICAgICAgICAgICAgIH19Lz5cbi8vIC8vICAgICAgICAgICAgIHtzdGF0ZX0gKi99XG4vLyAvLyAgICAgICAgICAgICB7LyogPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXttZS5maXJzdE5hbWV9IG9uQ2hhbmdlPXtlPT5zZXRNZSh7Li4ubWUsIGZpcnN0TmFtZTplLnRhcmdldC52YWx1ZX0pfS8+XG4vLyAvLyAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e21lLmxpcnN0TmFtZX0gb25DaGFuZ2U9e2U9PnNldE1lKHsuLi5tZSwgbGlyc3ROYW1lOmUudGFyZ2V0LnZhbHVlfSl9Lz5cbi8vIC8vICAgICAgICAgICAgICBNeSBOYW1lIGlzIHttZS5maXJzdE5hbWV9XG4vLyAvLyAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShtZSl9ICovfVxuLy8gLy8gICAgICAgICA8L2Rpdj5cbi8vIC8vICAgICApXG4vLyAvLyB9XG4vLyBjb25zdCBBcnJheSA9IFtcbi8vICAgICB7IGlkOiAnMScsIG5hbWU6ICdTdWRhcnNhbicgfSxcbi8vICAgICB7IGlkOiAnMicsIG5hbWU6ICdTYWknIH0sXG4vLyAgICAgeyBpZDogJzMnLCBuYW1lOiAnSmVldGgnIH0sXG4vLyAgICAgeyBpZDogJzQnLCBuYW1lOiAnU3JlZWRoYXInIH0sXG4vLyBdXG4vLyBjb25zdCBCb29rcyA9IFtcbi8vICAgICB7XG4vLyAgICAgICAgIGlkOiAnMScsXG4vLyAgICAgICAgIHRpdGxlOiAnVGhpbmsgYW5kIEdyb3cgUmljaCcsXG4vLyAgICAgICAgIGF1dGhvcjogJ05BUE9MRU9OIEhJTEwnLFxuLy8gICAgICAgICBpbWc6ICdodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS80MTJrOG1KVVA2TC5fQUNfVUY0NTIsNDUyX0ZNanBnXy5qcGcnLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgICBpZDogJzInLFxuLy8gICAgICAgICB0aXRsZTogJ1RoZSBQb3dlciBvZiBIYWJpdCcsXG4vLyAgICAgICAgIGF1dGhvcjogJ0NIQVJMRVMgRFVISUdHJyxcbi8vICAgICAgICAgaW1nOiAnaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFJaG1ESTA3S0wuX0FDX1VGNDUyLDQ1Ml9GTWpwZ18uanBnJyxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgICAgaWQ6ICczJyxcbi8vICAgICAgICAgYXV0aG9yOiAnUm9zcyBXZWxmb3JkJyxcbi8vICAgICAgICAgdGl0bGU6ICdUaGUgMTAwMCB5ZWFyIE9sZCBCb3knLFxuLy8gICAgICAgICBpbWc6ICdodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS80MTVFSmF2M2hyTC5fQUNfVUY0NTIsNDUyX0ZNanBnXy5qcGcnLFxuLy8gICAgIH0sXG4vLyBdXG5cbi8vIGNvbnN0IEJvb2tMaXN0ID0gKCkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWlufT5cbi8vICAgICAgICAgICAgIHtCb29rcy5tYXAoKGJvb2spID0+IHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPEJvb2sga2V5PXtib29rLmlkfSB7Li4uYm9va30+PC9Cb29rPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gfVxuXG4vLyBjb25zdCBCb29rID0gKHsgaW1nLCB0aXRsZSwgYXV0aG9yIH0pID0+IHtcbi8vICAgICAvLyBjb25zdCBjbGlja0hhbmRsZSA9IChlKSA9PiB7XG4vLyAgICAgLy8gICAgIGlmICh0ZXh0ID09PSAnU3VkYXJzYW4nKSB7XG4vLyAgICAgLy8gICAgICAgICBzZXRUZXh0KCdTYWknKVxuLy8gICAgIC8vICAgICB9IGVsc2Uge1xuLy8gICAgIC8vICAgICAgICAgc2V0VGV4dCgnVmVsYW4nKVxuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCdTdWRhcnNhbicpXG4vLyAvL1xuLy8gICAgIC8vIGNvbnN0IFtwZXJzb24sIHNldFBlcnNvbl0gPSB1c2VTdGF0ZShBcnJheSlcblxuLy8gICAgIC8vIGNvbnN0IHJlbW92aW5nSXRlbXMgPSAoaWQpID0+IHtcbi8vICAgICAvLyAgICAgbGV0IG5ld1BlcnNvbiA9IHBlcnNvbi5maWx0ZXIoKHBlb3BsZSkgPT4gcGVvcGxlLmlkICE9PSBpZClcbi8vICAgICAvLyAgICAgc2V0UGVyc29uKG5ld1BlcnNvbilcbi8vICAgICAvLyB9XG5cbi8vICAgICBjb25zdCBbdmFsdWUsc2V0VmFsdWVdPXVzZVN0YXRlKDApXG5cbi8vICAgICBjb25zdCBvbkNsaWNrPSgpPT57XG4vLyAgICAgICAgIHNldFZhbHVlKDApXG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IGludGVydmFsSW5jcmVhc2U9KCk9Pntcbi8vICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuLy8gICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUrMSlcbi8vICAgICAgICAgfSwyMDAwKVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYm9va30+XG4vLyAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLkltYWdlfT5cbi8vICAgICAgICAgICAgICAgICA8aW1nIHNyYz17fSAvPlxuLy8gICAgICAgICAgICAgPC9zcGFuPlxuXG4vLyAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLmgxfT5cbi8vICAgICAgICAgICAgICAgICA8aDE+IHt0aXRsZX08L2gxPlxuLy8gICAgICAgICAgICAgPC9zcGFuPlxuXG4vLyAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLkF1dGhvcn0+XG4vLyAgICAgICAgICAgICAgICAgPGg0PnthdXRob3J9IDwvaDQ+XG4vLyAgICAgICAgICAgICA8L3NwYW4+XG4vLyAgICAgICAgICAgICB7LyogPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuLy8gICAgICAgICAgICAgICAgIENsaWNrIEhlcmUuLi4hXG4vLyAgICAgICAgICAgICA8L2J1dHRvbj5cblxuLy8gICAgICAgICAgICAgPGgxPnt0ZXh0fTwvaDE+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbGlja0hhbmRsZX0+XG4vLyAgICAgICAgICAgICAgICAgUHJlc3MgaGVyZS4uIVxuLy8gICAgICAgICAgICAgPC9idXR0b24+ICovfVxuXG4vLyAgICAgICAgICAgICB7LyogPGRpdiBzdHlsZT17c3R5bGVzLkFycmF5fT5cbi8vICAgICAgICAgICAgICAgICB7cGVyc29uLm1hcCgocHJvcHMpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgbmFtZSB9ID0gcHJvcHNcbi8vICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZH0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25hbWV9XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICApXG4vLyAgICAgICAgICAgICAgICAgfSl9XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAqL31cbi8vICAgICAgICAgICAgIHt2YWx1ZX1cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFZhbHVlKHZhbHVlKzEpfT5JbmNyZW1lbnQ8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PnNldFZhbHVlKHZhbHVlLTEpfT5EZWNyZW1lbnQ8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja30+UmVzZXQgPC9idXR0b24+XG5cbi8vICAgICAgICAgIDxoMT57dmFsdWV9PC9oMT5cbi8vICAgICAgICAgIDxoMT4gICA8YnV0dG9uICBzdHlsZT17c3R5bGVzLmR1bW15YnRufSBvbkNsaWNrPXtpbnRlcnZhbEluY3JlYXNlfT5JbmNyZW1lbnQgYWZ0ZXIgMnNlYzwvYnV0dG9uPjwvaDE+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgQm9va0xpc3RcblxuLy8gY29uc3Qgc3R5bGVzID0ge1xuLy8gICAgIG1haW46IHtcbi8vICAgICAgICAgbWFyZ2luOiAnMCUnLFxuLy8gICAgIH0sXG4vLyAgICAgaDE6IHtcbi8vICAgICAgICAgY29sb3I6ICdCbGFjaycsXG4vLyAgICAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuLy8gICAgIH0sXG4vLyAgICAgYm9va2xpc3Q6IHtcbi8vICAgICAgICAgd2lkdGg6ICc5MHZ3Jyxcbi8vICAgICAgICAgbWFyZ2luOiAnNXJlbSBhdXRvICcsXG4vLyAgICAgICAgIGRpc3BsYXk6ICdmbGV4Jyxcbi8vICAgICAgICAgZmxleERpcmVjdG9uOiAncm93Jyxcbi8vICAgICB9LFxuLy8gICAgIGJvb2s6IHtcbi8vICAgICAgICAgYmFja2dyb3VuZDogJyNmNmY2ZjYnLFxuLy8gICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4Jyxcbi8vICAgICAgICAgcGFkZGluZzogJzE1cHgnLFxuLy8gICAgICAgICBtYXJnaW46ICc0NTBweCcsXG4vLyAgICAgICAgIG1hcmdpblRvcDogJzEwJScsXG4vLyAgICAgfSxcbi8vICAgICBJbWFnZToge1xuLy8gICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbi8vICAgICAgICAgcGFkZGluZzogJzEwMHB4Jyxcbi8vICAgICB9LFxuLy8gICAgIEF1dGhvcjoge1xuLy8gICAgICAgICBjb2xvcjogJyM2MTc5ZDgnLFxuLy8gICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMi41cHgnLFxuLy8gICAgIH0sXG4vLyAgICAgQXJyYXk6IHtcbi8vICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuLy8gICAgICAgICBjb2xvcjogJ0JsYWNrICcsXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICcjZjZmNmY2Jyxcbi8vICAgICB9LFxuLy8gICAgIGR1bW15YnRuOiB7XG4vLyAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnR3JlZW4nLFxuLy8gICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4vLyAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4vLyAgICAgICAgIG1hcmdpbkxlZnQ6ICc0MCUnLFxuLy8gICAgICAgICBib3JkZXI6ICdHcmVlbicsXG4vLyAgICAgfSxcbi8vICAgICByZW1vdmVidG46IHtcbi8vICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICcjNDg2M0EwJyxcbi8vICAgICAgICAgcGFkZGluZzogJzVweCcsXG4vLyAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXG4vLyAgICAgICAgIGJvcmRlcjogJyM3RkZGRDQnLFxuLy8gICAgIH0sXG4vLyB9XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByYWN0aWNlIiwibmFtZSIsInNldE5hbWUiLCJtYWlsIiwic2V0TWFpbCIsInBlb3BsZSIsInNldFBlb3BsZSIsInNob3dUZXh0Iiwic2V0U2hvd1RleHQiLCJoYW5kbGVNb3VzZUVudGVyIiwiZSIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJtYWluIiwiZm9ybSIsImgxIiwiTmFtZSIsImlucHV0VHlwZSIsImJ1dHRvbiIsIm1hcCIsInBlcnNvbiIsImlkIiwib25zdWJtaXQiLCJ3aWR0aCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiYm9yZGVyIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Practice.js\n"));

/***/ })

});