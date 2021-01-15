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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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

// EXTERNAL MODULE: /mnt/c/Users/Scuba/Sites/urchin/src/app.css
var app = __webpack_require__(37);

// EXTERNAL MODULE: external "@babel/runtime/helpers/slicedToArray"
var slicedToArray_ = __webpack_require__(1);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray_);

// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin/src/scripts/dataInputExtract.js
// import lodash from 'lodash';
function dataInputExtract(rawText, sendUpName, sendUpBoard, sendUpPlace, sendUpParts, sendUpError) {
  try {
    if (rawText && typeof rawText.split(/\n/g)[2] == 'string') {
      var _rawText$split, _rawText$split$, _coreCut$, _coreCut$$trim, _coreData$, _coreData$2, _coreData$3, _coreData$4, _coreCut$2, _recCut$, _recCut$$trim, _recCut$$trim$split$, _recCut$2, _markCut$, _markCut$2, _f0Cut$, _f1Cut$, _f1Cut$2, _f2Cut$, _f2Cut$2, _f3Cut$, _f3Cut$2, _f4Cut$, _f4Cut$2, _f5Cut$, _f5Cut$2, _uCut2$, _uArr$, _fmarkArr$findex, _fmarkArr$findex2, _uCut2$2, _uCut2$2$split$, _oData$split;

      var fileName = (_rawText$split = rawText.split(',', 1)) === null || _rawText$split === void 0 ? void 0 : _rawText$split[0];
      var coreCut = (_rawText$split$ = rawText.split(':CORE', 2)[1]) === null || _rawText$split$ === void 0 ? void 0 : _rawText$split$.split(':RECOG');
      var coreData = (_coreCut$ = coreCut[0]) === null || _coreCut$ === void 0 ? void 0 : (_coreCut$$trim = _coreCut$.trim()) === null || _coreCut$$trim === void 0 ? void 0 : _coreCut$$trim.split(/\n/g);
      var topTitle = (_coreData$ = coreData[0]) === null || _coreData$ === void 0 ? void 0 : _coreData$.split(",")[0];
      var subTitle = (_coreData$2 = coreData[0]) === null || _coreData$2 === void 0 ? void 0 : _coreData$2.split(",")[1];
      var gBadMark = (_coreData$3 = coreData[2]) === null || _coreData$3 === void 0 ? void 0 : _coreData$3.split(",");
      var gBadX = Number(gBadMark[4]);
      var gBadY = Number(gBadMark[5]);
      var boardSize = (_coreData$4 = coreData[1]) === null || _coreData$4 === void 0 ? void 0 : _coreData$4.split(",");
      var bX = Number(boardSize[0]);
      var bY = Number(boardSize[1]);
      var bT = Number(boardSize[2]);
      var orginX = Number(boardSize[3]);
      var orginY = Number(boardSize[4]);
      var recCut = (_coreCut$2 = coreCut[1]) === null || _coreCut$2 === void 0 ? void 0 : _coreCut$2.split(':MARK', 2);
      var globalFid = (_recCut$ = recCut[0]) === null || _recCut$ === void 0 ? void 0 : (_recCut$$trim = _recCut$.trim()) === null || _recCut$$trim === void 0 ? void 0 : (_recCut$$trim$split$ = _recCut$$trim.split(/\n/g)[1]) === null || _recCut$$trim$split$ === void 0 ? void 0 : _recCut$$trim$split$.split(",");
      var useGlobal = Number(globalFid === null || globalFid === void 0 ? void 0 : globalFid.slice(0, 1)) ? true : false;
      var markCut = (_recCut$2 = recCut[1]) === null || _recCut$2 === void 0 ? void 0 : _recCut$2.split(':SETUP', 2);
      var fidMarks = (_markCut$ = markCut[0]) === null || _markCut$ === void 0 ? void 0 : _markCut$.trim();
      var fmarkArr = fidMarks === null || fidMarks === void 0 ? void 0 : fidMarks.split(/\n/g); // BarCodes :BC-COMMON -> :BC-MARK -> :NOZ-PLC

      var f0Cut = (_markCut$2 = markCut[1]) === null || _markCut$2 === void 0 ? void 0 : _markCut$2.split(':FDR-00', 2);
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
      var feederMap = feederArr === null || feederArr === void 0 ? void 0 : feederArr.map(function (e) {
        return e.split(",");
      });
      var uCut1 = (_f5Cut$2 = f5Cut[1]) === null || _f5Cut$2 === void 0 ? void 0 : _f5Cut$2.split(':P-DAT01', 2)[1];
      var oExist = uCut1 === null || uCut1 === void 0 ? void 0 : uCut1.includes(":O-DAT01");
      var uCut2 = oExist ? uCut1 === null || uCut1 === void 0 ? void 0 : uCut1.split(':O-DAT01', 2) : uCut1 === null || uCut1 === void 0 ? void 0 : uCut1.split(':PP1', 1);
      var uData = (_uCut2$ = uCut2[0]) === null || _uCut2$ === void 0 ? void 0 : _uCut2$.replace(',', "").trim();
      var uArr = uData === null || uData === void 0 ? void 0 : uData.split(/\n/g);
      var imageFid = (_uArr$ = uArr[0]) === null || _uArr$ === void 0 ? void 0 : _uArr$.split(",");
      var iFid1x = useGlobal ? globalFid[1] : imageFid[7];
      var iFid1y = useGlobal ? globalFid[2] : imageFid[8];
      var iFid2x = useGlobal ? globalFid[4] : imageFid[9];
      var iFid2y = useGlobal ? globalFid[5] : imageFid[10];
      var findex1 = Number.parseInt(useGlobal ? globalFid[3] : imageFid[11], 10) - 1;
      var findex2 = Number.parseInt(useGlobal ? globalFid[6] : imageFid[12], 10) - 1;
      var fMark1 = Number((_fmarkArr$findex = fmarkArr[findex1]) === null || _fmarkArr$findex === void 0 ? void 0 : _fmarkArr$findex.split(",")[1]);
      var fMark2 = Number((_fmarkArr$findex2 = fmarkArr[findex2]) === null || _fmarkArr$findex2 === void 0 ? void 0 : _fmarkArr$findex2.split(",")[1]);
      var hasBad = uArr[1].split(",")[6] === "B";
      var localBad = hasBad ? uArr[1].split(",") : undefined;
      var lBadX = hasBad ? Number(localBad[0]) : undefined;
      var lBadY = hasBad ? Number(localBad[1]) : undefined;
      var pDataArray = hasBad ? uArr === null || uArr === void 0 ? void 0 : uArr.slice(2, -1) : uArr === null || uArr === void 0 ? void 0 : uArr.slice(1, -1);
      var pDataMap = pDataArray === null || pDataArray === void 0 ? void 0 : pDataArray.map(function (pl) {
        var spL = pl.split(",");
        var pnMatch = feederMap.find(function (l) {
          return l[0] === spL[3];
        });
        var pn = pnMatch ? pnMatch[1] : undefined;
        return [spL[13], Number(spL[0]), Number(spL[1]), Number(spL[2]), pn];
      });
      pDataMap === null || pDataMap === void 0 ? void 0 : pDataMap.push(["fid1", Number(iFid1x), Number(iFid1y), 0, "FID"]);
      pDataMap === null || pDataMap === void 0 ? void 0 : pDataMap.push(["fid2", Number(iFid2x), Number(iFid2y), 0, "FID"]);
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
      var oData = oExist ? (_uCut2$2 = uCut2[1]) === null || _uCut2$2 === void 0 ? void 0 : (_uCut2$2$split$ = _uCut2$2.split(':PP1', 1)[0]) === null || _uCut2$2$split$ === void 0 ? void 0 : _uCut2$2$split$.replace(',', "").trim() : undefined;
      var oDataArray = oData === null || oData === void 0 ? void 0 : (_oData$split = oData.split(/\n/g)) === null || _oData$split === void 0 ? void 0 : _oData$split.slice(1, -1);
      var oDataMap = oDataArray === null || oDataArray === void 0 ? void 0 : oDataArray.map(function (ol) {
        var soL = ol.split(",");
        return [Number(soL[0]), Number(soL[1]), Number(soL[2])];
      });
      sendUpName(fileName);
      sendUpBoard({
        topTitle: topTitle,
        subTitle: subTitle,
        bX: bX,
        bY: bY,
        bT: bT,
        orginX: orginX,
        orginY: orginY,
        fMark1: fMark1,
        fMark2: fMark2,
        oDataMap: oDataMap,
        gBadX: gBadX,
        gBadY: gBadY,
        lBadX: lBadX,
        lBadY: lBadY
      });
      sendUpPlace(pDataMap);
      sendUpParts(inUseParts);
      sendUpError(null);
    } else {
      sendUpError("Invalid");
    }
  } catch (error) {
    sendUpError(error.message);
  }
}
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin/src/components/theButtons.jsx

