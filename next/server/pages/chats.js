(() => {
var exports = {};
exports.id = "pages/chats";
exports.ids = ["pages/chats"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/next/dist/shared/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/dynamic.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./loadable"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const isServerSide = true;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  const Loading = loadableOptions.loading; // This will only be rendered on the server side

  return () => /*#__PURE__*/_react.default.createElement(Loading, {
    error: null,
    isLoading: true,
    pastDelay: false,
    timedOut: false
  });
}

function dynamic(dynamicOptions, options) {
  let loadableFn = _loadable.default;
  let loadableOptions = {
    // A loading component is not required, so we default it
    loading: ({
      error,
      isLoading,
      pastDelay
    }) => {
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react.default.createElement("p", null, error.message, /*#__PURE__*/_react.default.createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = () => dynamicOptions; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options);
  const suspenseOptions = loadableOptions;

  if (true) {
    // Error if react root is not enabled and `suspense` option is set to true
    if ( true && suspenseOptions.suspense) {
      // TODO: add error doc when this feature is stable
      throw new Error(`Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense`);
    }
  }

  if (suspenseOptions.suspense) {
    return loadableFn(suspenseOptions);
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

/***/ }),

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Chats)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\Chat Web Application\\pages\\chats.js";





const ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-chat-engine */ "react-chat-engine", 23)).then(module => module.ChatEngine), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-chat-engine */ "react-chat-engine")],
    modules: ["chats.js -> " + "react-chat-engine"]
  }
});
const MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-chat-engine */ "react-chat-engine", 23)).then(module => module.MessageFormSocial), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-chat-engine */ "react-chat-engine")],
    modules: ["chats.js -> " + "react-chat-engine"]
  }
});
function Chats() {
  const {
    username,
    secret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);
  const {
    0: showChat,
    1: setShowChat
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  });
  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 26
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "shadow",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {
        height: "calc[100vh - 200px]",
        projectID: "998328a6-03a2-4626-bd2e-a9825facf8c7",
        userName: username,
        userSecret: secret,
        renderNewMessageForm: () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(MessageFormSocial, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 39
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ "./node_modules/next/dist/shared/lib/dynamic.js")


/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-chat-engine":
/*!************************************!*\
  !*** external "react-chat-engine" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-chat-engine");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/chats.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUQsQ0FBWDtBQUNEO0FBQ0YsR0FKUSxDQUFUO0FBT0FULEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUk5QyxRQUFRLENBQUMwRCxNQUFULEtBQW9CLENBQXBCLElBQXlCeEQsTUFBTSxDQUFDd0QsTUFBUCxLQUFrQixDQUEvQyxFQUFrREYsTUFBTSxDQUFDRyxJQUFQLENBQVksR0FBWjtBQUNsRCxHQUZPLENBQVQ7QUFJQyxNQUFJLENBQUNMLFFBQUwsRUFBZSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFaEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSw2QkFDRSw4REFBQyxVQUFEO0FBQ0UsY0FBTSxFQUFDLHFCQURUO0FBRUUsaUJBQVMsRUFBQyxzQ0FGWjtBQUdFLGdCQUFRLEVBQUV0RCxRQUhaO0FBSUUsa0JBQVUsRUFBRUUsTUFKZDtBQUtFLDRCQUFvQixFQUFFLG1CQUFNLDhEQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7Ozs7Ozs7OztBQ2hERCx1SEFBcUQ7Ozs7Ozs7Ozs7OztBQ0FyRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NoYXJlZC9saWIvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vcGFnZXMvY2hhdHMuanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2xvYWRhYmxlLmpzXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0LWNoYXQtZW5naW5lXCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXJuYW1lLFxyXG4gICAgICAgIHNlY3JldCxcclxuICAgICAgICBzZXRTZWNyZXQsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ub1NTUiA9IG5vU1NSO1xuZXhwb3J0cy5kZWZhdWx0ID0gZHluYW1pYztcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2xvYWRhYmxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIG5vU1NSKExvYWRhYmxlSW5pdGlhbGl6ZXIsIGxvYWRhYmxlT3B0aW9ucykge1xuICAgIC8vIFJlbW92aW5nIHdlYnBhY2sgYW5kIG1vZHVsZXMgbWVhbnMgcmVhY3QtbG9hZGFibGUgd29uJ3QgdHJ5IHByZWxvYWRpbmdcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLndlYnBhY2s7XG4gICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIHByZXZlbnQgcmVhY3QtbG9hZGFibGUgZnJvbSBpbml0aWFsaXppbmcgb24gdGhlIHNlcnZlclxuICAgIGlmICghaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHJldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7XG4gICAgfVxuICAgIGNvbnN0IExvYWRpbmcgPSBsb2FkYWJsZU9wdGlvbnMubG9hZGluZztcbiAgICAvLyBUaGlzIHdpbGwgb25seSBiZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyIHNpZGVcbiAgICByZXR1cm4gKCk9Pi8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMb2FkaW5nLCB7XG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3REZWxheTogZmFsc2UsXG4gICAgICAgICAgICB0aW1lZE91dDogZmFsc2VcbiAgICAgICAgfSlcbiAgICA7XG59XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLCBvcHRpb25zKSB7XG4gICAgbGV0IGxvYWRhYmxlRm4gPSBfbG9hZGFibGUuZGVmYXVsdDtcbiAgICBsZXQgbG9hZGFibGVPcHRpb25zID0ge1xuICAgICAgICAvLyBBIGxvYWRpbmcgY29tcG9uZW50IGlzIG5vdCByZXF1aXJlZCwgc28gd2UgZGVmYXVsdCBpdFxuICAgICAgICBsb2FkaW5nOiAoeyBlcnJvciAsIGlzTG9hZGluZyAsIHBhc3REZWxheSAgfSk9PntcbiAgICAgICAgICAgIGlmICghcGFzdERlbGF5KSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBlcnJvci5tZXNzYWdlLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSwgZXJyb3Iuc3RhY2spKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zXG4gICAgICAgIDtcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gZHluYW1pY09wdGlvbnM7XG4gICAgLy8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZHluYW1pY09wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgICAgIC4uLmR5bmFtaWNPcHRpb25zXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC4uLmxvYWRhYmxlT3B0aW9ucyxcbiAgICAgICAgLi4ub3B0aW9uc1xuICAgIH07XG4gICAgY29uc3Qgc3VzcGVuc2VPcHRpb25zID0gbG9hZGFibGVPcHRpb25zO1xuICAgIGlmICghcHJvY2Vzcy5lbnYuX19ORVhUX0NPTkNVUlJFTlRfRkVBVFVSRVMpIHtcbiAgICAgICAgLy8gRXJyb3IgaWYgcmVhY3Qgcm9vdCBpcyBub3QgZW5hYmxlZCBhbmQgYHN1c3BlbnNlYCBvcHRpb24gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCAmJiBzdXNwZW5zZU9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBlcnJvciBkb2Mgd2hlbiB0aGlzIGZlYXR1cmUgaXMgc3RhYmxlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3VzcGVuc2Ugb3B0aW9uIHVzYWdlIGluIG5leHQvZHluYW1pYy4gUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9pbnZhbGlkLWR5bmFtaWMtc3VzcGVuc2VgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3VzcGVuc2VPcHRpb25zLnN1c3BlbnNlKSB7XG4gICAgICAgIHJldHVybiBsb2FkYWJsZUZuKHN1c3BlbnNlT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGNvbWluZyBmcm9tIGJ1aWxkL2JhYmVsL3BsdWdpbnMvcmVhY3QtbG9hZGFibGUtcGx1Z2luLmpzXG4gICAgaWYgKGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZCkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMsXG4gICAgICAgICAgICAuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pXG4gICAgaWYgKHR5cGVvZiBsb2FkYWJsZU9wdGlvbnMuc3NyID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKCFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgICAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtcbiAgICAgICAgICAgIHJldHVybiBub1NTUihsb2FkYWJsZUZuLCBsb2FkYWJsZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMuc3NyO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZGFibGVGbihsb2FkYWJsZU9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHR9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge0NvbnRleHR9IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuXG5jb25zdCBDaGF0RW5naW5lID0gZHluYW1pYygoKSA9PiBcbiAgaW1wb3J0KFwicmVhY3QtY2hhdC1lbmdpbmVcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuQ2hhdEVuZ2luZSlcbik7XG5cbmNvbnN0IE1lc3NhZ2VGb3JtU29jaWFsID0gZHluYW1pYygoKSA9PiBcbiAgaW1wb3J0KFwicmVhY3QtY2hhdC1lbmdpbmVcIikudGhlbigobW9kdWxlKSA9PiBtb2R1bGUuTWVzc2FnZUZvcm1Tb2NpYWwpXG4pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRzKCkge1xuICBjb25zdHt1c2VybmFtZSwgc2VjcmV0fSA9IHVzZUNvbnRleHQoQ29udGV4dClcbiAgY29uc3QgW3Nob3dDaGF0LCBzZXRTaG93Q2hhdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gbnVsbCkge1xuICAgICAgc2V0U2hvd0NoYXQodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCB8fCBzZWNyZXQubGVuZ3RoID09PSAwKSByb3V0ZXIucHVzaChcIi9cIik7XG4gICB9KTtcblxuICAgaWYgKCFzaG93Q2hhdCkgcmV0dXJuIDxkaXYgLz47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93XCI+XG4gICAgICAgIDxDaGF0RW5naW5lXG4gICAgICAgICAgaGVpZ2h0PVwiY2FsY1sxMDB2aCAtIDIwMHB4XVwiXG4gICAgICAgICAgcHJvamVjdElEPVwiOTk4MzI4YTYtMDNhMi00NjI2LWJkMmUtYTk4MjVmYWNmOGM3XCJcbiAgICAgICAgICB1c2VyTmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgdXNlclNlY3JldD17c2VjcmV0fVxuICAgICAgICAgIHJlbmRlck5ld01lc3NhZ2VGb3JtPXsoKSA9PiA8TWVzc2FnZUZvcm1Tb2NpYWwvPn1cbiAgICAgICAgLz4gIFxuICAgICAgPC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgKVxuICBcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3NoYXJlZC9saWIvZHluYW1pYycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9sb2FkYWJsZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jaGF0LWVuZ2luZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiQ29udGV4dCIsIkNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInNlY3JldCIsInNldFNlY3JldCIsInZhbHVlIiwiY2hpbGRyZW4iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJub1NTUiIsImRlZmF1bHQiLCJkeW5hbWljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwic3VzcGVuc2VPcHRpb25zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9DT05DVVJSRU5UX0ZFQVRVUkVTIiwiX19ORVhUX1JFQUNUX1JPT1QiLCJzdXNwZW5zZSIsIkVycm9yIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiQ2hhdEVuZ2luZSIsInRoZW4iLCJtb2R1bGUiLCJNZXNzYWdlRm9ybVNvY2lhbCIsIkNoYXRzIiwic2hvd0NoYXQiLCJzZXRTaG93Q2hhdCIsInJvdXRlciIsImRvY3VtZW50IiwibGVuZ3RoIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=