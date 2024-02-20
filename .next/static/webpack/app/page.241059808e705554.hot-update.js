"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/task3.jsx":
/*!******************************!*\
  !*** ./components/task3.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Task3 = (param)=>{\n    let { taskanswers, setTaskAnswers, step, handleIncrementStep } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCheck = async ()=>{\n        const userAnswer = taskanswers.task3_1;\n        setIsLoading(true); // Set loading state to true\n        try {\n            fetch(\"/api/task3\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer\n                })\n            }).then((response)=>response.json()).then((data)=>{\n                alert(data.message);\n                if (data.message === \"Correct answer. You have unlocked the next level.\") {\n                    handleIncrementStep();\n                }\n            });\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        } finally{\n            setIsLoading(false); // Reset loading state\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"task1\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"bg-black p-3 w-3/4 bg-opacity-50\",\n                children: [\n                    \"Seems like you have cleared the Previous round -_- Here you go with a\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/path/to/your/zip/file.zip\",\n                        download: true,\n                        children: \"Click here to download the zip file\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    \". Try to solve the Puzzle and Come up with the flag :)\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"mt-6 mb-6 peer h-full w-1/2 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                type: \"text\",\n                // placeholder='Flag 1'\n                required: true,\n                value: taskanswers.task3_1,\n                onChange: (event)=>setTaskAnswers({\n                        ...taskanswers,\n                        task3_1: event.target.value\n                    })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n                lineNumber: 45,\n                columnNumber: 16\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col  items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"button-54 items-center\",\n                    onClick: handleCheck,\n                    disabled: isLoading,\n                    children: isLoading ? \"Loading...\" : \"Check\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task3.jsx\",\n        lineNumber: 33,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Task3, \"EmvgwIb3cHpoFpeP+WmEDbjx4y4=\");\n_c = Task3;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task3);\nvar _c;\n$RefreshReg$(_c, \"Task3\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFzazMuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUUvQixNQUFNQyxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLElBQUksRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNUSxjQUFjO1FBQ2hCLE1BQU1DLGFBQWFQLFlBQVlRLE9BQU87UUFDdENILGFBQWEsT0FBTyw0QkFBNEI7UUFDaEQsSUFBRztZQUNDSSxNQUFNLGNBQWM7Z0JBQ2hCQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVA7Z0JBQVc7WUFDdEMsR0FDQ1EsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNHLENBQUFBO2dCQUNGQyxNQUFNRCxLQUFLRSxPQUFPO2dCQUNsQixJQUFHRixLQUFLRSxPQUFPLEtBQUsscURBQW9EO29CQUNwRWpCO2dCQUNKO1lBQ0o7UUFDSixFQUFDLE9BQU1rQixPQUFNO1lBQ1RGLE1BQU07UUFDVixTQUFVO1lBQ05kLGFBQWEsUUFBUSxzQkFBc0I7UUFDL0M7SUFDSjtJQUVBLHFCQUNJLDhEQUFDaUI7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFFRCxXQUFVOztvQkFBbUM7b0JBQzJCO2tDQUMvRSw4REFBQ0U7d0JBQUVDLE1BQUs7d0JBQTZCQyxRQUFRO2tDQUFDOzs7Ozs7b0JBQXVDOzs7Ozs7OzBCQUVqRiw4REFBQ0M7Z0JBQ0RMLFdBQVU7Z0JBQ05NLE1BQUs7Z0JBQ0wsdUJBQXVCO2dCQUN2QkMsUUFBUTtnQkFDUkMsT0FBTy9CLFlBQVlRLE9BQU87Z0JBQzFCd0IsVUFBVSxDQUFDQyxRQUFVaEMsZUFBZTt3QkFBRSxHQUFHRCxXQUFXO3dCQUFFUSxTQUFTeUIsTUFBTUMsTUFBTSxDQUFDSCxLQUFLO29CQUFDOzs7Ozs7WUFDcEY7MEJBQUMsOERBQUNJOzs7OzswQkFDSiw4REFBQ2I7Z0JBQUlDLFdBQVU7MEJBQ2YsNEVBQUNhO29CQUFPYixXQUFVO29CQUF5QmMsU0FBUy9CO29CQUFhZ0MsVUFBVWxDOzhCQUNsRUEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRDtHQWpETUw7S0FBQUE7QUFtRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrMy5qc3g/OGFjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFzazMgPSAoeyB0YXNrYW5zd2Vycywgc2V0VGFza0Fuc3dlcnMsIHN0ZXAsIGhhbmRsZUluY3JlbWVudFN0ZXAgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVjayA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBbnN3ZXIgPSB0YXNrYW5zd2Vycy50YXNrM18xO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTsgLy8gU2V0IGxvYWRpbmcgc3RhdGUgdG8gdHJ1ZVxyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgZmV0Y2goXCIvYXBpL3Rhc2szXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyQW5zd2VyIH0pLFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PT0gXCJDb3JyZWN0IGFuc3dlci4gWW91IGhhdmUgdW5sb2NrZWQgdGhlIG5leHQgbGV2ZWwuXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUluY3JlbWVudFN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTsgLy8gUmVzZXQgbG9hZGluZyBzdGF0ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFzazEnPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J2JnLWJsYWNrIHAtMyB3LTMvNCBiZy1vcGFjaXR5LTUwJz5cclxuICAgICAgICAgICAgICAgICBTZWVtcyBsaWtlIHlvdSBoYXZlIGNsZWFyZWQgdGhlIFByZXZpb3VzIHJvdW5kIC1fLSBIZXJlIHlvdSBnbyB3aXRoIGF7JyAnfVxyXG4gICAgICAgIDxhIGhyZWY9XCIvcGF0aC90by95b3VyL3ppcC9maWxlLnppcFwiIGRvd25sb2FkPkNsaWNrIGhlcmUgdG8gZG93bmxvYWQgdGhlIHppcCBmaWxlPC9hPi4gVHJ5IHRvIHNvbHZlIHRoZSBQdXp6bGUgYW5kIENvbWUgdXAgd2l0aCB0aGUgZmxhZyA6KVxyXG4gICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC02IG1iLTYgcGVlciBoLWZ1bGwgdy0xLzIgcm91bmRlZC1bN3B4XSAgIWJvcmRlciAgIWJvcmRlci1ncmF5LTMwMCBib3JkZXItdC10cmFuc3BhcmVudCBiZy10cmFuc3BhcmVudCBiZy13aGl0ZSBweC0zIHB5LTIuNSBmb250LXNhbnMgdGV4dC1zbSBmb250LW5vcm1hbCB0ZXh0LWJsdWUtZ3JheS03MDAgIHNoYWRvdy1sZyBzaGFkb3ctZ3JheS05MDAvNSBvdXRsaW5lIG91dGxpbmUtMCByaW5nLTQgcmluZy10cmFuc3BhcmVudCB0cmFuc2l0aW9uLWFsbCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNTAwIHBsYWNlaG9sZGVyLXNob3duOmJvcmRlciBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItYmx1ZS1ncmF5LTIwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXItdC1ibHVlLWdyYXktMjAwIGZvY3VzOmJvcmRlci0yICBmb2N1czohYm9yZGVyLWdyYXktOTAwIGZvY3VzOmJvcmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgLy8gcGxhY2Vob2xkZXI9J0ZsYWcgMSdcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGFza2Fuc3dlcnMudGFzazNfMX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2szXzE6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgLz4gPGJyIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sICBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uLTU0IGl0ZW1zLWNlbnRlcicgb25DbGljaz17aGFuZGxlQ2hlY2t9IGRpc2FibGVkPXtpc0xvYWRpbmd9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyAnTG9hZGluZy4uLicgOiAnQ2hlY2snfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzazM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhc2szIiwidGFza2Fuc3dlcnMiLCJzZXRUYXNrQW5zd2VycyIsInN0ZXAiLCJoYW5kbGVJbmNyZW1lbnRTdGVwIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlQ2hlY2siLCJ1c2VyQW5zd2VyIiwidGFzazNfMSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJhbGVydCIsIm1lc3NhZ2UiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJhIiwiaHJlZiIsImRvd25sb2FkIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/task3.jsx\n"));

/***/ })

});