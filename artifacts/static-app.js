(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(7);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(26)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(25);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(27);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(12);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(11);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(7);

var _helpers = __webpack_require__(28);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)(module)))

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ App; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/app.css
var app = __webpack_require__(37);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(1);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/dataInputExtractHitachi.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import lodash from 'lodash';
var asMap = function asMap(arr) {
  var multidmn = [];

  if (arr) {
    var _iterator = _createForOfIteratorHelper(arr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var line = _step.value;

        if (line && line != '\r') {
          // maps start with ['\r'] and end with ['']
          multidmn.push(line.replace("\r", "").split(","));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return multidmn;
};

function dataInputExtractHitachi(rawText, sendUp) {
  try {
    if (rawText && typeof rawText.split(/\n/g)[2] == 'string') {
      var _rawText$split, _rawText$split$, _coreCut$, _coreCut$$trim, _coreData$, _coreData$2, _coreData$3, _coreData$4, _coreCut$2, _recCut$, _recCut$$trim, _recog$, _recog$2, _recCut$2, _markCut$, _markCut$2, _markCut$2$split, _markCut$2$split$, _markCut$2$split$$spl, _OPEGmap$, _OPEGmap$2, _markCut$3, _f0Cut$, _f1Cut$, _f1Cut$2, _f2Cut$, _f2Cut$2, _f3Cut$, _f3Cut$2, _f4Cut$, _f4Cut$2, _f5Cut$, _f5Cut$2, _uCut2$, _fmarkMap$findex, _fmarkMap$findex2, _fmarkMap$findex3, _uCut2$2, _uCut2$2$split$, _oData$split;

      var fileName = (_rawText$split = rawText.split(',', 1)) === null || _rawText$split === void 0 ? void 0 : _rawText$split[0];
      var coreCut = (_rawText$split$ = rawText.split(':CORE', 2)[1]) === null || _rawText$split$ === void 0 ? void 0 : _rawText$split$.split(':RECOG');
      var coreData = (_coreCut$ = coreCut[0]) === null || _coreCut$ === void 0 ? void 0 : (_coreCut$$trim = _coreCut$.trim()) === null || _coreCut$$trim === void 0 ? void 0 : _coreCut$$trim.split(/\n/g);
      var topTitle = (_coreData$ = coreData[0]) === null || _coreData$ === void 0 ? void 0 : _coreData$.split(",")[0];
      var subTitle = (_coreData$2 = coreData[0]) === null || _coreData$2 === void 0 ? void 0 : _coreData$2.split(",")[1];
      var boardSize = (_coreData$3 = coreData[1]) === null || _coreData$3 === void 0 ? void 0 : _coreData$3.split(",");
      var bX = Number(boardSize[0]);
      var bY = Number(boardSize[1]);
      var bT = Number(boardSize[2]);
      var orginX = Number(boardSize[3]);
      var orginY = Number(boardSize[4]);
      var zDeg = Number(boardSize[5]);
      var pcbHt = Number(boardSize[6]);
      var gBadMark = (_coreData$4 = coreData[2]) === null || _coreData$4 === void 0 ? void 0 : _coreData$4.split(",");
      var gBadModeLocal = gBadMark[0]; // bad mark mode

      var gBadImgLocal = gBadMark[1]; // image/color 0=black 1=white
      // gBadMark[2]

      var gBadModeOvrll = gBadMark[3]; // overall pcb bbr mode

      var gBadX = Number(gBadMark[4]); // overall pcb bbr X

      var gBadY = Number(gBadMark[5]); // overall pcb bbr Y

      var gBadSqnc = gBadMark[6]; // sequence 0=badmark 1= recog 2=global

      var gBadImgOvrll = gBadMark[18]; // overall image/color 0=black 1=white

      var recCut = (_coreCut$2 = coreCut[1]) === null || _coreCut$2 === void 0 ? void 0 : _coreCut$2.split(':MARK', 2);
      var recog = (_recCut$ = recCut[0]) === null || _recCut$ === void 0 ? void 0 : (_recCut$$trim = _recCut$.trim()) === null || _recCut$$trim === void 0 ? void 0 : _recCut$$trim.split(/\n/g);
      var setupFids = (_recog$ = recog[0]) === null || _recog$ === void 0 ? void 0 : _recog$.split(",");
      var recEnable = setupFids[0]; // 1=enable

      var recPoints = setupFids[1]; // # of points

      var recImage = Number(setupFids[2]); // 1=enable

      var globalFid = (_recog$2 = recog[1]) === null || _recog$2 === void 0 ? void 0 : _recog$2.split(",");
      var useGlobal = Number(globalFid === null || globalFid === void 0 ? void 0 : globalFid.slice(0, 1)) ? true : false; // const gFidQty = globalFid[0];

      var gFidQty = Number(recPoints);
      var gFid1x = globalFid[1];
      var gFid1y = globalFid[2];
      var gFid1m = globalFid[3];
      var gFid2x = globalFid[4];
      var gFid2y = globalFid[5];
      var gFid2m = globalFid[6];
      var gFid3x = globalFid[7];
      var gFid3y = globalFid[8];
      var gFid3m = globalFid[9];
      var markCut = (_recCut$2 = recCut[1]) === null || _recCut$2 === void 0 ? void 0 : _recCut$2.split(':SETUP', 2);
      var fidMarks = (_markCut$ = markCut[0]) === null || _markCut$ === void 0 ? void 0 : _markCut$.trim();
      var fmarkArr = fidMarks === null || fidMarks === void 0 ? void 0 : fidMarks.split(/\n/g);
      var fmarkMap = asMap(fmarkArr);
      var fmarkRaw = fmarkMap.map(function (m) {
        return [m[1], m[2], m[4], m[5], m[6]];
      }); // BarCodes :BC-COMMON -> :BC-MARK -> :NOZ-PLC

      var OPEGcut = (_markCut$2 = markCut[1]) === null || _markCut$2 === void 0 ? void 0 : (_markCut$2$split = _markCut$2.split(":OPE-G", 2)) === null || _markCut$2$split === void 0 ? void 0 : (_markCut$2$split$ = _markCut$2$split[1]) === null || _markCut$2$split$ === void 0 ? void 0 : (_markCut$2$split$$spl = _markCut$2$split$.split(":BC-COMMON", 2)) === null || _markCut$2$split$$spl === void 0 ? void 0 : _markCut$2$split$$spl[0];
      var OPEGmap = asMap(OPEGcut === null || OPEGcut === void 0 ? void 0 : OPEGcut.split(/\n/g));
      var preplcTp = (_OPEGmap$ = OPEGmap[0]) === null || _OPEGmap$ === void 0 ? void 0 : _OPEGmap$[0];
      var preplcBm = (_OPEGmap$2 = OPEGmap[0]) === null || _OPEGmap$2 === void 0 ? void 0 : _OPEGmap$2[1];
      var f0Cut = (_markCut$3 = markCut[1]) === null || _markCut$3 === void 0 ? void 0 : _markCut$3.split(':FDR-00', 2);
      var f1Cut = (_f0Cut$ = f0Cut[1]) === null || _f0Cut$ === void 0 ? void 0 : _f0Cut$.split(':FDR-01', 2);
      var f0Data = (_f1Cut$ = f1Cut[0]) === null || _f1Cut$ === void 0 ? void 0 : _f1Cut$.replace(',', "").trim();
      var f2Cut = (_f1Cut$2 = f1Cut[1]) === null || _f1Cut$2 === void 0 ? void 0 : _f1Cut$2.split(':FDR-02', 2);
      var f1Data = (_f2Cut$ = f2Cut[0]) === null || _f2Cut$ === void 0 ? void 0 : _f2Cut$.replace(',', "").trim();
      var f3Cut = (_f2Cut$2 = f2Cut[1]) === null || _f2Cut$2 === void 0 ? void 0 : _f2Cut$2.split(':FDR-03', 2);
      var f2Data = (_f3Cut$ = f3Cut[0]) === null || _f3Cut$ === void 0 ? void 0 : _f3Cut$.replace(',', "").trim();
      var f4Cut = (_f3Cut$2 = f3Cut[1]) === null || _f3Cut$2 === void 0 ? void 0 : _f3Cut$2.split(':FDR-04', 2);
      var f3Data = (_f4Cut$ = f4Cut[0]) === null || _f4Cut$ === void 0 ? void 0 : _f4Cut$.replace(',', "").trim();
      var f5Cut = (_f4Cut$2 = f4Cut[1]) === null || _f4Cut$2 === void 0 ? void 0 : _f4Cut$2.split(':FDR-05', 2);
      var f4Data = (_f5Cut$ = f5Cut[0]) === null || _f5Cut$ === void 0 ? void 0 : _f5Cut$.replace(',', "").trim();
      var feederSet = f0Data + "\n" + f1Data + "\n" + f2Data + "\n" + f3Data + "\n" + f4Data;
      var feederArr = feederSet === null || feederSet === void 0 ? void 0 : feederSet.split(/\n/g);
      var feederMap = asMap(feederArr); // slot, partNum, _, altNum, C, comment, fixed, altEnable 

      var uCut1 = (_f5Cut$2 = f5Cut[1]) === null || _f5Cut$2 === void 0 ? void 0 : _f5Cut$2.split(':P-DAT01', 2)[1];
      var oExist = uCut1 === null || uCut1 === void 0 ? void 0 : uCut1.includes(":O-DAT01");
      var uCut2 = oExist ? uCut1 === null || uCut1 === void 0 ? void 0 : uCut1.split(':O-DAT01', 2) : uCut1 === null || uCut1 === void 0 ? void 0 : uCut1.split(':PP1', 1);
      var uData = (_uCut2$ = uCut2[0]) === null || _uCut2$ === void 0 ? void 0 : _uCut2$.replace(',', "").trim();
      var uArr = uData === null || uData === void 0 ? void 0 : uData.split(/\n/g);
      var uMap = asMap(uArr);
      var imageFid = uMap[0];
      var iFidEnbl = imageFid[4];
      var iFid1x = imageFid[7];
      var iFid1y = imageFid[8];
      var iFid1m = imageFid[11];
      var iFid2x = imageFid[9];
      var iFid2y = imageFid[10];
      var iFid2m = imageFid[12];
      var bFid1x = useGlobal ? gFid1x : iFid1x;
      var bFid1y = useGlobal ? gFid1y : iFid1y;
      var bFid2x = useGlobal ? gFid2x : iFid2x;
      var bFid2y = useGlobal ? gFid2y : iFid2y;
      var bFid3x = useGlobal ? gFid3x : 0;
      var bFid3y = useGlobal ? gFid3y : 0;
      var findex1 = Number.parseInt(useGlobal ? gFid1m : iFid1m, 10) - 1;
      var findex2 = Number.parseInt(useGlobal ? gFid2m : iFid2m, 10) - 1;
      var findex3 = Number.parseInt(useGlobal ? gFid3m : 1, 10) - 1;
      var fMark1 = Number((_fmarkMap$findex = fmarkMap[findex1]) === null || _fmarkMap$findex === void 0 ? void 0 : _fmarkMap$findex[1]);
      var fMark2 = Number((_fmarkMap$findex2 = fmarkMap[findex2]) === null || _fmarkMap$findex2 === void 0 ? void 0 : _fmarkMap$findex2[1]);
      var fMark3 = bFid3x || bFid3y ? Number((_fmarkMap$findex3 = fmarkMap[findex3]) === null || _fmarkMap$findex3 === void 0 ? void 0 : _fmarkMap$findex3[1]) : "-";
      var localBad = uMap[1];
      var hasBad = (localBad === null || localBad === void 0 ? void 0 : localBad[6]) === "B";
      var lBadX = hasBad ? Number(localBad[0]) : undefined;
      var lBadY = hasBad ? Number(localBad[1]) : undefined;
      var pDataArray = hasBad ? uMap === null || uMap === void 0 ? void 0 : uMap.slice(2, -1) : uMap === null || uMap === void 0 ? void 0 : uMap.slice(1, -1);
      var pDataMap = pDataArray === null || pDataArray === void 0 ? void 0 : pDataArray.map(function (pl) {
        var _feederMap$find;

        var symbol = pl[13];
        var partNum = ((_feederMap$find = feederMap.find(function (l) {
          return l[0] === pl[3];
        })) === null || _feederMap$find === void 0 ? void 0 : _feederMap$find[1]) || undefined;
        return [symbol, Number(pl[0]), Number(pl[1]), Number(pl[2]), partNum, pl[6]];
      });
      var pDataPnP = pDataMap.slice();
      pDataPnP === null || pDataPnP === void 0 ? void 0 : pDataPnP.push(["Fid1", Number(bFid1x), Number(bFid1y), 0, "FID", "-"]);
      pDataPnP === null || pDataPnP === void 0 ? void 0 : pDataPnP.push(["Fid2", Number(bFid2x), Number(bFid2y), 0, "FID", "-"]);
      Number(bFid3x) || Number(bFid3y) ? pDataPnP === null || pDataPnP === void 0 ? void 0 : pDataPnP.push(["Fid3", Number(bFid3x), Number(bFid3y), 0, "FID", "-"]) : null;
      var inUseParts = feederMap === null || feederMap === void 0 ? void 0 : feederMap.map(function (e) {
        var plMatch = pDataMap.find(function (p) {
          return p[4] === e[1];
        });

        if (plMatch) {
          return e[1];
        }
      }).filter(function (f) {
        return f;
      }).sort();
      var oData = oExist ? (_uCut2$2 = uCut2[1]) === null || _uCut2$2 === void 0 ? void 0 : (_uCut2$2$split$ = _uCut2$2.split(':PP1', 1)[0]) === null || _uCut2$2$split$ === void 0 ? void 0 : _uCut2$2$split$.replace(',', "").trim() : "";
      var oDataArray = oData === null || oData === void 0 ? void 0 : (_oData$split = oData.split(/\n/g)) === null || _oData$split === void 0 ? void 0 : _oData$split.slice(1, -1);
      var oDataPlain = oDataArray === null || oDataArray === void 0 ? void 0 : oDataArray.map(function (ol) {
        var soL = ol.split(",");
        return [Number(soL[0]), Number(soL[1]), Number(soL[2]), soL[5]];
      });
      sendUp({
        file: fileName,
        board: {
          topTitle: topTitle,
          subTitle: subTitle,
          bX: bX,
          bY: bY,
          bT: bT,
          orginX: orginX,
          orginY: orginY,
          fMark1: fMark1,
          fMark2: fMark2,
          fMark3: fMark3,
          oDataPlain: oDataPlain,
          gBadX: gBadX,
          gBadY: gBadY,
          lBadX: lBadX,
          lBadY: lBadY
        },
        place: pDataPnP,
        parts: inUseParts,
        yamaha: {
          topTitle: topTitle,
          subTitle: subTitle,
          bX: bX,
          bY: bY,
          bT: bT,
          orginX: orginX,
          orginY: orginY,
          zDeg: zDeg,
          pcbHt: pcbHt,
          preplcTp: preplcTp,
          preplcBm: preplcBm,
          gBadX: gBadX,
          gBadY: gBadY,
          gBadModeLocal: gBadModeLocal,
          gBadImgLocal: gBadImgLocal,
          gBadModeOvrll: gBadModeOvrll,
          gBadSqnc: gBadSqnc,
          gBadImgOvrll: gBadImgOvrll,
          recEnable: recEnable,
          recPoints: recPoints,
          recImage: recImage,
          gFid1x: gFid1x,
          gFid1y: gFid1y,
          gFid1m: gFid1m,
          gFid2x: gFid2x,
          gFid2y: gFid2y,
          gFid2m: gFid2m,
          gFid3x: gFid3x,
          gFid3y: gFid3y,
          gFid3m: gFid3m,
          fmarkRaw: fmarkRaw,
          // [D1] [D2] [window] [image 0=bright] [level 0=high]
          inUseParts: inUseParts,
          iFidEnbl: iFidEnbl,
          iFid1x: iFid1x,
          iFid1y: iFid1y,
          iFid1m: iFid1m,
          iFid2x: iFid2x,
          iFid2y: iFid2y,
          iFid2m: iFid2m,
          lBadX: lBadX,
          lBadY: lBadY,
          pDataMap: pDataMap,
          // [0=symbol] [1=x] [2=y] [3=theta] [4=partnum] [5=control]
          oDataPlain: oDataPlain // [0=x] [1=y] [2=theta] [3=control]
          // multiple units?

        },
        advantis: {
          topTitle: topTitle,
          subTitle: subTitle,
          bX: bX,
          bY: bY,
          bT: bT,
          orginX: orginX,
          orginY: orginY,
          recImage: recImage,
          iFid1x: iFid1x,
          iFid1y: iFid1y,
          iFid2x: iFid2x,
          iFid2y: iFid2y,
          gFidQty: gFidQty,
          gFid1x: gFid1x,
          gFid1y: gFid1y,
          gFid2x: gFid2x,
          gFid2y: gFid2y,
          gFid3x: gFid3x,
          gFid3y: gFid3y,
          oDataPlain: oDataPlain
        },
        error: null
      });
    } else {
      sendUp({
        error: "Invalid"
      });
    }
  } catch (error) {
    sendUp({
      error: error.message
    });
  }
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/dataInputExtractYamaha.js
function dataInputExtractYamaha_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = dataInputExtractYamaha_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function dataInputExtractYamaha_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return dataInputExtractYamaha_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dataInputExtractYamaha_arrayLikeToArray(o, minLen); }

function dataInputExtractYamaha_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// import lodash from 'lodash';
var cleanMap = function cleanMap(arr) {
  var multidmn = [];

  if (arr) {
    var _iterator = dataInputExtractYamaha_createForOfIteratorHelper(arr),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var line = _step.value;

        if (line && line != '\r') {
          // maps start with ['\r'] and end with ['']
          multidmn.push(line.replace("\r", "").split(","));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return multidmn;
};

function dataInputExtract(rawText, sendUp) {
  try {
    if (rawText && typeof rawText.split(/\n/g)[2] == 'string') {
      var _rawText$split, _rawText$split$, _commonCut$, _commonCut$$trim, _commonData$, _commonData$2, _commonCut$2, _boardCut$, _boardCut$$trim, _boardData$, _boardData$2, _boardCut$2, _bbrCut$, _bbrCut$$trim, _gBadMark$, _bbrCut$2, _recCut$, _recCut$$trim, _recog$, _recog$2, _recCut$2, _markCut$, _markCut$2, _markCut$2$split$, _cmpntCut$, _cmpntCut$2, _feederCut$, _feederCut$2, _placeCutZ$, _placeCutZ$2, _fmarkMap$findex, _fmarkMap$findex2, _fmarkMap$findex3;

      var fileName = (_rawText$split = rawText.split(',', 1)) === null || _rawText$split === void 0 ? void 0 : _rawText$split[0];
      var commonCut = (_rawText$split$ = rawText.split(':L-COMMON', 2)[1]) === null || _rawText$split$ === void 0 ? void 0 : _rawText$split$.split(':L-BOARD');
      var commonData = (_commonCut$ = commonCut[0]) === null || _commonCut$ === void 0 ? void 0 : (_commonCut$$trim = _commonCut$.trim()) === null || _commonCut$$trim === void 0 ? void 0 : _commonCut$$trim.split(/\n/g);
      var topTitle = (_commonData$ = commonData[0]) === null || _commonData$ === void 0 ? void 0 : _commonData$.split(",")[0];
      var subTitle = (_commonData$2 = commonData[0]) === null || _commonData$2 === void 0 ? void 0 : _commonData$2.split(",")[1];
      var boardCut = (_commonCut$2 = commonCut[1]) === null || _commonCut$2 === void 0 ? void 0 : _commonCut$2.split(':L-BBR', 2);
      var boardData = (_boardCut$ = boardCut[0]) === null || _boardCut$ === void 0 ? void 0 : (_boardCut$$trim = _boardCut$.trim()) === null || _boardCut$$trim === void 0 ? void 0 : _boardCut$$trim.split(/\n/g);
      var boardSize = (_boardData$ = boardData[0]) === null || _boardData$ === void 0 ? void 0 : _boardData$.split(",");
      var bX = Number(boardSize[0]);
      var bY = Number(boardSize[1]);
      var bT = Number(boardSize[2]);
      var boardOrgin = (_boardData$2 = boardData[1]) === null || _boardData$2 === void 0 ? void 0 : _boardData$2.split(",");
      var orginX = Number(boardOrgin[0]);
      var orginY = Number(boardOrgin[1]); // console.log({boardData, bX, bY, bT, orginX, orginY}); //GOOD

      var bbrCut = (_boardCut$2 = boardCut[1]) === null || _boardCut$2 === void 0 ? void 0 : _boardCut$2.split(':L-RECOG', 2);
      var gBadMark = (_bbrCut$ = bbrCut[0]) === null || _bbrCut$ === void 0 ? void 0 : (_bbrCut$$trim = _bbrCut$.trim()) === null || _bbrCut$$trim === void 0 ? void 0 : _bbrCut$$trim.split(/\n/g); // const bbr1 = gBadMark[0]?.split(",");
      // bbr1[0] = mode (0,1-standard,2-optional)
      // bbr1[1] = sensor (0-photo_sensor, 1-camera)
      // bbr1[2] = color
      // bbr1[3] = size
      // ...camera settings
      // bbr1[-4] = image color (0-black, 1-white)
      // bbr1[last] = sequence (0-bad_mark[default], 1-recognition, 2-global_recognition)

      var bbr2 = (_gBadMark$ = gBadMark[1]) === null || _gBadMark$ === void 0 ? void 0 : _gBadMark$.split(","); // bbr2[0] = mode

      var gBadX = Number(bbr2[1]);
      var gBadY = Number(bbr2[2]); // const gBadColor = Number(bbr2[3]);
      // const gBadSize = Number(bbr2[4]);
      // console.log({bbrCut, gBadMark, bbrline2, gBadX, gBadY}); // GOOD
      /////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

      var recCut = (_bbrCut$2 = bbrCut[1]) === null || _bbrCut$2 === void 0 ? void 0 : _bbrCut$2.split(':L-MARK', 2); // console.log({recCut}); // GOOD

      var recog = (_recCut$ = recCut[0]) === null || _recCut$ === void 0 ? void 0 : (_recCut$$trim = _recCut$.trim()) === null || _recCut$$trim === void 0 ? void 0 : _recCut$$trim.split(/\n/g);
      var setupFids = (_recog$ = recog[0]) === null || _recog$ === void 0 ? void 0 : _recog$.split(","); // const recEnable = setupFids[0];

      var recImage = Number(setupFids[1]); // const recLocal = setupFids[2];

      var globalFid = (_recog$2 = recog[1]) === null || _recog$2 === void 0 ? void 0 : _recog$2.split(",");
      var useGlobal = Number(globalFid === null || globalFid === void 0 ? void 0 : globalFid.slice(0, 1)) ? true : false;
      var gFidQty = Number(globalFid[0]);
      var gFid1x = globalFid[1];
      var gFid1y = globalFid[2];
      var gFid1m = globalFid[3];
      var gFid2x = globalFid[4];
      var gFid2y = globalFid[5];
      var gFid2m = globalFid[6];
      var gFid3x = globalFid[7];
      var gFid3y = globalFid[8];
      var gFid3m = globalFid[9];
      var markCut = (_recCut$2 = recCut[1]) === null || _recCut$2 === void 0 ? void 0 : _recCut$2.split(':L-SETUP', 2);
      var fidMarks = (_markCut$ = markCut[0]) === null || _markCut$ === void 0 ? void 0 : _markCut$.trim();
      var fmarkArr = fidMarks === null || fidMarks === void 0 ? void 0 : fidMarks.split(/\n/g);
      var fmarkMap = cleanMap(fmarkArr); // console.log({globalFid, useGlobal, markCut, fidMarks, fmarkMap}); // GOOD
      // BarCodes :BC-COMMON -> :L-BC-PRM -> :L-BC-MARK -> :L-SWITCH

      var cmpntCut = (_markCut$2 = markCut[1]) === null || _markCut$2 === void 0 ? void 0 : (_markCut$2$split$ = _markCut$2.split(':L-CMPNT', 2)[1]) === null || _markCut$2$split$ === void 0 ? void 0 : _markCut$2$split$.split(':FEEDER', 2);
      var cmpntData = (_cmpntCut$ = cmpntCut[0]) === null || _cmpntCut$ === void 0 ? void 0 : _cmpntCut$.split(/\n/g);
      var cmpntMap = cleanMap(cmpntData); // console.log({cmpntMap}); // GOOD

      var feederCut = (_cmpntCut$2 = cmpntCut[1]) === null || _cmpntCut$2 === void 0 ? void 0 : _cmpntCut$2.split(':TRAY', 2);
      var feederData = (_feederCut$ = feederCut[0]) === null || _feederCut$ === void 0 ? void 0 : _feederCut$.split(/\n/g);
      var feederMap = cleanMap(feederData); // console.log({feederMap}); // GOOD
      // bank = [1]
      // slot = [3]
      // comp = [4]
      // skip = [7] (-,S,E)

      var placeCutA = (_feederCut$2 = feederCut[1]) === null || _feederCut$2 === void 0 ? void 0 : _feederCut$2.split(':P-DAT01', 2)[1];
      var hasOffset = placeCutA === null || placeCutA === void 0 ? void 0 : placeCutA.includes(":O-DAT01");
      var endplace = hasOffset ? ":O-DAT01" : ":SEQUENCE01";
      var placeCutZ = placeCutA === null || placeCutA === void 0 ? void 0 : placeCutA.split(endplace, 2);
      var placeData = (_placeCutZ$ = placeCutZ[0]) === null || _placeCutZ$ === void 0 ? void 0 : _placeCutZ$.split(/\n/g);
      var placeMap = cleanMap(placeData); // console.log({placeMap}); // GOOD

      var offsetCut = hasOffset ? (_placeCutZ$2 = placeCutZ[1]) === null || _placeCutZ$2 === void 0 ? void 0 : _placeCutZ$2.split(':SEQUENCE01', 2)[0] : "";
      var offsetData = offsetCut.split(/\n/g);
      var offsetMap = cleanMap(offsetData); // console.log({offsetMap}); // GOOD

      var imageFid = placeMap[0];
      var iFid1x = imageFid[6];
      var iFid1y = imageFid[7];
      var iFid1m = imageFid[10];
      var iFid2x = imageFid[8];
      var iFid2y = imageFid[9];
      var iFid2m = imageFid[11];
      var bFid1x = useGlobal ? gFid1x : iFid1x;
      var bFid1y = useGlobal ? gFid1y : iFid1y;
      var bFid2x = useGlobal ? gFid2x : iFid2x;
      var bFid2y = useGlobal ? gFid2y : iFid2y;
      var bFid3x = useGlobal ? gFid3x : 0;
      var bFid3y = useGlobal ? gFid3y : 0;
      var findex1 = Number.parseInt(useGlobal ? gFid1m : iFid1m, 10) - 1;
      var findex2 = Number.parseInt(useGlobal ? gFid2m : iFid2m, 10) - 1;
      var findex3 = Number.parseInt(useGlobal ? gFid3m : 1, 10) - 1;
      var fMark1 = Number((_fmarkMap$findex = fmarkMap[findex1]) === null || _fmarkMap$findex === void 0 ? void 0 : _fmarkMap$findex[1]);
      var fMark2 = Number((_fmarkMap$findex2 = fmarkMap[findex2]) === null || _fmarkMap$findex2 === void 0 ? void 0 : _fmarkMap$findex2[1]);
      var fMark3 = bFid3x || bFid3y ? Number((_fmarkMap$findex3 = fmarkMap[findex3]) === null || _fmarkMap$findex3 === void 0 ? void 0 : _fmarkMap$findex3[1]) : "-"; // console.log({imageFid, bFid1x, bFid1y, fMark1, bFid2x, bFid2y, fMark2, bFid3x, bFid3y, fMark3}); // GOOD

      var localBad = placeMap[1];
      var hasBad = (localBad === null || localBad === void 0 ? void 0 : localBad[5]) === "B";
      var lBadX = hasBad ? Number(localBad[0]) : undefined;
      var lBadY = hasBad ? Number(localBad[1]) : undefined;
      var PDAT01Array = hasBad ? placeMap === null || placeMap === void 0 ? void 0 : placeMap.slice(2, -1) : placeMap === null || placeMap === void 0 ? void 0 : placeMap.slice(1, -1); // console.log({hasBad, PDAT01Array});

      var pnpDataMap = PDAT01Array === null || PDAT01Array === void 0 ? void 0 : PDAT01Array.map(function (pl) {
        var _cmpntMap$find;

        var x = pl[0];
        var y = pl[1];
        var theta = pl[2]; // height = [3]

        var comp = pl[4];
        var control = pl[5]; // (-,S,E,P)

        var symbol = pl[20];
        var partNum = ((_cmpntMap$find = cmpntMap.find(function (l) {
          return l[0] === comp;
        })) === null || _cmpntMap$find === void 0 ? void 0 : _cmpntMap$find[1]) || undefined;
        return [symbol, Number(x), Number(y), Number(theta), partNum, control];
      });
      pnpDataMap === null || pnpDataMap === void 0 ? void 0 : pnpDataMap.push(["fid1", Number(bFid1x), Number(bFid1y), 0, "FID", "-"]);
      pnpDataMap === null || pnpDataMap === void 0 ? void 0 : pnpDataMap.push(["fid2", Number(bFid2x), Number(bFid2y), 0, "FID", "-"]);
      Number(bFid3x) || Number(bFid3y) ? pnpDataMap === null || pnpDataMap === void 0 ? void 0 : pnpDataMap.push(["fid3", Number(bFid3x), Number(bFid3y), 0, "FID", "-"]) : null; // console.log({pnpDataMap}); // GOOD

      var loadDataMap = cmpntMap === null || cmpntMap === void 0 ? void 0 : cmpntMap.map(function (cmp) {
        var partNum = cmp[1];
        var fdr = feederMap.find(function (f) {
          return f[4] === cmp[0];
        });
        var slot = !fdr ? "000" : fdr[1] + fdr[3].slice(1);
        var skip = !fdr ? "S" : fdr[7]; // (-,S,E)

        var plc = PDAT01Array.filter(function (l) {
          return l[4] === cmp[0];
        });
        var refs = plc.map(function (p) {
          return p[20];
        }).join(', ');
        return [slot, partNum, skip, plc.length, refs];
      }).sort(function (a, b) {
        return a > b ? 1 : a < b ? -1 : 0;
      }); // console.log({loadDataMap}); // GOOD

      var inUseParts = loadDataMap === null || loadDataMap === void 0 ? void 0 : loadDataMap.map(function (e) {
        if (e[3] > 0) {
          return e[1];
        }
      }).filter(function (f) {
        return f;
      }).sort(); // console.log({inUseParts}); // GOOD

      var oDataClean = offsetMap === null || offsetMap === void 0 ? void 0 : offsetMap.slice(0, -1);
      var oDataPlain = oDataClean === null || oDataClean === void 0 ? void 0 : oDataClean.map(function (ol) {
        // line = [0]
        var x = ol[1];
        var y = ol[2];
        var theta = ol[3]; // height? = [4]

        var skip = ol[5];
        return [Number(x), Number(y), Number(theta), skip];
      }); // console.log({oDataPlain}); // GOOD

      sendUp({
        file: fileName,
        board: {
          topTitle: topTitle,
          subTitle: subTitle,
          bX: bX,
          bY: bY,
          bT: bT,
          orginX: orginX,
          orginY: orginY,
          fMark1: fMark1,
          fMark2: fMark2,
          fMark3: fMark3,
          oDataPlain: oDataPlain,
          gBadX: gBadX,
          gBadY: gBadY,
          lBadX: lBadX,
          lBadY: lBadY
        },
        place: pnpDataMap,
        load: loadDataMap,
        parts: inUseParts,
        advantis: {
          topTitle: topTitle,
          subTitle: subTitle,
          bX: bX,
          bY: bY,
          bT: bT,
          orginX: orginX,
          orginY: orginY,
          recImage: recImage,
          iFid1x: iFid1x,
          iFid1y: iFid1y,
          iFid2x: iFid2x,
          iFid2y: iFid2y,
          gFidQty: gFidQty,
          gFid1x: gFid1x,
          gFid1y: gFid1y,
          gFid2x: gFid2x,
          gFid2y: gFid2y,
          gFid3x: gFid3x,
          gFid3y: gFid3y,
          oDataPlain: oDataPlain
        },
        error: null
      });
    } else {
      sendUp({
        error: "Invalid"
      });
    }
  } catch (error) {
    sendUp({
      error: error.message
    });
  }
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/exportPnP.js
function downPnP(filenameState, placeState) {
  var pnpConstruct = placeState === null || placeState === void 0 ? void 0 : placeState.join("\n");

  if (typeof document !== 'undefined') {
    var link = document.createElement("a");
    link.setAttribute('download', "".concat(filenameState, "_pick-place.csv"));
    link.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(pnpConstruct)));
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    alert('document not found');
  }
}
function printPnP(filenameState, placeState, printTextThing) {
  var tbSy = "width:75%; border-collapse:collapse";
  var clSy = "border: 1px solid black; text-align: right;";
  var pnpHTML = "<div>\n      <h2>".concat(filenameState, "</h2>\n      <table style=\"").concat(tbSy, "\">\n        ").concat(placeState === null || placeState === void 0 ? void 0 : placeState.map(function (line, index) {
    return "<tr>\n          <td>".concat(index + 1, "</td>\n            ").concat(line === null || line === void 0 ? void 0 : line.map(function (cell) {
      return "<td style=\"".concat(clSy, "\"><big>").concat(cell, "</big></td>");
    }).join(''), "</tr>");
  }).join(''), "\n      </table>\n    </div>");
  printTextThing(pnpHTML);
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/exportBoard.js
function downBoard(filenameState, boardState) {
  var bd = boardState;
  var boardConstruct = "".concat(filenameState, "\n\n").concat(bd === null || bd === void 0 ? void 0 : bd.topTitle, "\n\n").concat(bd === null || bd === void 0 ? void 0 : bd.subTitle, "\n\nBoard\nX\t").concat(bd === null || bd === void 0 ? void 0 : bd.bX, "\nY\t").concat(bd === null || bd === void 0 ? void 0 : bd.bY, "\nT\t").concat(bd === null || bd === void 0 ? void 0 : bd.bT, "\n\nOrgin Offsets\nX\t").concat(bd === null || bd === void 0 ? void 0 : bd.orginX, "\nY\t").concat(bd === null || bd === void 0 ? void 0 : bd.orginY, "\n\nFiducial Mark Size\nFid1\t").concat(bd === null || bd === void 0 ? void 0 : bd.fMark1, "\nFid2\t").concat(bd === null || bd === void 0 ? void 0 : bd.fMark2, "\n\nPanel Offsets\n").concat(bd.oDataPlain ? bd.oDataPlain.map(function (line, index) {
    return "".concat(index + 1, "\t").concat(line === null || line === void 0 ? void 0 : line.map(function (cell) {
      return "".concat(cell, "\t");
    }).join(''), "\n");
  }).join('') : "undefined\n", "\nBad Mark\n").concat(bd !== null && bd !== void 0 && bd.lBadX ? "Global\t".concat(bd === null || bd === void 0 ? void 0 : bd.gBadX, "\t").concat(bd === null || bd === void 0 ? void 0 : bd.gBadY, "\nLocal\t").concat(bd === null || bd === void 0 ? void 0 : bd.lBadX, "\t").concat(bd === null || bd === void 0 ? void 0 : bd.lBadY, "\n") : "undefined\n");

  if (typeof document !== 'undefined') {
    var link = document.createElement("a");
    link.setAttribute('download', "".concat(filenameState, "_board.txt"));
    link.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(boardConstruct)));
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    alert('document not found');
  }
}
function printBoard(filenameState, boardState, printTextThing) {
  var tbSy = "width:50%; border-collapse:collapse";
  var hclSy = "border: 1px solid black; text-align: left;";
  var clSy = "border: 1px solid black; text-align: right;";
  var bd = boardState;
  var brdHTML = "<div>\n      <h2>".concat(filenameState, "</h2>\n      <h3>").concat(bd === null || bd === void 0 ? void 0 : bd.topTitle, "</h3>\n      <h3>").concat(bd === null || bd === void 0 ? void 0 : bd.subTitle, "</h3>\n      <table style=\"").concat(tbSy, "\">\n        <tr><th colspan=\"2\" style=\"").concat(hclSy, "\">Board</th><tr>\n        <tr><td style=\"").concat(clSy, "\">X</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.bX, "</big></td></tr>\n        <tr><td style=\"").concat(clSy, "\">Y</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.bY, "</big></td></tr>\n        <tr><td style=\"").concat(clSy, "\">T</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.bT, "</big></td></tr>\n        <tr><th colspan=\"2\" style=\"").concat(hclSy, "\">Orgin Offsets</th><tr>\n        <tr><td style=\"").concat(clSy, "\">X</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.orginX, "</big></td></tr>\n        <tr><td style=\"").concat(clSy, "\">Y</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.orginY, "</big></td></tr>\n        <tr><th colspan=\"2\" style=\"").concat(hclSy, "\">Fiducial Mark Size</th><tr>\n        <tr><td style=\"").concat(clSy, "\">Fid1</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.fMark1, "</big></td></tr>\n        <tr><td style=\"").concat(clSy, "\">Fid2</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.fMark2, "</big></td></tr>\n        <tr><td style=\"").concat(clSy, "\">Fid3</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.fMark3, "</big></td></tr>\n      </table>\n      <br />\n      <table style=\"").concat(tbSy, "\">\n        <tr><th colspan=\"5\" style=\"").concat(hclSy, "\">Panel Offsets</th><tr>\n        ").concat(bd.oDataPlain ? bd.oDataPlain.map(function (line, index) {
    return "<tr>\n          <td>".concat(index + 1, "</td>\n            ").concat(line === null || line === void 0 ? void 0 : line.map(function (cell) {
      return "<td style=\"".concat(clSy, "\"><big>").concat(cell, "</big></td>");
    }).join(''), "</tr>");
  }).join('') : "<tr><td colspan='5'>no offsets</td></tr>", "\n      </table>\n      <br />\n      <table style=\"").concat(tbSy, "\">\n        <tr><th colspan=\"3\" style=\"").concat(hclSy, "\">Bad Mark</th></tr>\n        ").concat(bd !== null && bd !== void 0 && bd.lBadX ? "<tr>\n          <td style=\"".concat(clSy, "\">Global</td>\n          <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.gBadX, "</big></td>\n          <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.gBadY, "</big></td>\n        </tr>\n        <tr>\n          <td style=\"").concat(clSy, "\">Local</td>\n          <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.lBadX, "</big></td>\n          <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.lBadY, "</big></td>\n        </tr>") : "<tr><td colspan='3'>no bad mark</td></tr>", "\n      </table>\n    </div>");
  printTextThing(brdHTML);
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/exportLoad.js
function downLoad(filenameState, loadState) {
  var loadConstruct = loadState === null || loadState === void 0 ? void 0 : loadState.join("\n");

  if (typeof document !== 'undefined') {
    var link = document.createElement("a");
    link.setAttribute('download', "".concat(filenameState, "_load-sheet.txt"));
    link.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(loadConstruct)));
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    alert('document not found');
  }
}
function printLoad(filenameState, loadState, printTextThing) {
  var tbSy = "width:100%; border-collapse:collapse";
  var clSy = "border:0; padding: 0.25ch 1ch; text-align: left;";
  var loadHTML = "<div>\n      <table style=\"".concat(tbSy, "\">\n        <thead>\n          <tr><th colspan=\"5\" style=\"").concat(clSy, "\">").concat(filenameState, "</th></tr>\n          <tr style=\"font-size:14px\">\n            <th style=\"").concat(clSy, "\">Fdr</th>\n            <th style=\"").concat(clSy, "\">Part</th>\n            <th style=\"").concat(clSy, "\">C</th>\n            <th style=\"").concat(clSy, "\">Qty</th>\n            <th style=\"").concat(clSy, "\">Symbols</th>\n          </tr>\n        </thead>\n        <tbody style=\"vertical-align: baseline;line-height: 1.3;\">\n        ").concat(loadState === null || loadState === void 0 ? void 0 : loadState.map(function (line, index) {
    return "<tr style=\"font-size:14px\">\n            ".concat(line === null || line === void 0 ? void 0 : line.map(function (cell, ix) {
      return "<td style=\"".concat(clSy).concat(ix != 4 ? 'white-space: nowrap' : '', "\">").concat(cell, "</td>");
    }).join(''), "</tr>");
  }).join(''), "\n        </tbody>\n      </table>\n    </div>"); // console.log(loadHTML);

  printTextThing(loadHTML);
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/exportParts.js
function downParts(filenameState, partsState) {
  var partsConstruct = partsState.join("\n");

  if (typeof document !== 'undefined') {
    var link = document.createElement("a");
    link.setAttribute('download', "".concat(filenameState, "_parts-list.txt"));
    link.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(partsConstruct)));
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    alert('document not found');
  }
}
function printParts(filenameState, partsState, printTextThing) {
  var tbSy = "width:100%; border-collapse:collapse";
  var clSy = "border:0; padding: 0.5ch 0; text-align: left;";
  var partsHTML = "<div>\n      <table style=\"".concat(tbSy, "\">\n        <thead>\n          <tr><th colspan=\"6\" style=\"").concat(clSy, "\"><big>").concat(filenameState, "</big></th></tr>\n        </thead>\n        <tbody style=\"vertical-align: baseline;line-height: 1.3;\">\n        <tr><td style=\"display: grid; grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );\">\n        ").concat((partsState || []).map(function (line) {
    return "<p>".concat(line, "</p>");
  }).join(''), "\n        </td></tr>\n        </tbody>\n      </table>\n    </div>"); // console.log(partsHTML);

  printTextThing(partsHTML);
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/exportSigma.js
function downSigma(filenameState, yamBulkState) {
  var h = yamBulkState;

  if (!h) {
    return null;
  }
  /*
    topTitle, subTitle, 
    
    bX, bY, bT, orginX, orginY, zDeg, pcbHt, preplcTp, preplcBm,
    
    gBadX, gBadY,
    gBadModeLocal, // bad mark mode
    gBadImgLocal, // image/color 0=black 1=white
    gBadModeOvrll, // overall pcb bbr mode
    gBadSqnc, // sequence 0=badmark 1= recog 2=global
    gBadImgOvrll, // overall image/color 0=black 1=white
    
    recEnable, recPoints, recImage,
    gFid1x, gFid1y, gFid1m, gFid2x, gFid2y, gFid2m, gFid3x, gFid3y, gFid3m,
    
    fmarkRaw, // [D1] [D2] [window] [image 0=bright] [level 0=high]
    
    inUseParts, 
    
    iFidEnbl, iFid1x, iFid1y, iFid1m, iFid2x, iFid2y, iFid2m,
    
    lBadX, lBadY,
    
    pDataMap, // [0=symbol] [1=x] [2=y] [3=theta] [4=partnum] [5=control]
    
    oDataPlain // [0=x] [1=y] [2=theta] [3=control]
  */


  var pad = function pad(val, s, e, y) {
    var ap = Number(val) < 0 ? "-" : "+";

    if (y) {
      return ap + Number.parseFloat(Math.abs(val)).toFixed(e).toString().padStart(s, "0");
    } else {
      return Number.parseFloat(val).toFixed(e || 0).toString().padStart(s, "0");
    }
  };

  var isodate = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  var first_line = "".concat(filenameState, ",").concat(isodate, " 160840,0037,0001,SMT,NR,0000,00001,0000,0,0,0000,00000000,00000000\n");
  var filePath = "H:" + "\\" + "ntdata" + "\\" + "library" + "\\" + "Yahama";
  var line_opsw = ":LINE-OPSW\n0201000000000000000000000000000000000000000000000000000000000000\n";
  var machine = ":MACHINE\n01,1,NR,-\n01,2,NR,-\n";
  var machine_op_1 = ":MACHINE-OP\n01,1,0561113100100000000010010000000000000000000000000000000000000000000000000000000000000000000000000000000004400000000100000000011000000101000000000000000001000000000000000000010000000000000000000000000000000000000000000000010000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001100110000006600000000000000000000100000000000001111000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,0011100040110000000000000000000000000000000000000000000000000000000300000000300000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\n";
  var machine_op_2 = "01,2,1000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\n";
  var l_common = ":L-COMMON\n".concat(h.topTitle, ",").concat(h.subTitle, ",\n,,\nSMTx Conversion,\n0\n0,\n");
  var l_board = ":L-BOARD\n".concat(pad(h.bX, 8, 3), ",").concat(pad(h.bY, 7, 3), ",").concat(pad(h.bT, 6, 3), ",1,00.000\n").concat(pad(h.orginX, 8, 3, 1), ",").concat(pad(h.orginY, 7, 3, 1), ",").concat(pad(h.zDeg, 6, 2, 1), ",+000.00,0,0,0\n").concat(pad(h.pcbHt, 5, 3, 1), ",00.000,00.000\n");
  var l_bbr = ":L-BBR\n".concat(h.gBadModeLocal, ",1,125,1.0,1,1,0,1,0,1,2\n").concat(h.gBadModeOvrll, ",").concat(pad(h.gBadX, 8, 3, 1), ",").concat(pad(h.gBadY, 7, 3, 1), ",125,1.0,1,1,0,0\n");
  var l_recog = ":L-RECOG\n".concat(h.recEnable, ",").concat(h.recImage, ",0,0,000,0\n").concat(h.recPoints, ",").concat(pad(h.gFid1x, 8, 3, 1), ",").concat(pad(h.gFid1y, 7, 3, 1), ",").concat(h.gFid1m, ",").concat(pad(h.gFid2x, 8, 3, 1), ",").concat(pad(h.gFid2y, 7, 3, 1), ",").concat(h.gFid2m, ",").concat(pad(h.gFid3x, 8, 3, 1), ",").concat(pad(h.gFid3y, 7, 3, 1), ",").concat(h.gFid3m, "\n0,+0000.000,+000.000,01,+0000.000,+000.000,01,+0000.000,+000.000,01\n0,+0000.000,+000.000,01,+0000.000,+000.000,01,+0000.000,+000.000,01\n0,+0000.000,+000.000,01,+0000.000,+000.000,01,+0000.000,+000.000,01\n0,+0000.000,+000.000,01,+0000.000,+000.000,01,+0000.000,+000.000,01\n");
  var l_mark = ":L-MARK\n".concat(h.fmarkRaw.map(function (m, i) {
    return "".concat(pad(i, 2), ",").concat(m[0], ",").concat(m[1], ",0.00,").concat(m[2], ",").concat(m[3], ",").concat(m[4], ",270.00,01,01,00,0\n");
  }).join(''));
  var l_setup_blank = ":L-SETUP\n2,-267.500,0,0,0,0,0\n";
  var l_ope_blank = ":L-OPE\n0\n0,00,00,+00.000,+00.000,0000,0000,0240,0000,0000,0200\n0,00,00,+00.000,+00.000,0000,0000,0240,0000,0000,0200\n0.000,1,000.000,0,0\n";
  var l_pcb_h_blank = ":L-PCB-H\n0,-1.000,+1.000\n0,-1.000,+1.000\n";
  var l_back_pin_blank = ":L-BACK-PIN\n,\n0,20\n";
  var l_bc_blank = ":L-BC-COMMON\n001,255,001,255,001,255,001,255,0\n+0000.000,+000.000,00,+0000.000,+000.000,00,+0000.000,+000.000,00,+0000.000,+000.000,00\n+0000.000,+000.000,00,+0000.000,+000.000,00,+0000.000,+000.000,00,+0000.000,+000.000,00\n0,0,1\n:L-BC-PRM\n1,01\n:L-BC-MARK\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n0,13000,03000,03000,01,01,0,1,1,1,1\n";
  var m_ope = ":M-OPE\n01,0,3,0,".concat(pad(h.preplcTp, 5, 3), ",").concat(pad(h.preplcBm, 5, 3), ",0,0,0.200,2,-267.500,0,1,156,150,315,0,0,0\n");
  var m_speed_blank = ":M-SPEED1\n01,0,0800,0080,0.250,0350,+10.000,0350,+05.000,00,+10.000,+10.000\n:M-SPEED2\n01,0,0800,0080,0.250\n:M-SPEED3\n01,0,0800,0080,0.250,0350,+05.000,0350,+10.000,00,+10.000,+10.000\n";
  var m_locate_blank = ":M-LOCATE1\n01,0,0\n:M-LOCATE2\n01,0,00,00,+00.000,+00.000,0000,0000,0240,0000,0000,0200,0,00,00,+0.000,+0.000,0000,0000,0,0,00,00,00,00,0000,0240,0,+0.000\n:M-LOCATE3\n01,0,00,00,+00.000,+00.000,0000,0000,0240,0000,0000,0200,0,00,00,+0.000,+0.000,0000,0000,0,0,00,00,00,00,0000,0240,0,+0.000\n";
  var m_noz_blank = ":M-NOZ\n01,1,,,,,,,,,,,,,,,,,\n01,2,,,,,,,,,,,,,,,,,\n01,3,,,,,,,,,,,,,,,,,\n01,4,,,,,,,,,,,,,,,,,\n:M-NOZ-AS1\n01,1,,,,,,,,,,,,,,,,,\n01,2,,,,,,,,,,,,,,,,,\n01,3,,,,,,,,,,,,,,,,,\n01,4,,,,,,,,,,,,,,,,,\n:M-NOZ-AS2\n01,1,,,,,,,,,,,,,,,,,\n01,2,,,,,,,,,,,,,,,,,\n01,3,,,,,,,,,,,,,,,,,\n01,4,,,,,,,,,,,,,,,,,\n:M-STK\n01,1,1,,,,,,,,,,,,,,,,,\n01,1,2,,,,,,,,,,,,,,,,,\n01,1,3,,,,,,,,,,,,,,,,,\n01,1,4,,,,,,,,,,,,,,,,,\n01,2,1,,,,,,,,,,,,,,,,,\n01,2,2,,,,,,,,,,,,,,,,,\n01,2,3,,,,,,,,,,,,,,,,,\n01,2,4,,,,,,,,,,,,,,,,,\n01,3,1,,,,,,,,,,,,,,,,,\n01,3,2,,,,,,,,,,,,,,,,,\n01,3,3,,,,,,,,,,,,,,,,,\n01,3,4,,,,,,,,,,,,,,,,,\n01,4,1,,,,,,,,,,,,,,,,,\n01,4,2,,,,,,,,,,,,,,,,,\n01,4,3,,,,,,,,,,,,,,,,,\n01,4,4,,,,,,,,,,,,,,,,,\n";
  var cmpnt_list = h.inUseParts.map(function (p, i) {
    return [pad(i + 1, 4, 0), p];
  });
  var l_cmpnt = ":L-CMPNT\n" + cmpnt_list.map(function (c) {
    return "".concat(c[0], ",").concat(c[1], ",,-,\n");
  }).join("");
  var feeder_blank = ":FEEDER\n"; // 01,1,00,003,0016,0,0000,-,,1,0,00.00,00.00,00

  var tray_to_waste_blank = ":TRAY\n:T-CTRL\n01,1,0,15,15\n01,2,0,15,15\n:T-STEP\n:VIB-STICK\n:VIB-ESCAPE\n01,1,1,1,1,1,1\n01,2,1,1,1,1,1\n:WASTE-DSP\n0,+0000.000,+000.000,+000.00,+0.000,,S\n";
  var image_fids = "+0000.000,+000.000,+000.00,+0.000,-,".concat(h.iFidEnbl, ",").concat(pad(h.iFid1x, 8, 3, 1), ",").concat(pad(h.iFid1y, 7, 3, 1), ",").concat(pad(h.iFid2x, 8, 3, 1), ",").concat(pad(h.iFid2y, 7, 3, 1), ",").concat(h.iFid1m, ",").concat(h.iFid2m, ",1,+0000.000,+000.000,01,+0000.000,+000.000,01,+0000.000,+000.000,01,00000,,\n");
  var image_bbr = !h.lBadX && !h.lBadY ? "" : "".concat(pad(h.lBadX, 8, 3, 1), ",").concat(pad(h.lBadY, 7, 3, 1), ",+000.00,+0.000,0000,B,00,01,1,0000,00,0,0000,00,+0000.000,+000.000,+0000.000,+000.000,01,01,,,00001,-,01,1,0003,00,0,0000,00,0,0000,00,0,0000\n");
  var hasOffsets = h.oDataPlain && h.oDataPlain.length > 0;
  var lnAdd = image_bbr === "" ? 1 : 2;
  var place = (h.pDataMap || []).map(function (p, i) {
    var _cmpnt_list$find;

    var cnum = ((_cmpnt_list$find = cmpnt_list.find(function (l) {
      return l[1] === p[4];
    })) === null || _cmpnt_list$find === void 0 ? void 0 : _cmpnt_list$find[0]) || "0000";
    return "".concat(pad(p[1], 8, 3, 1), ",").concat(pad(p[2], 7, 3, 1), ",").concat(pad(p[3], 6, 2, 1), ",+0.000,").concat(cnum, ",").concat(p[5], ",00,01,1,0000,00,0,0000,00,+0000.000,+000.000,+0000.000,+000.000,01,01,").concat(p[0], ",,").concat(pad(i + lnAdd, 5, 0), ",-,01,1,0000,00,0,0000,00,0,0000,00,0,0000\n");
  });
  var place_text = place.join("");
  var end_sym = hasOffsets ? "P" : "E";
  var end_line = "+0000.000,+000.000,+000.00,+0.000,0000,".concat(end_sym, ",00,00,0,0000,00,0,0000,00,+0000.000,+000.000,+0000.000,+000.000,01,01,,,").concat(pad(place.length + 1, 5, 0), ",-,00,0,0000,00,0,0000,00,0,0000,00,0,0000\n");
  var p_dat = ":P-DAT01\n".concat(image_fids).concat(image_bbr).concat(place_text).concat(end_line);
  var offset = (h.oDataPlain || []).map(function (o, i) {
    return "".concat(pad(i + 1, 4, 0), ",").concat(pad(o[0], 8, 3, 1), ",").concat(pad(o[1], 7, 3, 1), ",").concat(pad(o[2], 6, 2, 1), ",+0.000,").concat(o[3], ",,+0000.000,+000.000\n");
  });
  var offset_text = offset.join("");
  var o_dat = !hasOffsets ? "" : ":O-DAT01\n".concat(offset_text).concat(pad(offset.length + 1, 4, 0), ",+0000.000,+000.000,+000.00,+0.000,E,,+0000.000,+000.000");
  var fileConstruct = "".concat(first_line).concat(filePath, "\n").concat(line_opsw).concat(machine).concat(machine_op_1).concat(machine_op_2).concat(l_common).concat(l_board).concat(l_bbr).concat(l_recog).concat(l_mark).concat(l_setup_blank).concat(l_ope_blank).concat(l_pcb_h_blank).concat(l_back_pin_blank, ":L-JIG\n").concat(l_bc_blank, ":L-SWITCH\n0,0,0,0,0\n:DEBUG\n1\n:B-OPE\n0,000,0\n").concat(m_ope, ":M-ASST\n01,1,1,00,00,00,00,00,00,00,00,00,00\n").concat(m_speed_blank).concat(m_locate_blank).concat(m_noz_blank, ":M-PCB-H\n01,0\n:M-BACK-PIN01\n,\n0,20\n").concat(l_cmpnt).concat(feeder_blank).concat(tray_to_waste_blank).concat(p_dat).concat(o_dat);

  if (typeof document !== 'undefined') {
    var link = document.createElement("a");
    link.setAttribute('download', "".concat(filenameState, ".psa"));
    link.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(fileConstruct)));
    document.body.appendChild(link);
    link.click();
    link.remove(); // console.log(fileConstruct);
  } else {
    alert('document not found');
  }
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/scripts/exportAdvantis.js
function exportAdvantis_createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = exportAdvantis_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function exportAdvantis_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return exportAdvantis_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return exportAdvantis_arrayLikeToArray(o, minLen); }

