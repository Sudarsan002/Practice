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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/src/Components/Practice.js\",\n    _s = $RefreshSig$();\n\n\n\nconst Practice = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleMouseEnter = e => {\n    e.target.style.background = \"#b30000\";\n    setShowText(true);\n  };\n\n  const handleMouseLeave = e => {\n    e.target.style.background = \"black\";\n    setShowText(false);\n  };\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details]; // return [people, details];??\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.main,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 11\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 13\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.button,\n    onClick: handleSubmit,\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, \"Add Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  }), people.map(person => {\n    const {\n      id,\n      name,\n      mail\n    } = person;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.onsubmit,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 15\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 19\n      }\n    }, \"Name:\", name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 15\n      }\n    }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 19\n      }\n    }, \"Mail:\", mail))));\n  })));\n};\n\n_s(Practice, \"F9z9UM9yuZBDXy74Cxk21B67tV8=\");\n\n_c = Practice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Practice);\nconst styles = {\n  form: {\n    // color: \"black\",\n    background: \"#b7e4c7\",\n    width: \"400px\",\n    padding: \"30px\",\n    borderRadius: \"10px\"\n  },\n  main: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    height: \"100vh\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\",\n    padding: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\",\n    textAlign: \"center\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  onsubmit: {\n    color: \"Black\",\n    // display:\"flex\",\n    //  justifyContent:\"center\",\n    padding: \"10px\",\n    background: \"#f6f6f6\",\n    marginTop: \"10%\",\n    width: \"440px\",\n    marginLeft: \"35%\"\n  }\n}; // import React, { useEffect, useState } from 'react'\n// // const Dummy = () => {\n// //     // const[state,setState]=useState('Sudarsan')\n// //     // const onChange=(e)=>{\n// //     //     const newValue =e.target.value;\n// //     //     setState(newValue)\n// //     // }\n// //     // const[me,setMe]=useState({firstName:\" \" ,  lastName:\" \"})\n// //     let addnum = [4,5,6]\n// //     let num = [1,2,3,...addnum]\n// //     console.log(addnum)\n// //     console.log(num)\n// //     const [count, setCount] = useState(0)\n// //     const name={\n// //         fName:\"Sudarsan\",\n// //         lName:\"Perumal\"\n// //     }\n// //     const Aname={\n// //         ...name,\n// //         rename:\"velan\",\n// //         // lName:\"Perumal\"\n// //     }\n// //     console.log(Aname)\n// //     return (\n// //         <div>\n// //             <h1> {count}</h1>\n// //             {/* {console.log(count)} */}\n// //             <button onClick={() => setCount((prevState) => prevState + 1)}>\n// //                 + Increment\n// //             </button>\n// //             <button onClick={() => setCount((prevState) => prevState - 1)}>\n// //                 - Decrement\n// //             </button>\n// //             <button onClick={() => setCount(0)}>reset</button>\n// //             {/* <input  placeholder='Write here...' onChange={(e)=>{\n// //                 console.log(e)\n// //             }}/>\n// //             {state} */}\n// //             {/* <input type='text' value={me.firstName} onChange={e=>setMe({...me, firstName:e.target.value})}/>\n// //             <input type='text' value={me.lirstName} onChange={e=>setMe({...me, lirstName:e.target.value})}/>\n// //              My Name is {me.firstName}\n// //               {JSON.stringify(me)} */}\n// //         </div>\n// //     )\n// // }\n// const Array = [\n//     { id: '1', name: 'Sudarsan' },\n//     { id: '2', name: 'Sai' },\n//     { id: '3', name: 'Jeeth' },\n//     { id: '4', name: 'Sreedhar' },\n// ]\n// const Books = [\n//     {\n//         id: '1',\n//         title: 'Think and Grow Rich',\n//         author: 'NAPOLEON HILL',\n//         img: 'https://m.media-amazon.com/images/I/412k8mJUP6L._AC_UF452,452_FMjpg_.jpg',\n//     },\n//     {\n//         id: '2',\n//         title: 'The Power of Habit',\n//         author: 'CHARLES DUHIGG',\n//         img: 'https://m.media-amazon.com/images/I/41IhmDI07KL._AC_UF452,452_FMjpg_.jpg',\n//     },\n//     {\n//         id: '3',\n//         author: 'Ross Welford',\n//         title: 'The 1000 year Old Boy',\n//         img: 'https://m.media-amazon.com/images/I/415EJav3hrL._AC_UF452,452_FMjpg_.jpg',\n//     },\n// ]\n// const BookList = () => {\n//     return (\n//         <div style={styles.main}>\n//             {Books.map((book) => {\n//                 return (\n//                     <div>\n//                         <Book key={book.id} {...book}></Book>\n//                     </div>\n//                 )\n//             })}\n//         </div>\n//     )\n// }\n// const Book = ({ img, title, author }) => {\n//     // const clickHandle = (e) => {\n//     //     if (text === 'Sudarsan') {\n//     //         setText('Sai')\n//     //     } else {\n//     //         setText('Velan')\n//     //     }\n//     // }\n//     // const [text, setText] = useState('Sudarsan')\n// //\n//     // const [person, setPerson] = useState(Array)\n//     // const removingItems = (id) => {\n//     //     let newPerson = person.filter((people) => people.id !== id)\n//     //     setPerson(newPerson)\n//     // }\n//     const [value,setValue]=useState(0)\n//     const onClick=()=>{\n//         setValue(0)\n//     }\n//     const intervalIncrease=()=>{\n//         setTimeout(()=>{\n//             setValue(value+1)\n//         },2000)\n//     }\n//     return (\n//         <div style={styles.book}>\n//             <span style={styles.Image}>\n//                 <img src={} />\n//             </span>\n//             <span style={styles.h1}>\n//                 <h1> {title}</h1>\n//             </span>\n//             <span style={styles.Author}>\n//                 <h4>{author} </h4>\n//             </span>\n//             {/* <button type=\"button\" onClick={handleClick}>\n//                 Click Here...!\n//             </button>\n//             <h1>{text}</h1>\n//             <button type=\"button\" onClick={clickHandle}>\n//                 Press here..!\n//             </button> */}\n//             {/* <div style={styles.Array}>\n//                 {person.map((props) => {\n//                     const { id, name } = props\n//                     return (\n//                         <div key={id}>\n//                             {name}\n//                         </div>\n//                     )\n//                 })}\n//             </div>\n//              */}\n//             {value}\n//             <button onClick={()=>setValue(value+1)}>Increment</button>\n//             <button onClick={()=>setValue(value-1)}>Decrement</button>\n//             <button onClick={onClick}>Reset </button>\n//          <h1>{value}</h1>\n//          <h1>   <button  style={styles.dummybtn} onClick={intervalIncrease}>Increment after 2sec</button></h1>\n//         </div>\n//     )\n// }\n// export default BookList\n// const styles = {\n//     main: {\n//         margin: '0%',\n//     },\n//     h1: {\n//         color: 'Black',\n//         fontWeight: '700',\n//     },\n//     booklist: {\n//         width: '90vw',\n//         margin: '5rem auto ',\n//         display: 'flex',\n//         flexDirecton: 'row',\n//     },\n//     book: {\n//         background: '#f6f6f6',\n//         borderRadius: '10px',\n//         padding: '15px',\n//         margin: '450px',\n//         marginTop: '10%',\n//     },\n//     Image: {\n//         alignItems: 'center',\n//         padding: '100px',\n//     },\n//     Author: {\n//         color: '#6179d8',\n//         letterSpacing: '2.5px',\n//     },\n//     Array: {\n//         padding: '10px',\n//         color: 'Black ',\n//         background: '#f6f6f6',\n//     },\n//     dummybtn: {\n//         color: 'white',\n//         background: 'Green',\n//         padding: '10px',\n//         borderRadius: '5px',\n//         marginLeft: '40%',\n//         border: 'Green',\n//     },\n//     removebtn: {\n//         color: 'white',\n//         background: '#4863A0',\n//         padding: '5px',\n//         borderRadius: '5px',\n//         border: '#7FFFD4',\n//     },\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Practice\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FMSjtJQU1SNkIsU0FBUyxFQUFFLEtBTkg7SUFPUlQsS0FBSyxFQUFFLE9BUEM7SUFRUlUsVUFBVSxFQUFFO0VBUko7QUEzQ0csQ0FBZixFQXVEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9Db21wb25lbnRzL1ByYWN0aWNlLmpzP2M0YzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IFByYWN0aWNlID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21haWwsIHNldE1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwZW9wbGUsIHNldFBlb3BsZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW3Nob3dUZXh0LCBzZXRTaG93VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZU1vdXNlRW50ZXIgPSAoZSkgPT4ge1xuICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiNiMzAwMDBcIjtcbiAgICBzZXRTaG93VGV4dCh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiYmxhY2tcIjtcbiAgICBzZXRTaG93VGV4dChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAobmFtZSAmJiBtYWlsKSB7XG4gICAgICBjb25zdCBkZXRhaWxzID0geyBuYW1lLCBtYWlsIH07XG4gICAgICBzZXRQZW9wbGUoKHBlb3BsZSkgPT4ge1xuICAgICAgICByZXR1cm4gWy4uLnBlb3BsZSwgZGV0YWlsc107XG4gICAgICAgIC8vIHJldHVybiBbcGVvcGxlLCBkZXRhaWxzXTs/P1xuICAgICAgfSk7XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0TWFpbChcIlwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCIgZGV0YWlsc1wiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8Zm9ybSBzdHlsZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxoMSBzdHlsZT17c3R5bGVzLmgxfT5SZWdpc3RyYXRpb24gRm9ybTwvaDE+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLk5hbWV9PlxuICAgICAgICAgICAgPGxhYmVsPiBOYW1lOiA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWUgaGVyZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLk5hbWV9PlxuICAgICAgICAgICAgPGxhYmVsPiBFbWFpbDogPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwiRS1tYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1haWwgaGVyZVwiXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRUeXBlfVxuICAgICAgICAgICAgICB2YWx1ZT17bWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gIFxuICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9PkFkZCBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgICAge3Nob3dUZXh0ICYmIDxoMT5IaSAuLi4hPC9oMT59ICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBEZXRhaWxzXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAge3Blb3BsZS5tYXAoKHBlcnNvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIG1haWwgfSA9IHBlcnNvbjtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm9uc3VibWl0fT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgICA8bGk+TmFtZTp7bmFtZX08L2xpPlxuICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDxsaT5NYWlsOnttYWlsfTwvbGk+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcmFjdGljZTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb3JtOiB7XG4gICAgLy8gY29sb3I6IFwiYmxhY2tcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNiN2U0YzdcIixcbiAgICB3aWR0aDogXCI0MDBweFwiLFxuICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCIxMHB4XCIsXG4gICAgXG4gIH0sXG4gIG1haW46IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuXG4gIGlucHV0VHlwZToge1xuICAgIGJvcmRlcjogXCIjZjZmNmY2XCIsXG4gICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgY29sb3I6IFwiYmxhY2tcIixcbiAgICBwYWRkaW5nOiBcIjVweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBtYXJnaW5Ub3A6IFwiMTBweFwiLFxuICAgIHBhZGRpbmc6XCIxMHB4XCJcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgYmFja2dyb3VuZDogXCJibGFja1wiLFxuICAgIGJvcmRlcjogXCIjMWE4Y2ZmXCIsXG4gICAgcGFkZGluZzogXCI3cHhcIixcbiAgICB3aWR0aDogXCIyNSVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjM3JVwiLFxuICAgIG1hcmdpblRvcDogXCIyNHB4XCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9LFxuICBOYW1lOiB7XG4gICAgbWFyZ2luTGVmdDogXCIyMCVcIixcbiAgfSxcbiAgaDE6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgfSxcbiAgb25zdWJtaXQ6IHtcbiAgICBjb2xvcjogXCJCbGFja1wiLFxuICAgIC8vIGRpc3BsYXk6XCJmbGV4XCIsXG4gICAgLy8gIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG4gICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgYmFja2dyb3VuZDogXCIjZjZmNmY2XCIsXG4gICAgbWFyZ2luVG9wOiBcIjEwJVwiLFxuICAgIHdpZHRoOiBcIjQ0MHB4XCIsXG4gICAgbWFyZ2luTGVmdDogXCIzNSVcIixcbiAgfSxcbn07XG5cbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbi8vIC8vIGNvbnN0IER1bW15ID0gKCkgPT4ge1xuLy8gLy8gICAgIC8vIGNvbnN0W3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZSgnU3VkYXJzYW4nKVxuLy8gLy8gICAgIC8vIGNvbnN0IG9uQ2hhbmdlPShlKT0+e1xuLy8gLy8gICAgIC8vICAgICBjb25zdCBuZXdWYWx1ZSA9ZS50YXJnZXQudmFsdWU7XG4vLyAvLyAgICAgLy8gICAgIHNldFN0YXRlKG5ld1ZhbHVlKVxuLy8gLy8gICAgIC8vIH1cbi8vIC8vICAgICAvLyBjb25zdFttZSxzZXRNZV09dXNlU3RhdGUoe2ZpcnN0TmFtZTpcIiBcIiAsICBsYXN0TmFtZTpcIiBcIn0pXG4vLyAvLyAgICAgbGV0IGFkZG51bSA9IFs0LDUsNl1cbi8vIC8vICAgICBsZXQgbnVtID0gWzEsMiwzLC4uLmFkZG51bV1cblxuLy8gLy8gICAgIGNvbnNvbGUubG9nKGFkZG51bSlcbi8vIC8vICAgICBjb25zb2xlLmxvZyhudW0pXG5cbi8vIC8vICAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApXG5cbi8vIC8vICAgICBjb25zdCBuYW1lPXtcbi8vIC8vICAgICAgICAgZk5hbWU6XCJTdWRhcnNhblwiLFxuLy8gLy8gICAgICAgICBsTmFtZTpcIlBlcnVtYWxcIlxuLy8gLy8gICAgIH1cbi8vIC8vICAgICBjb25zdCBBbmFtZT17XG4vLyAvLyAgICAgICAgIC4uLm5hbWUsXG4vLyAvLyAgICAgICAgIHJlbmFtZTpcInZlbGFuXCIsXG4vLyAvLyAgICAgICAgIC8vIGxOYW1lOlwiUGVydW1hbFwiXG4vLyAvLyAgICAgfVxuLy8gLy8gICAgIGNvbnNvbGUubG9nKEFuYW1lKVxuXG4vLyAvLyAgICAgcmV0dXJuIChcbi8vIC8vICAgICAgICAgPGRpdj5cbi8vIC8vICAgICAgICAgICAgIDxoMT4ge2NvdW50fTwvaDE+XG4vLyAvLyAgICAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKGNvdW50KX0gKi99XG4vLyAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSArIDEpfT5cbi8vIC8vICAgICAgICAgICAgICAgICArIEluY3JlbWVudFxuLy8gLy8gICAgICAgICAgICAgPC9idXR0b24+XG4vLyAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KChwcmV2U3RhdGUpID0+IHByZXZTdGF0ZSAtIDEpfT5cbi8vIC8vICAgICAgICAgICAgICAgICAtIERlY3JlbWVudFxuLy8gLy8gICAgICAgICAgICAgPC9idXR0b24+XG4vLyAvLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KDApfT5yZXNldDwvYnV0dG9uPlxuLy8gLy8gICAgICAgICAgICAgey8qIDxpbnB1dCAgcGxhY2Vob2xkZXI9J1dyaXRlIGhlcmUuLi4nIG9uQ2hhbmdlPXsoZSk9Pntcbi8vIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuLy8gLy8gICAgICAgICAgICAgfX0vPlxuLy8gLy8gICAgICAgICAgICAge3N0YXRlfSAqL31cbi8vIC8vICAgICAgICAgICAgIHsvKiA8aW5wdXQgdHlwZT0ndGV4dCcgdmFsdWU9e21lLmZpcnN0TmFtZX0gb25DaGFuZ2U9e2U9PnNldE1lKHsuLi5tZSwgZmlyc3ROYW1lOmUudGFyZ2V0LnZhbHVlfSl9Lz5cbi8vIC8vICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17bWUubGlyc3ROYW1lfSBvbkNoYW5nZT17ZT0+c2V0TWUoey4uLm1lLCBsaXJzdE5hbWU6ZS50YXJnZXQudmFsdWV9KX0vPlxuLy8gLy8gICAgICAgICAgICAgIE15IE5hbWUgaXMge21lLmZpcnN0TmFtZX1cbi8vIC8vICAgICAgICAgICAgICAge0pTT04uc3RyaW5naWZ5KG1lKX0gKi99XG4vLyAvLyAgICAgICAgIDwvZGl2PlxuLy8gLy8gICAgIClcbi8vIC8vIH1cbi8vIGNvbnN0IEFycmF5ID0gW1xuLy8gICAgIHsgaWQ6ICcxJywgbmFtZTogJ1N1ZGFyc2FuJyB9LFxuLy8gICAgIHsgaWQ6ICcyJywgbmFtZTogJ1NhaScgfSxcbi8vICAgICB7IGlkOiAnMycsIG5hbWU6ICdKZWV0aCcgfSxcbi8vICAgICB7IGlkOiAnNCcsIG5hbWU6ICdTcmVlZGhhcicgfSxcbi8vIF1cbi8vIGNvbnN0IEJvb2tzID0gW1xuLy8gICAgIHtcbi8vICAgICAgICAgaWQ6ICcxJyxcbi8vICAgICAgICAgdGl0bGU6ICdUaGluayBhbmQgR3JvdyBSaWNoJyxcbi8vICAgICAgICAgYXV0aG9yOiAnTkFQT0xFT04gSElMTCcsXG4vLyAgICAgICAgIGltZzogJ2h0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9JLzQxMms4bUpVUDZMLl9BQ19VRjQ1Miw0NTJfRk1qcGdfLmpwZycsXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICAgIGlkOiAnMicsXG4vLyAgICAgICAgIHRpdGxlOiAnVGhlIFBvd2VyIG9mIEhhYml0Jyxcbi8vICAgICAgICAgYXV0aG9yOiAnQ0hBUkxFUyBEVUhJR0cnLFxuLy8gICAgICAgICBpbWc6ICdodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS80MUlobURJMDdLTC5fQUNfVUY0NTIsNDUyX0ZNanBnXy5qcGcnLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgICBpZDogJzMnLFxuLy8gICAgICAgICBhdXRob3I6ICdSb3NzIFdlbGZvcmQnLFxuLy8gICAgICAgICB0aXRsZTogJ1RoZSAxMDAwIHllYXIgT2xkIEJveScsXG4vLyAgICAgICAgIGltZzogJ2h0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9JLzQxNUVKYXYzaHJMLl9BQ19VRjQ1Miw0NTJfRk1qcGdfLmpwZycsXG4vLyAgICAgfSxcbi8vIF1cblxuLy8gY29uc3QgQm9va0xpc3QgPSAoKSA9PiB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLm1haW59PlxuLy8gICAgICAgICAgICAge0Jvb2tzLm1hcCgoYm9vaykgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8Qm9vayBrZXk9e2Jvb2suaWR9IHsuLi5ib29rfT48L0Jvb2s+XG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbi8vIGNvbnN0IEJvb2sgPSAoeyBpbWcsIHRpdGxlLCBhdXRob3IgfSkgPT4ge1xuLy8gICAgIC8vIGNvbnN0IGNsaWNrSGFuZGxlID0gKGUpID0+IHtcbi8vICAgICAvLyAgICAgaWYgKHRleHQgPT09ICdTdWRhcnNhbicpIHtcbi8vICAgICAvLyAgICAgICAgIHNldFRleHQoJ1NhaScpXG4vLyAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgLy8gICAgICAgICBzZXRUZXh0KCdWZWxhbicpXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyB9XG4vLyAgICAgLy8gY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJ1N1ZGFyc2FuJylcbi8vIC8vXG4vLyAgICAgLy8gY29uc3QgW3BlcnNvbiwgc2V0UGVyc29uXSA9IHVzZVN0YXRlKEFycmF5KVxuXG4vLyAgICAgLy8gY29uc3QgcmVtb3ZpbmdJdGVtcyA9IChpZCkgPT4ge1xuLy8gICAgIC8vICAgICBsZXQgbmV3UGVyc29uID0gcGVyc29uLmZpbHRlcigocGVvcGxlKSA9PiBwZW9wbGUuaWQgIT09IGlkKVxuLy8gICAgIC8vICAgICBzZXRQZXJzb24obmV3UGVyc29uKVxuLy8gICAgIC8vIH1cblxuLy8gICAgIGNvbnN0IFt2YWx1ZSxzZXRWYWx1ZV09dXNlU3RhdGUoMClcblxuLy8gICAgIGNvbnN0IG9uQ2xpY2s9KCk9Pntcbi8vICAgICAgICAgc2V0VmFsdWUoMClcbi8vICAgICB9XG4vLyAgICAgY29uc3QgaW50ZXJ2YWxJbmNyZWFzZT0oKT0+e1xuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4vLyAgICAgICAgICAgICBzZXRWYWx1ZSh2YWx1ZSsxKVxuLy8gICAgICAgICB9LDIwMDApXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5ib29rfT5cbi8vICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuSW1hZ2V9PlxuLy8gICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt9IC8+XG4vLyAgICAgICAgICAgICA8L3NwYW4+XG5cbi8vICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuaDF9PlxuLy8gICAgICAgICAgICAgICAgIDxoMT4ge3RpdGxlfTwvaDE+XG4vLyAgICAgICAgICAgICA8L3NwYW4+XG5cbi8vICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuQXV0aG9yfT5cbi8vICAgICAgICAgICAgICAgICA8aDQ+e2F1dGhvcn0gPC9oND5cbi8vICAgICAgICAgICAgIDwvc3Bhbj5cbi8vICAgICAgICAgICAgIHsvKiA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4vLyAgICAgICAgICAgICAgICAgQ2xpY2sgSGVyZS4uLiFcbi8vICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4vLyAgICAgICAgICAgICA8aDE+e3RleHR9PC9oMT5cbi8vICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2NsaWNrSGFuZGxlfT5cbi8vICAgICAgICAgICAgICAgICBQcmVzcyBoZXJlLi4hXG4vLyAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG5cbi8vICAgICAgICAgICAgIHsvKiA8ZGl2IHN0eWxlPXtzdHlsZXMuQXJyYXl9PlxuLy8gICAgICAgICAgICAgICAgIHtwZXJzb24ubWFwKChwcm9wcykgPT4ge1xuLy8gICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBuYW1lIH0gPSBwcm9wc1xuLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkfT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX1cblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgIClcbi8vICAgICAgICAgICAgICAgICB9KX1cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICovfVxuLy8gICAgICAgICAgICAge3ZhbHVlfVxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0VmFsdWUodmFsdWUrMSl9PkluY3JlbWVudDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+c2V0VmFsdWUodmFsdWUtMSl9PkRlY3JlbWVudDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT5SZXNldCA8L2J1dHRvbj5cblxuLy8gICAgICAgICAgPGgxPnt2YWx1ZX08L2gxPlxuLy8gICAgICAgICAgPGgxPiAgIDxidXR0b24gIHN0eWxlPXtzdHlsZXMuZHVtbXlidG59IG9uQ2xpY2s9e2ludGVydmFsSW5jcmVhc2V9PkluY3JlbWVudCBhZnRlciAyc2VjPC9idXR0b24+PC9oMT5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgKVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBCb29rTGlzdFxuXG4vLyBjb25zdCBzdHlsZXMgPSB7XG4vLyAgICAgbWFpbjoge1xuLy8gICAgICAgICBtYXJnaW46ICcwJScsXG4vLyAgICAgfSxcbi8vICAgICBoMToge1xuLy8gICAgICAgICBjb2xvcjogJ0JsYWNrJyxcbi8vICAgICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4vLyAgICAgfSxcbi8vICAgICBib29rbGlzdDoge1xuLy8gICAgICAgICB3aWR0aDogJzkwdncnLFxuLy8gICAgICAgICBtYXJnaW46ICc1cmVtIGF1dG8gJyxcbi8vICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuLy8gICAgICAgICBmbGV4RGlyZWN0b246ICdyb3cnLFxuLy8gICAgIH0sXG4vLyAgICAgYm9vazoge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnI2Y2ZjZmNicsXG4vLyAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuLy8gICAgICAgICBwYWRkaW5nOiAnMTVweCcsXG4vLyAgICAgICAgIG1hcmdpbjogJzQ1MHB4Jyxcbi8vICAgICAgICAgbWFyZ2luVG9wOiAnMTAlJyxcbi8vICAgICB9LFxuLy8gICAgIEltYWdlOiB7XG4vLyAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuLy8gICAgICAgICBwYWRkaW5nOiAnMTAwcHgnLFxuLy8gICAgIH0sXG4vLyAgICAgQXV0aG9yOiB7XG4vLyAgICAgICAgIGNvbG9yOiAnIzYxNzlkOCcsXG4vLyAgICAgICAgIGxldHRlclNwYWNpbmc6ICcyLjVweCcsXG4vLyAgICAgfSxcbi8vICAgICBBcnJheToge1xuLy8gICAgICAgICBwYWRkaW5nOiAnMTBweCcsXG4vLyAgICAgICAgIGNvbG9yOiAnQmxhY2sgJyxcbi8vICAgICAgICAgYmFja2dyb3VuZDogJyNmNmY2ZjYnLFxuLy8gICAgIH0sXG4vLyAgICAgZHVtbXlidG46IHtcbi8vICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICdHcmVlbicsXG4vLyAgICAgICAgIHBhZGRpbmc6ICcxMHB4Jyxcbi8vICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4Jyxcbi8vICAgICAgICAgbWFyZ2luTGVmdDogJzQwJScsXG4vLyAgICAgICAgIGJvcmRlcjogJ0dyZWVuJyxcbi8vICAgICB9LFxuLy8gICAgIHJlbW92ZWJ0bjoge1xuLy8gICAgICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICAgICAgYmFja2dyb3VuZDogJyM0ODYzQTAnLFxuLy8gICAgICAgICBwYWRkaW5nOiAnNXB4Jyxcbi8vICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4Jyxcbi8vICAgICAgICAgYm9yZGVyOiAnIzdGRkZENCcsXG4vLyAgICAgfSxcbi8vIH1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJhY3RpY2UiLCJuYW1lIiwic2V0TmFtZSIsIm1haWwiLCJzZXRNYWlsIiwicGVvcGxlIiwic2V0UGVvcGxlIiwic2hvd1RleHQiLCJzZXRTaG93VGV4dCIsImhhbmRsZU1vdXNlRW50ZXIiLCJlIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaGFuZGxlTW91c2VMZWF2ZSIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJkZXRhaWxzIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIm1haW4iLCJmb3JtIiwiaDEiLCJOYW1lIiwiaW5wdXRUeXBlIiwiYnV0dG9uIiwibWFwIiwicGVyc29uIiwiaWQiLCJvbnN1Ym1pdCIsIndpZHRoIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJib3JkZXIiLCJjb2xvciIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Components/Practice.js\n"));

/***/ })

});