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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/sudarsanperumalv/Desktop/Practice/src/Components/Practice.js\",\n    _s = $RefreshSig$();\n\n\n\nconst Practice = () => {\n  _s();\n\n  const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [mail, setMail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const [people, setPeople] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n  const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n\n  const handleMouseEnter = e => {\n    e.target.style.background = \"#b30000\";\n    setShowText(true);\n  };\n\n  const handleMouseLeave = e => {\n    e.target.style.background = \"black\";\n    setShowText(false);\n  };\n\n  const handleChange = e => {\n    setName(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n\n    if (name && mail) {\n      const details = {\n        name,\n        mail\n      };\n      setPeople(people => {\n        return [...people, details]; // return [people, details];??\n      });\n      setName(\"\");\n      setMail(\"\");\n    } else {\n      console.log(\" details\");\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.main,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 5\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"form\", {\n    style: styles.form,\n    onSubmit: handleSubmit,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    style: styles.h1,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, \"Registration Form\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, \" Name: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"Name\",\n    placeholder: \"Enter your name here\",\n    value: name,\n    onChange: handleChange,\n    style: styles.inputType,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.Name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"label\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \" Email: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    id: \"E-mail\",\n    placeholder: \"Enter your mail here\",\n    style: styles.inputType,\n    value: mail,\n    onChange: e => setMail(e.target.value),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: styles.button,\n    onClick: handleSubmit,\n    onMouseEnter: handleMouseEnter,\n    onMouseLeave: handleMouseLeave,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, \"Add Details\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }), people.map(person => {\n    const {\n      id,\n      name,\n      mail\n    } = person;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      style: styles.onsubmit,\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 11\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 13\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 15\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }\n    }, \"Name:\", name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 13\n      }\n    }, \" \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 15\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }\n    }, \"Mail:\", mail))));\n  }));\n};\n\n_s(Practice, \"F9z9UM9yuZBDXy74Cxk21B67tV8=\");\n\n_c = Practice;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Practice);\nconst styles = {\n  form: {\n    // color: \"black\",\n    background: \"#84a98c\",\n    width: \"400px\",\n    padding: \"30px\"\n  },\n  main: {\n    display: \"flex\",\n    justifyContent: \"center\",\n    backgroundColor: \"black\"\n  },\n  inputType: {\n    border: \"#f6f6f6\",\n    width: \"50%\",\n    color: \"black\",\n    padding: \"5px\",\n    borderRadius: \"5px\",\n    marginTop: \"10px\"\n  },\n  button: {\n    background: \"black\",\n    border: \"#1a8cff\",\n    padding: \"7px\",\n    width: \"25%\",\n    borderRadius: \"5px\",\n    color: \"white\",\n    marginLeft: \"37%\",\n    marginTop: \"24px\",\n    textAlign: \"center\"\n  },\n  Name: {\n    marginLeft: \"20%\"\n  },\n  h1: {\n    display: \"flex\",\n    justifyContent: \"center\"\n  },\n  onsubmit: {\n    color: \"Black\",\n    // display:\"flex\",\n    //  justifyContent:\"center\",\n    padding: \"10px\",\n    background: \"#f6f6f6\",\n    marginTop: \"10%\",\n    width: \"440px\",\n    marginLeft: \"35%\"\n  }\n}; // import React, { useEffect, useState } from 'react'\n// // const Dummy = () => {\n// //     // const[state,setState]=useState('Sudarsan')\n// //     // const onChange=(e)=>{\n// //     //     const newValue =e.target.value;\n// //     //     setState(newValue)\n// //     // }\n// //     // const[me,setMe]=useState({firstName:\" \" ,  lastName:\" \"})\n// //     let addnum = [4,5,6]\n// //     let num = [1,2,3,...addnum]\n// //     console.log(addnum)\n// //     console.log(num)\n// //     const [count, setCount] = useState(0)\n// //     const name={\n// //         fName:\"Sudarsan\",\n// //         lName:\"Perumal\"\n// //     }\n// //     const Aname={\n// //         ...name,\n// //         rename:\"velan\",\n// //         // lName:\"Perumal\"\n// //     }\n// //     console.log(Aname)\n// //     return (\n// //         <div>\n// //             <h1> {count}</h1>\n// //             {/* {console.log(count)} */}\n// //             <button onClick={() => setCount((prevState) => prevState + 1)}>\n// //                 + Increment\n// //             </button>\n// //             <button onClick={() => setCount((prevState) => prevState - 1)}>\n// //                 - Decrement\n// //             </button>\n// //             <button onClick={() => setCount(0)}>reset</button>\n// //             {/* <input  placeholder='Write here...' onChange={(e)=>{\n// //                 console.log(e)\n// //             }}/>\n// //             {state} */}\n// //             {/* <input type='text' value={me.firstName} onChange={e=>setMe({...me, firstName:e.target.value})}/>\n// //             <input type='text' value={me.lirstName} onChange={e=>setMe({...me, lirstName:e.target.value})}/>\n// //              My Name is {me.firstName}\n// //               {JSON.stringify(me)} */}\n// //         </div>\n// //     )\n// // }\n// const Array = [\n//     { id: '1', name: 'Sudarsan' },\n//     { id: '2', name: 'Sai' },\n//     { id: '3', name: 'Jeeth' },\n//     { id: '4', name: 'Sreedhar' },\n// ]\n// const Books = [\n//     {\n//         id: '1',\n//         title: 'Think and Grow Rich',\n//         author: 'NAPOLEON HILL',\n//         img: 'https://m.media-amazon.com/images/I/412k8mJUP6L._AC_UF452,452_FMjpg_.jpg',\n//     },\n//     {\n//         id: '2',\n//         title: 'The Power of Habit',\n//         author: 'CHARLES DUHIGG',\n//         img: 'https://m.media-amazon.com/images/I/41IhmDI07KL._AC_UF452,452_FMjpg_.jpg',\n//     },\n//     {\n//         id: '3',\n//         author: 'Ross Welford',\n//         title: 'The 1000 year Old Boy',\n//         img: 'https://m.media-amazon.com/images/I/415EJav3hrL._AC_UF452,452_FMjpg_.jpg',\n//     },\n// ]\n// const BookList = () => {\n//     return (\n//         <div style={styles.main}>\n//             {Books.map((book) => {\n//                 return (\n//                     <div>\n//                         <Book key={book.id} {...book}></Book>\n//                     </div>\n//                 )\n//             })}\n//         </div>\n//     )\n// }\n// const Book = ({ img, title, author }) => {\n//     // const clickHandle = (e) => {\n//     //     if (text === 'Sudarsan') {\n//     //         setText('Sai')\n//     //     } else {\n//     //         setText('Velan')\n//     //     }\n//     // }\n//     // const [text, setText] = useState('Sudarsan')\n// //\n//     // const [person, setPerson] = useState(Array)\n//     // const removingItems = (id) => {\n//     //     let newPerson = person.filter((people) => people.id !== id)\n//     //     setPerson(newPerson)\n//     // }\n//     const [value,setValue]=useState(0)\n//     const onClick=()=>{\n//         setValue(0)\n//     }\n//     const intervalIncrease=()=>{\n//         setTimeout(()=>{\n//             setValue(value+1)\n//         },2000)\n//     }\n//     return (\n//         <div style={styles.book}>\n//             <span style={styles.Image}>\n//                 <img src={} />\n//             </span>\n//             <span style={styles.h1}>\n//                 <h1> {title}</h1>\n//             </span>\n//             <span style={styles.Author}>\n//                 <h4>{author} </h4>\n//             </span>\n//             {/* <button type=\"button\" onClick={handleClick}>\n//                 Click Here...!\n//             </button>\n//             <h1>{text}</h1>\n//             <button type=\"button\" onClick={clickHandle}>\n//                 Press here..!\n//             </button> */}\n//             {/* <div style={styles.Array}>\n//                 {person.map((props) => {\n//                     const { id, name } = props\n//                     return (\n//                         <div key={id}>\n//                             {name}\n//                         </div>\n//                     )\n//                 })}\n//             </div>\n//              */}\n//             {value}\n//             <button onClick={()=>setValue(value+1)}>Increment</button>\n//             <button onClick={()=>setValue(value-1)}>Decrement</button>\n//             <button onClick={onClick}>Reset </button>\n//          <h1>{value}</h1>\n//          <h1>   <button  style={styles.dummybtn} onClick={intervalIncrease}>Increment after 2sec</button></h1>\n//         </div>\n//     )\n// }\n// export default BookList\n// const styles = {\n//     main: {\n//         margin: '0%',\n//     },\n//     h1: {\n//         color: 'Black',\n//         fontWeight: '700',\n//     },\n//     booklist: {\n//         width: '90vw',\n//         margin: '5rem auto ',\n//         display: 'flex',\n//         flexDirecton: 'row',\n//     },\n//     book: {\n//         background: '#f6f6f6',\n//         borderRadius: '10px',\n//         padding: '15px',\n//         margin: '450px',\n//         marginTop: '10%',\n//     },\n//     Image: {\n//         alignItems: 'center',\n//         padding: '100px',\n//     },\n//     Author: {\n//         color: '#6179d8',\n//         letterSpacing: '2.5px',\n//     },\n//     Array: {\n//         padding: '10px',\n//         color: 'Black ',\n//         background: '#f6f6f6',\n//     },\n//     dummybtn: {\n//         color: 'white',\n//         background: 'Green',\n//         padding: '10px',\n//         borderRadius: '5px',\n//         marginLeft: '40%',\n//         border: 'Green',\n//     },\n//     removebtn: {\n//         color: 'white',\n//         background: '#4863A0',\n//         padding: '5px',\n//         borderRadius: '5px',\n//         border: '#7FFFD4',\n//     },\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Practice\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0NvbXBvbmVudHMvUHJhY3RpY2UuanM/YzRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgUHJhY3RpY2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWFpbCwgc2V0TWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Blb3BsZSwgc2V0UGVvcGxlXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbc2hvd1RleHQsIHNldFNob3dUZXh0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9IChlKSA9PiB7XG4gICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiI2IzMDAwMFwiO1xuICAgIHNldFNob3dUZXh0KHRydWUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKGUpID0+IHtcbiAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJibGFja1wiO1xuICAgIHNldFNob3dUZXh0KGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChuYW1lICYmIG1haWwpIHtcbiAgICAgIGNvbnN0IGRldGFpbHMgPSB7IG5hbWUsIG1haWwgfTtcbiAgICAgIHNldFBlb3BsZSgocGVvcGxlKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ucGVvcGxlLCBkZXRhaWxzXTtcbiAgICAgICAgLy8gcmV0dXJuIFtwZW9wbGUsIGRldGFpbHNdOz8/XG4gICAgICB9KTtcbiAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICBzZXRNYWlsKFwiXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiBkZXRhaWxzXCIpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgIHN0eWxlPXtzdHlsZXMubWFpbn0+XG4gICAgICA8Zm9ybSBzdHlsZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDEgc3R5bGU9e3N0eWxlcy5oMX0+UmVnaXN0cmF0aW9uIEZvcm08L2gxPlxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuTmFtZX0+XG4gICAgICAgICAgPGxhYmVsPiBOYW1lOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJOYW1lXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIGhlcmVcIlxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgc3R5bGU9e3N0eWxlcy5pbnB1dFR5cGV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5OYW1lfT5cbiAgICAgICAgICA8bGFiZWw+IEVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJFLW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG1haWwgaGVyZVwiXG4gICAgICAgICAgICBzdHlsZT17c3R5bGVzLmlucHV0VHlwZX1cbiAgICAgICAgICAgIHZhbHVlPXttYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRNYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7LyogPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gIFxuICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9PkFkZCBEZXRhaWxzPC9idXR0b24+XG4gICAgICAgICAge3Nob3dUZXh0ICYmIDxoMT5IaSAuLi4hPC9oMT59ICovfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgICAgIG9uTW91c2VFbnRlcj17aGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgRGV0YWlsc1xuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgICB7cGVvcGxlLm1hcCgocGVyc29uKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgaWQsIG5hbWUsIG1haWwgfSA9IHBlcnNvbjtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMub25zdWJtaXR9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGg0PlxuICAgICAgICAgICAgICAgIDxsaT5OYW1lOntuYW1lfTwvbGk+XG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgPGxpPk1haWw6e21haWx9PC9saT5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L2Rpdj5cbiAgIFxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJhY3RpY2U7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9ybToge1xuICAgIC8vIGNvbG9yOiBcImJsYWNrXCIsXG4gICAgYmFja2dyb3VuZDogXCIjODRhOThjXCIsXG4gICAgd2lkdGg6IFwiNDAwcHhcIixcbiAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgICBcbiAgfSxcbiAgbWFpbjp7XG4gICAgZGlzcGxheTpcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuICAgIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsXG4gICAgXG5cblxuICB9LFxuICBcbiAgaW5wdXRUeXBlOiB7XG4gICAgYm9yZGVyOiBcIiNmNmY2ZjZcIixcbiAgICB3aWR0aDogXCI1MCVcIixcbiAgICBjb2xvcjogXCJibGFja1wiLFxuICAgIHBhZGRpbmc6IFwiNXB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXG4gIH0sXG4gIGJ1dHRvbjoge1xuICAgIGJhY2tncm91bmQ6IFwiYmxhY2tcIixcbiAgICBib3JkZXI6IFwiIzFhOGNmZlwiLFxuICAgIHBhZGRpbmc6IFwiN3B4XCIsXG4gICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgbWFyZ2luTGVmdDogXCIzNyVcIixcbiAgICBtYXJnaW5Ub3A6IFwiMjRweFwiLFxuICAgIHRleHRBbGlnbjpcImNlbnRlclwiXG4gIH0sXG4gIE5hbWU6IHtcbiAgICBtYXJnaW5MZWZ0OiBcIjIwJVwiLFxuICB9LFxuICBoMToge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBvbnN1Ym1pdDoge1xuICAgIGNvbG9yOiBcIkJsYWNrXCIsXG4gICAgLy8gZGlzcGxheTpcImZsZXhcIixcbiAgICAvLyAganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIixcbiAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICBiYWNrZ3JvdW5kOiBcIiNmNmY2ZjZcIixcbiAgICBtYXJnaW5Ub3A6IFwiMTAlXCIsXG4gICAgd2lkdGg6IFwiNDQwcHhcIixcbiAgICBtYXJnaW5MZWZ0OiBcIjM1JVwiLFxuICB9LFxufTtcblxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuLy8gLy8gY29uc3QgRHVtbXkgPSAoKSA9PiB7XG4vLyAvLyAgICAgLy8gY29uc3Rbc3RhdGUsc2V0U3RhdGVdPXVzZVN0YXRlKCdTdWRhcnNhbicpXG4vLyAvLyAgICAgLy8gY29uc3Qgb25DaGFuZ2U9KGUpPT57XG4vLyAvLyAgICAgLy8gICAgIGNvbnN0IG5ld1ZhbHVlID1lLnRhcmdldC52YWx1ZTtcbi8vIC8vICAgICAvLyAgICAgc2V0U3RhdGUobmV3VmFsdWUpXG4vLyAvLyAgICAgLy8gfVxuLy8gLy8gICAgIC8vIGNvbnN0W21lLHNldE1lXT11c2VTdGF0ZSh7Zmlyc3ROYW1lOlwiIFwiICwgIGxhc3ROYW1lOlwiIFwifSlcbi8vIC8vICAgICBsZXQgYWRkbnVtID0gWzQsNSw2XVxuLy8gLy8gICAgIGxldCBudW0gPSBbMSwyLDMsLi4uYWRkbnVtXVxuXG4vLyAvLyAgICAgY29uc29sZS5sb2coYWRkbnVtKVxuLy8gLy8gICAgIGNvbnNvbGUubG9nKG51bSlcblxuLy8gLy8gICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMClcblxuLy8gLy8gICAgIGNvbnN0IG5hbWU9e1xuLy8gLy8gICAgICAgICBmTmFtZTpcIlN1ZGFyc2FuXCIsXG4vLyAvLyAgICAgICAgIGxOYW1lOlwiUGVydW1hbFwiXG4vLyAvLyAgICAgfVxuLy8gLy8gICAgIGNvbnN0IEFuYW1lPXtcbi8vIC8vICAgICAgICAgLi4ubmFtZSxcbi8vIC8vICAgICAgICAgcmVuYW1lOlwidmVsYW5cIixcbi8vIC8vICAgICAgICAgLy8gbE5hbWU6XCJQZXJ1bWFsXCJcbi8vIC8vICAgICB9XG4vLyAvLyAgICAgY29uc29sZS5sb2coQW5hbWUpXG5cbi8vIC8vICAgICByZXR1cm4gKFxuLy8gLy8gICAgICAgICA8ZGl2PlxuLy8gLy8gICAgICAgICAgICAgPGgxPiB7Y291bnR9PC9oMT5cbi8vIC8vICAgICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coY291bnQpfSAqL31cbi8vIC8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlICsgMSl9PlxuLy8gLy8gICAgICAgICAgICAgICAgICsgSW5jcmVtZW50XG4vLyAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vIC8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoKHByZXZTdGF0ZSkgPT4gcHJldlN0YXRlIC0gMSl9PlxuLy8gLy8gICAgICAgICAgICAgICAgIC0gRGVjcmVtZW50XG4vLyAvLyAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vIC8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoMCl9PnJlc2V0PC9idXR0b24+XG4vLyAvLyAgICAgICAgICAgICB7LyogPGlucHV0ICBwbGFjZWhvbGRlcj0nV3JpdGUgaGVyZS4uLicgb25DaGFuZ2U9eyhlKT0+e1xuLy8gLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAvLyAgICAgICAgICAgICB9fS8+XG4vLyAvLyAgICAgICAgICAgICB7c3RhdGV9ICovfVxuLy8gLy8gICAgICAgICAgICAgey8qIDxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT17bWUuZmlyc3ROYW1lfSBvbkNoYW5nZT17ZT0+c2V0TWUoey4uLm1lLCBmaXJzdE5hbWU6ZS50YXJnZXQudmFsdWV9KX0vPlxuLy8gLy8gICAgICAgICAgICAgPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPXttZS5saXJzdE5hbWV9IG9uQ2hhbmdlPXtlPT5zZXRNZSh7Li4ubWUsIGxpcnN0TmFtZTplLnRhcmdldC52YWx1ZX0pfS8+XG4vLyAvLyAgICAgICAgICAgICAgTXkgTmFtZSBpcyB7bWUuZmlyc3ROYW1lfVxuLy8gLy8gICAgICAgICAgICAgICB7SlNPTi5zdHJpbmdpZnkobWUpfSAqL31cbi8vIC8vICAgICAgICAgPC9kaXY+XG4vLyAvLyAgICAgKVxuLy8gLy8gfVxuLy8gY29uc3QgQXJyYXkgPSBbXG4vLyAgICAgeyBpZDogJzEnLCBuYW1lOiAnU3VkYXJzYW4nIH0sXG4vLyAgICAgeyBpZDogJzInLCBuYW1lOiAnU2FpJyB9LFxuLy8gICAgIHsgaWQ6ICczJywgbmFtZTogJ0plZXRoJyB9LFxuLy8gICAgIHsgaWQ6ICc0JywgbmFtZTogJ1NyZWVkaGFyJyB9LFxuLy8gXVxuLy8gY29uc3QgQm9va3MgPSBbXG4vLyAgICAge1xuLy8gICAgICAgICBpZDogJzEnLFxuLy8gICAgICAgICB0aXRsZTogJ1RoaW5rIGFuZCBHcm93IFJpY2gnLFxuLy8gICAgICAgICBhdXRob3I6ICdOQVBPTEVPTiBISUxMJyxcbi8vICAgICAgICAgaW1nOiAnaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDEyazhtSlVQNkwuX0FDX1VGNDUyLDQ1Ml9GTWpwZ18uanBnJyxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgICAgaWQ6ICcyJyxcbi8vICAgICAgICAgdGl0bGU6ICdUaGUgUG93ZXIgb2YgSGFiaXQnLFxuLy8gICAgICAgICBhdXRob3I6ICdDSEFSTEVTIERVSElHRycsXG4vLyAgICAgICAgIGltZzogJ2h0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9JLzQxSWhtREkwN0tMLl9BQ19VRjQ1Miw0NTJfRk1qcGdfLmpwZycsXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICAgIGlkOiAnMycsXG4vLyAgICAgICAgIGF1dGhvcjogJ1Jvc3MgV2VsZm9yZCcsXG4vLyAgICAgICAgIHRpdGxlOiAnVGhlIDEwMDAgeWVhciBPbGQgQm95Jyxcbi8vICAgICAgICAgaW1nOiAnaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDE1RUphdjNockwuX0FDX1VGNDUyLDQ1Ml9GTWpwZ18uanBnJyxcbi8vICAgICB9LFxuLy8gXVxuXG4vLyBjb25zdCBCb29rTGlzdCA9ICgpID0+IHtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMubWFpbn0+XG4vLyAgICAgICAgICAgICB7Qm9va3MubWFwKChib29rKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxCb29rIGtleT17Ym9vay5pZH0gey4uLmJvb2t9PjwvQm9vaz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgfSl9XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgIClcbi8vIH1cblxuLy8gY29uc3QgQm9vayA9ICh7IGltZywgdGl0bGUsIGF1dGhvciB9KSA9PiB7XG4vLyAgICAgLy8gY29uc3QgY2xpY2tIYW5kbGUgPSAoZSkgPT4ge1xuLy8gICAgIC8vICAgICBpZiAodGV4dCA9PT0gJ1N1ZGFyc2FuJykge1xuLy8gICAgIC8vICAgICAgICAgc2V0VGV4dCgnU2FpJylcbi8vICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAvLyAgICAgICAgIHNldFRleHQoJ1ZlbGFuJylcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIH1cbi8vICAgICAvLyBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnU3VkYXJzYW4nKVxuLy8gLy9cbi8vICAgICAvLyBjb25zdCBbcGVyc29uLCBzZXRQZXJzb25dID0gdXNlU3RhdGUoQXJyYXkpXG5cbi8vICAgICAvLyBjb25zdCByZW1vdmluZ0l0ZW1zID0gKGlkKSA9PiB7XG4vLyAgICAgLy8gICAgIGxldCBuZXdQZXJzb24gPSBwZXJzb24uZmlsdGVyKChwZW9wbGUpID0+IHBlb3BsZS5pZCAhPT0gaWQpXG4vLyAgICAgLy8gICAgIHNldFBlcnNvbihuZXdQZXJzb24pXG4vLyAgICAgLy8gfVxuXG4vLyAgICAgY29uc3QgW3ZhbHVlLHNldFZhbHVlXT11c2VTdGF0ZSgwKVxuXG4vLyAgICAgY29uc3Qgb25DbGljaz0oKT0+e1xuLy8gICAgICAgICBzZXRWYWx1ZSgwKVxuLy8gICAgIH1cbi8vICAgICBjb25zdCBpbnRlcnZhbEluY3JlYXNlPSgpPT57XG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCk9Pntcbi8vICAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlKzEpXG4vLyAgICAgICAgIH0sMjAwMClcbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJvb2t9PlxuLy8gICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5JbWFnZX0+XG4vLyAgICAgICAgICAgICAgICAgPGltZyBzcmM9e30gLz5cbi8vICAgICAgICAgICAgIDwvc3Bhbj5cblxuLy8gICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5oMX0+XG4vLyAgICAgICAgICAgICAgICAgPGgxPiB7dGl0bGV9PC9oMT5cbi8vICAgICAgICAgICAgIDwvc3Bhbj5cblxuLy8gICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5BdXRob3J9PlxuLy8gICAgICAgICAgICAgICAgIDxoND57YXV0aG9yfSA8L2g0PlxuLy8gICAgICAgICAgICAgPC9zcGFuPlxuLy8gICAgICAgICAgICAgey8qIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbi8vICAgICAgICAgICAgICAgICBDbGljayBIZXJlLi4uIVxuLy8gICAgICAgICAgICAgPC9idXR0b24+XG5cbi8vICAgICAgICAgICAgIDxoMT57dGV4dH08L2gxPlxuLy8gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xpY2tIYW5kbGV9PlxuLy8gICAgICAgICAgICAgICAgIFByZXNzIGhlcmUuLiFcbi8vICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cblxuLy8gICAgICAgICAgICAgey8qIDxkaXYgc3R5bGU9e3N0eWxlcy5BcnJheX0+XG4vLyAgICAgICAgICAgICAgICAge3BlcnNvbi5tYXAoKHByb3BzKSA9PiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgaWQsIG5hbWUgfSA9IHByb3BzXG4vLyAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aWR9PlxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgKVxuLy8gICAgICAgICAgICAgICAgIH0pfVxuLy8gICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgKi99XG4vLyAgICAgICAgICAgICB7dmFsdWV9XG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRWYWx1ZSh2YWx1ZSsxKX0+SW5jcmVtZW50PC9idXR0b24+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRWYWx1ZSh2YWx1ZS0xKX0+RGVjcmVtZW50PC9idXR0b24+XG4vLyAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlJlc2V0IDwvYnV0dG9uPlxuXG4vLyAgICAgICAgICA8aDE+e3ZhbHVlfTwvaDE+XG4vLyAgICAgICAgICA8aDE+ICAgPGJ1dHRvbiAgc3R5bGU9e3N0eWxlcy5kdW1teWJ0bn0gb25DbGljaz17aW50ZXJ2YWxJbmNyZWFzZX0+SW5jcmVtZW50IGFmdGVyIDJzZWM8L2J1dHRvbj48L2gxPlxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICApXG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0XG5cbi8vIGNvbnN0IHN0eWxlcyA9IHtcbi8vICAgICBtYWluOiB7XG4vLyAgICAgICAgIG1hcmdpbjogJzAlJyxcbi8vICAgICB9LFxuLy8gICAgIGgxOiB7XG4vLyAgICAgICAgIGNvbG9yOiAnQmxhY2snLFxuLy8gICAgICAgICBmb250V2VpZ2h0OiAnNzAwJyxcbi8vICAgICB9LFxuLy8gICAgIGJvb2tsaXN0OiB7XG4vLyAgICAgICAgIHdpZHRoOiAnOTB2dycsXG4vLyAgICAgICAgIG1hcmdpbjogJzVyZW0gYXV0byAnLFxuLy8gICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4vLyAgICAgICAgIGZsZXhEaXJlY3RvbjogJ3JvdycsXG4vLyAgICAgfSxcbi8vICAgICBib29rOiB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICcjZjZmNmY2Jyxcbi8vICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4vLyAgICAgICAgIHBhZGRpbmc6ICcxNXB4Jyxcbi8vICAgICAgICAgbWFyZ2luOiAnNDUwcHgnLFxuLy8gICAgICAgICBtYXJnaW5Ub3A6ICcxMCUnLFxuLy8gICAgIH0sXG4vLyAgICAgSW1hZ2U6IHtcbi8vICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4vLyAgICAgICAgIHBhZGRpbmc6ICcxMDBweCcsXG4vLyAgICAgfSxcbi8vICAgICBBdXRob3I6IHtcbi8vICAgICAgICAgY29sb3I6ICcjNjE3OWQ4Jyxcbi8vICAgICAgICAgbGV0dGVyU3BhY2luZzogJzIuNXB4Jyxcbi8vICAgICB9LFxuLy8gICAgIEFycmF5OiB7XG4vLyAgICAgICAgIHBhZGRpbmc6ICcxMHB4Jyxcbi8vICAgICAgICAgY29sb3I6ICdCbGFjayAnLFxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnI2Y2ZjZmNicsXG4vLyAgICAgfSxcbi8vICAgICBkdW1teWJ0bjoge1xuLy8gICAgICAgICBjb2xvcjogJ3doaXRlJyxcbi8vICAgICAgICAgYmFja2dyb3VuZDogJ0dyZWVuJyxcbi8vICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxuLy8gICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuLy8gICAgICAgICBtYXJnaW5MZWZ0OiAnNDAlJyxcbi8vICAgICAgICAgYm9yZGVyOiAnR3JlZW4nLFxuLy8gICAgIH0sXG4vLyAgICAgcmVtb3ZlYnRuOiB7XG4vLyAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAnIzQ4NjNBMCcsXG4vLyAgICAgICAgIHBhZGRpbmc6ICc1cHgnLFxuLy8gICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuLy8gICAgICAgICBib3JkZXI6ICcjN0ZGRkQ0Jyxcbi8vICAgICB9LFxuLy8gfVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcmFjdGljZSIsIm5hbWUiLCJzZXROYW1lIiwibWFpbCIsInNldE1haWwiLCJwZW9wbGUiLCJzZXRQZW9wbGUiLCJzaG93VGV4dCIsInNldFNob3dUZXh0IiwiaGFuZGxlTW91c2VFbnRlciIsImUiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmQiLCJoYW5kbGVNb3VzZUxlYXZlIiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImRldGFpbHMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibWFpbiIsImZvcm0iLCJoMSIsIk5hbWUiLCJpbnB1dFR5cGUiLCJidXR0b24iLCJtYXAiLCJwZXJzb24iLCJpZCIsIm9uc3VibWl0Iiwid2lkdGgiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/Practice.js\n"));

/***/ })

});