function exportAdvantis_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function downAdvantis(filenameState, advBulkState) {
  var y = advBulkState;

  if (!y) {
    return null;
  }
  /*
    topTitle, subTitle, 
    
    bX, bY, bT, orginX, orginY,
    
    recImage, iFid1x, iFid1y, iFid2x, iFid2y,
    gFidQty, gFid1x, gFid1y, gFid2x, gFid2y, gFid3x, gFid3y,
    
    oDataPlain // [0=x] [1=y] [2=theta] [3=control]
  */


  var pad = function pad(val) {
    return Number.parseFloat(val).toFixed(4).toString();
  };

  var add = function add(a, b) {
    return (parseFloat(a) || 0) + (parseFloat(b) || 0);
  };

  var date = new Date().toLocaleString('en-GB', {
    timeZone: 'America/Regina'
  }).split(", ");
  var dateArr = date[0].split("/");
  var dateTxt = "".concat(dateArr[1], "/").concat(dateArr[0], "/").concat(dateArr[2]);
  var product_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "usos" + "\\" + "product" + "\\" + filenameState + ".upf";
  var board_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "LIB" + "\\" + "BoardTemplate" + "\\" + filenameState + ".tpl";
  var component_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "LIB" + "\\" + "DB" + "\\" + "Master.cdb";
  var config_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "Config" + "\\" + "Machine.mcg";
  var feeder_path = "C:" + "\\" + "UPS 6.02.00" + "\\" + "USOS" + "\\" + "LIB" + "\\" + "DB" + "\\" + "Feeder.fdb";
  var header = "// Universal Instruments Comprehensive Import 2 File\n//\n// Product: ".concat(product_path, "\n//\n// Created by SM UPS+ Version 6.2.2.2\n// Created on ").concat(dateTxt, " at ").concat(date[1], "\n//\n\n");
  var product = "Product : \"".concat(filenameState, ".upf\"\n   \"Board Name\" : \"").concat(board_path, "\"\n   \"Component Database Name\" : \"").concat(component_path, "\"\n   \"Configuration Name\" : \"").concat(config_path, "\"\n   \"Feeder Database Name\" : \"").concat(feeder_path, "\"\n   \"Feeder Template Name\" : \"\"\n   \"Name\" : \"").concat(product_path, "\"\n\n");
  var product_options = "ProductOptions : \"\"\n   \"Description\" : \"".concat(y.topTitle, ", ").concat(y.subTitle, ", SMTx Conversion\"\n   \"Duplicate Feeders\" : \"0\"\n   \"Minimize Nozzle Changes\" : \"\"\n   \"Optimize Nozzle Changer\" : \"10\"\n   \"Reference X\" : \"").concat(pad(y.orginX), "\"\n   \"Reference Y\" : \"").concat(pad(y.orginY), "\"\n   \"Use Feeder Setup\" : \"11\"\n   \"Use Head Balancer\" : \"1\"\n   \"Use Nozzle Setup\" : \"11\"\n   \"Use Shuttle Feeder\" : \"00\"\n   \"Use Shuttle Nozzles\" : \"00\"\n   \"Use Spindles\" : \"000000000000000000000000000000011111100000000000000000000000\"\n\n");
  var command_default = "Command : \"\"\n   Save : \"0\"\n\n";
  var format_default = "Format : \"\"\n   \"Length Unit\" : \"Millimeters\"\n   \"Rotation Unit\" : \"Degrees\"\n\n";
  var hasOffsets = y.oDataPlain && y.oDataPlain.length > 0;
  var circX = '';

  var _iterator = exportAdvantis_createForOfIteratorHelper(y.oDataPlain),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var o = _step.value;

      if (o[0] != 0) {
        circX = o[0];
        break;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var circY = '';

  var _iterator2 = exportAdvantis_createForOfIteratorHelper(y.oDataPlain),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _o = _step2.value;

      if (_o[1] != 0) {
        circY = _o[1];
        break;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var board_set = "BoardTemplate : \"".concat(board_path, "\" \"Clearance\" : \"0.0000\" \"Color\" : \"\" \"Deformity\" : \"0.0000\" \"Thickness\" : \"0.0000\"\n"); // ${pad(y.bT)}

  var circuit_board = "Circuit : \"Board\" \"Name\" : \"Board\" \"Offset Of\" : \"Board\" \"X\" : \"0.0000\" \"Y\" : \"".concat(pad(y.bY), "\" \"X\" : \"0.0000\" \"Y\" : \"0.0000\" \"X\" : \"").concat(pad(y.bX), "\" \"Y\" : \"0.0000\" \"X\" : \"").concat(pad(y.bX), "\" \"Y\" : \"").concat(pad(y.bY), "\"\n");
  var circuit_one = !hasOffsets ? "" : "Circuit : \"1\" \"Name\" : \"1\" \"Offset Of\" : \"1\" \"X\" : \"".concat(pad(y.orginX), "\" \"Y\" : \"").concat(pad(y.orginY), "\" \"X\" : \"").concat(pad(y.orginX), "\" \"Y\" : \"").concat(pad(add(y.orginY, circY)), "\" \"X\" : \"").concat(pad(add(y.orginX, circX)), "\" \"Y\" : \"").concat(pad(add(y.orginY, circY)), "\" \"X\" : \"").concat(pad(add(y.orginX, circX)), "\" \"Y\" : \"").concat(pad(y.orginY), "\"\n");
  var offsets = !hasOffsets ? "" : y.oDataPlain.map(function (o, i) {
    if (i == 0) {
      return "";
    } else {
      return "Circuit : \"".concat(i + 1, "\" \"Name\" : \"").concat(i + 1, "\" \"Offset Of\" : \"1\" \"X\" : \"").concat(pad(o[0]), "\" \"Y\" : \"").concat(pad(o[1]), "\" \"Theta\" : \"").concat(pad(o[2]), "\"\n");
    }
  }).join("");
  var board_template = "//*\n//* Board\n//*\n\n" + board_set + circuit_board + circuit_one + offsets + "\n";
  var useFids = y.recImage ? [[y.iFid1x, y.iFid1y], [y.iFid2x, y.iFid2y]] : y.gFidQty < 3 ? [[y.gFid1x, y.gFid1y], [y.gFid2x, y.gFid2y]] : [[y.gFid1x, y.gFid1y], [y.gFid2x, y.gFid2y], [y.gFid3x, y.gFid3y]];
  var fiducial_set = "//*\n//* Fiducials\n//*\n\n".concat(useFids.map(function (f, i) {
    return "Fiducial : \"FID".concat(i + 1, "\" \"Circ\" : \"").concat(hasOffsets ? '1' : 'Board', "\" \"Fiducial Type\" : \"Disc57_0\" \"Ref ID\" : \"FID").concat(i + 1, "\" \"X\" : \"").concat(pad(f[0]), "\" \"Y\" : \"").concat(pad(f[1]), "\"\n");
  }).join(""), "\n");
  var pad_default = "//*\n//* Pad Sites\n//*\n\n";
  var placement_default = "//*\n//* Placements\n//*\n\n"; // Placement : "U1" "Circ" : "1" "Component ID" : "80-RT-QFP" "Local" : "" "Process" : "Place" "Ref ID" : "U1" "Theta" : "180.000" "X" : "36.9010" "Y" : "20.5240" "ZZone" : "0" 

  var slot_default = "//*\n//* Slots\n//*\n\n"; // Slot : "14" "Feeder" : "Track 4" "Component ID" : "8-SOIC" "Feeder Slot" : "14" "Track" : "1" "Rotation" : "270.000" 
  // Slot : "32" "Feeder" : "Belt Reject" "Component ID" : "8-SOIC" "Feeder Slot" : "32" "Rotation" : "0.000" 

  var magazine_default = "//*\n//* Magazines\n//*\n\n";
  var sq_start = "//*\n//* Sequences\n//*\n\nSequence : \"Default\"\n   Section : \"Bad Sense\" \"Section Type\" : \"Bad Sense\"\n";
  var fid_steps = !hasOffsets ? "      Step : \"1\" \"Step Type\" : \"Find\" \"Ref ID\" : \"FID1\" \"Circ\" : \"Board\" \"Bypass\" : \"0\"\n      Step : \"2\" \"Step Type\" : \"Find\" \"Ref ID\" : \"FID2\" \"Circ\" : \"Board\" \"Bypass\" : \"0\"\n" : y.oDataPlain.map(function (o, i) {
    return "      Step : \"".concat((i + 1) * 2 - 1, "\" \"Step Type\" : \"Find\" \"Ref ID\" : \"FID1\" \"Circ\" : \"").concat(i + 1, "\" \"Bypass\" : \"0\"\n      Step : \"").concat((i + 1) * 2, "\" \"Step Type\" : \"Find\" \"Ref ID\" : \"FID2\" \"Circ\" : \"").concat(i + 1, "\" \"Bypass\" : \"0\"\n");
  }).join("");
  var sq_fids = "   Section : \"Fiducials\" \"Section Type\" : \"Fiducials\"\n" + fid_steps;
  var sq_global = hasOffsets ? "   Section : \"Global Corrections\" \"Section Type\" : \"Global Corrections\"\n      Step : \"1\" \"Step Type\" : \"Global Correct\" \"Circ\" : \"1\" \"Scope\" : \"Selected Circuit and all Offsets\" \"Ref ID\" : \"FID1\" \"Fid Circuit\" : \"1\" \"Ref ID\" : \"FID2\" \"Fid Circuit\" : \"1\" \"Bypass\" : \"0\"\n" : "   Section : \"Global Corrections\" \"Section Type\" : \"Global Corrections\"\n      Step : \"1\" \"Step Type\" : \"Global Correct\" \"Circ\" : \"Board\" \"Scope\" : \"Selected Circuit\" \"Ref ID\" : \"FID1\" \"Fid Circuit\" : \"Board\" \"Ref ID\" : \"FID2\" \"Fid Circuit\" : \"Board\" \"Bypass\" : \"0\"\n";
  var sq_end = "   Section : \"Placements\" \"Section Type\" : \"Placements\"\n   Section : \"Post Processing\" \"Section Type\" : \"Generic\"\n      Step : \"1\" \"Step Type\" : \"Repair\" \"Bypass\" : \"0\"\n\n";
  var sequence_set = sq_start + sq_fids + sq_global + sq_end;
  var fid_type_default = "//*\n//* Fiducial Types\n//*\n\n";
  var local_default = "//*\n//* Local Corrections\n//*\n\nLocalCorrection : \"Center\" \"Ref ID\" : \"[Center]\" \"Circ\" : \"\"\nLocalCorrection : \"Bottom Left/Top Right\" \"Ref ID\" : \"[Bottom Left]\" \"Circ\" : \"\" \"Ref ID\" : \"[Top Right]\" \"Circ\" : \"\"\nLocalCorrection : \"Bottom Right/Top Left\" \"Ref ID\" : \"[Bottom Right]\" \"Circ\" : \"\" \"Ref ID\" : \"[Top Left]\" \"Circ\" : \"\"\n\n";
  var component_default = "//*\n//* Components\n//*\n\n";
  var feeder_default = "//*\n//* Feeders\n//*\n\n"; // const feeder_default = `//*\n//* Feeders\n//*\n\nFeeder : "Belt Reject"\n   "Name" : "Belt Reject" "Category" : "Reject Belt" "Groups" : "" "Description" : "" "Action" : "Add" "Alias" : ""\n   "Number of Slots" : "3" "Reference Slot" : "1"\n   "Left Edge Distance" : "0.0000" "Front Edge Distance" : "0.0000" "Width" : "0.0000" "Depth" : "0.0000"\n   "Pickup X" : "1.2700" "Pickup Y" : "-72.7710" "Pickup Tolerance X" : "0.0000" "Pickup Tolerance Y" : "0.0000" "Theta Pick Tolerance" : "0.000" "Pick Attempts" : "0"\n   "Vibrate Delay (Reject)" : "2.000" "Powered" : "1" "Number of Tracks (Reject)" : "1" "Track Width (Reject)" : "50.8000"`;

  var fileConstruct = header + product + product_options + command_default + format_default + board_template + fiducial_set + pad_default + placement_default + slot_default + magazine_default + sequence_set + fid_type_default + local_default + component_default + feeder_default;

  if (typeof document !== 'undefined') {
    var link = document.createElement("a");
    link.setAttribute('download', "".concat(filenameState, ".ci2"));
    link.setAttribute('href', "data:text/plain;charset=utf-8,".concat(encodeURIComponent(fileConstruct)));
    document.body.appendChild(link);
    link.click();
    link.remove(); // console.log(fileConstruct);
  } else {
    alert('document not found');
  }
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/components/theButtons.jsx

var theButtons_BackButton = function BackButton(_ref) {
  var clearFileThing = _ref.clearFileThing;
  return /*#__PURE__*/external_react_default.a.createElement("button", {
    id: "doClear",
    title: "Clear",
    className: "doAction",
    onClick: function onClick(e) {
      return clearFileThing(e);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M245.09 327.74v-37.32c57.07 0 84.51 13.47 108.58 38.68 5.4 5.65 15 1.32 14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09v-37.32a8.32 8.32 0 00-14.05-6L146.58 242a8.2 8.2 0 000 11.94L231 333.71a8.32 8.32 0 0014.09-5.97z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "32",
    d: "M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
  })), /*#__PURE__*/external_react_default.a.createElement("span", null, "Try Another"));
};
var theButtons_DownloadButton = function DownloadButton(_ref2) {
  var bID = _ref2.bID,
      downFunc = _ref2.downFunc;
  return /*#__PURE__*/external_react_default.a.createElement("button", {
    id: bID,
    title: "Download",
    className: "doAction",
    onClick: function onClick(e) {
      return downFunc(e);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M176 272l80 80 80-80M256 48v288"
  })));
};
var theButtons_PrintButton = function PrintButton(_ref3) {
  var pID = _ref3.pID,
      printFunc = _ref3.printFunc;
  return /*#__PURE__*/external_react_default.a.createElement("button", {
    id: pID,
    title: "Print",
    className: "doAction",
    onClick: function onClick(e) {
      return printFunc(e);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
  }), /*#__PURE__*/external_react_default.a.createElement("rect", {
    width: "256",
    height: "208",
    x: "128",
    y: "240",
    fill: "none",
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: "32",
    rx: "24.32",
    ry: "24.32"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
  }), /*#__PURE__*/external_react_default.a.createElement("circle", {
    cx: "392",
    cy: "184",
    r: "24"
  })));
};
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/components/theWork.jsx

 // import lodash from 'lodash';











