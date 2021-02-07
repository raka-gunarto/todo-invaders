webpackHotUpdate_N_E("pages/index",{

/***/ "./components/todoinvaders.js":
/*!************************************!*\
  !*** ./components/todoinvaders.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TodoInvaders; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/todoinvaders.module.css */ \"./styles/todoinvaders.module.css\");\n/* harmony import */ var _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/rakagunarto/Projects/todo-invaders/components/todoinvaders.js\",\n    _s = $RefreshSig$();\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction TodoInvaders(_ref) {\n  _s();\n\n  var numdays = _ref.numdays;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      rows = _useState2[0],\n      setRows = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      updateInterval = _useState3[0],\n      setUpdateInterval = _useState3[1];\n\n  var destroyTodo = function destroyTodo(e, idx) {\n    e.target.onanimationend = function () {\n      todos.splice(idx, 1);\n      setTodos(todos);\n    };\n\n    e.target.classList.add(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.explode);\n  };\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      showNewTodoGhost = _useState4[0],\n      setShowNewTodoGhost = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      newTodoGhostOffset = _useState5[0],\n      setNewTodoGhostOffset = _useState5[1];\n\n  var newTodoHover = function newTodoHover(e) {\n    setShowNewTodoGhost(true);\n    setNewTodoGhostOffset((e.pageX - 80) / window.innerWidth * 100);\n  };\n\n  var newTodoHoverOff = function newTodoHoverOff() {\n    return setShowNewTodoGhost(false);\n  };\n\n  var createTodo = function createTodo() {\n    var title = window.prompt(\"TODO Title\");\n    var desc = window.prompt(\"TODO Description\");\n    var due = Date.parse(window.prompt(\"TODO Due Date\", \"yyyy-mm-dd\")) || null;\n    if (!due) return window.alert(\"Invalid Date!\");\n    todos.push({\n      title: title,\n      description: desc,\n      duedate: due,\n      offset: newTodoGhostOffset\n    });\n    setTodos(todos);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log(called);\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n    if (updateInterval) clearInterval(updateInterval);\n    setRows(getRows(todos, numdays, destroyTodo));\n    setUpdateInterval(setInterval(function () {\n      setRows(getRows(todos, numdays, destroyTodo));\n    }, 1000));\n  }, [todos]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return setTodos(JSON.parse(localStorage.getItem(\"todos\")));\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: \"absolute\",\n        top: 0,\n        left: 0,\n        width: \"100%\",\n        height: \"8rem\"\n      },\n      onMouseMove: function onMouseMove(e) {\n        return newTodoHover(e);\n      },\n      onMouseLeave: newTodoHoverOff,\n      onClick: createTodo,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n        style: {\n          transform: \"translateX(\".concat(newTodoGhostOffset, \"vw)\"),\n          opacity: 0.5\n        },\n        hidden: !showNewTodoGhost,\n        className: \"\".concat(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.invader, \" \").concat(_styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.ghost),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/invader.svg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.todocontainer,\n      children: rows\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(TodoInvaders, \"xwsiptOsbAgUhvdfde9Mydw44TU=\");\n\n_c = TodoInvaders;\n\nfunction getRows(todos, numdays, destroyTodo) {\n  var _this = this;\n\n  var rows = [];\n\n  for (var i = 0; i < numdays; ++i) {\n    var invaders = [];\n    var today = Date.now();\n    var daysLeft = numdays - i;\n\n    var _iterator = _createForOfIteratorHelper(todos),\n        _step;\n\n    try {\n      var _loop = function _loop() {\n        var todo = _step.value;\n        var diffDays = Math.ceil((todo.duedate - today) / (1000 * 60 * 60 * 24));\n\n        if (diffDays == daysLeft || daysLeft == numdays && diffDays >= daysLeft) {\n          var drop = -3 * ((todo.duedate - today) / (1000 * 60 * 60 * 24) % 1);\n          invaders.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figure\", {\n            style: {\n              transform: \"translateY(\".concat(drop, \"rem) translateX(\").concat(todo.offset, \"vw)\")\n            },\n            className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.invader,\n            onClick: function onClick(e) {\n              return destroyTodo(e, todos.indexOf(todo));\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: new Date().getSeconds() % 2 == 0 ? \"/invader.svg\" : \"/invader2.svg\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 105,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n              className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.description,\n              children: todo.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 13\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"figcaption\", {\n              children: todo.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 13\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, _this));\n        }\n      };\n\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        _loop();\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    rows.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_todoinvaders_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.daysrow,\n      children: [numdays - i, numdays - i == numdays ? \"+\" : \"\", \" day\", numdays - i > 1 ? \"s\" : \"\", \" left\", invaders]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 120,\n      columnNumber: 7\n    }, this));\n  }\n\n  return rows;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"TodoInvaders\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2RvaW52YWRlcnMuanM/MThmOCJdLCJuYW1lcyI6WyJUb2RvSW52YWRlcnMiLCJudW1kYXlzIiwidXNlU3RhdGUiLCJ0b2RvcyIsInNldFRvZG9zIiwicm93cyIsInNldFJvd3MiLCJ1cGRhdGVJbnRlcnZhbCIsInNldFVwZGF0ZUludGVydmFsIiwiZGVzdHJveVRvZG8iLCJlIiwiaWR4IiwidGFyZ2V0Iiwib25hbmltYXRpb25lbmQiLCJzcGxpY2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZXMiLCJleHBsb2RlIiwic2hvd05ld1RvZG9HaG9zdCIsInNldFNob3dOZXdUb2RvR2hvc3QiLCJuZXdUb2RvR2hvc3RPZmZzZXQiLCJzZXROZXdUb2RvR2hvc3RPZmZzZXQiLCJuZXdUb2RvSG92ZXIiLCJwYWdlWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJuZXdUb2RvSG92ZXJPZmYiLCJjcmVhdGVUb2RvIiwidGl0bGUiLCJwcm9tcHQiLCJkZXNjIiwiZHVlIiwiRGF0ZSIsInBhcnNlIiwiYWxlcnQiLCJwdXNoIiwiZGVzY3JpcHRpb24iLCJkdWVkYXRlIiwib2Zmc2V0IiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImNhbGxlZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiY2xlYXJJbnRlcnZhbCIsImdldFJvd3MiLCJzZXRJbnRlcnZhbCIsImdldEl0ZW0iLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJpbnZhZGVyIiwiZ2hvc3QiLCJ0b2RvY29udGFpbmVyIiwiaSIsImludmFkZXJzIiwidG9kYXkiLCJub3ciLCJkYXlzTGVmdCIsInRvZG8iLCJkaWZmRGF5cyIsIk1hdGgiLCJjZWlsIiwiZHJvcCIsImluZGV4T2YiLCJnZXRTZWNvbmRzIiwiZGF5c3JvdyJdLCJtYXBwaW5ncyI6Ijs7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QUFBLHFCQUFPRCxXQUFXLENBQUNDLENBQUQsRUFBSVAsS0FBSyxDQUFDcUUsT0FBTixDQUFjTCxJQUFkLENBQUosQ0FBbEI7QUFBQSxhQUxYO0FBQUEsb0NBT0U7QUFDRSxpQkFBRyxFQUNELElBQUlsQyxJQUFKLEdBQVd3QyxVQUFYLEtBQTBCLENBQTFCLElBQStCLENBQS9CLEdBQ0ksY0FESixHQUVJO0FBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQWNFO0FBQU0sdUJBQVMsRUFBRXhELHNFQUFNLENBQUNvQixXQUF4QjtBQUFBLHdCQUFzQzhCLElBQUksQ0FBQzlCO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEYsZUFlRTtBQUFBLHdCQUFhOEIsSUFBSSxDQUFDdEM7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFtQkQ7QUEzQjZCOztBQUloQywwREFBd0I7QUFBQTtBQXdCdkI7QUE1QitCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBOEJoQ3hCLFFBQUksQ0FBQytCLElBQUwsZUFDRTtBQUFLLGVBQVMsRUFBRW5CLHNFQUFNLENBQUN5RCxPQUF2QjtBQUFBLGlCQUNHekUsT0FBTyxHQUFHNkQsQ0FEYixFQUVHN0QsT0FBTyxHQUFHNkQsQ0FBVixJQUFlN0QsT0FBZixHQUF5QixHQUF6QixHQUErQixFQUZsQyxVQUUwQ0EsT0FBTyxHQUFHNkQsQ0FBVixHQUFjLENBQWQsR0FBa0IsR0FBbEIsR0FBd0IsRUFGbEUsV0FHR0MsUUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQU9EOztBQUVELFNBQU8xRCxJQUFQO0FBQ0QiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvZG9pbnZhZGVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjbG9uZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy90b2RvaW52YWRlcnMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RvSW52YWRlcnMoeyBudW1kYXlzIH0pIHtcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgW3Jvd3MsIHNldFJvd3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXBkYXRlSW50ZXJ2YWwsIHNldFVwZGF0ZUludGVydmFsXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGRlc3Ryb3lUb2RvID0gKGUsIGlkeCkgPT4ge1xuICAgIGUudGFyZ2V0Lm9uYW5pbWF0aW9uZW5kID0gKCkgPT4ge1xuICAgICAgdG9kb3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICBzZXRUb2Rvcyh0b2Rvcyk7XG4gICAgfTtcblxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoc3R5bGVzLmV4cGxvZGUpO1xuICB9O1xuXG4gIGNvbnN0IFtzaG93TmV3VG9kb0dob3N0LCBzZXRTaG93TmV3VG9kb0dob3N0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW25ld1RvZG9HaG9zdE9mZnNldCwgc2V0TmV3VG9kb0dob3N0T2Zmc2V0XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBuZXdUb2RvSG92ZXIgPSAoZSkgPT4ge1xuICAgIHNldFNob3dOZXdUb2RvR2hvc3QodHJ1ZSk7XG4gICAgc2V0TmV3VG9kb0dob3N0T2Zmc2V0KCgoZS5wYWdlWCAtIDgwKSAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDEwMCk7XG4gIH07XG4gIGNvbnN0IG5ld1RvZG9Ib3Zlck9mZiA9ICgpID0+IHNldFNob3dOZXdUb2RvR2hvc3QoZmFsc2UpO1xuXG4gIGNvbnN0IGNyZWF0ZVRvZG8gPSAoKSA9PiB7XG4gICAgbGV0IHRpdGxlID0gd2luZG93LnByb21wdChcIlRPRE8gVGl0bGVcIik7XG4gICAgbGV0IGRlc2MgPSB3aW5kb3cucHJvbXB0KFwiVE9ETyBEZXNjcmlwdGlvblwiKTtcbiAgICBsZXQgZHVlID0gRGF0ZS5wYXJzZSh3aW5kb3cucHJvbXB0KFwiVE9ETyBEdWUgRGF0ZVwiLCBcInl5eXktbW0tZGRcIikpIHx8IG51bGw7XG4gICAgaWYgKCFkdWUpIHJldHVybiB3aW5kb3cuYWxlcnQoXCJJbnZhbGlkIERhdGUhXCIpO1xuICAgIHRvZG9zLnB1c2goe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2MsXG4gICAgICBkdWVkYXRlOiBkdWUsXG4gICAgICBvZmZzZXQ6IG5ld1RvZG9HaG9zdE9mZnNldCxcbiAgICB9KTtcbiAgICBzZXRUb2Rvcyh0b2Rvcyk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjYWxsZWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9kb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcbiAgICBpZiAodXBkYXRlSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodXBkYXRlSW50ZXJ2YWwpO1xuXG4gICAgc2V0Um93cyhnZXRSb3dzKHRvZG9zLCBudW1kYXlzLCBkZXN0cm95VG9kbykpO1xuICAgIHNldFVwZGF0ZUludGVydmFsKFxuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRSb3dzKGdldFJvd3ModG9kb3MsIG51bWRheXMsIGRlc3Ryb3lUb2RvKSk7XG4gICAgICB9LCAxMDAwKVxuICAgICk7XG4gIH0sIFt0b2Rvc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRUb2RvcyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikpKSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgIGhlaWdodDogXCI4cmVtXCIsXG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gbmV3VG9kb0hvdmVyKGUpfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e25ld1RvZG9Ib3Zlck9mZn1cbiAgICAgICAgb25DbGljaz17Y3JlYXRlVG9kb31cbiAgICAgID5cbiAgICAgICAgPGZpZ3VyZVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7bmV3VG9kb0dob3N0T2Zmc2V0fXZ3KWAsXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBoaWRkZW49eyFzaG93TmV3VG9kb0dob3N0fVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmludmFkZXJ9ICR7c3R5bGVzLmdob3N0fWB9XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbnZhZGVyLnN2Z1wiIC8+XG4gICAgICAgIDwvZmlndXJlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9kb2NvbnRhaW5lcn0+e3Jvd3N9PC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0Um93cyh0b2RvcywgbnVtZGF5cywgZGVzdHJveVRvZG8pIHtcbiAgbGV0IHJvd3MgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1kYXlzOyArK2kpIHtcbiAgICBsZXQgaW52YWRlcnMgPSBbXTtcbiAgICBsZXQgdG9kYXkgPSBEYXRlLm5vdygpO1xuICAgIGxldCBkYXlzTGVmdCA9IG51bWRheXMgLSBpO1xuICAgIGZvciAobGV0IHRvZG8gb2YgdG9kb3MpIHtcbiAgICAgIGxldCBkaWZmRGF5cyA9IE1hdGguY2VpbCgodG9kby5kdWVkYXRlIC0gdG9kYXkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICAgIGlmIChkaWZmRGF5cyA9PSBkYXlzTGVmdCB8fCAoZGF5c0xlZnQgPT0gbnVtZGF5cyAmJiBkaWZmRGF5cyA+PSBkYXlzTGVmdCkpIHtcbiAgICAgICAgbGV0IGRyb3AgPSAtMyAqICgoKHRvZG8uZHVlZGF0ZSAtIHRvZGF5KSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSkgJSAxKTtcbiAgICAgICAgaW52YWRlcnMucHVzaChcbiAgICAgICAgICA8ZmlndXJlXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7ZHJvcH1yZW0pIHRyYW5zbGF0ZVgoJHt0b2RvLm9mZnNldH12dylgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmludmFkZXJ9XG4gICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZGVzdHJveVRvZG8oZSwgdG9kb3MuaW5kZXhPZih0b2RvKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgIG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpICUgMiA9PSAwXG4gICAgICAgICAgICAgICAgICA/IFwiL2ludmFkZXIuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIDogXCIvaW52YWRlcjIuc3ZnXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPjwvaW1nPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0b2RvLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgICAgIDxmaWdjYXB0aW9uPnt0b2RvLnRpdGxlfTwvZmlnY2FwdGlvbj5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByb3dzLnB1c2goXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheXNyb3d9PlxuICAgICAgICB7bnVtZGF5cyAtIGl9XG4gICAgICAgIHtudW1kYXlzIC0gaSA9PSBudW1kYXlzID8gXCIrXCIgOiBcIlwifSBkYXl7bnVtZGF5cyAtIGkgPiAxID8gXCJzXCIgOiBcIlwifSBsZWZ0XG4gICAgICAgIHtpbnZhZGVyc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcm93cztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/todoinvaders.js\n");

/***/ })

})