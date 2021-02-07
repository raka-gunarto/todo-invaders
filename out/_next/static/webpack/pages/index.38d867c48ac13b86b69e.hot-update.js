webpackHotUpdate_N_E("pages/index",{

/***/ "./components/todoinvaders.js":
/*!************************************!*\
  !*** ./components/todoinvaders.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoInvaders; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/todoinvaders.module.css */ \"./styles/todoinvaders.module.css\");\n/* harmony import */ var _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/rakagunarto/Projects/todo-invaders/components/todoinvaders.js\",\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction TodoInvaders(_ref) {\n  _s();\n\n  var numdays = _ref.numdays;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      rows = _useState2[0],\n      setRows = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      updateInterval = _useState3[0],\n      setUpdateInterval = _useState3[1];\n\n  var destroyTodo = function destroyTodo(e, idx) {\n    e.target.onanimationend = function () {\n      todos.splice(idx, 1);\n      setTodos(todos);\n      localStorage.setItem(\"todos\", JSON.stringify(todos));\n    };\n\n    e.target.classList.add(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.explode);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showNewTodoGhost = _useState4[0],\n      setShowNewTodoGhost = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      newTodoGhostOffset = _useState5[0],\n      setNewTodoGhostOffset = _useState5[1];\n\n  var newTodoHover = function newTodoHover(e) {\n    setShowNewTodoGhost(true);\n    setNewTodoGhostOffset((e.pageX - 80) / window.innerWidth * 100);\n  };\n\n  var newTodoHoverOff = function newTodoHoverOff() {\n    return setShowNewTodoGhost(false);\n  };\n\n  var createTodo = function createTodo() {\n    var title = window.prompt(\"TODO Title\");\n    var desc = window.prompt(\"TODO Description\");\n    var due = Date.parse(window.prompt(\"TODO Due Date\", \"yyyy-mm-dd\")) || null;\n    if (!due) return window.alert(\"Invalid Date!\");\n    todos.push({\n      title: title,\n      description: desc,\n      duedate: due,\n      offset: newTodoGhostOffset\n    });\n    setTodos(todos);\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (updateInterval) clearInterval(updateInterval);\n    setRows(getRows(todos, numdays, destroyTodo));\n    setUpdateInterval(setInterval(function () {\n      setRows(getRows(todos, numdays, destroyTodo));\n    }, 1000));\n  }, [todos]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return setTodos(JSON.parse(localStorage.getItem(\"todos\")));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: \"absolute\",\n        top: 0,\n        left: 0,\n        width: \"100%\",\n        height: \"8rem\"\n      },\n      onMouseMove: function onMouseMove(e) {\n        return newTodoHover(e);\n      },\n      onMouseLeave: newTodoHoverOff,\n      onClick: createTodo,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n        style: {\n          transform: \"translateX(\".concat(newTodoGhostOffset, \"vw)\"),\n          opacity: 0.5\n        },\n        hidden: !showNewTodoGhost,\n        className: \"\".concat(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.invader, \" \").concat(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ghost),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/invader.svg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.todocontainer,\n      children: rows\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(TodoInvaders, \"xwsiptOsbAgUhvdfde9Mydw44TU=\");\n\n_c = TodoInvaders;\n\nfunction getRows(todos, numdays, destroyTodo) {\n  var _this = this;\n\n  var rows = [];\n\n  for (var i = 0; i < numdays; ++i) {\n    var invaders = [];\n    var today = Date.now();\n    var daysLeft = numdays - i;\n\n    var _iterator = _createForOfIteratorHelper(todos),\n        _step;\n\n    try {\n      var _loop = function _loop() {\n        var todo = _step.value;\n        var diffDays = Math.ceil((todo.duedate - today) / (1000 * 60 * 60 * 24));\n\n        if (diffDays == daysLeft || daysLeft == numdays && diffDays >= daysLeft) {\n          var drop = diffDays == daysLeft ? -3 * ((todo.duedate - today) / (1000 * 60 * 60 * 24) % 1) : 0;\n          invaders.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            style: {\n              transform: \"translateY(\".concat(drop, \"rem) translateX(\").concat(todo.offset, \"vw)\")\n            },\n            className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.invader,\n            onClick: function onClick(e) {\n              return destroyTodo(e, todos.indexOf(todo));\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: new Date().getSeconds() % 2 == 0 ? \"/invader.svg\" : \"/invader2.svg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 108,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n              children: todo.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n              children: todo.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 11\n          }, _this));\n        }\n      };\n\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        _loop();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    rows.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.daysrow,\n      children: [numdays - i, numdays - i == numdays ? \"+\" : \"\", \" day\", numdays - i > 1 ? \"s\" : \"\", \" left\", invaders]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 7\n    }, this));\n  }\n\n  return rows;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TodoInvaders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2RvaW52YWRlcnMuanM/MThmOCJdLCJuYW1lcyI6WyJUb2RvSW52YWRlcnMiLCJudW1kYXlzIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwicm93cyIsInNldFJvd3MiLCJ1cGRhdGVJbnRlcnZhbCIsInNldFVwZGF0ZUludGVydmFsIiwiZGVzdHJveVRvZG8iLCJlIiwiaWR4IiwidGFyZ2V0Iiwib25hbmltYXRpb25lbmQiLCJzcGxpY2UiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlcyIsImV4cGxvZGUiLCJzaG93TmV3VG9kb0dob3N0Iiwic2V0U2hvd05ld1RvZG9HaG9zdCIsIm5ld1RvZG9HaG9zdE9mZnNldCIsInNldE5ld1RvZG9HaG9zdE9mZnNldCIsIm5ld1RvZG9Ib3ZlciIsInBhZ2VYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm5ld1RvZG9Ib3Zlck9mZiIsImNyZWF0ZVRvZG8iLCJ0aXRsZSIsInByb21wdCIsImRlc2MiLCJkdWUiLCJEYXRlIiwicGFyc2UiLCJhbGVydCIsInB1c2giLCJkZXNjcmlwdGlvbiIsImR1ZWRhdGUiLCJvZmZzZXQiLCJ1c2VFZmZlY3QiLCJjbGVhckludGVydmFsIiwiZ2V0Um93cyIsInNldEludGVydmFsIiwiZ2V0SXRlbSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwib3BhY2l0eSIsImludmFkZXIiLCJnaG9zdCIsInRvZG9jb250YWluZXIiLCJpIiwiaW52YWRlcnMiLCJ0b2RheSIsIm5vdyIsImRheXNMZWZ0IiwidG9kbyIsImRpZmZEYXlzIiwiTWF0aCIsImNlaWwiLCJkcm9wIiwiaW5kZXhPZiIsImdldFNlY29uZHMiLCJkYXlzcm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFD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cUJBQVMsRUFBRXRCLHNFQUFNLENBQUNtQyxPQUpwQjtBQUtFLG1CQUFPLEVBQUUsaUJBQUM5QyxDQUFEO0FBQUEscUJBQU9ELFdBQVcsQ0FBQ0MsQ0FBRCxFQUFJUCxLQUFLLENBQUNrRSxPQUFOLENBQWNMLElBQWQsQ0FBSixDQUFsQjtBQUFBLGFBTFg7QUFBQSxvQ0FPRTtBQUNFLGlCQUFHLEVBQ0QsSUFBSTNCLElBQUosR0FBV2lDLFVBQVgsS0FBMEIsQ0FBMUIsSUFBK0IsQ0FBL0IsR0FDSSxjQURKLEdBRUk7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBY0U7QUFBTSx1QkFBUyxFQUFFakQsc0VBQU0sQ0FBQ29CLFdBQXhCO0FBQUEsd0JBQXNDdUIsSUFBSSxDQUFDdkI7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkRixlQWVFO0FBQUEsd0JBQWF1QixJQUFJLENBQUMvQjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQW1CRDtBQTlCNkI7O0FBSWhDLDBEQUF3QjtBQUFBO0FBMkJ2QjtBQS9CK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFpQ2hDNUIsUUFBSSxDQUFDbUMsSUFBTCxlQUNFO0FBQUssZUFBUyxFQUFFbkIsc0VBQU0sQ0FBQ2tELE9BQXZCO0FBQUEsaUJBQ0d0RSxPQUFPLEdBQUcwRCxDQURiLEVBRUcxRCxPQUFPLEdBQUcwRCxDQUFWLElBQWUxRCxPQUFmLEdBQXlCLEdBQXpCLEdBQStCLEVBRmxDLFVBRTBDQSxPQUFPLEdBQUcwRCxDQUFWLEdBQWMsQ0FBZCxHQUFrQixHQUFsQixHQUF3QixFQUZsRSxXQUdHQyxRQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBT0Q7O0FBRUQsU0FBT3ZELElBQVA7QUFDRCIsImZpbGUiOiIuL2NvbXBvbmVudHMvdG9kb2ludmFkZXJzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNsb25lRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3RvZG9pbnZhZGVycy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZG9JbnZhZGVycyh7IG51bWRheXMgfSkge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBbcm93cywgc2V0Um93c10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1cGRhdGVJbnRlcnZhbCwgc2V0VXBkYXRlSW50ZXJ2YWxdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZGVzdHJveVRvZG8gPSAoZSwgaWR4KSA9PiB7XG4gICAgZS50YXJnZXQub25hbmltYXRpb25lbmQgPSAoKSA9PiB7XG4gICAgICB0b2Rvcy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgIHNldFRvZG9zKHRvZG9zKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICB9O1xuXG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChzdHlsZXMuZXhwbG9kZSk7XG4gIH07XG5cbiAgY29uc3QgW3Nob3dOZXdUb2RvR2hvc3QsIHNldFNob3dOZXdUb2RvR2hvc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbmV3VG9kb0dob3N0T2Zmc2V0LCBzZXROZXdUb2RvR2hvc3RPZmZzZXRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG5ld1RvZG9Ib3ZlciA9IChlKSA9PiB7XG4gICAgc2V0U2hvd05ld1RvZG9HaG9zdCh0cnVlKTtcbiAgICBzZXROZXdUb2RvR2hvc3RPZmZzZXQoKChlLnBhZ2VYIC0gODApIC8gd2luZG93LmlubmVyV2lkdGgpICogMTAwKTtcbiAgfTtcbiAgY29uc3QgbmV3VG9kb0hvdmVyT2ZmID0gKCkgPT4gc2V0U2hvd05ld1RvZG9HaG9zdChmYWxzZSk7XG5cbiAgY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgICBsZXQgdGl0bGUgPSB3aW5kb3cucHJvbXB0KFwiVE9ETyBUaXRsZVwiKTtcbiAgICBsZXQgZGVzYyA9IHdpbmRvdy5wcm9tcHQoXCJUT0RPIERlc2NyaXB0aW9uXCIpO1xuICAgIGxldCBkdWUgPSBEYXRlLnBhcnNlKHdpbmRvdy5wcm9tcHQoXCJUT0RPIER1ZSBEYXRlXCIsIFwieXl5eS1tbS1kZFwiKSkgfHwgbnVsbDtcbiAgICBpZiAoIWR1ZSkgcmV0dXJuIHdpbmRvdy5hbGVydChcIkludmFsaWQgRGF0ZSFcIik7XG4gICAgdG9kb3MucHVzaCh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogZGVzYyxcbiAgICAgIGR1ZWRhdGU6IGR1ZSxcbiAgICAgIG9mZnNldDogbmV3VG9kb0dob3N0T2Zmc2V0LFxuICAgIH0pO1xuICAgIHNldFRvZG9zKHRvZG9zKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXBkYXRlSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodXBkYXRlSW50ZXJ2YWwpO1xuXG4gICAgc2V0Um93cyhnZXRSb3dzKHRvZG9zLCBudW1kYXlzLCBkZXN0cm95VG9kbykpO1xuICAgIHNldFVwZGF0ZUludGVydmFsKFxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSb3dzKGdldFJvd3ModG9kb3MsIG51bWRheXMsIGRlc3Ryb3lUb2RvKSk7XG4gICAgICB9LCAxMDAwKVxuICAgICk7XG4gIH0sIFt0b2Rvc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRUb2RvcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCI4cmVtXCIsXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gbmV3VG9kb0hvdmVyKGUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e25ld1RvZG9Ib3Zlck9mZn1cbiAgICAgICAgb25DbGljaz17Y3JlYXRlVG9kb31cbiAgICAgID5cbiAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bmV3VG9kb0dob3N0T2Zmc2V0fXZ3KWAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBoaWRkZW49eyFzaG93TmV3VG9kb0dob3N0fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmludmFkZXJ9ICR7c3R5bGVzLmdob3N0fWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbnZhZGVyLnN2Z1wiIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb2NvbnRhaW5lcn0+e3Jvd3N9PC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0Um93cyh0b2RvcywgbnVtZGF5cywgZGVzdHJveVRvZG8pIHtcbiAgbGV0IHJvd3MgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1kYXlzOyArK2kpIHtcbiAgICBsZXQgaW52YWRlcnMgPSBbXTtcbiAgICBsZXQgdG9kYXkgPSBEYXRlLm5vdygpO1xuICAgIGxldCBkYXlzTGVmdCA9IG51bWRheXMgLSBpO1xuICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIGxldCBkaWZmRGF5cyA9IE1hdGguY2VpbCgodG9kby5kdWVkYXRlIC0gdG9kYXkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgIGlmIChcbiAgICAgICAgZGlmZkRheXMgPT0gZGF5c0xlZnQgfHxcbiAgICAgICAgKGRheXNMZWZ0ID09IG51bWRheXMgJiYgZGlmZkRheXMgPj0gZGF5c0xlZnQpXG4gICAgICApIHtcbiAgICAgICAgbGV0IGRyb3AgPSAoZGlmZkRheXMgPT0gZGF5c0xlZnQpID8gLTMgKiAoKCh0b2RvLmR1ZWRhdGUgLSB0b2RheSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpICUgMSkgOiAwO1xuICAgICAgICBpbnZhZGVycy5wdXNoKFxuICAgICAgICAgIDxmaWd1cmVcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtkcm9wfXJlbSkgdHJhbnNsYXRlWCgke3RvZG8ub2Zmc2V0fXZ3KWAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW52YWRlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBkZXN0cm95VG9kbyhlLCB0b2Rvcy5pbmRleE9mKHRvZG8pKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgbmV3IERhdGUoKS5nZXRTZWNvbmRzKCkgJSAyID09IDBcbiAgICAgICAgICAgICAgICAgID8gXCIvaW52YWRlci5zdmdcIlxuICAgICAgICAgICAgICAgICAgOiBcIi9pbnZhZGVyMi5zdmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3RvZG8uZGVzY3JpcHRpb259PC9zcGFuPlxuICAgICAgICAgICAgPGZpZ2NhcHRpb24+e3RvZG8udGl0bGV9PC9maWdjYXB0aW9uPlxuICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJvd3MucHVzaChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF5c3Jvd30+XG4gICAgICAgIHtudW1kYXlzIC0gaX1cbiAgICAgICAge251bWRheXMgLSBpID09IG51bWRheXMgPyBcIitcIiA6IFwiXCJ9IGRheXtudW1kYXlzIC0gaSA+IDEgPyBcInNcIiA6IFwiXCJ9IGxlZnRcbiAgICAgICAge2ludmFkZXJzfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiByb3dzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todoinvaders.js\n");

/***/ })

})