var theWork_TheWork = function TheWork() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      workState = _useState2[0],
      workSet = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(false),
      _useState4 = slicedToArray_default()(_useState3, 2),
      filenameState = _useState4[0],
      filenameSet = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(undefined),
      _useState6 = slicedToArray_default()(_useState5, 2),
      boardState = _useState6[0],
      boardSet = _useState6[1];

  var _useState7 = Object(external_react_["useState"])(undefined),
      _useState8 = slicedToArray_default()(_useState7, 2),
      placeState = _useState8[0],
      placeSet = _useState8[1];

  var _useState9 = Object(external_react_["useState"])(undefined),
      _useState10 = slicedToArray_default()(_useState9, 2),
      loadState = _useState10[0],
      loadSet = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(undefined),
      _useState12 = slicedToArray_default()(_useState11, 2),
      partsState = _useState12[0],
      partsSet = _useState12[1];

  var _useState13 = Object(external_react_["useState"])(undefined),
      _useState14 = slicedToArray_default()(_useState13, 2),
      advBulkState = _useState14[0],
      advBulkSet = _useState14[1];

  var _useState15 = Object(external_react_["useState"])(undefined),
      _useState16 = slicedToArray_default()(_useState15, 2),
      yamBulkState = _useState16[0],
      yamBulkSet = _useState16[1];

  var _useState17 = Object(external_react_["useState"])(null),
      _useState18 = slicedToArray_default()(_useState17, 2),
      errorState = _useState18[0],
      errorSet = _useState18[1];

  Object(external_react_["useEffect"])(function () {
    var dropArea = null;

    if (typeof document !== 'undefined') {
      dropArea = document.getElementById('drop-area');
      dropArea.addEventListener('dragover', function (event) {
        event.stopPropagation();
        event.preventDefault();
        event.dataTransfer.dropEffect = 'copy';
      });
      dropArea.addEventListener('drop', function (event) {
        event.stopPropagation();
        event.preventDefault();
        var file = event.dataTransfer.files[0];
        runFileThing(file);
      });
    }

    return function () {
      return dropArea && dropArea.removeEventListener;
    };
  }, []);

  var setValues = function setValues(data) {
    data.file && filenameSet(data.file);
    data.board && boardSet(data.board);
    data.place && placeSet(data.place);
    data.load && loadSet(data.load);
    data.parts && partsSet(data.parts);
    data.yamaha && yamBulkSet(data.yamaha);
    data.advantis && advBulkSet(data.advantis);
    data.error && errorSet(data.error);
  };

  var runFileThing = function runFileThing(file) {
    if (file) {
      workSet(true);
      setTimeout(function () {
        var fr = new FileReader(); // fr.load = function(e) { // or loadend (api changed?)

        fr.onload = function (e) {
          var rawText = fr.result;

          if (rawText) {
            if (typeof rawText.split(/\n/g)[2] == 'string') {
              if (rawText.includes(':CORE')) {
                dataInputExtractHitachi(rawText, function (dt) {
                  return setValues(dt);
                });
              } else if (rawText.includes(':L-COMMON')) {
                dataInputExtract(rawText, function (dt) {
                  return setValues(dt);
                });
              } else {
                errorSet("Invalid");
              }
            } else {
              errorSet("Invalid");
            }
          }
        };

        fr.readAsText(file);
        workSet(false);
      }, 1000);
    }
  };

  var getFileThing = function getFileThing(e) {
    var file = e.target.files[0];
    runFileThing(file);
  };

  var clearFileThing = function clearFileThing() {
    filenameSet(false);
    boardSet(undefined);
    placeSet(undefined);
    loadSet(undefined);
    partsSet(undefined);
    yamBulkSet(undefined);
    advBulkSet(undefined);
    errorSet(undefined);
  };

  var printTextThing = function printTextThing(htmlString) {
    if (htmlString && typeof document !== 'undefined') {
      var printableElement = document.createElement('iframe');
      printableElement.setAttribute('id', "printFrame");
      printableElement.setAttribute('style', "display: none");
      document.body.appendChild(printableElement);
      var printframe = document.getElementById("printFrame");
      var printArea = printframe.contentWindow.document.getElementsByTagName("HTML")[0];
      printArea.innerHTML = htmlString;
      printframe.contentWindow.focus();
      printframe.contentWindow.print(); // cleanup (browser compat)

      setTimeout(function () {
        return printableElement.remove();
      }, 10);
    } else {
      alert('document not found');
    }
  };

  errorState && console.error(errorState);
  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, errorState ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "centre errorZone"
  }, /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "erroriconWrap"
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "erroricon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "32",
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z"
  }))), /*#__PURE__*/external_react_default.a.createElement("h2", null, "INVALID FILE"), /*#__PURE__*/external_react_default.a.createElement(theButtons_BackButton, {
    clearFileThing: clearFileThing
  })) : filenameState ? /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputZone"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, filenameState), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Board"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doBoardPrint",
    printFunc: function printFunc(e) {
      return printBoard(filenameState, boardState, printTextThing);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doBoardDown",
    downFunc: function downFunc(e) {
      return downBoard(filenameState, boardState);
    }
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Pick", /*#__PURE__*/external_react_default.a.createElement("wbr", null), "'n'", /*#__PURE__*/external_react_default.a.createElement("wbr", null), "Place"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doPnpPrint",
    printFunc: function printFunc(e) {
      return printPnP(filenameState, placeState, printTextThing);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doPnpDown",
    downFunc: function downFunc(e) {
      return downPnP(filenameState, placeState);
    }
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Parts List"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doPartsPrint",
    printFunc: function printFunc(e) {
      return printParts(filenameState, partsState, printTextThing);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doPartsDown",
    downFunc: function downFunc(e) {
      return downParts(filenameState, partsState);
    }
  }))), loadState && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine",
    key: "yamahasigmaload"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Load Sheet"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doLoadPrint",
    printFunc: function printFunc(e) {
      return printLoad(filenameState, loadState, printTextThing);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doLoadDown",
    downFunc: function downFunc(e) {
      return downLoad(filenameState, loadState);
    }
  }))), yamBulkState && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Sigma .psa"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: filenameState + 'doSigmaDown',
    downFunc: function downFunc(e) {
      return downSigma(filenameState, yamBulkState);
    }
  }))), advBulkState && /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Advantis .ci2"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: filenameState + 'doAdvantisDown',
    downFunc: function downFunc(e) {
      return downAdvantis(filenameState, advBulkState);
    }
  }))), /*#__PURE__*/external_react_default.a.createElement(theButtons_BackButton, {
    clearFileThing: clearFileThing
  })) : /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "centre dropZone",
    id: "drop-area",
    title: "Open .PGA or .PSA File"
  }, /*#__PURE__*/external_react_default.a.createElement("label", {
    htmlFor: "fileClickInput",
    id: "fileClickLabel",
    "aria-label": "Upload File",
    className: "dropiconWrap ".concat(workState ? 'work' : '')
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    className: "dropicon ".concat(workState ? 'work' : ''),
    xmlns: "http://www.w3.org/2000/svg",
    width: "75%",
    viewBox: "0 0 32 32"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M 6 3 L 6 29 L 26 29 L 26 9.59375 L 25.71875 9.28125 L 19.71875 3.28125 L 19.40625 3 Z M 8 5 L 18 5 L 18 11 L 24 11 L 24 27 L 8 27 Z M 20 6.4375 L 22.5625 9 L 20 9 Z"
  })), /*#__PURE__*/external_react_default.a.createElement("input", {
    type: "file",
    accept: ".PGA, .PSA",
    multiple: false,
    onInput: function onInput(e) {
      return getFileThing(e);
    },
    id: "fileClickInput",
    className: "fileInput",
    disabled: workState,
    tabIndex: "1"
  }))));
};

