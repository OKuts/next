"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_A_A__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/A/A */ \"./components/A/A.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_MainContainer_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MainContainer/MainContainer */ \"./components/MainContainer/MainContainer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Users = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        fetch('https://jsonplaceholder.typicode.com/users').then(function(response) {\n            return response.json();\n        }).then(function(json) {\n            return setUsers(json);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer_MainContainer__WEBPACK_IMPORTED_MODULE_3__.MainContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Users\"\n            }, void 0, false, {\n                fileName: \"H:\\\\Programming\\\\dev\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map(function(user) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A_A__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            href: \"/users/\".concat(user.id),\n                            text: user.name\n                        }, void 0, false, {\n                            fileName: \"H:\\\\Programming\\\\dev\\\\next\\\\pages\\\\users.js\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, _this1)\n                    }, user.id, false, {\n                        fileName: \"H:\\\\Programming\\\\dev\\\\next\\\\pages\\\\users.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"H:\\\\Programming\\\\dev\\\\next\\\\pages\\\\users.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Programming\\\\dev\\\\next\\\\pages\\\\users.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this));\n};\n_s(Users, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Users;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUTtBQUM4Qjs7O0FBRXZFLEdBQUssQ0FBQ0ksS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7O0lBQ2pCLEdBQUssQ0FBcUJGLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBOUJHLEtBQUssR0FBY0gsR0FBWSxLQUF4QkksUUFBUSxHQUFJSixHQUFZO0lBRXRDRCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiTSxLQUFLLENBQUMsQ0FBNEMsNkNBQzdDQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsUUFBUTtZQUFJQSxNQUFNLENBQU5BLFFBQVEsQ0FBQ0MsSUFBSTtXQUM5QkYsSUFBSSxDQUFDRSxRQUFRSixDQUFSSSxJQUFJO1lBQUlKLE1BQU0sQ0FBTkEsUUFBUSxDQUFDSSxJQUFJOztJQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDRFAsa0ZBQWE7O3dGQUNUUSxDQUFFOzBCQUFDLENBQUs7Ozs7Ozt3RkFDUkMsQ0FBRTswQkFDRVAsS0FBSyxDQUFDUSxHQUFHLENBQUNDLFFBQzNCLENBRDJCQSxJQUFJO2tDQUNYLE1BQU0sK0RBQUxDLENBQUU7OEdBQ0VmLHVEQUFDOzRCQUFDZ0IsSUFBSSxFQUFHLENBQU8sU0FBVSxPQUFSRixJQUFJLENBQUNHLEVBQUU7NEJBQUlDLElBQUksRUFBRUosSUFBSSxDQUFDSyxJQUFJOzs7Ozs7dUJBRHhDTCxJQUFJLENBQUNHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDLENBQUM7R0FyQktiLEtBQUs7S0FBTEEsS0FBSzs7QUF1QlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQSBmcm9tICcuLi9jb21wb25lbnRzL0EvQSdcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge01haW5Db250YWluZXJ9IGZyb20gXCIuLi9jb21wb25lbnRzL01haW5Db250YWluZXIvTWFpbkNvbnRhaW5lclwiO1xuXG5jb25zdCBVc2VycyA9ICgpID0+IHtcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHNldFVzZXJzKGpzb24pKVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgICAgICA8aDE+VXNlcnM8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt1c2Vycy5tYXAodXNlciA9PlxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBIGhyZWY9e2AvdXNlcnMvJHt1c2VyLmlkfWB9IHRleHQ9e3VzZXIubmFtZX0+PC9BPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L01haW5Db250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2Vyc1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge3VzZXJzfSxcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFpbkNvbnRhaW5lciIsIlVzZXJzIiwidXNlcnMiLCJzZXRVc2VycyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImgxIiwidWwiLCJtYXAiLCJ1c2VyIiwibGkiLCJocmVmIiwiaWQiLCJ0ZXh0IiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users.js\n");

/***/ })

});