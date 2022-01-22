"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/add-book",{

/***/ "./FireComponents/AddBook/index.js":
/*!*****************************************!*\
  !*** ./FireComponents/AddBook/index.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _media_kabir_Softwere_My_Learning_FullStack_Challenge_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _media_kabir_Softwere_My_Learning_FullStack_Challenge_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_kabir_Softwere_My_Learning_FullStack_Challenge_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _BookService_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../BookService/index */ \"./FireComponents/BookService/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar initialValue = {\n    name: \"\",\n    author: \"\",\n    publication: \"\",\n    copies: \"\"\n};\nvar AddBook = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(initialValue), book = ref[0], setbook = ref[1];\n    var name = book.name, author = book.author, publication = book.publication, copies = book.copies;\n    var onValueChange = function(e) {\n        setbook(_objectSpread({}, book, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    var addbookDetails = function() {\n        var _ref = _asyncToGenerator(_media_kabir_Softwere_My_Learning_FullStack_Challenge_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var newBook, response;\n            return _media_kabir_Softwere_My_Learning_FullStack_Challenge_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"Data: \", book);\n                        newBook = {\n                            name: book.name,\n                            author: book.author,\n                            publication: book.publication,\n                            copies: book.copies,\n                            createdAt: new Date().toISOString()\n                        };\n                        _ctx.prev = 2;\n                        _ctx.next = 5;\n                        return _BookService_index__WEBPACK_IMPORTED_MODULE_5__[\"default\"].addBooks(newBook);\n                    case 5:\n                        response = _ctx.sent;\n                        console.log(\"Response: \", response);\n                        router.push(\"/all-book\");\n                        setBook(initialValue);\n                        _ctx.next = 14;\n                        break;\n                    case 11:\n                        _ctx.prev = 11;\n                        _ctx.t0 = _ctx[\"catch\"](2);\n                        console.log(_ctx.t0);\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    2,\n                    11\n                ]\n            ]);\n        }));\n        return function addbookDetails() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-zinc-700 w-full text-red-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                className: \"text-center\",\n                children: \"Add Book\"\n            }, void 0, false, {\n                fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"w-1/5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"px-4 py-2 rounded text-black\",\n                                    onChange: function(e) {\n                                        return onValueChange(e);\n                                    },\n                                    name: \"name\",\n                                    value: name,\n                                    id: \"my-input\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"Author\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"px-4 py-2 rounded text-black\",\n                                    onChange: function(e) {\n                                        return onValueChange(e);\n                                    },\n                                    name: \"author\",\n                                    value: author,\n                                    id: \"my-input\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"Publication\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"px-4 py-2 rounded text-black\",\n                                    onChange: function(e) {\n                                        return onValueChange(e);\n                                    },\n                                    name: \"publication\",\n                                    value: publication,\n                                    id: \"my-input\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                    className: \"block\",\n                                    children: \"Copies\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"px-4 py-2 rounded text-black\",\n                                    onChange: function(e) {\n                                        return onValueChange(e);\n                                    },\n                                    name: \"copies\",\n                                    value: copies,\n                                    id: \"my-input\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"my-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                className: \"bg-green-400 w-full py-2 rounded text-base hover:bg-green-300 text-slate-800\",\n                                onClick: function() {\n                                    return addbookDetails();\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/all-book\",\n                                    children: \"Add Book\"\n                                }, void 0, false, {\n                                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/kabir/Softwere/My Learning/FullStack_Challenge/client/FireComponents/AddBook/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, _this));\n};\n_s(AddBook, \"p5LoSEOCjpncBVxtsrN7Sxkjqug=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = AddBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddBook);\nvar _c;\n$RefreshReg$(_c, \"AddBook\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GaXJlQ29tcG9uZW50cy9BZGRCb29rL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0c7QUFDSTtBQUNrQjtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdkMsR0FBSyxDQUFDSyxZQUFZLEdBQUcsQ0FBQztJQUNwQkMsSUFBSSxFQUFFLENBQUU7SUFDUkMsTUFBTSxFQUFFLENBQUU7SUFDVkMsV0FBVyxFQUFFLENBQUU7SUFDZkMsTUFBTSxFQUFFLENBQUU7QUFDWixDQUFDO0FBRUQsR0FBSyxDQUFDQyxPQUFPLEdBQUcsUUFDaEIsR0FEc0IsQ0FBQzs7SUFDckIsR0FBSyxDQUFDQyxNQUFNLEdBQUdQLHNEQUFTO0lBQ3hCLEdBQUssQ0FBbUJGLEdBQXNCLEdBQXRCQSwrQ0FBUSxDQUFDRyxZQUFZLEdBQXRDTyxJQUFJLEdBQWFWLEdBQXNCLEtBQWpDVyxPQUFPLEdBQUlYLEdBQXNCO0lBQzlDLEdBQUssQ0FBR0ksSUFBSSxHQUFrQ00sSUFBSSxDQUExQ04sSUFBSSxFQUFFQyxNQUFNLEdBQTBCSyxJQUFJLENBQXBDTCxNQUFNLEVBQUVDLFdBQVcsR0FBYUksSUFBSSxDQUE1QkosV0FBVyxFQUFFQyxNQUFNLEdBQUtHLElBQUksQ0FBZkgsTUFBTTtJQUV6QyxHQUFLLENBQUNLLGFBQWEsR0FBRyxRQUFRLENBQVBDLENBQUMsRUFBSyxDQUFDO1FBQzVCRixPQUFPLG1CQUFNRCxJQUFJLHNCQUFHRyxDQUFDLENBQUNDLE1BQU0sQ0FBQ1YsSUFBSSxFQUFHUyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUNwRCxDQUFDO0lBRUQsR0FBSyxDQUFDQyxjQUFjOzZNQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUU1QkMsT0FBTyxFQVFMQyxRQUFROzs7O3dCQVRoQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBUSxTQUFFVixJQUFJO3dCQUNwQk8s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QyxDQUFDO0dBdEZLNUIsT0FBTzs7UUFDSU4sa0RBQVM7OztLQURwQk0sT0FBTztBQXdGYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0ZpcmVDb21wb25lbnRzL0FkZEJvb2svaW5kZXguanM/Y2Q0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJvb2tEYXRhU2VydmljZSBmcm9tIFwiLi4vQm9va1NlcnZpY2UvaW5kZXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBpbml0aWFsVmFsdWUgPSB7XG4gIG5hbWU6IFwiXCIsXG4gIGF1dGhvcjogXCJcIixcbiAgcHVibGljYXRpb246IFwiXCIsXG4gIGNvcGllczogXCJcIixcbn07XG5cbmNvbnN0IEFkZEJvb2sgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYm9vaywgc2V0Ym9va10gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xuICBjb25zdCB7IG5hbWUsIGF1dGhvciwgcHVibGljYXRpb24sIGNvcGllcyB9ID0gYm9vaztcblxuICBjb25zdCBvblZhbHVlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRib29rKHsgLi4uYm9vaywgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBjb25zdCBhZGRib29rRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkRhdGE6IFwiLCBib29rKTtcbiAgICBjb25zdCBuZXdCb29rID0ge1xuICAgICAgbmFtZTogYm9vay5uYW1lLFxuICAgICAgYXV0aG9yOiBib29rLmF1dGhvcixcbiAgICAgIHB1YmxpY2F0aW9uOiBib29rLnB1YmxpY2F0aW9uLFxuICAgICAgY29waWVzOiBib29rLmNvcGllcyxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQm9va0RhdGFTZXJ2aWNlLmFkZEJvb2tzKG5ld0Jvb2spO1xuICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZTogXCIsIHJlc3BvbnNlKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL2FsbC1ib29rXCIpO1xuICAgICAgc2V0Qm9vayhpbml0aWFsVmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXppbmMtNzAwIHctZnVsbCB0ZXh0LXJlZC01MFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QWRkIEJvb2s8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIGlkPVwibXktaW5wdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+QXV0aG9yPC9sYWJlbD5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTQgcHktMiByb3VuZGVkIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVmFsdWVDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgIG5hbWU9XCJhdXRob3JcIlxuICAgICAgICAgICAgICB2YWx1ZT17YXV0aG9yfVxuICAgICAgICAgICAgICBpZD1cIm15LWlucHV0XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9ja1wiPlB1YmxpY2F0aW9uPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICBuYW1lPVwicHVibGljYXRpb25cIlxuICAgICAgICAgICAgICB2YWx1ZT17cHVibGljYXRpb259XG4gICAgICAgICAgICAgIGlkPVwibXktaW5wdXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrXCI+Q29waWVzPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgcm91bmRlZCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblZhbHVlQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICBuYW1lPVwiY29waWVzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2NvcGllc31cbiAgICAgICAgICAgICAgaWQ9XCJteS1pbnB1dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi00MDAgdy1mdWxsIHB5LTIgcm91bmRlZCB0ZXh0LWJhc2UgIGhvdmVyOmJnLWdyZWVuLTMwMCB0ZXh0LXNsYXRlLTgwMFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZGJvb2tEZXRhaWxzKCl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWxsLWJvb2tcIj5BZGQgQm9vazwvTGluaz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkQm9vaztcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkxpbmsiLCJ1c2VTdGF0ZSIsIkJvb2tEYXRhU2VydmljZSIsInVzZVJvdXRlciIsImluaXRpYWxWYWx1ZSIsIm5hbWUiLCJhdXRob3IiLCJwdWJsaWNhdGlvbiIsImNvcGllcyIsIkFkZEJvb2siLCJyb3V0ZXIiLCJib29rIiwic2V0Ym9vayIsIm9uVmFsdWVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJhZGRib29rRGV0YWlscyIsIm5ld0Jvb2siLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVkQXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJhZGRCb29rcyIsInB1c2giLCJzZXRCb29rIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJsYWJlbCIsImlucHV0Iiwib25DaGFuZ2UiLCJpZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./FireComponents/AddBook/index.js\n");

/***/ })

});