/* harmony default export */ var theWork = (theWork_TheWork);
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/components/theLayout.jsx

 // import lodash from 'lodash';



var theLayout_TheLayout = function TheLayout() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      backgroundState = _useState2[0],
      backgroundSet = _useState2[1];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("header", null, /*#__PURE__*/external_react_default.a.createElement("h1", null, "SMT Extractor")), /*#__PURE__*/external_react_default.a.createElement("main", null, backgroundState ? /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("button", {
    id: "byeBttn",
    title: "close",
    className: "navAction stickyNav",
    onClick: function onClick() {
      return backgroundSet(false);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "32",
    d: "M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M320 320L192 192M192 320l128-128"
  })), /*#__PURE__*/external_react_default.a.createElement("span", null, "Close")), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Information"), /*#__PURE__*/external_react_default.a.createElement("p", null, "SMT Extractor (aka SMT\xD7, formerly PGA", /*#__PURE__*/external_react_default.a.createElement("sup", null, "2"), "CSV) is a utility to convert PGA and PSA files. The placement locations are converted into a machine readable pick and place CSV file. The overall board information, parts list and load sheet are converted into human optimized plain text files. Sigma conversion is saved as a `.psa` file that can be opened by NT-100 or transfered to a Yamaha Sigma machine; the program will need to be optimized with NT-100 or on machine before it will run. Advantis conversion is saved as a `.ci2` file that can be imported by the UIC Advantis 'Product Editor' or 'Comprehensive Import'. Components are not included in the `.ci2` file, they will need to be added with the Pick'n'Place file and UIC Advantis' 'CAD Import'; the program will need to be optimized on machine before it will run. (ci2 files are compatible with many other modern UIC machines but not GSMs running OS/2.)"), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Import"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Input files must be formatted as UTF-8 text files with a `.pga` or `.psa` extension. Reliable results should only be expected with program files formatted for Hitachi GXH-1S or Yamaha Sigma GS5II machines."), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Export"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Downloaded output files are formatted as UTF-8 text files with a `.csv`, `.txt`, `.psa` or `.ci2` extension."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Printed output is generated as html for the browser's print utility. After the printer utility is closed the generated content is destroyed."), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Privacy"), /*#__PURE__*/external_react_default.a.createElement("p", null, "All files are processed locally. No file content or metadata is transported to any server, cloud or 3rd party service. No file content or metadata is cached in the web browser once the browser window is closed. File content or metadata is only saved to the local machine upon user action."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Be aware that content or metadata may be retained by your browser's download history or your computer's printer queue."), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Licence"), /*#__PURE__*/external_react_default.a.createElement("p", null, "MIT License"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Copyright (c) 2021 - present, Commutron Industries Ltd."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"), /*#__PURE__*/external_react_default.a.createElement("p", null, "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."), /*#__PURE__*/external_react_default.a.createElement("p", null, "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.")) : /*#__PURE__*/external_react_default.a.createElement(theWork, null)), /*#__PURE__*/external_react_default.a.createElement("footer", null, /*#__PURE__*/external_react_default.a.createElement("button", {
    id: "heloBttn",
    title: "Information",
    className: "navAction",
    onClick: function onClick() {
      return backgroundSet(true);
    }
  }, /*#__PURE__*/external_react_default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "100%",
    viewBox: "0 0 512 512"
  }, /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeMiterlimit: "10",
    strokeWidth: "32",
    d: "M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M220 220h32v116"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeMiterlimit: "10",
    strokeWidth: "32",
    d: "M208 340h88"
  }), /*#__PURE__*/external_react_default.a.createElement("path", {
    d: "M248 130a26 26 0 1026 26 26 26 0 00-26-26z"
  }))), /*#__PURE__*/external_react_default.a.createElement("span", null, "Commutron Industries Ltd. \xA92023")));
};