var theButtons_BackButton = function BackButton(_ref) {
  var clearFileThing = _ref.clearFileThing;
  return /*#__PURE__*/external_react_default.a.createElement("button", {
    id: "doClear",
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
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin/src/components/theWork.jsx

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
      partsState = _useState10[0],
      partsSet = _useState10[1];

  var _useState11 = Object(external_react_["useState"])(null),
      _useState12 = slicedToArray_default()(_useState11, 2),
      errorState = _useState12[0],
      errorSet = _useState12[1];

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

  var runFileThing = function runFileThing(file) {
    if (file) {
      workSet(true);
      setTimeout(function () {
        var fr = new FileReader();

        fr.onload = function (e) {
          var rawText = fr.result;

          if (rawText) {
            dataInputExtract(rawText, function (fn) {
              return filenameSet(fn);
            }, function (bd) {
              return boardSet(bd);
            }, function (pl) {
              return placeSet(pl);
            }, function (pn) {
              return partsSet(pn);
            }, function (er) {
              return errorSet(er);
            });
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
    partsSet(undefined);
    errorSet(undefined);
  };

  var printTextThing = function printTextThing(htmlString) {
    if (htmlString && typeof document !== 'undefined') {
      var printableElement = document.createElement('iframe');
      printableElement.setAttribute('id', "printFrame");
      document.body.appendChild(printableElement);
      var printframe = document.getElementById("printFrame");
      var printArea = printframe.contentWindow.document.getElementsByTagName("HTML")[0];
      printArea.innerHTML = htmlString;
      printframe.contentWindow.focus();
      printframe.contentWindow.print();
      printableElement.remove();
    } else {
      alert('document not found');
    }
  };

  function downBoard() {
    var bd = boardState;
    var boardConstruct = "".concat(filenameState, "\n\n").concat(bd === null || bd === void 0 ? void 0 : bd.topTitle, "\n\n").concat(bd === null || bd === void 0 ? void 0 : bd.subTitle, "\n\nBoard\nX\t").concat(bd === null || bd === void 0 ? void 0 : bd.bX, "\nY\t").concat(bd === null || bd === void 0 ? void 0 : bd.bY, "\nT\t").concat(bd === null || bd === void 0 ? void 0 : bd.bT, "\n\nOrgin Offsets\nX\t").concat(bd === null || bd === void 0 ? void 0 : bd.orginX, "\nY\t").concat(bd === null || bd === void 0 ? void 0 : bd.orginY, "\n\nFiducial Mark Size\nFid1\t").concat(bd === null || bd === void 0 ? void 0 : bd.fMark1, "\nFid2\t").concat(bd === null || bd === void 0 ? void 0 : bd.fMark2, "\n\nPanel Offsets\n").concat(bd.oDataMap ? bd.oDataMap.map(function (line, index) {
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

  function printBoard() {
    var tbSy = "width:50%; border-collapse:collapse";
    var hclSy = "border: 1px solid black; text-align: left;";
    var clSy = "border: 1px solid black; text-align: right;";
    var bd = boardState;
    var brdHTML = "<div>\n        <h2>".concat(filenameState, "</h2>\n        <h3>").concat(bd === null || bd === void 0 ? void 0 : bd.topTitle, "</h3>\n        <h3>").concat(bd === null || bd === void 0 ? void 0 : bd.subTitle, "</h3>\n        <table style=\"").concat(tbSy, "\">\n          <tr><th colspan=\"2\" style=\"").concat(hclSy, "\">Board</th></th><tr>\n          <tr><td style=\"").concat(clSy, "\">X</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.bX, "</big></td></tr>\n          <tr><td style=\"").concat(clSy, "\">Y</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.bY, "</big></td></tr>\n          <tr><td style=\"").concat(clSy, "\">T</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.bT, "</big></td></tr>\n          <tr><th colspan=\"2\" style=\"").concat(hclSy, "\">Orgin Offsets</th></th><tr>\n          <tr><td style=\"").concat(clSy, "\">X</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.orginX, "</big></td></tr>\n          <tr><td style=\"").concat(clSy, "\">Y</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.orginY, "</big></td></tr>\n          <tr><th colspan=\"2\" style=\"").concat(hclSy, "\">Fiducial Mark Size</th></th><tr>\n          <tr><td style=\"").concat(clSy, "\">Fid1</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.fMark1, "</big></td></tr>\n          <tr><td style=\"").concat(clSy, "\">Fid2</td><td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.fMark2, "</big></td></tr>\n        </table>\n        <br />\n        <table style=\"").concat(tbSy, "\">\n          <tr><th colspan=\"4\" style=\"").concat(hclSy, "\">Panel Offsets</th></th><tr>\n          ").concat(bd.oDataMap ? bd.oDataMap.map(function (line, index) {
      return "<tr>\n            <td>".concat(index + 1, "</td>\n              ").concat(line === null || line === void 0 ? void 0 : line.map(function (cell) {
        return "<td style=\"".concat(clSy, "\"><big>").concat(cell, "</big></td>");
      }).join(''), "</tr>");
    }).join('') : "<tr><td colspan='4'>undefined</td></tr>", "\n        </table>\n        <br />\n        <table style=\"").concat(tbSy, "\">\n          <tr><th colspan=\"3\" style=\"").concat(hclSy, "\">Bad Mark</th></tr>\n          ").concat(bd !== null && bd !== void 0 && bd.lBadX ? "<tr>\n            <td style=\"".concat(clSy, "\">Global</td>\n            <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.gBadX, "</big></td>\n            <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.gBadY, "</big></td>\n          </tr>\n          <tr>\n            <td style=\"").concat(clSy, "\">Local</td>\n            <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.lBadX, "</big></td>\n            <td style=\"").concat(clSy, "\"><big>").concat(bd === null || bd === void 0 ? void 0 : bd.lBadY, "</big></td>\n          </tr>") : "<tr><td colspan='3'>undefined</td></tr>", "\n        </table>\n      </div>");
    printTextThing(brdHTML);
  }

  function downPnP() {
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

  function printPnP() {
    var tbSy = "width:75%; border-collapse:collapse";
    var clSy = "border: 1px solid black; text-align: right;";
    var pnpHTML = "<div>\n        <h2>".concat(filenameState, "</h2>\n        <table style=\"").concat(tbSy, "\">\n          ").concat(placeState === null || placeState === void 0 ? void 0 : placeState.map(function (line, index) {
      return "<tr>\n            <td>".concat(index + 1, "</td>\n              ").concat(line === null || line === void 0 ? void 0 : line.map(function (cell) {
        return "<td style=\"".concat(clSy, "\"><big>").concat(cell, "</big></td>");
      }).join(''), "</tr>");
    }).join(''), "\n        </table>\n      </div>");
    printTextThing(pnpHTML);
  }

  function downParts() {
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

  function printParts() {
    var pnpHTML = "<div>\n        <h2>".concat(filenameState, "</h2>\n        ").concat(partsState.map(function (line) {
      return "<p>".concat(line, "</p>");
    }).join(''), "\n      </div>");
    printTextThing(pnpHTML);
  }

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
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Board"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doBoardDown",
    downFunc: function downFunc(e) {
      return downBoard(e);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doBoardPrint",
    printFunc: function printFunc(e) {
      return printBoard(e);
    }
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Pick", /*#__PURE__*/external_react_default.a.createElement("wbr", null), "'n'", /*#__PURE__*/external_react_default.a.createElement("wbr", null), "Place"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doPnpDown",
    downFunc: function downFunc(e) {
      return downPnP(e);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doPnpPrint",
    printFunc: function printFunc(e) {
      return printPnP(e);
    }
  }))), /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "outputLine"
  }, /*#__PURE__*/external_react_default.a.createElement("b", null, "Parts List"), /*#__PURE__*/external_react_default.a.createElement("span", null, /*#__PURE__*/external_react_default.a.createElement(theButtons_DownloadButton, {
    bID: "doPartsDown",
    downFunc: function downFunc(e) {
      return downParts(e);
    }
  }), /*#__PURE__*/external_react_default.a.createElement(theButtons_PrintButton, {
    pID: "doPartsPrint",
    printFunc: function printFunc(e) {
      return printParts(e);
    }
  }))), /*#__PURE__*/external_react_default.a.createElement(theButtons_BackButton, {
    clearFileThing: clearFileThing
  })) : /*#__PURE__*/external_react_default.a.createElement("div", {
    className: "centre dropZone",
    id: "drop-area",
    title: "Open .PGA File"
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
    accept: ".PGA",
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
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin/src/components/theLayout.jsx

 // import lodash from 'lodash';



var theLayout_TheLayout = function TheLayout() {
  var _useState = Object(external_react_["useState"])(false),
      _useState2 = slicedToArray_default()(_useState, 2),
      backgroundState = _useState2[0],
      backgroundSet = _useState2[1];

  return /*#__PURE__*/external_react_default.a.createElement(external_react_["Fragment"], null, /*#__PURE__*/external_react_default.a.createElement("header", null, /*#__PURE__*/external_react_default.a.createElement("h1", null, "PGA", /*#__PURE__*/external_react_default.a.createElement("sup", null, "2"), "CSV")), /*#__PURE__*/external_react_default.a.createElement("main", null, backgroundState ? /*#__PURE__*/external_react_default.a.createElement("section", null, /*#__PURE__*/external_react_default.a.createElement("button", {
    id: "byeBttn",
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
  })), /*#__PURE__*/external_react_default.a.createElement("span", null, "Close")), /*#__PURE__*/external_react_default.a.createElement("h3", null, "Information"), /*#__PURE__*/external_react_default.a.createElement("p", null, "PGA", /*#__PURE__*/external_react_default.a.createElement("sup", null, "2"), "CSV is a utility to convert a PGA file back into simple text files. The placement locations are converted into a formatted pick and place CSV file. The overall board information and parts list are converted into plain text files."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Input files must be formatted as UTF-8 text files with a `.pga` extension. Reliable results should only be expected with program files optimized for Hitachi GXH Series machines."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Downloaded output files are formatted as UTF-8 text files with a `.csv` or `.txt` extension."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Printed output is generated as html for the browser's print utility. After the printer utility is closed the generated content is destroyed."), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Privacy"), /*#__PURE__*/external_react_default.a.createElement("p", null, "All files are processed locally. No file content or metadata is transported to any server, cloud or 3rd party service. No file content or metadata is cached in the web browser once the browser window is closed. File content or metadata is only saved to the local machine upon user action."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Be aware that content or metadata may be retained by your browser's download history or your computer's printer queue."), /*#__PURE__*/external_react_default.a.createElement("h4", null, "Licence"), /*#__PURE__*/external_react_default.a.createElement("p", null, "MIT License"), /*#__PURE__*/external_react_default.a.createElement("p", null, "Copyright (c) 2021 - present, Commutron Industries Ltd."), /*#__PURE__*/external_react_default.a.createElement("p", null, "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"), /*#__PURE__*/external_react_default.a.createElement("p", null, "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."), /*#__PURE__*/external_react_default.a.createElement("p", null, "THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.")) : /*#__PURE__*/external_react_default.a.createElement(theWork, null)), /*#__PURE__*/external_react_default.a.createElement("footer", null, /*#__PURE__*/external_react_default.a.createElement("button", {
    id: "heloBttn",
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
  }))), /*#__PURE__*/external_react_default.a.createElement("span", null, "Commutron Industries Ltd. \xA92021")));
};

/* harmony default export */ var theLayout = (theLayout_TheLayout);
// CONCATENATED MODULE: /mnt/c/Users/Scuba/Sites/urchin/src/App.js




function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Head"], null, /*#__PURE__*/external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/external_react_default.a.createElement("title", null, "PGA\xB2CSV"), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "application-name",
    content: "PGA\xB2CSV"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "theme-color",
    content: "#ce6a85"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "description",
    content: "Convert a Hitachi PGA program file into CSV and plain text"
  }), /*#__PURE__*/external_react_default.a.createElement("meta", {
    name: "rating",
    content: "General"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "manifest",
    href: "/manifest.json"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/pga-circle-pink-192.png"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/pga-circle-pink-512.png",
    color: "white"
  }), /*#__PURE__*/external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: "/pga-circle-pink.svg",
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

module.exports = require("/mnt/c/Users/Scuba/Sites/urchin/node_modules/react-static/lib/browser");

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - thats not it :("));
});

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
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 13))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
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

module.exports = require("/mnt/c/Users/Scuba/Sites/urchin/node_modules/react-static/lib/browser/hooks/useStaticInfo");

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
exports.push([module.i, "* {\r\n  scroll-behavior: smooth;\r\n  box-sizing: border-box;\r\n}\r\n@-moz-document url-prefix() {\r\n  body {\r\n    font-weight: bold !important;\r\n  }\r\n}\r\n\r\nbody {\r\n  font-family: 'Source Code Pro', monospace;\r\n  font-weight: 300;\r\n  font-size: 16px;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\nheader{\r\n  height: 10vh;\r\n  margin: 0;\r\n  padding: 0 3vw;\r\n  background-color: #ce6a85;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  overflow: hidden;\r\n}\r\nheader h1 { \r\n  font-size: 6vh;\r\n}\r\nmain {\r\n  height: 83vh;\r\n  width: 100vw;\r\n  padding: 1vh 1vw;\r\n}\r\n\r\nsection {\r\n  height: 100%;\r\n  width: 100%;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  border: 1vh double #2f2f2f;\r\n  padding: 5vh 5vw;\r\n}\r\n.stickyNav {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  float: right;\r\n}\r\nfooter {\r\n  height: 7vh;\r\n  width: 100vw;\r\n  padding: 0 3vw;\r\n  overflow: hidden;\r\n  background-color: #2f2f2f;\r\n  color: white;\r\n  font-size: 2vh;\r\n  text-align: right;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.centre {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.dropZone {\r\n  border: 2vmin dashed rgba(206, 106, 133, 0.4);\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 5vh 5vw;\r\n}\r\n\r\n@-webkit-keyframes pulse {\r\n  0% { box-shadow: 0 0 0 0 rgba(206, 109, 139, 0.3); }\r\n}\r\n\r\n@keyframes pulse {\r\n  0% { box-shadow: 0 0 0 0 rgba(206, 109, 139, 0.3); }\r\n}\r\n\r\n.fileInput { opacity: 0; }\r\n.fileInput, .dropiconWrap {\r\n  height: 70vmin;\r\n  width: 70vmin;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n}\r\n.dropiconWrap {\r\n  position:relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(206, 106, 133, 0.4);\r\n}\r\n.dropiconWrap.work {\r\n  transform: rotate(5deg);\r\n  transition: all 500ms ease;\r\n  -webkit-animation: pulse 0.5s;\r\n          animation: pulse 0.5s;\r\n  -webkit-animation-iteration-count: infinite;\r\n          animation-iteration-count: infinite;\r\n  box-shadow: 0 0 0 1vmax white,\r\n              0 0 0 2vmax rgba(206, 109, 139, 0.3);\r\n}\r\n.dropiconWrap:before, .dropicon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.dropiconWrap:before {\r\n  content: \".PGA\";\r\n  color: rgb(152, 82, 119);\r\n  font-size: 7vmin;\r\n  font-weight: 600;\r\n}\r\n.dropicon {  \r\n  transition: all 250ms ease;\r\n  fill: rgb(152, 82, 119);\r\n}\r\n.dropiconWrap:active .dropicon,\r\n.dropiconWrap:focus-within .dropicon,\r\n.dropiconWrap:focus .dropicon { \r\n  filter: drop-shadow(1px 1px 20px rgb(206, 106, 133));\r\n}\r\n\r\n.errorZone {\r\n  padding: 5vh 5vw;\r\n}\r\n.errorZone > svg:first-of-type {\r\n  fill: #2f2f2f;\r\n  color: #2f2f2f;\r\n}\r\n.errorZone > h2 {\r\n  font-size: 5vh;\r\n  margin: 0 0 2vh 0;\r\n  text-align: center;\r\n}\r\n.erroriconWrap {\r\n  max-height: 70vh;\r\n}\r\n.erroricon {\r\n  height: 45vh;\r\n}\r\n\r\n.outputZone {\r\n  margin: 5vh 5vw 0 5vw;\r\n}\r\n.outputZone p {\r\n  margin: 0;\r\n  font-size: 3vh;\r\n}\r\n.outputLine {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 2vh 0;\r\n  border-top: 2px groove #ce6a85;\r\n  padding: 5vh 3vw;\r\n}\r\n.outputLine > b {\r\n  font-size: 3vh;\r\n}\r\n.outputLine > span {\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.doAction {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 6vh;\r\n  min-width: 6vh;\r\n  margin: 0 2vw;\r\n  padding: 0.5vh;\r\n  font-size: 2.5vh;\r\n  background: #ce6a85;\r\n  border: 5px solid #ce6a85;\r\n  border-radius: 10px;\r\n  transition: all 100ms ease-out 75ms;\r\n  box-shadow: 0px 1px 0px 1px #985277,\r\n              0px 1px 15px -5px #2f2f2f;\r\n}\r\n.doAction:hover, .doAction:focus, .doAction:active {\r\n  box-shadow: 0px 8px 0px 0px #985277,\r\n              0px 10px 0px 0px #985277,\r\n              0px 12px 0px 0px #985277,\r\n              0px 14px 15px -5px #2f2f2f;\r\n  outline: none;\r\n}\r\n\r\n.navAction {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 6vh;\r\n  min-width: 6vh;\r\n  margin: 0 1vw;\r\n  padding: 0.5vh 1vh;\r\n  font-size: 2vh;\r\n  font-weight: 400;\r\n  background: #2f2f2f;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 25px;\r\n  transition: all 100ms ease-out 75ms;\r\n}\r\n.navAction svg {\r\n  fill: white;\r\n  stroke: white;\r\n}\r\n.navAction:hover, .navAction:active {\r\n  box-shadow: 0 0 0 0.5vh #2f2f2f;\r\n}", ""]);



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