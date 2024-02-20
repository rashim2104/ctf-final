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

/***/ "(app-pages-browser)/./components/task2.jsx":
/*!******************************!*\
  !*** ./components/task2.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst Task2 = (param)=>{\n    let { taskanswers, setTaskAnswers, step, handleIncrementStep } = param;\n    _s();\n    const [validationResults, setValidationResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        answer1: false,\n        answer2: false,\n        answer3: false\n    });\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const soloCheck = async (userAnswer, tag)=>{\n        try {\n            const response = await fetch(\"/api/task2\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer,\n                    tag\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message == \"Correct answer.\") {\n                    switch(tag){\n                        case 1:\n                            setValidationResults({\n                                ...validationResults,\n                                answer1: true\n                            });\n                            break;\n                        case 2:\n                            setValidationResults({\n                                ...validationResults,\n                                answer2: true\n                            });\n                            break;\n                        case 3:\n                            setValidationResults({\n                                ...validationResults,\n                                answer3: true\n                            });\n                            break;\n                    }\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    const handleCheck = async ()=>{\n        const userAnswer1 = taskanswers.task2_1;\n        const userAnswer2 = taskanswers.task2_2;\n        const userAnswer3 = taskanswers.task2_3;\n        setIsLoading(true); // Set loading state to true\n        try {\n            const response = await fetch(\"/api/task2all\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    userAnswer1,\n                    userAnswer2,\n                    userAnswer3\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                alert(data.message);\n                if (data.message === \"All answers are correct. You have unlocked the next level.\") {\n                    handleIncrementStep();\n                }\n            }\n        } catch (error) {\n            alert(\"An error occurred. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"task-2 mt-6 mb-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"center\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"bg-black p-3 w-3/4 bg-opacity-50 text-white\",\n                    children: \"Flags are Inside the Provided Website :) Find and answer these questions to proceed to Nect Level\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-6 mb-6 peer h-full rounded-[7px] w-1/3 !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                                type: \"text\",\n                                required: true,\n                                value: taskanswers.task2_1,\n                                onChange: (event)=>setTaskAnswers({\n                                        ...taskanswers,\n                                        task2_1: event.target.value\n                                    })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button-54 w-1/4\",\n                                disabled: validationResults.answer1,\n                                onClick: ()=>{\n                                    soloCheck(taskanswers.task2_1, 1);\n                                },\n                                children: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-6 mb-6 peer h-full w-1/3 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                                type: \"text\",\n                                required: true,\n                                value: taskanswers.task2_2,\n                                onChange: (event)=>setTaskAnswers({\n                                        ...taskanswers,\n                                        task2_2: event.target.value\n                                    })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button-54 w-1/4\",\n                                disabled: validationResults.answer2,\n                                onClick: ()=>{\n                                    soloCheck(taskanswers.task2_2, 2);\n                                },\n                                children: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-6 mb-6 peer h-full w-1/3 rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-900 focus:brder-t-transparent focus:!border-t-gray-900 focus:outline-0 focus:ring-gray-900/10 disabled:border-0 disabled:bg-blue-gray-50 inputfield\",\n                                type: \"text\",\n                                required: true,\n                                value: taskanswers.task2_3,\n                                onChange: (event)=>setTaskAnswers({\n                                        ...taskanswers,\n                                        task2_3: event.target.value\n                                    })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"button-54 w-1/4\",\n                                disabled: validationResults.answer3,\n                                onClick: ()=>{\n                                    soloCheck(taskanswers.task2_3, 3);\n                                },\n                                children: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                                lineNumber: 109,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col  items-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"button-54 items-center\",\n                            onClick: handleCheck,\n                            disabled: isLoading,\n                            children: isLoading ? \"Loading...\" : \"Check\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\student\\\\Documents\\\\GitHub\\\\ctf-final\\\\components\\\\task2.jsx\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Task2, \"b0/1VBFpx9XFyT23csqFmEf80ls=\");\n_c = Task2;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Task2);\nvar _c;\n$RefreshReg$(_c, \"Task2\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdGFzazIuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUUvQixNQUFNQyxRQUFRO1FBQUMsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLElBQUksRUFBRUMsbUJBQW1CLEVBQUU7O0lBQ3JFLE1BQU0sQ0FBQ0MsbUJBQW1CQyxxQkFBcUIsR0FBR1AsK0NBQVFBLENBQUM7UUFDdkRRLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxTQUFTO0lBQ2I7SUFDQSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUM7SUFFM0MsTUFBTWEsWUFBWSxPQUFNQyxZQUFZQztRQUNoQyxJQUFHO1lBQ0MsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGNBQWM7Z0JBQ3ZDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVI7b0JBQVlDO2dCQUFJO1lBQzNDO1lBQ0EsSUFBR0MsU0FBU08sRUFBRSxFQUFDO2dCQUNYLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtnQkFDaENDLE1BQU1GLEtBQUtHLE9BQU87Z0JBQ2xCLElBQUdILEtBQUtHLE9BQU8sSUFBSSxtQkFBa0I7b0JBQ2pDLE9BQU9aO3dCQUNILEtBQUs7NEJBQ0RSLHFCQUFxQjtnQ0FBQyxHQUFHRCxpQkFBaUI7Z0NBQUVFLFNBQVM7NEJBQUk7NEJBQ3pEO3dCQUNKLEtBQUs7NEJBQ0RELHFCQUFxQjtnQ0FBQyxHQUFHRCxpQkFBaUI7Z0NBQUVHLFNBQVM7NEJBQUk7NEJBQ3pEO3dCQUNKLEtBQUs7NEJBQ0RGLHFCQUFxQjtnQ0FBQyxHQUFHRCxpQkFBaUI7Z0NBQUVJLFNBQVM7NEJBQUk7NEJBQ3pEO29CQUNSO2dCQUNKO1lBQ0o7UUFDSixFQUFDLE9BQU1rQixPQUFNO1lBQ1RGLE1BQU07UUFDVjtJQUNKO0lBR0EsTUFBTUcsY0FBYztRQUNoQixNQUFNQyxjQUFjNUIsWUFBWTZCLE9BQU87UUFDdkMsTUFBTUMsY0FBYzlCLFlBQVkrQixPQUFPO1FBQ3ZDLE1BQU1DLGNBQWNoQyxZQUFZaUMsT0FBTztRQUN2Q3ZCLGFBQWEsT0FBTyw0QkFBNEI7UUFHaEQsSUFBRztZQUNDLE1BQU1JLFdBQVcsTUFBTUMsTUFBTSxpQkFBaUI7Z0JBQzFDQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNMLGdCQUFnQjtnQkFDcEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVE7b0JBQWFFO29CQUFhRTtnQkFBWTtZQUNqRTtZQUNBLElBQUdsQixTQUFTTyxFQUFFLEVBQUM7Z0JBQ1gsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO2dCQUNoQ0MsTUFBTUYsS0FBS0csT0FBTztnQkFDbEIsSUFBR0gsS0FBS0csT0FBTyxLQUFLLDhEQUE2RDtvQkFDN0V0QjtnQkFDSjtZQUNKO1FBQ0osRUFBQyxPQUFNdUIsT0FBTTtZQUNURixNQUFNO1FBQ1Y7SUFDSjtJQUVBLHFCQUNJLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQU8sNEVBQUNDO29CQUFFRixXQUFVOzhCQUE4Qzs7Ozs7Ozs7Ozs7MEJBQ25FLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0c7Z0NBQ0dILFdBQVU7Z0NBQ1ZJLE1BQUs7Z0NBQ0xDLFFBQVE7Z0NBQ1JDLE9BQU96QyxZQUFZNkIsT0FBTztnQ0FDMUJhLFVBQVUsQ0FBQ0MsUUFBVTFDLGVBQWU7d0NBQUUsR0FBR0QsV0FBVzt3Q0FBRTZCLFNBQVNjLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSztvQ0FBQzs7Ozs7OzBDQUV0Riw4REFBQ0k7Z0NBQU9WLFdBQVU7Z0NBQWtCVyxVQUFVMUMsa0JBQWtCRSxPQUFPO2dDQUFFeUMsU0FBUztvQ0FDOUVwQyxVQUFVWCxZQUFZNkIsT0FBTyxFQUFFO2dDQUNuQzswQ0FBRzs7Ozs7Ozs7Ozs7O2tDQUVQLDhEQUFDbUI7Ozs7O2tDQUNELDhEQUFDZDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNHO2dDQUNHSCxXQUFVO2dDQUNWSSxNQUFLO2dDQUNMQyxRQUFRO2dDQUNSQyxPQUFPekMsWUFBWStCLE9BQU87Z0NBQzFCVyxVQUFVLENBQUNDLFFBQVUxQyxlQUFlO3dDQUFFLEdBQUdELFdBQVc7d0NBQUUrQixTQUFTWSxNQUFNQyxNQUFNLENBQUNILEtBQUs7b0NBQUM7Ozs7OzswQ0FFdEYsOERBQUNJO2dDQUFPVixXQUFVO2dDQUFrQlcsVUFBVTFDLGtCQUFrQkcsT0FBTztnQ0FBRXdDLFNBQVM7b0NBQzlFcEMsVUFBVVgsWUFBWStCLE9BQU8sRUFBRTtnQ0FDbkM7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FFUCw4REFBQ2lCOzs7OztrQ0FDRCw4REFBQ2Q7d0JBQUlDLFdBQVU7OzBDQUNYLDhEQUFDRztnQ0FDR0gsV0FBVTtnQ0FDVkksTUFBSztnQ0FDTEMsUUFBUTtnQ0FDUkMsT0FBT3pDLFlBQVlpQyxPQUFPO2dDQUMxQlMsVUFBVSxDQUFDQyxRQUFVMUMsZUFBZTt3Q0FBRSxHQUFHRCxXQUFXO3dDQUFFaUMsU0FBU1UsTUFBTUMsTUFBTSxDQUFDSCxLQUFLO29DQUFDOzs7Ozs7MENBRXRGLDhEQUFDSTtnQ0FBT1YsV0FBVTtnQ0FBa0JXLFVBQVUxQyxrQkFBa0JJLE9BQU87Z0NBQUV1QyxTQUFTO29DQUM5RXBDLFVBQVVYLFlBQVlpQyxPQUFPLEVBQUU7Z0NBQ25DOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBRVAsOERBQUNlOzs7OztrQ0FDRCw4REFBQ2Q7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNVOzRCQUFPVixXQUFVOzRCQUF5QlksU0FBU3BCOzRCQUFhbUIsVUFBVXJDO3NDQUNsRUEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRDtHQXZITVY7S0FBQUE7QUF3SE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YXNrMi5qc3g/MDUxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFzazIgPSAoeyB0YXNrYW5zd2Vycywgc2V0VGFza0Fuc3dlcnMsIHN0ZXAsIGhhbmRsZUluY3JlbWVudFN0ZXAgfSkgPT4ge1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25SZXN1bHRzLCBzZXRWYWxpZGF0aW9uUmVzdWx0c10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgYW5zd2VyMTogZmFsc2UsXHJcbiAgICAgICAgYW5zd2VyMjogZmFsc2UsXHJcbiAgICAgICAgYW5zd2VyMzogZmFsc2VcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzb2xvQ2hlY2sgPSBhc3luYyh1c2VyQW5zd2VyLCB0YWcpID0+IHtcclxuICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3Rhc2syXCIsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VyQW5zd2VyLCB0YWcgfSksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5vayl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEubWVzc2FnZSA9PSBcIkNvcnJlY3QgYW5zd2VyLlwiKXtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godGFnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvblJlc3VsdHMoey4uLnZhbGlkYXRpb25SZXN1bHRzLCBhbnN3ZXIxOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvblJlc3VsdHMoey4uLnZhbGlkYXRpb25SZXN1bHRzLCBhbnN3ZXIyOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsaWRhdGlvblJlc3VsdHMoey4uLnZhbGlkYXRpb25SZXN1bHRzLCBhbnN3ZXIzOiB0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVjayA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJBbnN3ZXIxID0gdGFza2Fuc3dlcnMudGFzazJfMTtcclxuICAgICAgICBjb25zdCB1c2VyQW5zd2VyMiA9IHRhc2thbnN3ZXJzLnRhc2syXzI7XHJcbiAgICAgICAgY29uc3QgdXNlckFuc3dlcjMgPSB0YXNrYW5zd2Vycy50YXNrMl8zO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKTsgLy8gU2V0IGxvYWRpbmcgc3RhdGUgdG8gdHJ1ZVxyXG5cclxuXHJcbiAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS90YXNrMmFsbFwiLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlckFuc3dlcjEsIHVzZXJBbnN3ZXIyLCB1c2VyQW5zd2VyMyB9KSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLm9rKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09PSBcIkFsbCBhbnN3ZXJzIGFyZSBjb3JyZWN0LiBZb3UgaGF2ZSB1bmxvY2tlZCB0aGUgbmV4dCBsZXZlbC5cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlSW5jcmVtZW50U3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0YXNrLTIgbXQtNiBtYi02Jz5cclxuICAgICAgICAgICAgPGNlbnRlcj48cCBjbGFzc05hbWU9J2JnLWJsYWNrIHAtMyB3LTMvNCBiZy1vcGFjaXR5LTUwIHRleHQtd2hpdGUnPkZsYWdzIGFyZSBJbnNpZGUgdGhlIFByb3ZpZGVkIFdlYnNpdGUgOikgRmluZCBhbmQgYW5zd2VyIHRoZXNlIHF1ZXN0aW9ucyB0byBwcm9jZWVkIHRvIE5lY3QgTGV2ZWw8L3A+PC9jZW50ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTYgbWItNiBwZWVyIGgtZnVsbCByb3VuZGVkLVs3cHhdIHctMS8zICFib3JkZXIgICFib3JkZXItZ3JheS0zMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgYmctd2hpdGUgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwICBzaGFkb3ctbGcgc2hhZG93LWdyYXktOTAwLzUgb3V0bGluZSBvdXRsaW5lLTAgcmluZy00IHJpbmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXIgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLWJsdWUtZ3JheS0yMDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLXQtYmx1ZS1ncmF5LTIwMCBmb2N1czpib3JkZXItMiAgZm9jdXM6IWJvcmRlci1ncmF5LTkwMCBmb2N1czpicmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8xfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzE6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NCB3LTEvNFwiIGRpc2FibGVkPXt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIxfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29sb0NoZWNrKHRhc2thbnN3ZXJzLnRhc2syXzEsIDEpO1xyXG4gICAgICAgICAgICAgICAgfX0+Q2hlY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBtYi02IHBlZXIgaC1mdWxsIHctMS8zIHJvdW5kZWQtWzdweF0gICFib3JkZXIgICFib3JkZXItZ3JheS0zMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgYmctd2hpdGUgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwICBzaGFkb3ctbGcgc2hhZG93LWdyYXktOTAwLzUgb3V0bGluZSBvdXRsaW5lLTAgcmluZy00IHJpbmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXIgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLWJsdWUtZ3JheS0yMDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLXQtYmx1ZS1ncmF5LTIwMCBmb2N1czpib3JkZXItMiAgZm9jdXM6IWJvcmRlci1ncmF5LTkwMCBmb2N1czpicmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8yfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NCB3LTEvNFwiIGRpc2FibGVkPXt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIyfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29sb0NoZWNrKHRhc2thbnN3ZXJzLnRhc2syXzIsIDIpO1xyXG4gICAgICAgICAgICAgICAgfX0+Q2hlY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNiBtYi02IHBlZXIgaC1mdWxsIHctMS8zIHJvdW5kZWQtWzdweF0gICFib3JkZXIgICFib3JkZXItZ3JheS0zMDAgYm9yZGVyLXQtdHJhbnNwYXJlbnQgYmctdHJhbnNwYXJlbnQgYmctd2hpdGUgcHgtMyBweS0yLjUgZm9udC1zYW5zIHRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1ibHVlLWdyYXktNzAwICBzaGFkb3ctbGcgc2hhZG93LWdyYXktOTAwLzUgb3V0bGluZSBvdXRsaW5lLTAgcmluZy00IHJpbmctdHJhbnNwYXJlbnQgdHJhbnNpdGlvbi1hbGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTUwMCBwbGFjZWhvbGRlci1zaG93bjpib3JkZXIgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLWJsdWUtZ3JheS0yMDAgcGxhY2Vob2xkZXItc2hvd246Ym9yZGVyLXQtYmx1ZS1ncmF5LTIwMCBmb2N1czpib3JkZXItMiAgZm9jdXM6IWJvcmRlci1ncmF5LTkwMCBmb2N1czpicmRlci10LXRyYW5zcGFyZW50IGZvY3VzOiFib3JkZXItdC1ncmF5LTkwMCBmb2N1czpvdXRsaW5lLTAgZm9jdXM6cmluZy1ncmF5LTkwMC8xMCBkaXNhYmxlZDpib3JkZXItMCBkaXNhYmxlZDpiZy1ibHVlLWdyYXktNTAgaW5wdXRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0YXNrYW5zd2Vycy50YXNrMl8zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tBbnN3ZXJzKHsgLi4udGFza2Fuc3dlcnMsIHRhc2syXzM6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi01NCB3LTEvNFwiIGRpc2FibGVkPXt2YWxpZGF0aW9uUmVzdWx0cy5hbnN3ZXIzfSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc29sb0NoZWNrKHRhc2thbnN3ZXJzLnRhc2syXzMsIDMpO1xyXG4gICAgICAgICAgICAgICAgfX0+Q2hlY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCAgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J1dHRvbi01NCBpdGVtcy1jZW50ZXInIG9uQ2xpY2s9e2hhbmRsZUNoZWNrfSBkaXNhYmxlZD17aXNMb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ0NoZWNrJ31cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUYXNrMjtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGFzazIiLCJ0YXNrYW5zd2VycyIsInNldFRhc2tBbnN3ZXJzIiwic3RlcCIsImhhbmRsZUluY3JlbWVudFN0ZXAiLCJ2YWxpZGF0aW9uUmVzdWx0cyIsInNldFZhbGlkYXRpb25SZXN1bHRzIiwiYW5zd2VyMSIsImFuc3dlcjIiLCJhbnN3ZXIzIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwic29sb0NoZWNrIiwidXNlckFuc3dlciIsInRhZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJqc29uIiwiYWxlcnQiLCJtZXNzYWdlIiwiZXJyb3IiLCJoYW5kbGVDaGVjayIsInVzZXJBbnN3ZXIxIiwidGFzazJfMSIsInVzZXJBbnN3ZXIyIiwidGFzazJfMiIsInVzZXJBbnN3ZXIzIiwidGFzazJfMyIsImRpdiIsImNsYXNzTmFtZSIsImNlbnRlciIsInAiLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImJ1dHRvbiIsImRpc2FibGVkIiwib25DbGljayIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/task2.jsx\n"));

/***/ })

});