/* harmony default export */ var theLayout = (theLayout_TheLayout);
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/src/App.js




function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "SMT\xD7"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "application-name",
    content: "SMT\xD7"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#ce6a85"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "Convert Hitachi/Yamaha program files into CSV and plain text"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "rating",
    content: "General"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/android-chrome-192x192.png"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "512x512",
    href: "/android-chrome-512x512.png"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
    color: "white"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: "/smtx-circle-pink.svg",
    color: "white"
  })), /*#__PURE__*/external_react_default.a.createElement(theLayout, null));
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(2);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("/mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/node_modules/react-static/lib/browser");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("/mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/artifacts/__react_static_root__/node_modules/react-static/lib/browser/components/Default404");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(3);

var _router = __webpack_require__(21);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(22);
module.exports = __webpack_require__(29);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(20)["default"];

var _require = __webpack_require__(9),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(9),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(23),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);




Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/node_modules/react-static/lib/browser/components/Default404",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 13, 7))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/node_modules/react-static/lib/browser/components/Default404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/node_modules/react-static/lib/browser/components/Default404'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/node_modules/react-static/lib/browser/components/Default404': t_0
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/node_modules/react-static/lib/browser/components/Default404";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(7);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 2,
	"./": 2,
	"./index": 2,
	"./index.js": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 26;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(6);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(11);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(12);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(30);

