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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n// import React from 'react'\n// const D1 = () => {\n//   return (\n//     <div style={styles.header}>\n//      <h1>Sudarsan</h1>\n//     </div>\n//   )\n// }\n// export default D1\n// const styles={\n//     header:{\n//         margin:\"0%\",\n//         width:\"10\",\n//         background:\"green\",\n//         display:\"flex\",\n//         flexDirection:\"row\",\n//         textAlign:\"center\",\n//         justifyContent:\"center\"\n//         }\n// }\n\n\nconst useWindowWidthAndHeight = () => {\n  _s();\n\n  // 1- Get the size of window \n  let windowInnerSize = [window.innerWidth, window.innerHeight]; // 2- Define the state variable windowSize and pass windowInnerSize as its initial value\n\n  let [windowSize, setWidowSize] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(windowInnerSize);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const changeWindowSize = () => {\n      setWidowSize([window.innerWidth, window.innerHeight]);\n    };\n    /* 3- add a 'resize' eventListener to window so that whenever \n    the size of window changes the state variable windowSize changes and the component re-renders */\n\n\n    window.addEventListener(\"resize\", changeWindowSize); // 4- cleanup the 'resize' eventListener\n\n    return () => window.removeEventListener('resize', changeWindowSize);\n  }, []); // 5- return the window size\n\n  return windowSize;\n};\n\n_s(useWindowWidthAndHeight, \"dtVQAocBnbvPO4V0q9B+K/oZbi0=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWindowWidthAndHeight);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9EMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTs7QUFFQyxNQUFNRSx1QkFBdUIsR0FBRyxNQUFJO0VBQUE7O0VBQ2pDO0VBQ0EsSUFBSUMsZUFBZSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsVUFBUixFQUFvQkQsTUFBTSxDQUFDRSxXQUEzQixDQUF0QixDQUZpQyxDQUlqQzs7RUFDQSxJQUFJLENBQUVDLFVBQUYsRUFBY0MsWUFBZCxJQUErQlAsK0NBQVEsQ0FBQ0UsZUFBRCxDQUEzQztFQUVBSCxnREFBUyxDQUFDLE1BQUk7SUFDVixNQUFNUyxnQkFBZ0IsR0FBRyxNQUFJO01BQ3pCRCxZQUFZLENBQUMsQ0FBQ0osTUFBTSxDQUFDQyxVQUFSLEVBQW9CRCxNQUFNLENBQUNFLFdBQTNCLENBQUQsQ0FBWjtJQUNILENBRkQ7SUFHQTtBQUNSOzs7SUFDUUYsTUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0QsZ0JBQWxDLEVBTlUsQ0FRVjs7SUFDQSxPQUFPLE1BQUtMLE1BQU0sQ0FBQ08sbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLGdCQUFyQyxDQUFaO0VBQ0gsQ0FWUSxFQVVOLEVBVk0sQ0FBVCxDQVBpQyxDQWtCakM7O0VBQ0EsT0FBT0YsVUFBUDtBQUNILENBcEJBOztHQUFNTDs7QUFxQlAsK0RBQWVBLHVCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0QxLmpzPzBhN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vLyBjb25zdCBEMSA9ICgpID0+IHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaGVhZGVyfT5cblxuLy8gICAgICA8aDE+U3VkYXJzYW48L2gxPlxuICAgICAgIFxuLy8gICAgIDwvZGl2PlxuLy8gICApXG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBEMVxuXG4vLyBjb25zdCBzdHlsZXM9e1xuLy8gICAgIGhlYWRlcjp7XG4vLyAgICAgICAgIG1hcmdpbjpcIjAlXCIsXG4vLyAgICAgICAgIHdpZHRoOlwiMTBcIixcbi8vICAgICAgICAgYmFja2dyb3VuZDpcImdyZWVuXCIsXG4vLyAgICAgICAgIGRpc3BsYXk6XCJmbGV4XCIsXG4vLyAgICAgICAgIGZsZXhEaXJlY3Rpb246XCJyb3dcIixcbi8vICAgICAgICAgdGV4dEFsaWduOlwiY2VudGVyXCIsXG4vLyAgICAgICAgIGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCJcblxuLy8gICAgICAgICB9XG5cbi8vIH1cbiBcblxuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4gY29uc3QgdXNlV2luZG93V2lkdGhBbmRIZWlnaHQgPSAoKT0+e1xuICAgIC8vIDEtIEdldCB0aGUgc2l6ZSBvZiB3aW5kb3cgXG4gICAgbGV0IHdpbmRvd0lubmVyU2l6ZSA9IFt3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0XTtcblxuICAgIC8vIDItIERlZmluZSB0aGUgc3RhdGUgdmFyaWFibGUgd2luZG93U2l6ZSBhbmQgcGFzcyB3aW5kb3dJbm5lclNpemUgYXMgaXRzIGluaXRpYWwgdmFsdWVcbiAgICBsZXQgWyB3aW5kb3dTaXplLCBzZXRXaWRvd1NpemUgXSA9IHVzZVN0YXRlKHdpbmRvd0lubmVyU2l6ZSk7XG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3QgY2hhbmdlV2luZG93U2l6ZSA9ICgpPT57XG4gICAgICAgICAgICBzZXRXaWRvd1NpemUoW3dpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRdKTtcbiAgICAgICAgfVxuICAgICAgICAvKiAzLSBhZGQgYSAncmVzaXplJyBldmVudExpc3RlbmVyIHRvIHdpbmRvdyBzbyB0aGF0IHdoZW5ldmVyIFxudGhlIHNpemUgb2Ygd2luZG93IGNoYW5nZXMgdGhlIHN0YXRlIHZhcmlhYmxlIHdpbmRvd1NpemUgY2hhbmdlcyBhbmQgdGhlIGNvbXBvbmVudCByZS1yZW5kZXJzICovXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGNoYW5nZVdpbmRvd1NpemUpO1xuXG4gICAgICAgIC8vIDQtIGNsZWFudXAgdGhlICdyZXNpemUnIGV2ZW50TGlzdGVuZXJcbiAgICAgICAgcmV0dXJuICgpPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNoYW5nZVdpbmRvd1NpemUpO1xuICAgIH0sIFtdKTtcbiAgICAvLyA1LSByZXR1cm4gdGhlIHdpbmRvdyBzaXplXG4gICAgcmV0dXJuIHdpbmRvd1NpemU7XG59XG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dXaWR0aEFuZEhlaWdodCJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVdpbmRvd1dpZHRoQW5kSGVpZ2h0Iiwid2luZG93SW5uZXJTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwid2luZG93U2l6ZSIsInNldFdpZG93U2l6ZSIsImNoYW5nZVdpbmRvd1NpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/D1.js\n"));

/***/ })

});