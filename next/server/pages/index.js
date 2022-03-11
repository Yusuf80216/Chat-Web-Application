"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "ContextProvider": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\Chat Web Application\\context\\index.js";


const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const ContextProvider = props => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: secret,
    1: setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Context.Provider, {
    value: value,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 12
  }, undefined);
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Chat Web Application\\pages\\index.js";





function Auth() {
  const {
    username,
    setUsername,
    secret,
    setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().put('https://api.chatengine.io/users/', {
      username,
      secret
    }, {
      headers: {
        "Private-key": '9f1035dc-3aca-429b-bcc7-6d3e70eb6334'
      }
    }).then(r => router.push("/chats"));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "auth-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: "auth-form",
        onSubmit: e => onSubmit(e),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "auth-title",
          children: "NextJS Chat"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            placeholder: "Email",
            className: "text-input",
            onChange: e => setUsername(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "password",
            placeholder: "Password",
            className: "text-input",
            onChange: e => setSecret(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "submit",
          className: "submit-button",
          children: "Login / Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7Ozs7Ozs7Ozs7QUM1REQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29udGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHNlY3JldCxcclxuICAgICAgICBzZXRTZWNyZXQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59OyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7Q29udGV4dH0gZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcbiAgY29uc3Qge3VzZXJuYW1lLHNldFVzZXJuYW1lLHNlY3JldCxzZXRTZWNyZXR9ID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAgXG4gIFxuICBjb25zdCByb3V0ZXI9dXNlUm91dGVyKClcbiAgXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIGlmICh1c2VybmFtZS5sZW5ndGggPT09IDAgfHwgc2VjcmV0Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIFxuICAgIFxuICAgIGF4aW9zLnB1dChcbiAgICAgICdodHRwczovL2FwaS5jaGF0ZW5naW5lLmlvL3VzZXJzLycsXG4gICAgICB7dXNlcm5hbWUsc2VjcmV0fSxcbiAgICAgIHtoZWFkZXJzOntcIlByaXZhdGUta2V5XCIgOic5ZjEwMzVkYy0zYWNhLTQyOWItYmNjNy02ZDNlNzBlYjYzMzQnfX1cbiAgICApXG4gICAgLnRoZW4ociA9PiByb3V0ZXIucHVzaChcIi9jaGF0c1wiKSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRoLWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtdGl0bGVcIj5OZXh0SlMgQ2hhdDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiAgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtlID0+IHNldFNlY3JldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInN1Ym1pdC1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgTG9naW4gLyBTaWduIFVwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG4gIFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsImF4aW9zIiwiQXV0aCIsInJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwicHV0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwicHVzaCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=