var _interopRequireDefault = __webpack_require__(31);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(32));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(33));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(34);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(35)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("/mnt/c/Users/Scuba/Sites/urchin_[pga-csv_converter]/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(36)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300&display=swap);", ""]);

// Module
exports.push([module.i, "* {\r\n  scroll-behavior: smooth;\r\n  box-sizing: border-box;\r\n  --accent: #ce6a85;\r\n  --dark: #2f2f2f;\r\n  --light: white;\r\n}\r\n@-moz-document url-prefix() {\r\n  body {\r\n    font-weight: bold !important;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Code Pro', monospace;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\nheader{\r\n  height: 8dvh;\r\n  margin: 0;\r\n  padding: 0 3vw;\r\n  background-color: var(--accent);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\nheader h1 { \r\n  font-size: 6vh;\r\n  /* text-wrap: nowrap; */\r\n  white-space: nowrap;\r\n}\r\nmain {\r\n  height: 85dvh;\r\n  width: 100vw;\r\n  padding: 0;\r\n}\r\n\r\nsection {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow-y: overlay;\r\n  overflow-x: hidden;\r\n  border: 1vh double var(--dark);\r\n  padding: 5vh 5vw;\r\n}\r\n.stickyNav {\r\n  position: sticky;\r\n  top: 0;\r\n  float: right;\r\n}\r\nfooter {\r\n  height: 7dvh;\r\n  width: 100vw;\r\n  padding: 0 3vw;\r\n  overflow: hidden;\r\n  background-color: var(--dark);\r\n  color: var(--light);\r\n  font-size: 2vh;\r\n  line-height: 1;\r\n  text-align: right;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.centre {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.dropZone {\r\n  border: 2vmin dashed rgba(206, 106, 133, 0.4);\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5vh 5vw;\r\n}\r\n.dropZone::drop {\r\n  border: 2vmin dashed rgba(206, 106, 133, 0.8);\r\n}\r\n\r\n@keyframes pulse {\r\n  0% { box-shadow: 0 0 0 0 rgba(206, 109, 139, 0.3); }\r\n}\r\n\r\n.fileInput { opacity: 0; }\r\n.fileInput, .dropiconWrap {\r\n  height: 70vmin;\r\n  width: 70vmin;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.dropiconWrap {\r\n  position:relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(206, 106, 133, 0.4);\r\n}\r\n.dropiconWrap.work {\r\n  transform: rotate(5deg);\r\n  transition: all 500ms ease;\r\n  animation: pulse 0.5s;\r\n  animation-iteration-count: infinite;\r\n  box-shadow: 0 0 0 1vmax var(--light),\r\n              0 0 0 2vmax rgba(206, 109, 139, 0.3);\r\n}\r\n.dropiconWrap:before, .dropicon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.dropiconWrap:before {\r\n  content: \".PGA\\a.PSA\";\r\n  text-align: center;\r\n  color: rgb(152, 82, 119);\r\n  font-size: 7vmin;\r\n  font-weight: 600;\r\n}\r\n.dropicon {  \r\n  transition: all 250ms ease;\r\n  fill: rgb(152, 82, 119);\r\n}\r\n.dropiconWrap:active .dropicon,\r\n.dropiconWrap:focus-within .dropicon,\r\n.dropiconWrap:focus .dropicon { \r\n  filter: drop-shadow(1px 1px 20px rgb(206, 106, 133));\r\n}\r\n\r\n.errorZone {\r\n  padding: 5vh 5vw;\r\n}\r\n.errorZone > svg:first-of-type {\r\n  fill: var(--dark);\r\n  color: var(--dark);\r\n}\r\n.errorZone > h2 {\r\n  font-size: 5vh;\r\n  margin: 0 0 2vh 0;\r\n  text-align: center;\r\n}\r\n.erroriconWrap {\r\n  max-height: 70vh;\r\n}\r\n.erroricon {\r\n  height: 45vh;\r\n}\r\n\r\n.outputZone {\r\n  height: 100%;\r\n  padding: 5dvh 5dvw;\r\n  overflow-y: overlay;\r\n  overflow-x: hidden;\r\n}\r\n.outputZone p {\r\n  margin: 0;\r\n  font-size: 2.5vh;\r\n}\r\n.outputLine {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-top: 2px groove var(--accent);\r\n  padding: 3vh 3vw;\r\n}\r\n.outputLine > b {\r\n  font-size: 2.5vh;\r\n}\r\n.outputLine > span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.doAction {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 6vh;\r\n  max-height: 5rem;\r\n  min-height: 1rem;\r\n  min-width: 6vh;\r\n  margin: 0 2vw;\r\n  padding: 0.5vh;\r\n  font-size: 2.5vh;\r\n  font-size: clamp(10px, 2.5dvh, 18px);\r\n  background: var(--accent);\r\n  border: 5px solid var(--accent);\r\n  border-radius: 10px;\r\n  transition: all 100ms ease-out 75ms;\r\n  box-shadow: 0px 1px 0px 1px #985277,\r\n              0px 1px 15px -5px var(--dark);\r\n}\r\n.doAction:hover, .doAction:focus, .doAction:active {\r\n  box-shadow: 0px 0px 0px 5px #985277,\r\n              0px 5px 20px -5px var(--dark);\r\n  outline: none;\r\n}\r\n\r\n.navAction {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 6vh;\r\n  min-width: 6vh;\r\n  margin: 0 1vw;\r\n  padding: 0.5vh 1vh;\r\n  font-size: 2vh;\r\n  font-weight: 400;\r\n  background: var(--dark);\r\n  color: var(--light);\r\n  border: none;\r\n  border-radius: 25px;\r\n  transition: all 100ms ease-out 75ms;\r\n}\r\n.navAction svg {\r\n  fill: var(--light);\r\n  stroke: var(--light);\r\n}\r\n.navAction:hover, .navAction:active {\r\n  box-shadow: 0 0 0 0.5vh var(--dark);\r\n}", ""]);



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});