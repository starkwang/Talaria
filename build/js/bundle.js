/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactRouter = __webpack_require__(3);

	var _reactTapEventPlugin = __webpack_require__(4);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _Base = __webpack_require__(5);

	var _Base2 = _interopRequireDefault(_Base);

	var _IndexPage = __webpack_require__(51);

	var _IndexPage2 = _interopRequireDefault(_IndexPage);

	var _TestPage = __webpack_require__(58);

	var _TestPage2 = _interopRequireDefault(_TestPage);

	var _LoginPage = __webpack_require__(59);

	var _LoginPage2 = _interopRequireDefault(_LoginPage);

	var _SignupPage = __webpack_require__(62);

	var _SignupPage2 = _interopRequireDefault(_SignupPage);

	var _DetailPage = __webpack_require__(63);

	var _DetailPage2 = _interopRequireDefault(_DetailPage);

	var _PublishPage = __webpack_require__(67);

	var _PublishPage2 = _interopRequireDefault(_PublishPage);

	var _userCenter = __webpack_require__(73);

	var _userCenter2 = _interopRequireDefault(_userCenter);

	var _CategoryPage = __webpack_require__(96);

	var _CategoryPage2 = _interopRequireDefault(_CategoryPage);

	var _materialUi = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	(0, _reactTapEventPlugin2.default)();

	var App = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App(props) {
	        _classCallCheck(this, App);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
	    }

	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _materialUi.MuiThemeProvider,
	                null,
	                _react2.default.createElement(
	                    _reactRouter.Router,
	                    { history: _reactRouter.browserHistory },
	                    _react2.default.createElement(
	                        _reactRouter.Route,
	                        { path: '/', component: _Base2.default },
	                        _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexPage2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'test', component: _TestPage2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LoginPage2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'signup', component: _SignupPage2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'detail/:id', component: _DetailPage2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'publish', component: _PublishPage2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'userCenter', component: _userCenter2.default }),
	                        _react2.default.createElement(_reactRouter.Route, { path: 'category/:id', component: _CategoryPage2.default }),
	                        _react2.default.createElement(_reactRouter.Redirect, { from: 'index.html', to: '/' })
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component);

	exports.default = App;


	(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.lib["react"];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = window.lib["react-dom"];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window.lib["react-router"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = window.lib["react-tap-event-plugin"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(6);

	var _Header2 = _interopRequireDefault(_Header);

	var _Loading = __webpack_require__(35);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _SideBar = __webpack_require__(36);

	var _SideBar2 = _interopRequireDefault(_SideBar);

	var _Message = __webpack_require__(50);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Base = function (_React$Component) {
	    _inherits(Base, _React$Component);

	    function Base(props) {
	        _classCallCheck(this, Base);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Base).call(this, props));
	    }

	    _createClass(Base, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_Header2.default, null),
	                _react2.default.createElement(_Loading2.default, { status: 'hide' }),
	                _react2.default.createElement(_SideBar2.default, null),
	                _react2.default.createElement(_Message2.default, null),
	                this.props.children
	            );
	        }
	    }]);

	    return Base;
	}(_react2.default.Component);

	exports.default = Base;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _moreVert = __webpack_require__(8);

	var _moreVert2 = _interopRequireDefault(_moreVert);

	var _permIdentity = __webpack_require__(25);

	var _permIdentity2 = _interopRequireDefault(_permIdentity);

	var _shoppingCart = __webpack_require__(26);

	var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

	var _powerSettingsNew = __webpack_require__(27);

	var _powerSettingsNew2 = _interopRequireDefault(_powerSettingsNew);

	var _reactRouter = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _componentStatus = __webpack_require__(29);

	var _componentStatus2 = _interopRequireDefault(_componentStatus);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _userService = __webpack_require__(32);

	var _userService2 = _interopRequireDefault(_userService);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	    _inherits(Header, _React$Component);

	    function Header(props) {
	        _classCallCheck(this, Header);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Header).call(this, props));

	        if (_userService2.default.isLogin) {
	            _this.state = {};
	        }
	        _event2.default.on('change header', function (config) {
	            var color = config.color;
	            var title = config.title;

	            _this.setState({
	                color: color || _this.state.color,
	                title: title || _this.state.title
	            });
	        });
	        _event2.default.on('show header', function (_) {
	            _componentStatus2.default.Header.show();
	            _this.setState({});
	        });
	        _event2.default.on('hide header', function (_) {
	            _componentStatus2.default.Header.hide();
	            _this.setState({});
	        });
	        _event2.default.on('reload', function (_) {});
	        return _this;
	    }

	    _createClass(Header, [{
	        key: 'toRoute',
	        value: function toRoute(path) {
	            _reactRouter.browserHistory.push(path);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _componentStatus2.default.Header.show();
	            this.setState({});
	        }
	    }, {
	        key: 'showSideBar',
	        value: function showSideBar() {
	            _event2.default.emit('show sidebar');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var header = _componentStatus2.default.Header.isShow() ? _react2.default.createElement(
	                _materialUi.AppBar,
	                {
	                    title: 'header',
	                    titleStyle: {
	                        paddingLeft: '55px'
	                    },
	                    key: 1,
	                    className: 'header',
	                    style: {
	                        transition: "all 1s",
	                        backgroundColor: this.state.color ? this.state.color : undefined
	                    },
	                    onLeftIconButtonTouchTap: this.showSideBar
	                },
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Login'
	                ),
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'Login'
	                )
	            ) : null;
	            return _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                {
	                    component: 'div',
	                    transitionName: 'header',
	                    transitionEnterTimeout: 800,
	                    transitionLeaveTimeout: 800
	                },
	                header
	            );
	        }
	    }]);

	    return Header;
	}(_react2.default.Component);

	exports.default = Header;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = window.lib["material-ui"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var NavigationMoreVert = function NavigationMoreVert(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' }));
	};
	NavigationMoreVert = (0, _pure2.default)(NavigationMoreVert);
	NavigationMoreVert.displayName = 'NavigationMoreVert';
	NavigationMoreVert.muiName = 'SvgIcon';

	exports.default = NavigationMoreVert;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shouldUpdate = __webpack_require__(10);

	var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

	var _shallowEqual = __webpack_require__(19);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _createHelper = __webpack_require__(11);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var pure = (0, _shouldUpdate2.default)(function (props, nextProps) {
	  return !(0, _shallowEqual2.default)(props, nextProps);
	});

	exports.default = (0, _createHelper2.default)(pure, 'pure', true, true);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _createHelper = __webpack_require__(11);

	var _createHelper2 = _interopRequireDefault(_createHelper);

	var _createEagerFactory = __webpack_require__(15);

	var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var shouldUpdate = function shouldUpdate(test) {
	  return function (BaseComponent) {
	    var factory = (0, _createEagerFactory2.default)(BaseComponent);
	    return function (_Component) {
	      _inherits(_class, _Component);

	      function _class() {
	        _classCallCheck(this, _class);

	        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	      }

	      _class.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
	        return test(this.props, nextProps);
	      };

	      _class.prototype.render = function render() {
	        return factory(this.props);
	      };

	      return _class;
	    }(_react.Component);
	  };
	};

	exports.default = (0, _createHelper2.default)(shouldUpdate, 'shouldUpdate');

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	var createHelper = function createHelper(func, helperName) {
	  var setDisplayName = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	  var noArgs = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	  if (process.env.NODE_ENV !== 'production' && setDisplayName) {
	    var _ret = function () {
	      /* eslint-disable global-require */
	      var wrapDisplayName = __webpack_require__(13).default;
	      /* eslint-enable global-require */

	      if (noArgs) {
	        return {
	          v: function v(BaseComponent) {
	            var Component = func(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          }
	        };
	      }

	      return {
	        v: function v() {
	          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	          }

	          if (args.length > func.length) {
	            /* eslint-disable */
	            console.error(
	            /* eslint-enable */
	            'Too many arguments passed to ' + helperName + '(). It should called ' + ('like so: ' + helperName + '(...args)(BaseComponent).'));
	          }

	          return function (BaseComponent) {
	            var Component = func.apply(undefined, args)(BaseComponent);
	            Component.displayName = wrapDisplayName(BaseComponent, helperName);
	            return Component;
	          };
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }

	  return func;
	};

	exports.default = createHelper;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser

	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _getDisplayName = __webpack_require__(14);

	var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
	  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
	};

	exports.default = wrapDisplayName;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var getDisplayName = function getDisplayName(Component) {
	  if (typeof Component === 'string') {
	    return Component;
	  }

	  if (!Component) {
	    return undefined;
	  }

	  return Component.displayName || Component.name || 'Component';
	};

	exports.default = getDisplayName;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createEagerElementUtil = __webpack_require__(16);

	var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

	var _isReferentiallyTransparentFunctionComponent = __webpack_require__(17);

	var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createFactory = function createFactory(type) {
	  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
	  return function (p, c) {
	    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
	  };
	};

	exports.default = createFactory;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
	  if (!hasKey && isReferentiallyTransparent) {
	    if (children) {
	      return type(_extends({}, props, { children: children }));
	    }
	    return type(props);
	  }

	  var Component = type;

	  if (children) {
	    return _react2.default.createElement(Component, props, children);
	  }

	  return _react2.default.createElement(Component, props);
	};

	exports.default = createEagerElementUtil;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _isClassComponent = __webpack_require__(18);

	var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
	  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && !Component.propTypes);
	};

	exports.default = isReferentiallyTransparentFunctionComponent;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.__esModule = true;
	var isClassComponent = function isClassComponent(Component) {
	  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
	};

	exports.default = isClassComponent;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _shallowEqual = __webpack_require__(20);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _shallowEqual2.default;

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _SvgIcon = __webpack_require__(22);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _SvgIcon2.default;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _simpleAssign = __webpack_require__(23);

	var _simpleAssign2 = _interopRequireDefault(_simpleAssign);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _transitions = __webpack_require__(24);

	var _transitions2 = _interopRequireDefault(_transitions);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var SvgIcon = function (_Component) {
	  _inherits(SvgIcon, _Component);

	  function SvgIcon() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SvgIcon);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SvgIcon)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      hovered: false
	    }, _this.handleMouseLeave = function (event) {
	      _this.setState({ hovered: false });
	      _this.props.onMouseLeave(event);
	    }, _this.handleMouseEnter = function (event) {
	      _this.setState({ hovered: true });
	      _this.props.onMouseEnter(event);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SvgIcon, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var color = _props.color;
	      var hoverColor = _props.hoverColor;
	      var onMouseEnter = _props.onMouseEnter;
	      var onMouseLeave = _props.onMouseLeave;
	      var style = _props.style;
	      var viewBox = _props.viewBox;

	      var other = _objectWithoutProperties(_props, ['children', 'color', 'hoverColor', 'onMouseEnter', 'onMouseLeave', 'style', 'viewBox']);

	      var _context$muiTheme = this.context.muiTheme;
	      var svgIcon = _context$muiTheme.svgIcon;
	      var prepareStyles = _context$muiTheme.prepareStyles;

	      var offColor = color ? color : 'currentColor';
	      var onColor = hoverColor ? hoverColor : offColor;

	      var mergedStyles = (0, _simpleAssign2.default)({
	        display: 'inline-block',
	        color: svgIcon.color,
	        fill: this.state.hovered ? onColor : offColor,
	        height: 24,
	        width: 24,
	        userSelect: 'none',
	        transition: _transitions2.default.easeOut()
	      }, style);

	      return _react2.default.createElement('svg', _extends({}, other, {
	        onMouseEnter: this.handleMouseEnter,
	        onMouseLeave: this.handleMouseLeave,
	        style: prepareStyles(mergedStyles),
	        viewBox: viewBox
	      }), children);
	    }
	  }]);

	  return SvgIcon;
	}(_react.Component);

	SvgIcon.muiName = 'SvgIcon';
	SvgIcon.propTypes = {
	  /**
	   * Elements passed into the SVG Icon.
	   */
	  children: _react.PropTypes.node,
	  /**
	   * This is the fill color of the svg icon.
	   * If not specified, this component will default
	   * to muiTheme.palette.textColor.
	   */
	  color: _react.PropTypes.string,
	  /**
	   * This is the icon color when the mouse hovers over the icon.
	   */
	  hoverColor: _react.PropTypes.string,
	  /** @ignore */
	  onMouseEnter: _react.PropTypes.func,
	  /** @ignore */
	  onMouseLeave: _react.PropTypes.func,
	  /**
	   * Override the inline-styles of the root element.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * Allows you to redefine what the coordinates
	   * without units mean inside an svg element. For example,
	   * if the SVG element is 500 (width) by 200 (height), and you
	   * pass viewBox="0 0 50 20", this means that the coordinates inside
	   * the svg will go from the top left corner (0,0) to bottom right (50,20)
	   * and each unit will be worth 10px.
	   */
	  viewBox: _react.PropTypes.string
	};
	SvgIcon.defaultProps = {
	  onMouseEnter: function onMouseEnter() {},
	  onMouseLeave: function onMouseLeave() {},
	  viewBox: '0 0 24 24'
	};
	SvgIcon.contextTypes = {
	  muiTheme: _react.PropTypes.object.isRequired
	};
	exports.default = SvgIcon;

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (target) {
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

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {

	  easeOutFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
	  easeInOutFunction: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',

	  easeOut: function easeOut(duration, property, delay, easeFunction) {
	    easeFunction = easeFunction || this.easeOutFunction;

	    if (property && Object.prototype.toString.call(property) === '[object Array]') {
	      var transitions = '';
	      for (var i = 0; i < property.length; i++) {
	        if (transitions) transitions += ',';
	        transitions += this.create(duration, property[i], delay, easeFunction);
	      }

	      return transitions;
	    } else {
	      return this.create(duration, property, delay, easeFunction);
	    }
	  },
	  create: function create(duration, property, delay, easeFunction) {
	    duration = duration || '450ms';
	    property = property || 'all';
	    delay = delay || '0ms';
	    easeFunction = easeFunction || 'linear';

	    return property + ' ' + duration + ' ' + easeFunction + ' ' + delay;
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionPermIdentity = function ActionPermIdentity(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z' }));
	};
	ActionPermIdentity = (0, _pure2.default)(ActionPermIdentity);
	ActionPermIdentity.displayName = 'ActionPermIdentity';
	ActionPermIdentity.muiName = 'SvgIcon';

	exports.default = ActionPermIdentity;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionShoppingCart = function ActionShoppingCart(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z' }));
	};
	ActionShoppingCart = (0, _pure2.default)(ActionShoppingCart);
	ActionShoppingCart.displayName = 'ActionShoppingCart';
	ActionShoppingCart.muiName = 'SvgIcon';

	exports.default = ActionShoppingCart;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionPowerSettingsNew = function ActionPowerSettingsNew(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z' }));
	};
	ActionPowerSettingsNew = (0, _pure2.default)(ActionPowerSettingsNew);
	ActionPowerSettingsNew.displayName = 'ActionPowerSettingsNew';
	ActionPowerSettingsNew.muiName = 'SvgIcon';

	exports.default = ActionPowerSettingsNew;

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = window.lib["react-addons-css-transition-group"];

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    Header: {
	        __show: false,
	        show: function show() {
	            this.__show = true;
	        },
	        hide: function hide() {
	            this.__show = false;
	        },
	        isShow: function isShow() {
	            return this.__show;
	        }
	    },
	    Loading: {
	        status: 'hide',
	        show: function show() {
	            this.status = 'loading';
	        },
	        hide: function hide() {
	            this.status = 'hide';
	        },
	        isShow: function isShow() {
	            return this.status == 'loading';
	        }
	    },
	    Alert: {
	        dialogOpen: false,
	        text: "",
	        show: function show() {
	            this.dialogOpen = true;
	        },
	        hide: function hide() {
	            this.dialogOpen = false;
	        },
	        setText: function setText(text) {
	            this.text = text;
	        }
	    }
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _eventproxy = __webpack_require__(31);

	var _eventproxy2 = _interopRequireDefault(_eventproxy);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ep = _eventproxy2.default.create();

	exports.default = ep;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = window.lib["eventproxy"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by natumsol on 16/7/23.
	 */

	var user = {
	    isLogin: false,
	    userInfo: null,
	    getUserInfo: function getUserInfo() {
	        if (this.userInfo) {
	            return Promise.resolve(this.userInfo);
	        } else {
	            return _api2.default.user.initialize().then(function (result) {
	                return result.status == 1 ? _api2.default.user.getUserInfo().then(function (res) {
	                    user.userInfo = res.data;
	                    return res.data;
	                }) : Promise.resolve(null);
	            });
	        }
	    }
	}; //  需要放在export前面,否则对外接口为空.
	exports.default = user;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _superagent = __webpack_require__(34);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function POST(url, data) {
	    return new Promise(function (resolve, reject) {
	        _superagent2.default.post(url).set('Accept', 'application/json').set('Content-Type', 'application/json').send(JSON.stringify(data)).end(function (err, res) {
	            if (err || !res.ok) {
	                reject(err);
	            } else {
	                resolve(res);
	            }
	        });
	    }).then(function (res) {
	        return res.body;
	    });
	}

	function GET(url, params) {
	    return new Promise(function (resolve, reject) {
	        _superagent2.default.get(url).query(params).end(function (err, res) {
	            if (err || !res.ok) {
	                reject(err);
	            } else {
	                resolve(res);
	            }
	        });
	    }).then(function (res) {
	        return res.body;
	    });
	}

	function fakeRequest(data, timeout) {
	    return new Promise(function (resolve, reject) {
	        setTimeout(function (_) {
	            resolve(data);
	        }, timeout);
	    });
	}

	var user = {
	    //用户登录,params: 
	    //username[string]
	    //password[string]
	    login: function login(params) {
	        return POST('/api/login', params);
	    },
	    logout: function logout() {
	        return POST('/api/logout');
	    },
	    signup: function signup(params) {
	        return POST('/api/register', params);
	    },
	    getUserInfo: function getUserInfo() {
	        return GET('/api/getuser');
	    },
	    initialize: function initialize() {
	        return GET('/api/active');
	    },
	    updateUserInfo: function updateUserInfo(params) {
	        return POST('/api/updateuser', params);
	    },
	    getMyGoods: function getMyGoods(params) {
	        return POST('api/goods', params);
	    },
	    getMyOrder: function getMyOrder(params) {
	        return POST('api/list_buyer_orders', params);
	    }
	};

	var item = {
	    //获取商品信息,params:
	    //good_id[string]
	    get: function get(params) {
	        var data = {
	            good_id: parseInt(params.good_id)
	        };
	        return POST('/api/good', params).then(function (result) {
	            return result.status ? result.data : null;
	        });
	    },
	    getCollection: function getCollection(params) {
	        var userID = params.userID || 0;
	        var type = params.type || 0;
	        var begin = params.begin || 0;
	        var limit = params.limit || 0;
	        return POST('/api/goods', { userID: userID, type: type, begin: begin, limit: limit }).then(function (result) {
	            return result.status ? result.data : null;
	        });;
	    },
	    //拉取主页显示的商品,no params
	    fetchIndexItems: function fetchIndexItems(params) {
	        return fakeRequest({}, 1000);
	    },
	    publish: function publish(params) {
	        return POST('/api/new_good', params).then(function (res) {
	            return res.status == 1 ? res.data : undefined;
	        });
	    }
	};

	var comment = {
	    get: function get(params) {
	        return POST('/api/comment/get', params);
	    },
	    publish: function publish(params) {
	        return POST('/api/comment/insert', params);
	    }

	};

	var order = {
	    newOrder: function newOrder(params) {
	        return POST('/api/create_order', params);
	    }
	};

	exports.default = {
	    user: user,
	    item: item,
	    comment: comment,
	    order: order
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = window.lib["superagent"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _componentStatus = __webpack_require__(29);

	var _componentStatus2 = _interopRequireDefault(_componentStatus);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Loading = function (_React$Component) {
	    _inherits(Loading, _React$Component);

	    function Loading(props) {
	        _classCallCheck(this, Loading);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Loading).call(this, props));

	        _event2.default.on('change loading', function (status) {
	            _this.setState({
	                status: status || _this.state.status
	            });
	        });
	        _event2.default.on('show loading', function (_) {
	            _componentStatus2.default.Loading.show();
	            _this.setState({});
	        });
	        _event2.default.on('hide loading', function (_) {
	            _componentStatus2.default.Loading.hide();
	            _this.setState({});
	        });
	        return _this;
	    }

	    _createClass(Loading, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                { className: 'loading-container' },
	                _react2.default.createElement(_materialUi.RefreshIndicator, {
	                    size: 40,
	                    left: 10,
	                    top: 70,
	                    status: _componentStatus2.default.Loading.status,
	                    style: {
	                        display: 'inline-block',
	                        position: 'relative',
	                        margin: '0 auto'
	                    }
	                })
	            );
	        }
	    }]);

	    return Loading;
	}(_react2.default.Component);

	exports.default = Loading;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _componentStatus = __webpack_require__(29);

	var _componentStatus2 = _interopRequireDefault(_componentStatus);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _reactRouter = __webpack_require__(3);

	var _materialUi = __webpack_require__(7);

	var _home = __webpack_require__(37);

	var _home2 = _interopRequireDefault(_home);

	var _permIdentity = __webpack_require__(25);

	var _permIdentity2 = _interopRequireDefault(_permIdentity);

	var _contacts = __webpack_require__(38);

	var _contacts2 = _interopRequireDefault(_contacts);

	var _offlinePin = __webpack_require__(39);

	var _offlinePin2 = _interopRequireDefault(_offlinePin);

	var _importantDevices = __webpack_require__(40);

	var _importantDevices2 = _interopRequireDefault(_importantDevices);

	var _headset = __webpack_require__(41);

	var _headset2 = _interopRequireDefault(_headset);

	var _accountBalance = __webpack_require__(42);

	var _accountBalance2 = _interopRequireDefault(_accountBalance);

	var _receipt = __webpack_require__(43);

	var _receipt2 = _interopRequireDefault(_receipt);

	var _weekend = __webpack_require__(44);

	var _weekend2 = _interopRequireDefault(_weekend);

	var _chromeReaderMode = __webpack_require__(45);

	var _chromeReaderMode2 = _interopRequireDefault(_chromeReaderMode);

	var _cardGiftcard = __webpack_require__(46);

	var _cardGiftcard2 = _interopRequireDefault(_cardGiftcard);

	var _motorcycle = __webpack_require__(47);

	var _motorcycle2 = _interopRequireDefault(_motorcycle);

	var _wc = __webpack_require__(48);

	var _wc2 = _interopRequireDefault(_wc);

	var _tabUnselected = __webpack_require__(49);

	var _tabUnselected2 = _interopRequireDefault(_tabUnselected);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SideBar = function (_React$Component) {
	    _inherits(SideBar, _React$Component);

	    function SideBar(props) {
	        _classCallCheck(this, SideBar);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props));

	        _this.state = { open: false };
	        return _this;
	    }

	    _createClass(SideBar, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            _event2.default.on('show sidebar', function (_) {
	                _this2.setState({
	                    open: true
	                });
	            });
	            _event2.default.on('hide sidebar', function (_) {
	                _this2.setState({
	                    open: false
	                });
	            });
	        }
	    }, {
	        key: 'toRoute',
	        value: function toRoute(path) {
	            this.setState({
	                open: false
	            });
	            _reactRouter.browserHistory.push(path);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                _materialUi.Drawer,
	                {
	                    docked: false,
	                    width: 200,
	                    open: this.state.open,
	                    onRequestChange: function onRequestChange(open) {
	                        return _this3.setState({ open: open });
	                    }
	                },
	                _react2.default.createElement(
	                    _materialUi.Subheader,
	                    null,
	                    '导航'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/');
	                        }, leftIcon: _react2.default.createElement(_home2.default, null) },
	                    '主页'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/login');
	                        }, leftIcon: _react2.default.createElement(_permIdentity2.default, null) },
	                    '登录'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/signup');
	                        }, leftIcon: _react2.default.createElement(_contacts2.default, null) },
	                    '注册'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/publish');
	                        }, leftIcon: _react2.default.createElement(_offlinePin2.default, null) },
	                    '发布商品'
	                ),
	                _react2.default.createElement(_materialUi.Divider, null),
	                _react2.default.createElement(
	                    _materialUi.Subheader,
	                    null,
	                    '商品分类'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/0');
	                        }, leftIcon: _react2.default.createElement(_importantDevices2.default, null) },
	                    '手机电脑'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/1');
	                        }, leftIcon: _react2.default.createElement(_headset2.default, null) },
	                    '数码家电'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/2');
	                        }, leftIcon: _react2.default.createElement(_accountBalance2.default, null) },
	                    '房屋租售'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/3');
	                        }, leftIcon: _react2.default.createElement(_receipt2.default, null) },
	                    '票券卡务'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/4');
	                        }, leftIcon: _react2.default.createElement(_weekend2.default, null) },
	                    '家居日用'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/5');
	                        }, leftIcon: _react2.default.createElement(_chromeReaderMode2.default, null) },
	                    '图书音像'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/6');
	                        }, leftIcon: _react2.default.createElement(_cardGiftcard2.default, null) },
	                    '纪念品'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/7');
	                        }, leftIcon: _react2.default.createElement(_motorcycle2.default, null) },
	                    '交通工具'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/8');
	                        }, leftIcon: _react2.default.createElement(_wc2.default, null) },
	                    '服饰配饰'
	                ),
	                _react2.default.createElement(
	                    _materialUi.MenuItem,
	                    { onTouchTap: function onTouchTap(_) {
	                            return _this3.toRoute('/category/9');
	                        }, leftIcon: _react2.default.createElement(_tabUnselected2.default, null) },
	                    '其它'
	                ),
	                _react2.default.createElement(_materialUi.Divider, null)
	            );
	        }
	    }]);

	    return SideBar;
	}(_react2.default.Component);

	exports.default = SideBar;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionHome = function ActionHome(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' }));
	};
	ActionHome = (0, _pure2.default)(ActionHome);
	ActionHome.displayName = 'ActionHome';
	ActionHome.muiName = 'SvgIcon';

	exports.default = ActionHome;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var CommunicationContacts = function CommunicationContacts(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9 10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z' }));
	};
	CommunicationContacts = (0, _pure2.default)(CommunicationContacts);
	CommunicationContacts.displayName = 'CommunicationContacts';
	CommunicationContacts.muiName = 'SvgIcon';

	exports.default = CommunicationContacts;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionOfflinePin = function ActionOfflinePin(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z' }));
	};
	ActionOfflinePin = (0, _pure2.default)(ActionOfflinePin);
	ActionOfflinePin.displayName = 'ActionOfflinePin';
	ActionOfflinePin.muiName = 'SvgIcon';

	exports.default = ActionOfflinePin;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionImportantDevices = function ActionImportantDevices(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z' }));
	};
	ActionImportantDevices = (0, _pure2.default)(ActionImportantDevices);
	ActionImportantDevices.displayName = 'ActionImportantDevices';
	ActionImportantDevices.muiName = 'SvgIcon';

	exports.default = ActionImportantDevices;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var HardwareHeadset = function HardwareHeadset(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z' }));
	};
	HardwareHeadset = (0, _pure2.default)(HardwareHeadset);
	HardwareHeadset.displayName = 'HardwareHeadset';
	HardwareHeadset.muiName = 'SvgIcon';

	exports.default = HardwareHeadset;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionAccountBalance = function ActionAccountBalance(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z' }));
	};
	ActionAccountBalance = (0, _pure2.default)(ActionAccountBalance);
	ActionAccountBalance.displayName = 'ActionAccountBalance';
	ActionAccountBalance.muiName = 'SvgIcon';

	exports.default = ActionAccountBalance;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionReceipt = function ActionReceipt(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z' }));
	};
	ActionReceipt = (0, _pure2.default)(ActionReceipt);
	ActionReceipt.displayName = 'ActionReceipt';
	ActionReceipt.muiName = 'SvgIcon';

	exports.default = ActionReceipt;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ContentWeekend = function ContentWeekend(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z' }));
	};
	ContentWeekend = (0, _pure2.default)(ContentWeekend);
	ContentWeekend.displayName = 'ContentWeekend';
	ContentWeekend.muiName = 'SvgIcon';

	exports.default = ContentWeekend;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionChromeReaderMode = function ActionChromeReaderMode(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z' }));
	};
	ActionChromeReaderMode = (0, _pure2.default)(ActionChromeReaderMode);
	ActionChromeReaderMode.displayName = 'ActionChromeReaderMode';
	ActionChromeReaderMode.muiName = 'SvgIcon';

	exports.default = ActionChromeReaderMode;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionCardGiftcard = function ActionCardGiftcard(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z' }));
	};
	ActionCardGiftcard = (0, _pure2.default)(ActionCardGiftcard);
	ActionCardGiftcard.displayName = 'ActionCardGiftcard';
	ActionCardGiftcard.muiName = 'SvgIcon';

	exports.default = ActionCardGiftcard;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionMotorcycle = function ActionMotorcycle(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z' }));
	};
	ActionMotorcycle = (0, _pure2.default)(ActionMotorcycle);
	ActionMotorcycle.displayName = 'ActionMotorcycle';
	ActionMotorcycle.muiName = 'SvgIcon';

	exports.default = ActionMotorcycle;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var NotificationWc = function NotificationWc(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M5.5 22v-7.5H4V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v5.5H9.5V22h-4zM18 22v-6h3l-2.54-7.63C18.18 7.55 17.42 7 16.56 7h-.12c-.86 0-1.63.55-1.9 1.37L12 16h3v6h3zM7.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm9 0c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2z' }));
	};
	NotificationWc = (0, _pure2.default)(NotificationWc);
	NotificationWc.displayName = 'NotificationWc';
	NotificationWc.muiName = 'SvgIcon';

	exports.default = NotificationWc;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionTabUnselected = function ActionTabUnselected(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z' }));
	};
	ActionTabUnselected = (0, _pure2.default)(ActionTabUnselected);
	ActionTabUnselected.displayName = 'ActionTabUnselected';
	ActionTabUnselected.muiName = 'SvgIcon';

	exports.default = ActionTabUnselected;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Message = function (_React$Component) {
	    _inherits(Message, _React$Component);

	    function Message(props) {
	        _classCallCheck(this, Message);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Message).call(this, props));

	        _this.state = {
	            open: false,
	            message: ''
	        };
	        _event2.default.on('show message', function (text) {
	            _this.setState({
	                open: true,
	                message: text
	            });
	        });
	        return _this;
	    }

	    _createClass(Message, [{
	        key: 'handleRequestClose',
	        value: function handleRequestClose() {
	            this.setState({
	                open: false
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_materialUi.Snackbar, {
	                open: this.state.open,
	                message: this.state.message,
	                autoHideDuration: 4000,
	                onRequestClose: this.handleRequestClose.bind(this)
	            });
	        }
	    }]);

	    return Message;
	}(_react2.default.Component);

	exports.default = Message;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Header = __webpack_require__(6);

	var _Header2 = _interopRequireDefault(_Header);

	var _reactRouter = __webpack_require__(3);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _WaterFall = __webpack_require__(53);

	var _WaterFall2 = _interopRequireDefault(_WaterFall);

	var _WaterFallItem = __webpack_require__(54);

	var _WaterFallItem2 = _interopRequireDefault(_WaterFallItem);

	var _reactImageGallery = __webpack_require__(56);

	var _reactImageGallery2 = _interopRequireDefault(_reactImageGallery);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _materialUi = __webpack_require__(7);

	var _starBorder = __webpack_require__(55);

	var _starBorder2 = _interopRequireDefault(_starBorder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	    root: {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around'
	    },
	    gridList: {
	        width: 960,
	        height: 'auto',
	        overflowY: 'auto',
	        marginBottom: 24
	    }
	};

	var IndexPage = function (_React$Component) {
	    _inherits(IndexPage, _React$Component);

	    function IndexPage(props) {
	        _classCallCheck(this, IndexPage);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IndexPage).call(this, props));

	        _this.state = {};
	        return _this;
	    }

	    _createClass(IndexPage, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            _event2.default.emit("show loading");
	            _api2.default.item.fetchIndexItems().then(function (res) {
	                _this2.setState({
	                    isShow: true
	                });
	                _event2.default.emit("hide loading");
	            });
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('change header', {
	                title: '闲鹅',
	                color: '#17AFC6'
	            });
	            _event2.default.emit('show header');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var galleryImage = [{
	                original: 'http://lorempixel.com/1000/600/nature/1/'
	            }, {
	                original: 'http://lorempixel.com/1000/600/nature/2/'
	            }, {
	                original: 'http://lorempixel.com/1000/600/nature/3/'
	            }];
	            var mainInfo = this.state.isShow ? _react2.default.createElement(
	                'div',
	                { className: 'main-info' },
	                _react2.default.createElement(_reactImageGallery2.default, {
	                    items: galleryImage,
	                    showThumbnails: false
	                })
	            ) : null;

	            return _react2.default.createElement(
	                _PageContent2.default,
	                { className: 'index-page' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body' },
	                    _react2.default.createElement(
	                        _reactAddonsCssTransitionGroup2.default,
	                        {
	                            component: 'div',
	                            transitionName: 'main-info',
	                            transitionEnterTimeout: 800,
	                            transitionLeaveTimeout: 800
	                        },
	                        mainInfo
	                    )
	                )
	            );
	        }
	    }]);

	    return IndexPage;
	}(_react2.default.Component);

	exports.default = IndexPage;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PageContent = function (_React$Component) {
	    _inherits(PageContent, _React$Component);

	    function PageContent(props) {
	        _classCallCheck(this, PageContent);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(PageContent).call(this, props));
	    }

	    _createClass(PageContent, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            this.isShow = true;
	            this.setState({});
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var content = this.isShow ? this.props.children : null;
	            return _react2.default.createElement(
	                _reactAddonsCssTransitionGroup2.default,
	                {
	                    component: 'div',
	                    className: this.props.className,
	                    transitionName: 'page-content',
	                    transitionEnterTimeout: 800,
	                    transitionLeaveTimeout: 800
	                },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-content' },
	                    content
	                )
	            );
	        }
	    }]);

	    return PageContent;
	}(_react2.default.Component);

	exports.default = PageContent;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _WaterFallItem = __webpack_require__(54);

	var _WaterFallItem2 = _interopRequireDefault(_WaterFallItem);

	var _materialUi = __webpack_require__(7);

	var _starBorder = __webpack_require__(55);

	var _starBorder2 = _interopRequireDefault(_starBorder);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	    root: {
	        display: 'flex',
	        flexWrap: 'wrap',
	        justifyContent: 'space-around'
	    },
	    gridList: {
	        width: 960,
	        height: 'auto',
	        overflowY: 'auto',
	        marginTop: 50,
	        marginBottom: 24
	    }
	};

	var WaterFall = function (_React$Component) {
	    _inherits(WaterFall, _React$Component);

	    function WaterFall(props) {
	        _classCallCheck(this, WaterFall);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WaterFall).call(this, props));

	        _this.state = {
	            tilesData: [],
	            begin: 0
	        };
	        _event2.default.on('waterfall update', function (id) {
	            _this.fetchData();
	        });
	        return _this;
	    }

	    _createClass(WaterFall, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            if (this.props.active) {
	                this.fetchData();
	            }
	            window.onscroll = function (_) {
	                var height = $(".waterfall").height() + $(".waterfall").offset().top - $(window).height() - $(document).scrollTop();
	                if (height < 10 && !_this2.fetching) {
	                    _this2.fetchData();
	                }
	            };
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.onscroll = null;
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData() {
	            var _this3 = this;

	            this.fetching = true;
	            this.showProgress();
	            _api2.default.item.getCollection({
	                type: parseInt(this.props.category),
	                begin: this.state.begin,
	                limit: 6
	            }).then(function (result) {
	                _this3.fetching = false;
	                _this3.state.begin += 6;
	                _this3.setState(Object.assign(_this3.state, {
	                    tilesData: _this3.state.tilesData.concat(result.goods),
	                    progress: false
	                }));
	            });
	        }
	    }, {
	        key: 'showProgress',
	        value: function showProgress() {
	            this.setState(Object.assign(this.state, {
	                progress: true
	            }));
	        }
	    }, {
	        key: 'hideProgress',
	        value: function hideProgress() {
	            this.setState(Object.assign(this.state, {
	                progress: false
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _materialUi.GridList,
	                    {
	                        cellHeight: 400,
	                        padding: 20,
	                        cols: 3,
	                        style: styles.gridList
	                    },
	                    this.state.tilesData.map(function (tile, index) {
	                        return _react2.default.createElement(
	                            _materialUi.GridTile,
	                            {
	                                key: index,
	                                containerElement: _react2.default.createElement(_WaterFallItem2.default, { url: '/detail/' + tile.goodID, img: tile.compressImage, name: tile.goodName, price: tile.price })
	                            },
	                            _react2.default.createElement('img', { src: tile.img })
	                        );
	                    })
	                ),
	                this.state.progress ? _react2.default.createElement(_materialUi.RefreshIndicator, {
	                    size: 40,
	                    left: 460,
	                    top: 0,
	                    status: 'loading',
	                    style: {
	                        display: 'inline-block',
	                        position: 'relative'
	                    }
	                }) : null
	            );
	        }
	    }]);

	    return WaterFall;
	}(_react2.default.Component);

	exports.default = WaterFall;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var WaterFallItem = function (_React$Component) {
	    _inherits(WaterFallItem, _React$Component);

	    function WaterFallItem(props) {
	        _classCallCheck(this, WaterFallItem);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(WaterFallItem).call(this, props));
	    }

	    _createClass(WaterFallItem, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _materialUi.Card,
	                { className: 'waterfall-item' },
	                _react2.default.createElement(
	                    _reactRouter.Link,
	                    { to: this.props.url },
	                    _react2.default.createElement(
	                        _materialUi.CardMedia,
	                        null,
	                        _react2.default.createElement('img', { src: this.props.img })
	                    ),
	                    _react2.default.createElement(_materialUi.CardTitle, { title: this.props.name, subtitle: '￥' + this.props.price, subtitleStyle: { color: "#EF5350" } })
	                )
	            );
	        }
	    }]);

	    return WaterFallItem;
	}(_react2.default.Component);

	exports.default = WaterFallItem;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ToggleStarBorder = function ToggleStarBorder(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z' }));
	};
	ToggleStarBorder = (0, _pure2.default)(ToggleStarBorder);
	ToggleStarBorder.displayName = 'ToggleStarBorder';
	ToggleStarBorder.muiName = 'SvgIcon';

	exports.default = ToggleStarBorder;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSwipeable = __webpack_require__(57);

	var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var MIN_INTERVAL = 500;

	function throttle(func, wait) {
	  var context = void 0,
	      args = void 0,
	      result = void 0;
	  var timeout = null;
	  var previous = 0;

	  var later = function later() {
	    previous = new Date().getTime();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;
	  };

	  return function () {
	    var now = new Date().getTime();
	    var remaining = wait - (now - previous);
	    context = this;
	    args = arguments;
	    if (remaining <= 0 || remaining > wait) {
	      if (timeout) {
	        clearTimeout(timeout);
	        timeout = null;
	      }
	      previous = now;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    } else if (!timeout) {
	      timeout = setTimeout(later, remaining);
	    }
	    return result;
	  };
	}

	// This is to handle accessing event properties in an asynchronous way
	// https://facebook.github.io/react/docs/events.html#syntheticevent
	function debounceEventHandler() {
	  var throttled = throttle.apply(undefined, arguments);
	  return function (event) {
	    if (event) {
	      event.persist();
	      return throttled(event);
	    }

	    return throttled();
	  };
	}

	var ImageGallery = function (_React$Component) {
	  _inherits(ImageGallery, _React$Component);

	  function ImageGallery(props) {
	    _classCallCheck(this, ImageGallery);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageGallery).call(this, props));

	    _this.state = {
	      currentIndex: props.startIndex,
	      thumbsTranslateX: 0,
	      offsetPercentage: 0,
	      galleryWidth: 0,
	      thumbnailWidth: 0
	    };
	    return _this;
	  }

	  _createClass(ImageGallery, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.disableArrowKeys !== nextProps.disableArrowKeys) {
	        if (nextProps.disableArrowKeys) {
	          window.removeEventListener('keydown', this._handleKeyDown);
	        } else {
	          window.addEventListener('keydown', this._handleKeyDown);
	        }
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (prevState.thumbnailWidth !== this.state.thumbnailWidth || prevProps.showThumbnails !== this.props.showThumbnails) {

	        // adjust thumbnail container when thumbnail width is adjusted
	        this._setThumbsTranslateX(-this._getThumbsTranslateX(this.state.currentIndex > 0 ? 1 : 0) * this.state.currentIndex);
	      }

	      if (prevState.currentIndex !== this.state.currentIndex) {
	        if (this.props.onSlide) {
	          this.props.onSlide(this.state.currentIndex);
	        }

	        this._updateThumbnailTranslateX(prevState);
	      }
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._slideLeft = debounceEventHandler(this._slideLeft.bind(this), MIN_INTERVAL, true);

	      this._slideRight = debounceEventHandler(this._slideRight.bind(this), MIN_INTERVAL, true);

	      this._handleResize = this._handleResize.bind(this);
	      this._handleKeyDown = this._handleKeyDown.bind(this);
	      this._thumbnailDelay = 300;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      // delay initial resize to get the accurate this._imageGallery.offsetWidth
	      window.setTimeout(function () {
	        return _this2._handleResize();
	      }, 500);

	      if (this.props.autoPlay) {
	        this.play();
	      }
	      if (!this.props.disableArrowKeys) {
	        window.addEventListener('keydown', this._handleKeyDown);
	      }
	      window.addEventListener('resize', this._handleResize);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (!this.props.disableArrowKeys) {
	        window.removeEventListener('keydown', this._handleKeyDown);
	      }
	      window.removeEventListener('resize', this._handleResize);
	      if (this._intervalId) {
	        window.clearInterval(this._intervalId);
	        this._intervalId = null;
	      }
	    }
	  }, {
	    key: 'play',
	    value: function play() {
	      var _this3 = this;

	      var callback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (this._intervalId) {
	        return;
	      }
	      var slideInterval = this.props.slideInterval;

	      this._intervalId = window.setInterval(function () {
	        if (!_this3.state.hovering) {
	          if (!_this3.props.infinite && !_this3._canSlideRight()) {
	            _this3.pause();
	          } else {
	            _this3.slideToIndex(_this3.state.currentIndex + 1);
	          }
	        }
	      }, slideInterval > MIN_INTERVAL ? slideInterval : MIN_INTERVAL);

	      if (this.props.onPlay && callback) {
	        this.props.onPlay(this.state.currentIndex);
	      }
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      var callback = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (this._intervalId) {
	        window.clearInterval(this._intervalId);
	        this._intervalId = null;
	      }

	      if (this.props.onPause && callback) {
	        this.props.onPause(this.state.currentIndex);
	      }
	    }
	  }, {
	    key: 'fullScreen',
	    value: function fullScreen() {
	      var gallery = this._imageGallery;

	      if (gallery.requestFullscreen) {
	        gallery.requestFullscreen();
	      } else if (gallery.msRequestFullscreen) {
	        gallery.msRequestFullscreen();
	      } else if (gallery.mozRequestFullScreen) {
	        gallery.mozRequestFullScreen();
	      } else if (gallery.webkitRequestFullscreen) {
	        gallery.webkitRequestFullscreen();
	      }
	    }
	  }, {
	    key: 'slideToIndex',
	    value: function slideToIndex(index, event) {
	      if (event) {
	        event.preventDefault();
	        if (this._intervalId) {
	          // user triggered event while ImageGallery is playing, reset interval
	          this.pause(false);
	          this.play(false);
	        }
	      }

	      var slideCount = this.props.items.length - 1;
	      var currentIndex = index;

	      if (index < 0) {
	        currentIndex = slideCount;
	      } else if (index > slideCount) {
	        currentIndex = 0;
	      }

	      this.setState({
	        previousIndex: this.state.currentIndex,
	        currentIndex: currentIndex,
	        offsetPercentage: 0,
	        style: {
	          transition: 'transform .45s ease-out'
	        }
	      });
	    }
	  }, {
	    key: 'getCurrentIndex',
	    value: function getCurrentIndex() {
	      return this.state.currentIndex;
	    }
	  }, {
	    key: '_handleResize',
	    value: function _handleResize() {
	      if (this._imageGallery) {
	        this.setState({ galleryWidth: this._imageGallery.offsetWidth });
	      }

	      if (this._imageGalleryThumbnail) {
	        this.setState({ thumbnailWidth: this._imageGalleryThumbnail.offsetWidth });
	      }
	    }
	  }, {
	    key: '_handleKeyDown',
	    value: function _handleKeyDown(event) {
	      var LEFT_ARROW = 37;
	      var RIGHT_ARROW = 39;
	      var key = parseInt(event.keyCode || event.which || 0);

	      switch (key) {
	        case LEFT_ARROW:
	          if (this._canSlideLeft() && !this._intervalId) {
	            this._slideLeft();
	          }
	          break;
	        case RIGHT_ARROW:
	          if (this._canSlideRight() && !this._intervalId) {
	            this._slideRight();
	          }
	          break;
	      }
	    }
	  }, {
	    key: '_handleMouseOverThumbnails',
	    value: function _handleMouseOverThumbnails(index) {
	      var _this4 = this;

	      if (this.props.slideOnThumbnailHover) {
	        this.setState({ hovering: true });
	        if (this._thumbnailTimer) {
	          window.clearTimeout(this._thumbnailTimer);
	          this._thumbnailTimer = null;
	        }
	        this._thumbnailTimer = window.setTimeout(function () {
	          _this4.slideToIndex(index);
	        }, this._thumbnailDelay);
	      }
	    }
	  }, {
	    key: '_handleMouseLeaveThumbnails',
	    value: function _handleMouseLeaveThumbnails() {
	      if (this._thumbnailTimer) {
	        window.clearTimeout(this._thumbnailTimer);
	        this._thumbnailTimer = null;
	        if (this.props.autoPlay === true) {
	          this.play(false);
	        }
	      }
	      this.setState({ hovering: false });
	    }
	  }, {
	    key: '_handleMouseOver',
	    value: function _handleMouseOver() {
	      this.setState({ hovering: true });
	    }
	  }, {
	    key: '_handleMouseLeave',
	    value: function _handleMouseLeave() {
	      this.setState({ hovering: false });
	    }
	  }, {
	    key: '_handleImageError',
	    value: function _handleImageError(event) {
	      if (this.props.defaultImage && event.target.src.indexOf(this.props.defaultImage) === -1) {
	        event.target.src = this.props.defaultImage;
	      }
	    }
	  }, {
	    key: '_handleOnSwiped',
	    value: function _handleOnSwiped(ev, x, y, isFlick) {
	      this.setState({ isFlick: isFlick });
	    }
	  }, {
	    key: '_shouldSlideOnSwipe',
	    value: function _shouldSlideOnSwipe() {
	      var shouldSlide = Math.abs(this.state.offsetPercentage) > 30 || this.state.isFlick;

	      if (shouldSlide) {
	        // reset isFlick state after so data is not persisted
	        this.setState({ isFlick: false });
	      }
	      return shouldSlide;
	    }
	  }, {
	    key: '_handleOnSwipedTo',
	    value: function _handleOnSwipedTo(index) {
	      var slideTo = this.state.currentIndex;

	      if (this._shouldSlideOnSwipe()) {
	        slideTo += index;
	      }

	      if (index < 0) {
	        if (!this._canSlideLeft()) {
	          slideTo = this.state.currentIndex;
	        }
	      } else {
	        if (!this._canSlideRight()) {
	          slideTo = this.state.currentIndex;
	        }
	      }

	      this.slideToIndex(slideTo);
	    }
	  }, {
	    key: '_handleSwiping',
	    value: function _handleSwiping(index, _, delta) {
	      var offsetPercentage = index * (delta / this.state.galleryWidth * 100);
	      this.setState({ offsetPercentage: offsetPercentage, style: {} });
	    }
	  }, {
	    key: '_canNavigate',
	    value: function _canNavigate() {
	      return this.props.items.length >= 2;
	    }
	  }, {
	    key: '_canSlideLeft',
	    value: function _canSlideLeft() {
	      return this.props.infinite || this.state.currentIndex > 0;
	    }
	  }, {
	    key: '_canSlideRight',
	    value: function _canSlideRight() {
	      return this.props.infinite || this.state.currentIndex < this.props.items.length - 1;
	    }
	  }, {
	    key: '_updateThumbnailTranslateX',
	    value: function _updateThumbnailTranslateX(prevState) {
	      if (this.state.currentIndex === 0) {
	        this._setThumbsTranslateX(0);
	      } else {
	        var indexDifference = Math.abs(prevState.currentIndex - this.state.currentIndex);
	        var scrollX = this._getThumbsTranslateX(indexDifference);
	        if (scrollX > 0) {
	          if (prevState.currentIndex < this.state.currentIndex) {
	            this._setThumbsTranslateX(this.state.thumbsTranslateX - scrollX);
	          } else if (prevState.currentIndex > this.state.currentIndex) {
	            this._setThumbsTranslateX(this.state.thumbsTranslateX + scrollX);
	          }
	        }
	      }
	    }
	  }, {
	    key: '_setThumbsTranslateX',
	    value: function _setThumbsTranslateX(thumbsTranslateX) {
	      this.setState({ thumbsTranslateX: thumbsTranslateX });
	    }
	  }, {
	    key: '_getThumbsTranslateX',
	    value: function _getThumbsTranslateX(indexDifference) {
	      if (this.props.disableThumbnailScroll) {
	        return 0;
	      }

	      var thumbnailWidth = this.state.thumbnailWidth;

	      if (this._thumbnails) {
	        if (this._thumbnails.scrollWidth <= thumbnailWidth) {
	          return 0;
	        }
	        var totalThumbnails = this._thumbnails.children.length;
	        // total scroll-x required to see the last thumbnail
	        var totalScrollX = this._thumbnails.scrollWidth - thumbnailWidth;
	        // scroll-x required per index change
	        var perIndexScrollX = totalScrollX / (totalThumbnails - 1);

	        return indexDifference * perIndexScrollX;
	      }
	    }
	  }, {
	    key: '_getAlignmentClassName',
	    value: function _getAlignmentClassName(index) {
	      // LEFT, and RIGHT alignments are necessary for lazyLoad
	      var currentIndex = this.state.currentIndex;

	      var alignment = '';
	      var LEFT = 'left';
	      var CENTER = 'center';
	      var RIGHT = 'right';

	      switch (index) {
	        case currentIndex - 1:
	          alignment = ' ' + LEFT;
	          break;
	        case currentIndex:
	          alignment = ' ' + CENTER;
	          break;
	        case currentIndex + 1:
	          alignment = ' ' + RIGHT;
	          break;
	      }

	      if (this.props.items.length >= 3 && this.props.infinite) {
	        if (index === 0 && currentIndex === this.props.items.length - 1) {
	          // set first slide as right slide if were sliding right from last slide
	          alignment = ' ' + RIGHT;
	        } else if (index === this.props.items.length - 1 && currentIndex === 0) {
	          // set last slide as left slide if were sliding left from first slide
	          alignment = ' ' + LEFT;
	        }
	      }

	      return alignment;
	    }
	  }, {
	    key: '_getTranslateXForTwoSlide',
	    value: function _getTranslateXForTwoSlide(index) {
	      // For taking care of infinite swipe when there are only two slides
	      var _state = this.state;
	      var currentIndex = _state.currentIndex;
	      var offsetPercentage = _state.offsetPercentage;
	      var previousIndex = _state.previousIndex;

	      var baseTranslateX = -100 * currentIndex;
	      var translateX = baseTranslateX + index * 100 + offsetPercentage;

	      // keep track of user swiping direction
	      if (offsetPercentage > 0) {
	        this.direction = 'left';
	      } else if (offsetPercentage < 0) {
	        this.direction = 'right';
	      }

	      // when swiping make sure the slides are on the correct side
	      if (currentIndex === 0 && index === 1 && offsetPercentage > 0) {
	        translateX = -100 + offsetPercentage;
	      } else if (currentIndex === 1 && index === 0 && offsetPercentage < 0) {
	        translateX = 100 + offsetPercentage;
	      }

	      if (currentIndex !== previousIndex) {
	        // when swiped move the slide to the correct side
	        if (previousIndex === 0 && index === 0 && offsetPercentage === 0 && this.direction === 'left') {
	          translateX = 100;
	        } else if (previousIndex === 1 && index === 1 && offsetPercentage === 0 && this.direction === 'right') {
	          translateX = -100;
	        }
	      } else {
	        // keep the slide on the correct slide even when not a swipe
	        if (currentIndex === 0 && index === 1 && offsetPercentage === 0 && this.direction === 'left') {
	          translateX = -100;
	        } else if (currentIndex === 1 && index === 0 && offsetPercentage === 0 && this.direction === 'right') {
	          translateX = 100;
	        }
	      }

	      return translateX;
	    }
	  }, {
	    key: '_getSlideStyle',
	    value: function _getSlideStyle(index) {
	      var _state2 = this.state;
	      var currentIndex = _state2.currentIndex;
	      var offsetPercentage = _state2.offsetPercentage;
	      var _props = this.props;
	      var infinite = _props.infinite;
	      var items = _props.items;

	      var baseTranslateX = -100 * currentIndex;
	      var totalSlides = items.length - 1;

	      // calculates where the other slides belong based on currentIndex
	      var translateX = baseTranslateX + index * 100 + offsetPercentage;

	      // adjust zIndex so that only the current slide and the slide were going
	      // to is at the top layer, this prevents transitions from flying in the
	      // background when swiping before the first slide or beyond the last slide
	      var zIndex = 1;
	      if (index === currentIndex) {
	        zIndex = 3;
	      } else if (index === this.state.previousIndex) {
	        zIndex = 2;
	      }

	      if (infinite && items.length > 2) {
	        if (currentIndex === 0 && index === totalSlides) {
	          // make the last slide the slide before the first
	          translateX = -100 + offsetPercentage;
	        } else if (currentIndex === totalSlides && index === 0) {
	          // make the first slide the slide after the last
	          translateX = 100 + offsetPercentage;
	        }
	      }

	      // Special case when there are only 2 items with infinite on
	      if (infinite && items.length === 2) {
	        translateX = this._getTranslateXForTwoSlide(index);
	      }

	      var translate3d = 'translate3d(' + translateX + '%, 0, 0)';

	      return {
	        WebkitTransform: translate3d,
	        MozTransform: translate3d,
	        msTransform: translate3d,
	        OTransform: translate3d,
	        transform: translate3d,
	        zIndex: zIndex
	      };
	    }
	  }, {
	    key: '_getThumbnailStyle',
	    value: function _getThumbnailStyle() {
	      var translate3d = 'translate3d(' + this.state.thumbsTranslateX + 'px, 0, 0)';
	      return {
	        WebkitTransform: translate3d,
	        MozTransform: translate3d,
	        msTransform: translate3d,
	        OTransform: translate3d,
	        transform: translate3d
	      };
	    }
	  }, {
	    key: '_slideLeft',
	    value: function _slideLeft(event) {
	      this.slideToIndex(this.state.currentIndex - 1, event);
	    }
	  }, {
	    key: '_slideRight',
	    value: function _slideRight(event) {
	      this.slideToIndex(this.state.currentIndex + 1, event);
	    }
	  }, {
	    key: '_renderItem',
	    value: function _renderItem(item) {
	      var onImageError = this.props.onImageError || this._handleImageError;

	      return _react2.default.createElement('div', { className: 'image-gallery-image' }, _react2.default.createElement('img', {
	        src: item.original,
	        alt: item.originalAlt,
	        srcSet: item.srcSet,
	        sizes: item.sizes,
	        onLoad: this.props.onImageLoad,
	        onError: onImageError.bind(this)
	      }), item.description && _react2.default.createElement('span', { className: 'image-gallery-description' }, item.description));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;

	      var currentIndex = this.state.currentIndex;

	      var thumbnailStyle = this._getThumbnailStyle();

	      var slideLeft = this._slideLeft.bind(this);
	      var slideRight = this._slideRight.bind(this);

	      var slides = [];
	      var thumbnails = [];
	      var bullets = [];

	      this.props.items.map(function (item, index) {
	        var alignment = _this5._getAlignmentClassName(index);
	        var originalClass = item.originalClass ? ' ' + item.originalClass : '';
	        var thumbnailClass = item.thumbnailClass ? ' ' + item.thumbnailClass : '';

	        var renderItem = item.renderItem || _this5.props.renderItem || _this5._renderItem.bind(_this5);

	        var slide = _react2.default.createElement('div', {
	          key: index,
	          className: 'image-gallery-slide' + alignment + originalClass,
	          style: _extends(_this5._getSlideStyle(index), _this5.state.style),
	          onClick: _this5.props.onClick
	        }, renderItem(item));

	        if (_this5.props.lazyLoad) {
	          if (alignment) {
	            slides.push(slide);
	          }
	        } else {
	          slides.push(slide);
	        }

	        var onThumbnailError = _this5._handleImageError;
	        if (_this5.props.onThumbnailError) {
	          onThumbnailError = _this5.props.onThumbnailError;
	        }

	        if (_this5.props.showThumbnails) {
	          thumbnails.push(_react2.default.createElement('a', {
	            onMouseOver: _this5._handleMouseOverThumbnails.bind(_this5, index),
	            onMouseLeave: _this5._handleMouseLeaveThumbnails.bind(_this5, index),
	            key: index,
	            className: 'image-gallery-thumbnail' + (currentIndex === index ? ' active' : '') + thumbnailClass,

	            onTouchStart: function onTouchStart(event) {
	              return _this5.slideToIndex.call(_this5, index, event);
	            },
	            onClick: function onClick(event) {
	              return _this5.slideToIndex.call(_this5, index, event);
	            } }, _react2.default.createElement('img', {
	            src: item.thumbnail,
	            alt: item.thumbnailAlt,
	            onError: onThumbnailError.bind(_this5) }), _react2.default.createElement('div', { className: 'image-gallery-thumbnail-label' }, item.thumbnailLabel)));
	        }

	        if (_this5.props.showBullets) {
	          bullets.push(_react2.default.createElement('li', {
	            key: index,
	            className: 'image-gallery-bullet ' + (currentIndex === index ? 'active' : ''),

	            onTouchStart: function onTouchStart(event) {
	              return _this5.slideToIndex.call(_this5, index, event);
	            },
	            onClick: function onClick(event) {
	              return _this5.slideToIndex.call(_this5, index, event);
	            } }));
	        }
	      });

	      return _react2.default.createElement('section', { ref: function ref(i) {
	          return _this5._imageGallery = i;
	        }, className: 'image-gallery' }, _react2.default.createElement('div', {
	        onMouseOver: this._handleMouseOver.bind(this),
	        onMouseLeave: this._handleMouseLeave.bind(this),
	        className: 'image-gallery-content' }, this._canNavigate() ? [this.props.showNav && _react2.default.createElement('span', { key: 'navigation' }, this._canSlideLeft() && _react2.default.createElement('a', {
	        className: 'image-gallery-left-nav',
	        onTouchStart: slideLeft,
	        onClick: slideLeft }), this._canSlideRight() && _react2.default.createElement('a', {
	        className: 'image-gallery-right-nav',
	        onTouchStart: slideRight,
	        onClick: slideRight })), _react2.default.createElement(_reactSwipeable2.default, {
	        className: 'image-gallery-swipe',
	        key: 'swipeable',
	        delta: 1,
	        onSwipingLeft: this._handleSwiping.bind(this, -1),
	        onSwipingRight: this._handleSwiping.bind(this, 1),
	        onSwiped: this._handleOnSwiped.bind(this),
	        onSwipedLeft: this._handleOnSwipedTo.bind(this, 1),
	        onSwipedRight: this._handleOnSwipedTo.bind(this, -1)
	      }, _react2.default.createElement('div', { className: 'image-gallery-slides' }, slides))] : _react2.default.createElement('div', { className: 'image-gallery-slides' }, slides), this.props.showBullets && _react2.default.createElement('div', { className: 'image-gallery-bullets' }, _react2.default.createElement('ul', { className: 'image-gallery-bullets-container' }, bullets)), this.props.showIndex && _react2.default.createElement('div', { className: 'image-gallery-index' }, _react2.default.createElement('span', { className: 'image-gallery-index-current' }, this.state.currentIndex + 1), _react2.default.createElement('span', { className: 'image-gallery-index-separator' }, this.props.indexSeparator), _react2.default.createElement('span', { className: 'image-gallery-index-total' }, this.props.items.length))), this.props.showThumbnails && _react2.default.createElement('div', {
	        className: 'image-gallery-thumbnails',
	        ref: function ref(i) {
	          return _this5._imageGalleryThumbnail = i;
	        }
	      }, _react2.default.createElement('div', {
	        ref: function ref(t) {
	          return _this5._thumbnails = t;
	        },
	        className: 'image-gallery-thumbnails-container',
	        style: thumbnailStyle }, thumbnails)));
	    }
	  }]);

	  return ImageGallery;
	}(_react2.default.Component);

	exports.default = ImageGallery;

	ImageGallery.propTypes = {
	  items: _react2.default.PropTypes.array.isRequired,
	  showNav: _react2.default.PropTypes.bool,
	  autoPlay: _react2.default.PropTypes.bool,
	  lazyLoad: _react2.default.PropTypes.bool,
	  infinite: _react2.default.PropTypes.bool,
	  showIndex: _react2.default.PropTypes.bool,
	  showBullets: _react2.default.PropTypes.bool,
	  showThumbnails: _react2.default.PropTypes.bool,
	  slideOnThumbnailHover: _react2.default.PropTypes.bool,
	  disableThumbnailScroll: _react2.default.PropTypes.bool,
	  disableArrowKeys: _react2.default.PropTypes.bool,
	  defaultImage: _react2.default.PropTypes.string,
	  indexSeparator: _react2.default.PropTypes.string,
	  startIndex: _react2.default.PropTypes.number,
	  slideInterval: _react2.default.PropTypes.number,
	  onSlide: _react2.default.PropTypes.func,
	  onPause: _react2.default.PropTypes.func,
	  onPlay: _react2.default.PropTypes.func,
	  onClick: _react2.default.PropTypes.func,
	  onImageLoad: _react2.default.PropTypes.func,
	  onImageError: _react2.default.PropTypes.func,
	  onThumbnailError: _react2.default.PropTypes.func,
	  renderItem: _react2.default.PropTypes.func
	};

	ImageGallery.defaultProps = {
	  items: [],
	  showNav: true,
	  autoPlay: false,
	  lazyLoad: false,
	  infinite: true,
	  showIndex: false,
	  showBullets: false,
	  showThumbnails: true,
	  slideOnThumbnailHover: false,
	  disableThumbnailScroll: false,
	  disableArrowKeys: false,
	  indexSeparator: ' / ',
	  startIndex: 0,
	  slideInterval: 3000
	};

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var React = __webpack_require__(1);

	var Swipeable = React.createClass({
	  displayName: 'Swipeable',

	  propTypes: {
	    onSwiped: React.PropTypes.func,
	    onSwiping: React.PropTypes.func,
	    onSwipingUp: React.PropTypes.func,
	    onSwipingRight: React.PropTypes.func,
	    onSwipingDown: React.PropTypes.func,
	    onSwipingLeft: React.PropTypes.func,
	    onSwipedUp: React.PropTypes.func,
	    onSwipedRight: React.PropTypes.func,
	    onSwipedDown: React.PropTypes.func,
	    onSwipedLeft: React.PropTypes.func,
	    flickThreshold: React.PropTypes.number,
	    delta: React.PropTypes.number,
	    preventDefaultTouchmoveEvent: React.PropTypes.bool,
	    stopPropagation: React.PropTypes.bool,
	    nodeName: React.PropTypes.string
	  },

	  getInitialState: function getInitialState() {
	    return {
	      x: null,
	      y: null,
	      swiping: false,
	      start: 0
	    };
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      flickThreshold: 0.6,
	      delta: 10,
	      preventDefaultTouchmoveEvent: true,
	      stopPropagation: false,
	      nodeName: 'div'
	    };
	  },

	  calculatePos: function calculatePos(e) {
	    var x = e.changedTouches[0].clientX;
	    var y = e.changedTouches[0].clientY;

	    var xd = this.state.x - x;
	    var yd = this.state.y - y;

	    var axd = Math.abs(xd);
	    var ayd = Math.abs(yd);

	    var time = Date.now() - this.state.start;
	    var velocity = Math.sqrt(axd * axd + ayd * ayd) / time;

	    return {
	      deltaX: xd,
	      deltaY: yd,
	      absX: axd,
	      absY: ayd,
	      velocity: velocity
	    };
	  },

	  touchStart: function touchStart(e) {
	    if (e.touches.length > 1) {
	      return;
	    }

	    if (this.props.stopPropagation) e.stopPropagation();

	    this.setState({
	      start: Date.now(),
	      x: e.touches[0].clientX,
	      y: e.touches[0].clientY,
	      swiping: false
	    });
	  },

	  touchMove: function touchMove(e) {
	    if (!this.state.x || !this.state.y || e.touches.length > 1) {
	      return;
	    }

	    var cancelPageSwipe = false;
	    var pos = this.calculatePos(e);

	    if (pos.absX < this.props.delta && pos.absY < this.props.delta) {
	      return;
	    }

	    if (this.props.stopPropagation) e.stopPropagation();

	    if (this.props.onSwiping) {
	      this.props.onSwiping(e, pos.deltaX, pos.deltaY, pos.absX, pos.absY, pos.velocity);
	    }

	    if (pos.absX > pos.absY) {
	      if (pos.deltaX > 0) {
	        if (this.props.onSwipingLeft || this.props.onSwipedLeft) {
	          this.props.onSwipingLeft && this.props.onSwipingLeft(e, pos.absX);
	          cancelPageSwipe = true;
	        }
	      } else {
	        if (this.props.onSwipingRight || this.props.onSwipedRight) {
	          this.props.onSwipingRight && this.props.onSwipingRight(e, pos.absX);
	          cancelPageSwipe = true;
	        }
	      }
	    } else {
	      if (pos.deltaY > 0) {
	        if (this.props.onSwipingUp || this.props.onSwipedUp) {
	          this.props.onSwipingUp && this.props.onSwipingUp(e, pos.absY);
	          cancelPageSwipe = true;
	        }
	      } else {
	        if (this.props.onSwipingDown || this.props.onSwipedDown) {
	          this.props.onSwipingDown && this.props.onSwipingDown(e, pos.absY);
	          cancelPageSwipe = true;
	        }
	      }
	    }

	    this.setState({ swiping: true });

	    if (cancelPageSwipe && this.props.preventDefaultTouchmoveEvent) {
	      e.preventDefault();
	    }
	  },

	  touchEnd: function touchEnd(e) {
	    if (this.state.swiping) {
	      var pos = this.calculatePos(e);

	      if (this.props.stopPropagation) e.stopPropagation();

	      var isFlick = pos.velocity > this.props.flickThreshold;

	      this.props.onSwiped && this.props.onSwiped(e, pos.deltaX, pos.deltaY, isFlick, pos.velocity);

	      if (pos.absX > pos.absY) {
	        if (pos.deltaX > 0) {
	          this.props.onSwipedLeft && this.props.onSwipedLeft(e, pos.deltaX, isFlick);
	        } else {
	          this.props.onSwipedRight && this.props.onSwipedRight(e, pos.deltaX, isFlick);
	        }
	      } else {
	        if (pos.deltaY > 0) {
	          this.props.onSwipedUp && this.props.onSwipedUp(e, pos.deltaY, isFlick);
	        } else {
	          this.props.onSwipedDown && this.props.onSwipedDown(e, pos.deltaY, isFlick);
	        }
	      }
	    }

	    this.setState(this.getInitialState());
	  },

	  render: function render() {
	    var newProps = _extends({}, this.props, {
	      onTouchStart: this.touchStart,
	      onTouchMove: this.touchMove,
	      onTouchEnd: this.touchEnd
	    });

	    delete newProps.onSwiped;
	    delete newProps.onSwiping;
	    delete newProps.onSwipingUp;
	    delete newProps.onSwipingRight;
	    delete newProps.onSwipingDown;
	    delete newProps.onSwipingLeft;
	    delete newProps.onSwipedUp;
	    delete newProps.onSwipedRight;
	    delete newProps.onSwipedDown;
	    delete newProps.onSwipedLeft;
	    delete newProps.flickThreshold;
	    delete newProps.delta;
	    delete newProps.preventDefaultTouchmoveEvent;
	    delete newProps.stopPropagation;
	    delete newProps.nodeName;
	    delete newProps.children;

	    return React.createElement(this.props.nodeName, newProps, this.props.children);
	  }
	});

	module.exports = Swipeable;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _Header = __webpack_require__(6);

	var _Header2 = _interopRequireDefault(_Header);

	var _reactRouter = __webpack_require__(3);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _userService = __webpack_require__(32);

	var _userService2 = _interopRequireDefault(_userService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TestPage = function (_React$Component) {
	    _inherits(TestPage, _React$Component);

	    function TestPage(props) {
	        _classCallCheck(this, TestPage);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TestPage).call(this, props));
	    }

	    _createClass(TestPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('change header', {
	                title: 'Test Page',
	                color: '#FF5252'
	            });
	            _event2.default.emit('show header');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _PageContent2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    'test'
	                )
	            );
	        }
	    }]);

	    return TestPage;
	}(_react2.default.Component);

	exports.default = TestPage;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _userService = __webpack_require__(32);

	var _userService2 = _interopRequireDefault(_userService);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _materialUi = __webpack_require__(7);

	var _highlightOff = __webpack_require__(60);

	var _highlightOff2 = _interopRequireDefault(_highlightOff);

	var _Alert = __webpack_require__(61);

	var _Alert2 = _interopRequireDefault(_Alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginPage = function (_React$Component) {
	    _inherits(LoginPage, _React$Component);

	    function LoginPage(props) {
	        _classCallCheck(this, LoginPage);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginPage).call(this, props));

	        _this.state = {
	            username: null,
	            password: null,
	            passwordErrText: null,
	            usernameErrText: null
	        };
	        return _this;
	    }

	    _createClass(LoginPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('hide header');
	            _userService2.default.getUserInfo().then(function (userInfo) {
	                if (!!userInfo) {
	                    _reactRouter.browserHistory.push("/");
	                }
	            }).catch(function (err) {});
	        }
	    }, {
	        key: 'back',
	        value: function back() {
	            _reactRouter.browserHistory.push('/');
	        }
	        //  处理表单

	    }, {
	        key: 'handleUserNameChange',
	        value: function handleUserNameChange(e) {
	            if (!e.target.value) {
	                this.setState({
	                    usernameErrText: "此项为必填项"
	                });
	            } else {
	                this.setState({
	                    usernameErrText: null
	                });
	            }
	            this.setState({
	                username: e.target.value
	            });
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(e) {
	            if (!e.target.value) {
	                this.setState({
	                    passwordErrText: "此项为必填项"
	                });
	            } else {
	                this.setState({
	                    passwordErrText: null
	                });
	            }
	            this.setState({
	                password: e.target.value
	            });
	        }
	        //登陆逻辑

	    }, {
	        key: 'doLogin',
	        value: function doLogin() {
	            var self = this;
	            if (!this.state.password || !this.state.username) {
	                if (!this.state.username) {
	                    this.setState({
	                        usernameErrText: "此项为必填项"
	                    });
	                }
	                if (!this.state.password) {
	                    this.setState({
	                        passwordErrText: "此项为必填项"
	                    });
	                }

	                return;
	            }

	            _event2.default.emit("show loading");

	            _api2.default.user.login({
	                username: this.state.username,
	                password: this.state.password
	            }).then(function (res) {
	                setTimeout(function () {
	                    _event2.default.emit("hide loading");
	                }, 1000);
	                switch (res.status) {
	                    case 1:
	                        {
	                            // 登陆成功
	                            _userService2.default.getUserInfo().then(function (res) {
	                                if (res) {
	                                    _userService2.default.userInfo = res;
	                                    _userService2.default.isLogin = true;
	                                } else {
	                                    _userService2.default.userInfo = null;
	                                    _userService2.default.isLogin = false;
	                                }
	                                _event2.default.emit("reload");
	                                _reactRouter.browserHistory.push('/');
	                            });
	                            break;
	                        }
	                    default:
	                        {
	                            _event2.default.emit("show alert", res.message);
	                        }
	                }
	            }).catch(function (err) {
	                _event2.default.emit("show alert", "网络错误!");
	                setTimeout(function () {
	                    _event2.default.emit("hide loading");
	                }, 1000);
	            });
	        }
	    }, {
	        key: 'toSignup',
	        value: function toSignup() {
	            _reactRouter.browserHistory.push('/signup');
	        }
	    }, {
	        key: 'render',
	        value: function render() {

	            return _react2.default.createElement(
	                _PageContent2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-page' },
	                    _react2.default.createElement(
	                        _materialUi.IconButton,
	                        { onClick: this.back },
	                        _react2.default.createElement(_highlightOff2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        _materialUi.Card,
	                        { style: {
	                                width: "300px",
	                                height: '300px',
	                                marginLeft: "-150px",
	                                position: "absolute",
	                                top: "200px",
	                                left: "50%",
	                                backgroundColor: "rgba(255,255,255,0.8)"
	                            } },
	                        _react2.default.createElement(_materialUi.CardTitle, { title: '登陆', titleStyle: {
	                                textAlign: 'center'
	                            } }),
	                        _react2.default.createElement(_materialUi.TextField, {
	                            hintText: '请输入账号',
	                            floatingLabelText: '账号',
	                            type: 'text',
	                            style: {
	                                position: 'absolute',
	                                marginLeft: '-128px',
	                                left: '50%',
	                                top: '60px'
	                            },
	                            onChange: this.handleUserNameChange.bind(this),
	                            errorText: this.state.usernameErrText
	                        }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(_materialUi.TextField, {
	                            hintText: '请输入密码',
	                            floatingLabelText: '密码',
	                            type: 'password',
	                            style: {
	                                position: 'absolute',
	                                marginLeft: '-128px',
	                                left: '50%',
	                                top: '125px'
	                            },
	                            onChange: this.handlePasswordChange.bind(this),
	                            errorText: this.state.passwordErrText
	                        }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _materialUi.CardActions,
	                            { style: {
	                                    position: 'absolute',
	                                    bottom: '20px',
	                                    width: '220px',
	                                    left: '50%',
	                                    marginLeft: '-110px'
	                                } },
	                            _react2.default.createElement(_materialUi.RaisedButton, { style: { float: 'left' }, label: '登陆', primary: true, onClick: this.doLogin.bind(this) }),
	                            _react2.default.createElement(_materialUi.FlatButton, { style: { float: 'right' }, onClick: this.toSignup, label: '注册' })
	                        ),
	                        _react2.default.createElement(_Alert2.default, null)
	                    )
	                )
	            );
	        }
	    }]);

	    return LoginPage;
	}(_react2.default.Component);

	exports.default = LoginPage;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionHighlightOff = function ActionHighlightOff(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' }));
	};
	ActionHighlightOff = (0, _pure2.default)(ActionHighlightOff);
	ActionHighlightOff.displayName = 'ActionHighlightOff';
	ActionHighlightOff.muiName = 'SvgIcon';

	exports.default = ActionHighlightOff;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _componentStatus = __webpack_require__(29);

	var _componentStatus2 = _interopRequireDefault(_componentStatus);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Alert = function (_React$Component) {
	    _inherits(Alert, _React$Component);

	    function Alert(props) {
	        _classCallCheck(this, Alert);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Alert).call(this, props));

	        _event2.default.on('show alert', function (text) {
	            _componentStatus2.default.Alert.show();
	            _componentStatus2.default.Alert.setText(text);
	            _this.setState({});
	        });
	        _event2.default.on('hide alert', function (_) {
	            _componentStatus2.default.Alert.hide();
	            _this.setState({});
	        });
	        return _this;
	    }

	    _createClass(Alert, [{
	        key: 'handleOpen',
	        value: function handleOpen() {
	            _componentStatus2.default.Alert.show();
	            this.setState({});
	        }
	    }, {
	        key: 'handleClose',
	        value: function handleClose() {
	            _componentStatus2.default.Alert.hide();
	            this.setState({});
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var actions = [_react2.default.createElement(_materialUi.FlatButton, {
	                label: '确认',
	                primary: true,
	                onTouchTap: this.handleClose.bind(this)
	            })];
	            return _react2.default.createElement(
	                _materialUi.Dialog,
	                {
	                    actions: actions,
	                    modal: false,
	                    open: _componentStatus2.default.Alert.dialogOpen,
	                    onRequestClose: this.handleClose.bind(this)
	                },
	                _componentStatus2.default.Alert.text
	            );
	        }
	    }]);

	    return Alert;
	}(_react2.default.Component);

	exports.default = Alert;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _materialUi = __webpack_require__(7);

	var _highlightOff = __webpack_require__(60);

	var _highlightOff2 = _interopRequireDefault(_highlightOff);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SignupPage = function (_React$Component) {
	    _inherits(SignupPage, _React$Component);

	    function SignupPage(props) {
	        _classCallCheck(this, SignupPage);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SignupPage).call(this, props));

	        _this.state = {
	            username: null,
	            password: null,
	            passwordErrText: null,
	            usernameErrText: null
	        };
	        return _this;
	    }

	    _createClass(SignupPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('hide header');
	        }
	    }, {
	        key: 'back',
	        value: function back() {
	            _reactRouter.browserHistory.push('/');
	        }
	    }, {
	        key: 'toLogin',
	        value: function toLogin() {
	            _reactRouter.browserHistory.push('/login');
	        }
	        //  处理表单

	    }, {
	        key: 'handleUserNameChange',
	        value: function handleUserNameChange(e) {
	            if (!e.target.value) {
	                this.setState({
	                    usernameErrText: "此项为必填项"
	                });
	            } else {
	                this.setState({
	                    usernameErrText: null
	                });
	            }
	            this.setState({
	                username: e.target.value
	            });
	        }
	    }, {
	        key: 'handlePasswordChange',
	        value: function handlePasswordChange(e) {
	            if (!e.target.value) {
	                this.setState({
	                    passwordErrText: "此项为必填项"
	                });
	            } else {
	                this.setState({
	                    passwordErrText: null
	                });
	            }
	            this.setState({
	                password: e.target.value
	            });
	        }
	        //登陆逻辑

	    }, {
	        key: 'doSignup',
	        value: function doSignup() {
	            var self = this;
	            if (!this.state.password || !this.state.username) {
	                if (!this.state.username) {
	                    this.setState({
	                        usernameErrText: "此项为必填项"
	                    });
	                }
	                if (!this.state.password) {
	                    this.setState({
	                        passwordErrText: "此项为必填项"
	                    });
	                }

	                return;
	            }

	            _event2.default.emit("show loading");

	            _api2.default.user.signup({
	                username: this.state.username,
	                password: this.state.password
	            }).then(function (res) {
	                setTimeout(function () {
	                    _event2.default.emit("hide loading");
	                }, 1000);
	                switch (res.status) {
	                    case 1:
	                        {
	                            // 登陆成功
	                            _reactRouter.browserHistory.push('/login');
	                            break;
	                        }
	                    default:
	                        {
	                            _event2.default.emit("show alert", res.message);
	                        }
	                }
	            }).catch(function (err) {
	                _event2.default.emit("show alert", "网络错误!");
	                setTimeout(function () {
	                    _event2.default.emit("hide loading");
	                }, 1000);
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _PageContent2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { className: 'login-page' },
	                    _react2.default.createElement(
	                        _materialUi.IconButton,
	                        { onClick: this.back },
	                        _react2.default.createElement(_highlightOff2.default, null)
	                    ),
	                    _react2.default.createElement(
	                        _materialUi.Card,
	                        { style: {
	                                width: "300px",
	                                height: '300px',
	                                marginLeft: "-150px",
	                                position: "absolute",
	                                top: "200px",
	                                left: "50%",
	                                backgroundColor: "rgba(255,255,255,0.8)"
	                            } },
	                        _react2.default.createElement(_materialUi.CardTitle, { title: '注册', titleStyle: {
	                                textAlign: 'center'
	                            } }),
	                        _react2.default.createElement(_materialUi.TextField, {
	                            hintText: '请输入账号',
	                            floatingLabelText: '账号',
	                            type: 'text',
	                            style: {
	                                position: 'absolute',
	                                marginLeft: '-128px',
	                                left: '50%',
	                                top: '60px'
	                            },
	                            onChange: this.handleUserNameChange.bind(this),
	                            errorText: this.state.usernameErrText
	                        }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(_materialUi.TextField, {
	                            hintText: '请输入密码',
	                            floatingLabelText: '密码',
	                            type: 'password',
	                            style: {
	                                position: 'absolute',
	                                marginLeft: '-128px',
	                                left: '50%',
	                                top: '125px'
	                            },
	                            onChange: this.handlePasswordChange.bind(this),
	                            errorText: this.state.passwordErrText
	                        }),
	                        _react2.default.createElement('br', null),
	                        _react2.default.createElement(
	                            _materialUi.CardActions,
	                            { style: {
	                                    position: 'absolute',
	                                    bottom: '20px',
	                                    width: '220px',
	                                    left: '50%',
	                                    marginLeft: '-110px'
	                                } },
	                            _react2.default.createElement(_materialUi.FlatButton, { style: { float: 'left' }, label: '登陆', onClick: this.toLogin }),
	                            _react2.default.createElement(_materialUi.RaisedButton, { style: {}, label: '注册', primary: true, onClick: this.doSignup.bind(this) })
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return SignupPage;
	}(_react2.default.Component);

	exports.default = SignupPage;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(3);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _materialUi = __webpack_require__(7);

	var _accountCircle = __webpack_require__(64);

	var _accountCircle2 = _interopRequireDefault(_accountCircle);

	var _phone = __webpack_require__(65);

	var _phone2 = _interopRequireDefault(_phone);

	var _doneAll = __webpack_require__(66);

	var _doneAll2 = _interopRequireDefault(_doneAll);

	var _Header = __webpack_require__(6);

	var _Header2 = _interopRequireDefault(_Header);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _userService = __webpack_require__(32);

	var _userService2 = _interopRequireDefault(_userService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DetailPage = function (_React$Component) {
	    _inherits(DetailPage, _React$Component);

	    function DetailPage(props) {
	        _classCallCheck(this, DetailPage);

	        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DetailPage).call(this, props));

	        _this2.state = {
	            isShow: false,
	            itemData: {},
	            commentData: [],
	            commentText: '',
	            Slider: 1,
	            isMyItem: true
	        };
	        return _this2;
	    }

	    _createClass(DetailPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this3 = this;

	            var _this = this;
	            _event2.default.emit('change header', {
	                title: '闲鹅 - 商品详情',
	                color: '#4caf50'
	            });
	            _event2.default.emit('show header');

	            _event2.default.emit("show loading");
	            _api2.default.item.get({
	                good_id: this.props.params.id
	            }).then(function (result) {
	                _event2.default.emit("hide loading");
	                var date = new Date(result.createDate);
	                result.createDate = date.toLocaleString();
	                _this3.setState(Object.assign(_this3.state, {
	                    isShow: true,
	                    itemData: result
	                }));
	                _userService2.default.getUserInfo().then(function (data) {
	                    if (data) {
	                        if (_this3.state.itemData.sellerID == data.id) {
	                            _this3.setState(Object.assign(_this3.state, {
	                                isMyItem: true
	                            }));
	                        } else {
	                            _this3.setState(Object.assign(_this3.state, {
	                                isMyItem: false
	                            }));
	                        }
	                    }
	                });
	            });
	            _api2.default.comment.get({
	                goodsID: this.props.params.id
	            }).then(function (result) {
	                if (result.status == 1) {
	                    _this3.setState(Object.assign(_this3.state, {
	                        commentData: result.data.comments
	                    }));
	                }
	            });
	        }
	    }, {
	        key: 'commentChange',
	        value: function commentChange(e) {
	            this.setState(Object.assign(this.state, {
	                commentText: e.target.value
	            }));
	        }
	    }, {
	        key: 'publishComment',
	        value: function publishComment() {
	            var _this4 = this;

	            var commentText = this.state.commentText;
	            if (!commentText) {
	                _event2.default.emit('show message', '评论不能为空哦~');
	                return;
	            }
	            _api2.default.comment.publish({
	                context: commentText,
	                goodsID: this.props.params.id
	            }).then(function (result) {
	                if (result.status == 1) {
	                    _userService2.default.getUserInfo().then(function (data) {
	                        _this4.setState(Object.assign(_this4.state, {
	                            commentText: '',
	                            commentData: _this4.state.commentData.concat([{
	                                "context": commentText,
	                                "commitTime": new Date().toString(),
	                                "goodsID": _this4.props.params.id,
	                                "userInfo": {
	                                    nickName: data.nickname,
	                                    compressPicture: data.compressPicture
	                                }
	                            }])
	                        }));
	                    });
	                } else {
	                    _event2.default.emit("show alert", '评论发送失败 > <');
	                }
	            });
	        }
	    }, {
	        key: 'newOrder',
	        value: function newOrder() {
	            var sellerID = parseInt(this.state.itemData.sellerID);
	            var count = parseInt(this.state.Slider) || 1;
	            var good_id = parseInt(this.props.params.id);
	            _api2.default.order.newOrder({ sellerID: sellerID, count: count, good_id: good_id }).then(function (res) {
	                if (res.status == 1) {
	                    _event2.default.emit("show message", '生成订单成功0v0');
	                }
	            });
	        }
	    }, {
	        key: 'handleFirstSlider',
	        value: function handleFirstSlider(e, value) {
	            this.setState(Object.assign(this.state, {
	                Slider: value
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var main = this.state.isShow ? _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _materialUi.Paper,
	                    { className: 'item-info-box', zDepth: 1 },
	                    this.state.isMyItem ? null : _react2.default.createElement(
	                        _materialUi.FloatingActionButton,
	                        { className: 'new-order', mini: true, onClick: this.newOrder.bind(this) },
	                        _react2.default.createElement(_doneAll2.default, { style: { width: "50px", height: "50px" } })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'divider' },
	                        _react2.default.createElement('div', { className: 'item-img', style: {
	                                background: 'url("' + this.state.itemData.image + '")'
	                            } })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'divider-right' },
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'name' },
	                            this.state.itemData.goodName
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'price' },
	                            '￥',
	                            this.state.itemData.price
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'hr' },
	                            _react2.default.createElement(
	                                'span',
	                                null,
	                                '卖家信息'
	                            ),
	                            _react2.default.createElement('hr', null)
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'contact' },
	                            _react2.default.createElement(
	                                _materialUi.Paper,
	                                { className: 'icon', zDepth: 1, circle: true, style: { backgroundColor: "#4caf50" } },
	                                _react2.default.createElement(_accountCircle2.default, { style: { color: "#fff" } })
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                this.state.itemData.sellerName
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'contact' },
	                            _react2.default.createElement(
	                                _materialUi.Paper,
	                                { className: 'icon', zDepth: 1, circle: true, style: { backgroundColor: "#4caf50" } },
	                                _react2.default.createElement(_phone2.default, { style: { color: "#fff" } })
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                this.state.itemData['contact_tel']
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'contact' },
	                            _react2.default.createElement(
	                                _materialUi.Paper,
	                                { className: 'icon', zDepth: 1, circle: true, style: { padding: "0 5px", backgroundColor: "#4caf50" } },
	                                _react2.default.createElement(
	                                    'i',
	                                    { className: 'iconfont', style: { fontSize: "18px", lineHeight: "28px", color: "#fff" } },
	                                    ''
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                this.state.itemData['contact_qq']
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'contact' },
	                            _react2.default.createElement(
	                                _materialUi.Paper,
	                                { className: 'icon', zDepth: 1, circle: true, style: { padding: "0 5px", backgroundColor: "#4caf50" } },
	                                _react2.default.createElement(
	                                    'i',
	                                    { className: 'iconfont', style: { fontSize: "18px", lineHeight: "28px", color: "#fff" } },
	                                    ''
	                                )
	                            ),
	                            _react2.default.createElement(
	                                'p',
	                                null,
	                                this.state.itemData['contact_wechat']
	                            )
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'contact' },
	                            this.state.itemData.contact
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'date' },
	                            '发布于 ',
	                            this.state.itemData.createDate
	                        ),
	                        _react2.default.createElement(
	                            'p',
	                            { className: 'freecount' },
	                            '可购买数量：',
	                            this.state.itemData.freeCount
	                        ),
	                        this.state.isMyItem ? null : _react2.default.createElement(
	                            'p',
	                            { className: 'freecount' },
	                            '已购买：',
	                            this.state.Slider
	                        ),
	                        this.state.isMyItem ? null : _react2.default.createElement(_materialUi.Slider, {
	                            defaultValue: 1,
	                            step: 1,
	                            min: 0,
	                            className: "slider",
	                            max: this.state.itemData.freeCount,
	                            value: this.state.Slider,
	                            onChange: this.handleFirstSlider.bind(this)
	                        })
	                    )
	                ),
	                _react2.default.createElement(
	                    _materialUi.Paper,
	                    { className: 'item-info-box' },
	                    _react2.default.createElement(
	                        _materialUi.Toolbar,
	                        { style: { backgroundColor: "#4caf50", color: '#fff' } },
	                        _react2.default.createElement(_materialUi.ToolbarTitle, { text: '商品详情' })
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'item-desc' },
	                        this.state.itemData.description
	                    )
	                ),
	                _react2.default.createElement(
	                    _materialUi.Paper,
	                    { className: 'item-info-box' },
	                    _react2.default.createElement(
	                        _materialUi.Toolbar,
	                        { style: { backgroundColor: "#4caf50", color: '#fff' } },
	                        _react2.default.createElement(_materialUi.ToolbarTitle, { text: '留言板' })
	                    ),
	                    _react2.default.createElement(
	                        _materialUi.List,
	                        null,
	                        _react2.default.createElement(
	                            _reactAddonsCssTransitionGroup2.default,
	                            {
	                                component: 'div',
	                                transitionName: 'list-info',
	                                transitionEnterTimeout: 800,
	                                transitionLeaveTimeout: 800
	                            },
	                            this.state.commentData.map(function (comment, key) {
	                                return _react2.default.createElement(_materialUi.ListItem, {
	                                    key: key,
	                                    primaryText: comment.context,
	                                    secondaryText: comment.userInfo.nickName + ' 发表于 ' + new Date(comment.commitTime).toLocaleString(),
	                                    leftAvatar: _react2.default.createElement(_materialUi.Avatar, { src: '/' + comment.userInfo.compressPicture })
	                                });
	                            })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'text-field' },
	                            _react2.default.createElement(_materialUi.TextField, {
	                                fullWidth: true,
	                                floatingLabelText: '写下你的留言吧',
	                                onChange: this.commentChange.bind(this),
	                                value: this.state.commentText
	                            }),
	                            _react2.default.createElement(_materialUi.RaisedButton, { label: '发送', primary: true, onClick: this.publishComment.bind(this) })
	                        )
	                    )
	                )
	            ) : null;
	            return _react2.default.createElement(
	                _PageContent2.default,
	                { className: 'detail-page' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body' },
	                    _react2.default.createElement(
	                        _reactAddonsCssTransitionGroup2.default,
	                        {
	                            component: 'div',
	                            transitionName: 'main-info',
	                            transitionEnterTimeout: 800,
	                            transitionLeaveTimeout: 800
	                        },
	                        main
	                    )
	                )
	            );
	        }
	    }]);

	    return DetailPage;
	}(_react2.default.Component);

	exports.default = DetailPage;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionAccountCircle = function ActionAccountCircle(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' }));
	};
	ActionAccountCircle = (0, _pure2.default)(ActionAccountCircle);
	ActionAccountCircle.displayName = 'ActionAccountCircle';
	ActionAccountCircle.muiName = 'SvgIcon';

	exports.default = ActionAccountCircle;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var CommunicationPhone = function CommunicationPhone(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' }));
	};
	CommunicationPhone = (0, _pure2.default)(CommunicationPhone);
	CommunicationPhone.displayName = 'CommunicationPhone';
	CommunicationPhone.muiName = 'SvgIcon';

	exports.default = CommunicationPhone;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionDoneAll = function ActionDoneAll(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z' }));
	};
	ActionDoneAll = (0, _pure2.default)(ActionDoneAll);
	ActionDoneAll.displayName = 'ActionDoneAll';
	ActionDoneAll.muiName = 'SvgIcon';

	exports.default = ActionDoneAll;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _materialUi = __webpack_require__(7);

	var _doneAll = __webpack_require__(66);

	var _doneAll2 = _interopRequireDefault(_doneAll);

	var _reactRouter = __webpack_require__(3);

	var _reactDropzoneComponent = __webpack_require__(68);

	var _reactDropzoneComponent2 = _interopRequireDefault(_reactDropzoneComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PublishPage = function (_React$Component) {
	    _inherits(PublishPage, _React$Component);

	    function PublishPage(props) {
	        _classCallCheck(this, PublishPage);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PublishPage).call(this, props));

	        _this.state = {
	            type: 0,
	            address: "深圳"
	        };
	        return _this;
	    }

	    _createClass(PublishPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('change header', {
	                title: '闲鹅 - 发布商品',
	                color: '#3f51b5'
	            });
	            _event2.default.emit('show header');
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange(e, type, value) {
	            this.state[type] = e.target.value || value;
	            this.setState(Object.assign({}, this.state));
	        }
	    }, {
	        key: 'publish',
	        value: function publish() {
	            var _state = this.state;
	            var goodName = _state.goodName;
	            var freeCount = _state.freeCount;
	            var description = _state.description;
	            var contact_tel = _state.contact_tel;
	            var type = _state.type;
	            var price = _state.price;
	            var contact_qq = _state.contact_qq;
	            var contact_wechat = _state.contact_wechat;
	            var image_url = _state.image_url;
	            var compress_url = _state.compress_url;
	            var address = _state.address;
	            var poster = _state.poster;


	            if (!(goodName && freeCount && description && contact_tel && type != undefined && price && contact_qq && contact_wechat && address && poster)) {
	                _event2.default.emit('show message', '发布失败，有重要信息为空哦=。=');
	                return;
	            }
	            if (!(image_url && compress_url)) {
	                _event2.default.emit('show message', '发布失败，忘记上传商品图片了？=。=');
	                return;
	            }
	            _api2.default.item.publish({ goodName: goodName, freeCount: freeCount, description: description, contact_tel: contact_tel, type: type, price: price, contact_qq: contact_qq, contact_wechat: contact_wechat, image_url: image_url, compress_url: compress_url, address: address, poster: poster }).then(function (res) {
	                if (res) {
	                    _event2.default.emit('show message', '发布成功');
	                    _reactRouter.browserHistory.push('/detail/' + (res.goodID || 0));
	                } else {
	                    _event2.default.emit('show message', '发布失败 x_x');
	                }
	            });
	        }
	    }, {
	        key: 'onUpload',
	        value: function onUpload(e) {
	            var result = JSON.parse(e.xhr.response);
	            var imageURL = result.data['image'].split('/');
	            var compressURL = result.data['compress_image'].split('/');
	            this.state['image_url'] = '/img/' + imageURL[imageURL.length - 1];
	            this.state['compress_url'] = '/img/' + compressURL[compressURL.length - 1];
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this,
	                _React$createElement;

	            var uploadConfig = {
	                iconFiletypes: ['.jpg', '.png', '.gif'],
	                showFiletypeIcon: true,
	                postUrl: '/api/new_photo',
	                maxFiles: 1
	            };
	            return _react2.default.createElement(
	                _PageContent2.default,
	                { className: 'publish-page' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body' },
	                    _react2.default.createElement(
	                        _materialUi.Paper,
	                        { className: 'publish-box', zDepth: 2 },
	                        _react2.default.createElement(
	                            _materialUi.Toolbar,
	                            { style: { backgroundColor: "#3f51b5", color: '#fff' } },
	                            _react2.default.createElement(_materialUi.ToolbarTitle, { text: '发布商品' })
	                        ),
	                        _react2.default.createElement(
	                            'div',
	                            { className: 'body' },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'divide' },
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: '商品名',
	                                    fullWidth: true,
	                                    value: this.state["goodName"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'goodName');
	                                    }
	                                }),
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: '商品简介',
	                                    multiLine: true,
	                                    fullWidth: true,
	                                    rows: 4,
	                                    value: this.state["description"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'description');
	                                    }
	                                }),
	                                _react2.default.createElement(_materialUi.TextField, (_React$createElement = {
	                                    floatingLabelText: '剩余数量',
	                                    fullWidth: true,
	                                    value: this.state["contact_wechat"]
	                                }, _defineProperty(_React$createElement, 'value', this.state["freeCount"]), _defineProperty(_React$createElement, 'onChange', function onChange(e) {
	                                    return _this2.handleChange(e, 'freeCount');
	                                }), _React$createElement)),
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: '价格',
	                                    fullWidth: true,
	                                    value: this.state["price"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'price');
	                                    }
	                                }),
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: '广告语',
	                                    fullWidth: true,
	                                    value: this.state["poster"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'poster');
	                                    }
	                                })
	                            ),
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'divide' },
	                                _react2.default.createElement(_reactDropzoneComponent2.default, {
	                                    eventHandlers: {
	                                        success: this.onUpload.bind(this)
	                                    },
	                                    config: uploadConfig
	                                }),
	                                _react2.default.createElement(
	                                    'div',
	                                    { className: 'select-field' },
	                                    _react2.default.createElement(
	                                        _materialUi.SelectField,
	                                        { className: 'select', value: this.state['address'], onChange: function onChange(e, index, value) {
	                                                return _this2.handleChange(e, 'address', value);
	                                            } },
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: "深圳", primaryText: '深圳' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: "北京", primaryText: '北京' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: "上海", primaryText: '上海' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: "广州", primaryText: '广州' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: "成都", primaryText: '成都' })
	                                    ),
	                                    _react2.default.createElement(
	                                        _materialUi.SelectField,
	                                        { className: 'select', value: this.state['type'], onChange: function onChange(e, index, value) {
	                                                return _this2.handleChange(e, 'type', value);
	                                            } },
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 0, primaryText: '手机电脑' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 1, primaryText: '数码家电' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 2, primaryText: '房屋租售' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 3, primaryText: '票务卡券' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 4, primaryText: '家居日用' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 5, primaryText: '图书音像' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 6, primaryText: '纪念品' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 7, primaryText: '交通工具' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 8, primaryText: '服饰配饰' }),
	                                        _react2.default.createElement(_materialUi.MenuItem, { value: 9, primaryText: '其它' })
	                                    )
	                                ),
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: '电话',
	                                    fullWidth: true,
	                                    value: this.state["contact_tel"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'contact_tel');
	                                    }
	                                }),
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: 'QQ',
	                                    fullWidth: true,
	                                    value: this.state["contact_qq"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'contact_qq');
	                                    }
	                                }),
	                                _react2.default.createElement(_materialUi.TextField, {
	                                    floatingLabelText: '微信',
	                                    fullWidth: true,
	                                    value: this.state["contact_wechat"],
	                                    onChange: function onChange(e) {
	                                        return _this2.handleChange(e, 'contact_wechat');
	                                    }
	                                })
	                            ),
	                            _react2.default.createElement(
	                                _materialUi.FloatingActionButton,
	                                { className: 'publish-btn', onClick: this.publish.bind(this) },
	                                _react2.default.createElement(_doneAll2.default, null)
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return PublishPage;
	}(_react2.default.Component);

	exports.default = PublishPage;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1),
	    ReactDOM = __webpack_require__(2),
	    Helpers = __webpack_require__(69),
	    IconComponent = __webpack_require__(70),
	    Dropzone,
	    DropzoneComponent;

	DropzoneComponent = React.createClass({ displayName: "DropzoneComponent",
	    /**
	     * Ensure we always have props to work with.
	     */
	    getDefaultProps: function getDefaultProps() {
	        return {
	            djsConfig: {},
	            config: {},
	            eventHandlers: {}
	        };
	    },

	    /**
	     * Configuration of Dropzone.js. Defaults are
	     * overriden overriden by the 'djsConfig' property
	     * For a full list of possible configurations,
	     * please consult
	     * http://www.dropzonejs.com/#configuration
	     */
	    getDjsConfig: function getDjsConfig() {
	        var options,
	            defaults = {
	            url: this.props.config.postUrl ? this.props.config.postUrl : null
	        };

	        if (this.props.djsConfig) {
	            options = Helpers.extend(true, {}, defaults, this.props.djsConfig);
	        } else {
	            options = defaults;
	        }

	        return options;
	    },

	    /**
	     * React 'componentDidMount' method
	     * Sets up dropzone.js with the component.
	     */
	    componentDidMount: function componentDidMount() {
	        var self = this,
	            options = this.getDjsConfig();

	        Dropzone = Dropzone || __webpack_require__(71);
	        Dropzone.autoDiscover = false;

	        if (!this.props.config.postUrl && !this.props.eventHandlers.drop) {
	            console.info('Neither postUrl nor a "drop" eventHandler specified, the React-Dropzone component might misbehave.');
	        }

	        this.dropzone = new Dropzone(ReactDOM.findDOMNode(self), options);
	        this.setupEvents();
	    },

	    /**
	     * React 'componentWillUnmount'
	     * Removes dropzone.js (and all its globals) if the component is being unmounted
	     */
	    componentWillUnmount: function componentWillUnmount() {
	        if (this.dropzone) {
	            var files = this.dropzone.getActiveFiles();

	            if (files.length > 0) {
	                // Well, seems like we still have stuff uploading.
	                // This is dirty, but let's keep trying to get rid
	                // of the dropzone until we're done here.
	                this.queueDestroy = true;

	                var destroyInterval = window.setInterval(function () {
	                    if (this.queueDestroy = false) {
	                        return window.clearInterval(destroyInterval);
	                    }

	                    if (this.dropzone.getActiveFiles().length === 0) {
	                        this.dropzone = this.dropzone.destroy();
	                        return window.clearInterval(destroyInterval);
	                    }
	                }.bind(this), 500);
	            } else {
	                this.dropzone = this.dropzone.destroy();
	            }
	        }
	    },

	    /**
	     * React 'componentDidUpdate'
	     * If the Dropzone hasn't been created, create it
	     */
	    componentDidUpdate: function componentDidUpdate() {
	        this.queueDestroy = false;

	        if (!this.dropzone) {
	            this.dropzone = new Dropzone(ReactDOM.findDOMNode(this), this.getDjsConfig());
	        }
	    },

	    /**
	     * React 'componentWillUpdate'
	     * Update Dropzone options each time the component updates.
	     */
	    componentWillUpdate: function componentWillUpdate() {
	        var djsConfigObj, postUrlConfigObj;

	        djsConfigObj = this.props.djsConfig ? this.props.djsConfig : {};
	        try {
	            postUrlConfigObj = this.props.config.postUrl ? { url: this.props.config.postUrl } : {};
	        } catch (err) {
	            postUrlConfigObj = {};
	        }

	        this.dropzone.options = Helpers.extend(true, {}, this.dropzone.options, djsConfigObj, postUrlConfigObj);
	    },

	    /**
	     * React 'render'
	     */
	    render: function render() {
	        var icons = [],
	            files = this.state.files,
	            config = this.props.config,
	            className = this.props.className ? 'filepicker dropzone ' + this.props.className : 'filepicker dropzone';

	        if (config.showFiletypeIcon && config.iconFiletypes && (!files || files.length < 1)) {
	            for (var i = 0; i < this.props.config.iconFiletypes.length; i = i + 1) {
	                icons.push(React.createElement(IconComponent, { filetype: this.props.config.iconFiletypes[i], key: "icon-component" + i }));
	            }
	        }

	        if (!this.props.config.postUrl && this.props.action) {
	            return React.createElement("form", { action: this.props.action, className: className }, icons, this.props.children);
	        } else {
	            return React.createElement("div", { className: className }, icons, this.props.children);
	        }
	    },

	    /**
	     * React 'getInitialState' method, setting the initial state
	     * @return {object}
	     */
	    getInitialState: function getInitialState() {
	        return {
	            files: []
	        };
	    },

	    /**
	     * Takes event handlers in this.props.eventHandlers
	     * and binds them to dropzone.js events
	     */
	    setupEvents: function setupEvents() {
	        var eventHandlers = this.props.eventHandlers;

	        if (!this.dropzone || !eventHandlers) {
	            return;
	        }

	        for (var eventHandler in eventHandlers) {
	            if (eventHandlers.hasOwnProperty(eventHandler) && eventHandlers[eventHandler]) {
	                // Check if there's an array of event handlers
	                if (Object.prototype.toString.call(eventHandlers[eventHandler]) === '[object Array]') {
	                    for (var i = 0; i < eventHandlers[eventHandler].length; i = i + 1) {
	                        // Check if it's an init handler
	                        if (eventHandler === 'init') {
	                            eventHandlers[eventHandler][i](this.dropzone);
	                        } else {
	                            this.dropzone.on(eventHandler, eventHandlers[eventHandler][i]);
	                        }
	                    }
	                } else {
	                    if (eventHandler === 'init') {
	                        eventHandlers[eventHandler](this.dropzone);
	                    } else {
	                        this.dropzone.on(eventHandler, eventHandlers[eventHandler]);
	                    }
	                }
	            }
	        }

	        this.dropzone.on('addedfile', function (file) {
	            if (file) {
	                var files = this.state.files;

	                if (!files) {
	                    files = [];
	                }

	                files.push(file);

	                this.setState({ files: files });
	            }
	        }.bind(this));

	        this.dropzone.on('removedfile', function (file) {
	            if (file) {
	                var files = this.state.files;

	                if (files && files.length > 0) {
	                    for (var i = 0; i < files.length; i++) {
	                        if (files[i].name === file.name && files[i].size === file.size) {
	                            files.splice(i, 1);
	                        }
	                    }

	                    this.setState({ files: files });
	                }
	            }
	        }.bind(this));
	    }
	});

	module.exports = DropzoneComponent;

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var Helpers = {
	    /**
	     * Clone of jQuery's extend
	     * Usage: extend(true, {}, obj1, obj2)
	     */
	    extend: function extend() {
	        var options,
	            name,
	            src,
	            copy,
	            copyIsArray,
	            clone,
	            self = this,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false,

	        // helper which replicates the jquery internal functions
	        objectHelper = {
	            hasOwn: Object.prototype.hasOwnProperty,
	            class2type: {},

	            type: function type(obj) {
	                return obj == null ? String(obj) : objectHelper.class2type[Object.prototype.toString.call(obj)] || 'object';
	            },

	            isPlainObject: function isPlainObject(obj) {
	                var key;

	                if (!obj || objectHelper.type(obj) !== 'object' || obj.nodeType || objectHelper.isWindow(obj)) {
	                    return false;
	                }

	                try {
	                    if (obj.constructor && !objectHelper.hasOwn.call(obj, 'constructor') && !objectHelper.hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
	                        return false;
	                    }
	                } catch (e) {
	                    return false;
	                }

	                return key === undefined || objectHelper.hasOwn.call(obj, key);
	            },

	            isArray: Array.isArray || function (obj) {
	                return objectHelper.type(obj) === 'array';
	            },

	            isFunction: function isFunction(obj) {
	                return objectHelper.type(obj) === 'function';
	            },

	            isWindow: function isWindow(obj) {
	                return obj != null && obj == obj.window;
	            }
	        };

	        // Handle a deep copy situation
	        if (typeof target === 'boolean') {
	            deep = target;
	            target = arguments[1] || {};
	            // skip the boolean and the target
	            i = 2;
	        }

	        // Handle case when target is a string or something (possible in deep copy)
	        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && !objectHelper.isFunction(target)) {
	            target = {};
	        }

	        // If no second argument is used then this can extend an object that is using this method
	        if (length === i) {
	            target = self;
	            --i;
	        }

	        for (; i < length; i = i + 1) {
	            if ((options = arguments[i]) != null) {
	                for (name in options) {
	                    src = target[name];
	                    copy = options[name];

	                    if (target === copy) {
	                        continue;
	                    }

	                    if (deep && copy && (objectHelper.isPlainObject(copy) || (copyIsArray = objectHelper.isArray(copy)))) {
	                        if (copyIsArray) {
	                            copyIsArray = false;
	                            clone = src && objectHelper.isArray(src) ? src : [];
	                        } else {
	                            clone = src && objectHelper.isPlainObject(src) ? src : {};
	                        }

	                        target[name] = this.extend(deep, clone, copy);
	                    } else if (copy !== undefined) {
	                        target[name] = copy;
	                    }
	                }
	            }
	        }

	        return target;
	    }
	};

	module.exports = Helpers;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var Icon = React.createClass({ displayName: "Icon",
	    render: function render() {
	        return React.createElement("div", { "data-filetype": this.props.filetype, className: "filepicker-file-icon" });
	    }
	});

	module.exports = Icon;

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	/*
	 *
	 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
	 *
	 * Copyright (c) 2012, Matias Meno
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 *
	 */

	(function () {
	  var Dropzone,
	      Emitter,
	      camelize,
	      contentLoaded,
	      detectVerticalSquash,
	      drawImageIOSFix,
	      noop,
	      without,
	      __slice = [].slice,
	      __hasProp = {}.hasOwnProperty,
	      __extends = function __extends(child, parent) {
	    for (var key in parent) {
	      if (__hasProp.call(parent, key)) child[key] = parent[key];
	    }function ctor() {
	      this.constructor = child;
	    }ctor.prototype = parent.prototype;child.prototype = new ctor();child.__super__ = parent.prototype;return child;
	  };

	  noop = function noop() {};

	  Emitter = function () {
	    function Emitter() {}

	    Emitter.prototype.addEventListener = Emitter.prototype.on;

	    Emitter.prototype.on = function (event, fn) {
	      this._callbacks = this._callbacks || {};
	      if (!this._callbacks[event]) {
	        this._callbacks[event] = [];
	      }
	      this._callbacks[event].push(fn);
	      return this;
	    };

	    Emitter.prototype.emit = function () {
	      var args, callback, callbacks, event, _i, _len;
	      event = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      this._callbacks = this._callbacks || {};
	      callbacks = this._callbacks[event];
	      if (callbacks) {
	        for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
	          callback = callbacks[_i];
	          callback.apply(this, args);
	        }
	      }
	      return this;
	    };

	    Emitter.prototype.removeListener = Emitter.prototype.off;

	    Emitter.prototype.removeAllListeners = Emitter.prototype.off;

	    Emitter.prototype.removeEventListener = Emitter.prototype.off;

	    Emitter.prototype.off = function (event, fn) {
	      var callback, callbacks, i, _i, _len;
	      if (!this._callbacks || arguments.length === 0) {
	        this._callbacks = {};
	        return this;
	      }
	      callbacks = this._callbacks[event];
	      if (!callbacks) {
	        return this;
	      }
	      if (arguments.length === 1) {
	        delete this._callbacks[event];
	        return this;
	      }
	      for (i = _i = 0, _len = callbacks.length; _i < _len; i = ++_i) {
	        callback = callbacks[i];
	        if (callback === fn) {
	          callbacks.splice(i, 1);
	          break;
	        }
	      }
	      return this;
	    };

	    return Emitter;
	  }();

	  Dropzone = function (_super) {
	    var extend, resolveOption;

	    __extends(Dropzone, _super);

	    Dropzone.prototype.Emitter = Emitter;

	    /*
	    This is a list of all available events you can register on a dropzone object.
	    
	    You can register an event handler like this:
	    
	        dropzone.on("dragEnter", function() { });
	     */

	    Dropzone.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"];

	    Dropzone.prototype.defaultOptions = {
	      url: null,
	      method: "post",
	      withCredentials: false,
	      parallelUploads: 2,
	      uploadMultiple: false,
	      maxFilesize: 256,
	      paramName: "file",
	      createImageThumbnails: true,
	      maxThumbnailFilesize: 10,
	      thumbnailWidth: 120,
	      thumbnailHeight: 120,
	      filesizeBase: 1000,
	      maxFiles: null,
	      params: {},
	      clickable: true,
	      ignoreHiddenFiles: true,
	      acceptedFiles: null,
	      acceptedMimeTypes: null,
	      autoProcessQueue: true,
	      autoQueue: true,
	      addRemoveLinks: false,
	      previewsContainer: null,
	      hiddenInputContainer: "body",
	      capture: null,
	      renameFilename: null,
	      dictDefaultMessage: "Drop files here to upload",
	      dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
	      dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
	      dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
	      dictInvalidFileType: "You can't upload files of this type.",
	      dictResponseError: "Server responded with {{statusCode}} code.",
	      dictCancelUpload: "Cancel upload",
	      dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
	      dictRemoveFile: "Remove file",
	      dictRemoveFileConfirmation: null,
	      dictMaxFilesExceeded: "You can not upload any more files.",
	      accept: function accept(file, done) {
	        return done();
	      },
	      init: function init() {
	        return noop;
	      },
	      forceFallback: false,
	      fallback: function fallback() {
	        var child, messageElement, span, _i, _len, _ref;
	        this.element.className = "" + this.element.className + " dz-browser-not-supported";
	        _ref = this.element.getElementsByTagName("div");
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          child = _ref[_i];
	          if (/(^| )dz-message($| )/.test(child.className)) {
	            messageElement = child;
	            child.className = "dz-message";
	            continue;
	          }
	        }
	        if (!messageElement) {
	          messageElement = Dropzone.createElement("<div class=\"dz-message\"><span></span></div>");
	          this.element.appendChild(messageElement);
	        }
	        span = messageElement.getElementsByTagName("span")[0];
	        if (span) {
	          if (span.textContent != null) {
	            span.textContent = this.options.dictFallbackMessage;
	          } else if (span.innerText != null) {
	            span.innerText = this.options.dictFallbackMessage;
	          }
	        }
	        return this.element.appendChild(this.getFallbackForm());
	      },
	      resize: function resize(file) {
	        var info, srcRatio, trgRatio;
	        info = {
	          srcX: 0,
	          srcY: 0,
	          srcWidth: file.width,
	          srcHeight: file.height
	        };
	        srcRatio = file.width / file.height;
	        info.optWidth = this.options.thumbnailWidth;
	        info.optHeight = this.options.thumbnailHeight;
	        if (info.optWidth == null && info.optHeight == null) {
	          info.optWidth = info.srcWidth;
	          info.optHeight = info.srcHeight;
	        } else if (info.optWidth == null) {
	          info.optWidth = srcRatio * info.optHeight;
	        } else if (info.optHeight == null) {
	          info.optHeight = 1 / srcRatio * info.optWidth;
	        }
	        trgRatio = info.optWidth / info.optHeight;
	        if (file.height < info.optHeight || file.width < info.optWidth) {
	          info.trgHeight = info.srcHeight;
	          info.trgWidth = info.srcWidth;
	        } else {
	          if (srcRatio > trgRatio) {
	            info.srcHeight = file.height;
	            info.srcWidth = info.srcHeight * trgRatio;
	          } else {
	            info.srcWidth = file.width;
	            info.srcHeight = info.srcWidth / trgRatio;
	          }
	        }
	        info.srcX = (file.width - info.srcWidth) / 2;
	        info.srcY = (file.height - info.srcHeight) / 2;
	        return info;
	      },

	      /*
	      Those functions register themselves to the events on init and handle all
	      the user interface specific stuff. Overwriting them won't break the upload
	      but can break the way it's displayed.
	      You can overwrite them if you don't like the default behavior. If you just
	      want to add an additional event handler, register it on the dropzone object
	      and don't overwrite those options.
	       */
	      drop: function drop(e) {
	        return this.element.classList.remove("dz-drag-hover");
	      },
	      dragstart: noop,
	      dragend: function dragend(e) {
	        return this.element.classList.remove("dz-drag-hover");
	      },
	      dragenter: function dragenter(e) {
	        return this.element.classList.add("dz-drag-hover");
	      },
	      dragover: function dragover(e) {
	        return this.element.classList.add("dz-drag-hover");
	      },
	      dragleave: function dragleave(e) {
	        return this.element.classList.remove("dz-drag-hover");
	      },
	      paste: noop,
	      reset: function reset() {
	        return this.element.classList.remove("dz-started");
	      },
	      addedfile: function addedfile(file) {
	        var node, removeFileEvent, removeLink, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
	        if (this.element === this.previewsContainer) {
	          this.element.classList.add("dz-started");
	        }
	        if (this.previewsContainer) {
	          file.previewElement = Dropzone.createElement(this.options.previewTemplate.trim());
	          file.previewTemplate = file.previewElement;
	          this.previewsContainer.appendChild(file.previewElement);
	          _ref = file.previewElement.querySelectorAll("[data-dz-name]");
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            node = _ref[_i];
	            node.textContent = this._renameFilename(file.name);
	          }
	          _ref1 = file.previewElement.querySelectorAll("[data-dz-size]");
	          for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	            node = _ref1[_j];
	            node.innerHTML = this.filesize(file.size);
	          }
	          if (this.options.addRemoveLinks) {
	            file._removeLink = Dropzone.createElement("<a class=\"dz-remove\" href=\"javascript:undefined;\" data-dz-remove>" + this.options.dictRemoveFile + "</a>");
	            file.previewElement.appendChild(file._removeLink);
	          }
	          removeFileEvent = function (_this) {
	            return function (e) {
	              e.preventDefault();
	              e.stopPropagation();
	              if (file.status === Dropzone.UPLOADING) {
	                return Dropzone.confirm(_this.options.dictCancelUploadConfirmation, function () {
	                  return _this.removeFile(file);
	                });
	              } else {
	                if (_this.options.dictRemoveFileConfirmation) {
	                  return Dropzone.confirm(_this.options.dictRemoveFileConfirmation, function () {
	                    return _this.removeFile(file);
	                  });
	                } else {
	                  return _this.removeFile(file);
	                }
	              }
	            };
	          }(this);
	          _ref2 = file.previewElement.querySelectorAll("[data-dz-remove]");
	          _results = [];
	          for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	            removeLink = _ref2[_k];
	            _results.push(removeLink.addEventListener("click", removeFileEvent));
	          }
	          return _results;
	        }
	      },
	      removedfile: function removedfile(file) {
	        var _ref;
	        if (file.previewElement) {
	          if ((_ref = file.previewElement) != null) {
	            _ref.parentNode.removeChild(file.previewElement);
	          }
	        }
	        return this._updateMaxFilesReachedClass();
	      },
	      thumbnail: function thumbnail(file, dataUrl) {
	        var thumbnailElement, _i, _len, _ref;
	        if (file.previewElement) {
	          file.previewElement.classList.remove("dz-file-preview");
	          _ref = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            thumbnailElement = _ref[_i];
	            thumbnailElement.alt = file.name;
	            thumbnailElement.src = dataUrl;
	          }
	          return setTimeout(function (_this) {
	            return function () {
	              return file.previewElement.classList.add("dz-image-preview");
	            };
	          }(this), 1);
	        }
	      },
	      error: function error(file, message) {
	        var node, _i, _len, _ref, _results;
	        if (file.previewElement) {
	          file.previewElement.classList.add("dz-error");
	          if (typeof message !== "String" && message.error) {
	            message = message.error;
	          }
	          _ref = file.previewElement.querySelectorAll("[data-dz-errormessage]");
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            node = _ref[_i];
	            _results.push(node.textContent = message);
	          }
	          return _results;
	        }
	      },
	      errormultiple: noop,
	      processing: function processing(file) {
	        if (file.previewElement) {
	          file.previewElement.classList.add("dz-processing");
	          if (file._removeLink) {
	            return file._removeLink.textContent = this.options.dictCancelUpload;
	          }
	        }
	      },
	      processingmultiple: noop,
	      uploadprogress: function uploadprogress(file, progress, bytesSent) {
	        var node, _i, _len, _ref, _results;
	        if (file.previewElement) {
	          _ref = file.previewElement.querySelectorAll("[data-dz-uploadprogress]");
	          _results = [];
	          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	            node = _ref[_i];
	            if (node.nodeName === 'PROGRESS') {
	              _results.push(node.value = progress);
	            } else {
	              _results.push(node.style.width = "" + progress + "%");
	            }
	          }
	          return _results;
	        }
	      },
	      totaluploadprogress: noop,
	      sending: noop,
	      sendingmultiple: noop,
	      success: function success(file) {
	        if (file.previewElement) {
	          return file.previewElement.classList.add("dz-success");
	        }
	      },
	      successmultiple: noop,
	      canceled: function canceled(file) {
	        return this.emit("error", file, "Upload canceled.");
	      },
	      canceledmultiple: noop,
	      complete: function complete(file) {
	        if (file._removeLink) {
	          file._removeLink.textContent = this.options.dictRemoveFile;
	        }
	        if (file.previewElement) {
	          return file.previewElement.classList.add("dz-complete");
	        }
	      },
	      completemultiple: noop,
	      maxfilesexceeded: noop,
	      maxfilesreached: noop,
	      queuecomplete: noop,
	      addedfiles: noop,
	      previewTemplate: "<div class=\"dz-preview dz-file-preview\">\n  <div class=\"dz-image\"><img data-dz-thumbnail /></div>\n  <div class=\"dz-details\">\n    <div class=\"dz-size\"><span data-dz-size></span></div>\n    <div class=\"dz-filename\"><span data-dz-name></span></div>\n  </div>\n  <div class=\"dz-progress\"><span class=\"dz-upload\" data-dz-uploadprogress></span></div>\n  <div class=\"dz-error-message\"><span data-dz-errormessage></span></div>\n  <div class=\"dz-success-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Check</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <path d=\"M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" stroke-opacity=\"0.198794158\" stroke=\"#747474\" fill-opacity=\"0.816519475\" fill=\"#FFFFFF\" sketch:type=\"MSShapeGroup\"></path>\n      </g>\n    </svg>\n  </div>\n  <div class=\"dz-error-mark\">\n    <svg width=\"54px\" height=\"54px\" viewBox=\"0 0 54 54\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n      <title>Error</title>\n      <defs></defs>\n      <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n        <g id=\"Check-+-Oval-2\" sketch:type=\"MSLayerGroup\" stroke=\"#747474\" stroke-opacity=\"0.198794158\" fill=\"#FFFFFF\" fill-opacity=\"0.816519475\">\n          <path d=\"M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z\" id=\"Oval-2\" sketch:type=\"MSShapeGroup\"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>"
	    };

	    extend = function extend() {
	      var key, object, objects, target, val, _i, _len;
	      target = arguments[0], objects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      for (_i = 0, _len = objects.length; _i < _len; _i++) {
	        object = objects[_i];
	        for (key in object) {
	          val = object[key];
	          target[key] = val;
	        }
	      }
	      return target;
	    };

	    function Dropzone(element, options) {
	      var elementOptions, fallback, _ref;
	      this.element = element;
	      this.version = Dropzone.version;
	      this.defaultOptions.previewTemplate = this.defaultOptions.previewTemplate.replace(/\n*/g, "");
	      this.clickableElements = [];
	      this.listeners = [];
	      this.files = [];
	      if (typeof this.element === "string") {
	        this.element = document.querySelector(this.element);
	      }
	      if (!(this.element && this.element.nodeType != null)) {
	        throw new Error("Invalid dropzone element.");
	      }
	      if (this.element.dropzone) {
	        throw new Error("Dropzone already attached.");
	      }
	      Dropzone.instances.push(this);
	      this.element.dropzone = this;
	      elementOptions = (_ref = Dropzone.optionsForElement(this.element)) != null ? _ref : {};
	      this.options = extend({}, this.defaultOptions, elementOptions, options != null ? options : {});
	      if (this.options.forceFallback || !Dropzone.isBrowserSupported()) {
	        return this.options.fallback.call(this);
	      }
	      if (this.options.url == null) {
	        this.options.url = this.element.getAttribute("action");
	      }
	      if (!this.options.url) {
	        throw new Error("No URL provided.");
	      }
	      if (this.options.acceptedFiles && this.options.acceptedMimeTypes) {
	        throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
	      }
	      if (this.options.acceptedMimeTypes) {
	        this.options.acceptedFiles = this.options.acceptedMimeTypes;
	        delete this.options.acceptedMimeTypes;
	      }
	      this.options.method = this.options.method.toUpperCase();
	      if ((fallback = this.getExistingFallback()) && fallback.parentNode) {
	        fallback.parentNode.removeChild(fallback);
	      }
	      if (this.options.previewsContainer !== false) {
	        if (this.options.previewsContainer) {
	          this.previewsContainer = Dropzone.getElement(this.options.previewsContainer, "previewsContainer");
	        } else {
	          this.previewsContainer = this.element;
	        }
	      }
	      if (this.options.clickable) {
	        if (this.options.clickable === true) {
	          this.clickableElements = [this.element];
	        } else {
	          this.clickableElements = Dropzone.getElements(this.options.clickable, "clickable");
	        }
	      }
	      this.init();
	    }

	    Dropzone.prototype.getAcceptedFiles = function () {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.accepted) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };

	    Dropzone.prototype.getRejectedFiles = function () {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (!file.accepted) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };

	    Dropzone.prototype.getFilesWithStatus = function (status) {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.status === status) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };

	    Dropzone.prototype.getQueuedFiles = function () {
	      return this.getFilesWithStatus(Dropzone.QUEUED);
	    };

	    Dropzone.prototype.getUploadingFiles = function () {
	      return this.getFilesWithStatus(Dropzone.UPLOADING);
	    };

	    Dropzone.prototype.getAddedFiles = function () {
	      return this.getFilesWithStatus(Dropzone.ADDED);
	    };

	    Dropzone.prototype.getActiveFiles = function () {
	      var file, _i, _len, _ref, _results;
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.status === Dropzone.UPLOADING || file.status === Dropzone.QUEUED) {
	          _results.push(file);
	        }
	      }
	      return _results;
	    };

	    Dropzone.prototype.init = function () {
	      var eventName, noPropagation, setupHiddenFileInput, _i, _len, _ref, _ref1;
	      if (this.element.tagName === "form") {
	        this.element.setAttribute("enctype", "multipart/form-data");
	      }
	      if (this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message")) {
	        this.element.appendChild(Dropzone.createElement("<div class=\"dz-default dz-message\"><span>" + this.options.dictDefaultMessage + "</span></div>"));
	      }
	      if (this.clickableElements.length) {
	        setupHiddenFileInput = function (_this) {
	          return function () {
	            if (_this.hiddenFileInput) {
	              _this.hiddenFileInput.parentNode.removeChild(_this.hiddenFileInput);
	            }
	            _this.hiddenFileInput = document.createElement("input");
	            _this.hiddenFileInput.setAttribute("type", "file");
	            if (_this.options.maxFiles == null || _this.options.maxFiles > 1) {
	              _this.hiddenFileInput.setAttribute("multiple", "multiple");
	            }
	            _this.hiddenFileInput.className = "dz-hidden-input";
	            if (_this.options.acceptedFiles != null) {
	              _this.hiddenFileInput.setAttribute("accept", _this.options.acceptedFiles);
	            }
	            if (_this.options.capture != null) {
	              _this.hiddenFileInput.setAttribute("capture", _this.options.capture);
	            }
	            _this.hiddenFileInput.style.visibility = "hidden";
	            _this.hiddenFileInput.style.position = "absolute";
	            _this.hiddenFileInput.style.top = "0";
	            _this.hiddenFileInput.style.left = "0";
	            _this.hiddenFileInput.style.height = "0";
	            _this.hiddenFileInput.style.width = "0";
	            document.querySelector(_this.options.hiddenInputContainer).appendChild(_this.hiddenFileInput);
	            return _this.hiddenFileInput.addEventListener("change", function () {
	              var file, files, _i, _len;
	              files = _this.hiddenFileInput.files;
	              if (files.length) {
	                for (_i = 0, _len = files.length; _i < _len; _i++) {
	                  file = files[_i];
	                  _this.addFile(file);
	                }
	              }
	              _this.emit("addedfiles", files);
	              return setupHiddenFileInput();
	            });
	          };
	        }(this);
	        setupHiddenFileInput();
	      }
	      this.URL = (_ref = window.URL) != null ? _ref : window.webkitURL;
	      _ref1 = this.events;
	      for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	        eventName = _ref1[_i];
	        this.on(eventName, this.options[eventName]);
	      }
	      this.on("uploadprogress", function (_this) {
	        return function () {
	          return _this.updateTotalUploadProgress();
	        };
	      }(this));
	      this.on("removedfile", function (_this) {
	        return function () {
	          return _this.updateTotalUploadProgress();
	        };
	      }(this));
	      this.on("canceled", function (_this) {
	        return function (file) {
	          return _this.emit("complete", file);
	        };
	      }(this));
	      this.on("complete", function (_this) {
	        return function (file) {
	          if (_this.getAddedFiles().length === 0 && _this.getUploadingFiles().length === 0 && _this.getQueuedFiles().length === 0) {
	            return setTimeout(function () {
	              return _this.emit("queuecomplete");
	            }, 0);
	          }
	        };
	      }(this));
	      noPropagation = function noPropagation(e) {
	        e.stopPropagation();
	        if (e.preventDefault) {
	          return e.preventDefault();
	        } else {
	          return e.returnValue = false;
	        }
	      };
	      this.listeners = [{
	        element: this.element,
	        events: {
	          "dragstart": function (_this) {
	            return function (e) {
	              return _this.emit("dragstart", e);
	            };
	          }(this),
	          "dragenter": function (_this) {
	            return function (e) {
	              noPropagation(e);
	              return _this.emit("dragenter", e);
	            };
	          }(this),
	          "dragover": function (_this) {
	            return function (e) {
	              var efct;
	              try {
	                efct = e.dataTransfer.effectAllowed;
	              } catch (_error) {}
	              e.dataTransfer.dropEffect = 'move' === efct || 'linkMove' === efct ? 'move' : 'copy';
	              noPropagation(e);
	              return _this.emit("dragover", e);
	            };
	          }(this),
	          "dragleave": function (_this) {
	            return function (e) {
	              return _this.emit("dragleave", e);
	            };
	          }(this),
	          "drop": function (_this) {
	            return function (e) {
	              noPropagation(e);
	              return _this.drop(e);
	            };
	          }(this),
	          "dragend": function (_this) {
	            return function (e) {
	              return _this.emit("dragend", e);
	            };
	          }(this)
	        }
	      }];
	      this.clickableElements.forEach(function (_this) {
	        return function (clickableElement) {
	          return _this.listeners.push({
	            element: clickableElement,
	            events: {
	              "click": function click(evt) {
	                if (clickableElement !== _this.element || evt.target === _this.element || Dropzone.elementInside(evt.target, _this.element.querySelector(".dz-message"))) {
	                  _this.hiddenFileInput.click();
	                }
	                return true;
	              }
	            }
	          });
	        };
	      }(this));
	      this.enable();
	      return this.options.init.call(this);
	    };

	    Dropzone.prototype.destroy = function () {
	      var _ref;
	      this.disable();
	      this.removeAllFiles(true);
	      if ((_ref = this.hiddenFileInput) != null ? _ref.parentNode : void 0) {
	        this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput);
	        this.hiddenFileInput = null;
	      }
	      delete this.element.dropzone;
	      return Dropzone.instances.splice(Dropzone.instances.indexOf(this), 1);
	    };

	    Dropzone.prototype.updateTotalUploadProgress = function () {
	      var activeFiles, file, totalBytes, totalBytesSent, totalUploadProgress, _i, _len, _ref;
	      totalBytesSent = 0;
	      totalBytes = 0;
	      activeFiles = this.getActiveFiles();
	      if (activeFiles.length) {
	        _ref = this.getActiveFiles();
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          file = _ref[_i];
	          totalBytesSent += file.upload.bytesSent;
	          totalBytes += file.upload.total;
	        }
	        totalUploadProgress = 100 * totalBytesSent / totalBytes;
	      } else {
	        totalUploadProgress = 100;
	      }
	      return this.emit("totaluploadprogress", totalUploadProgress, totalBytes, totalBytesSent);
	    };

	    Dropzone.prototype._getParamName = function (n) {
	      if (typeof this.options.paramName === "function") {
	        return this.options.paramName(n);
	      } else {
	        return "" + this.options.paramName + (this.options.uploadMultiple ? "[" + n + "]" : "");
	      }
	    };

	    Dropzone.prototype._renameFilename = function (name) {
	      if (typeof this.options.renameFilename !== "function") {
	        return name;
	      }
	      return this.options.renameFilename(name);
	    };

	    Dropzone.prototype.getFallbackForm = function () {
	      var existingFallback, fields, fieldsString, form;
	      if (existingFallback = this.getExistingFallback()) {
	        return existingFallback;
	      }
	      fieldsString = "<div class=\"dz-fallback\">";
	      if (this.options.dictFallbackText) {
	        fieldsString += "<p>" + this.options.dictFallbackText + "</p>";
	      }
	      fieldsString += "<input type=\"file\" name=\"" + this._getParamName(0) + "\" " + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + " /><input type=\"submit\" value=\"Upload!\"></div>";
	      fields = Dropzone.createElement(fieldsString);
	      if (this.element.tagName !== "FORM") {
	        form = Dropzone.createElement("<form action=\"" + this.options.url + "\" enctype=\"multipart/form-data\" method=\"" + this.options.method + "\"></form>");
	        form.appendChild(fields);
	      } else {
	        this.element.setAttribute("enctype", "multipart/form-data");
	        this.element.setAttribute("method", this.options.method);
	      }
	      return form != null ? form : fields;
	    };

	    Dropzone.prototype.getExistingFallback = function () {
	      var fallback, getFallback, tagName, _i, _len, _ref;
	      getFallback = function getFallback(elements) {
	        var el, _i, _len;
	        for (_i = 0, _len = elements.length; _i < _len; _i++) {
	          el = elements[_i];
	          if (/(^| )fallback($| )/.test(el.className)) {
	            return el;
	          }
	        }
	      };
	      _ref = ["div", "form"];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        tagName = _ref[_i];
	        if (fallback = getFallback(this.element.getElementsByTagName(tagName))) {
	          return fallback;
	        }
	      }
	    };

	    Dropzone.prototype.setupEventListeners = function () {
	      var elementListeners, event, listener, _i, _len, _ref, _results;
	      _ref = this.listeners;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        elementListeners = _ref[_i];
	        _results.push(function () {
	          var _ref1, _results1;
	          _ref1 = elementListeners.events;
	          _results1 = [];
	          for (event in _ref1) {
	            listener = _ref1[event];
	            _results1.push(elementListeners.element.addEventListener(event, listener, false));
	          }
	          return _results1;
	        }());
	      }
	      return _results;
	    };

	    Dropzone.prototype.removeEventListeners = function () {
	      var elementListeners, event, listener, _i, _len, _ref, _results;
	      _ref = this.listeners;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        elementListeners = _ref[_i];
	        _results.push(function () {
	          var _ref1, _results1;
	          _ref1 = elementListeners.events;
	          _results1 = [];
	          for (event in _ref1) {
	            listener = _ref1[event];
	            _results1.push(elementListeners.element.removeEventListener(event, listener, false));
	          }
	          return _results1;
	        }());
	      }
	      return _results;
	    };

	    Dropzone.prototype.disable = function () {
	      var file, _i, _len, _ref, _results;
	      this.clickableElements.forEach(function (element) {
	        return element.classList.remove("dz-clickable");
	      });
	      this.removeEventListeners();
	      _ref = this.files;
	      _results = [];
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        _results.push(this.cancelUpload(file));
	      }
	      return _results;
	    };

	    Dropzone.prototype.enable = function () {
	      this.clickableElements.forEach(function (element) {
	        return element.classList.add("dz-clickable");
	      });
	      return this.setupEventListeners();
	    };

	    Dropzone.prototype.filesize = function (size) {
	      var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
	      selectedSize = 0;
	      selectedUnit = "b";
	      if (size > 0) {
	        units = ['TB', 'GB', 'MB', 'KB', 'b'];
	        for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
	          unit = units[i];
	          cutoff = Math.pow(this.options.filesizeBase, 4 - i) / 10;
	          if (size >= cutoff) {
	            selectedSize = size / Math.pow(this.options.filesizeBase, 4 - i);
	            selectedUnit = unit;
	            break;
	          }
	        }
	        selectedSize = Math.round(10 * selectedSize) / 10;
	      }
	      return "<strong>" + selectedSize + "</strong> " + selectedUnit;
	    };

	    Dropzone.prototype._updateMaxFilesReachedClass = function () {
	      if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
	        if (this.getAcceptedFiles().length === this.options.maxFiles) {
	          this.emit('maxfilesreached', this.files);
	        }
	        return this.element.classList.add("dz-max-files-reached");
	      } else {
	        return this.element.classList.remove("dz-max-files-reached");
	      }
	    };

	    Dropzone.prototype.drop = function (e) {
	      var files, items;
	      if (!e.dataTransfer) {
	        return;
	      }
	      this.emit("drop", e);
	      files = e.dataTransfer.files;
	      this.emit("addedfiles", files);
	      if (files.length) {
	        items = e.dataTransfer.items;
	        if (items && items.length && items[0].webkitGetAsEntry != null) {
	          this._addFilesFromItems(items);
	        } else {
	          this.handleFiles(files);
	        }
	      }
	    };

	    Dropzone.prototype.paste = function (e) {
	      var items, _ref;
	      if ((e != null ? (_ref = e.clipboardData) != null ? _ref.items : void 0 : void 0) == null) {
	        return;
	      }
	      this.emit("paste", e);
	      items = e.clipboardData.items;
	      if (items.length) {
	        return this._addFilesFromItems(items);
	      }
	    };

	    Dropzone.prototype.handleFiles = function (files) {
	      var file, _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        _results.push(this.addFile(file));
	      }
	      return _results;
	    };

	    Dropzone.prototype._addFilesFromItems = function (items) {
	      var entry, item, _i, _len, _results;
	      _results = [];
	      for (_i = 0, _len = items.length; _i < _len; _i++) {
	        item = items[_i];
	        if (item.webkitGetAsEntry != null && (entry = item.webkitGetAsEntry())) {
	          if (entry.isFile) {
	            _results.push(this.addFile(item.getAsFile()));
	          } else if (entry.isDirectory) {
	            _results.push(this._addFilesFromDirectory(entry, entry.name));
	          } else {
	            _results.push(void 0);
	          }
	        } else if (item.getAsFile != null) {
	          if (item.kind == null || item.kind === "file") {
	            _results.push(this.addFile(item.getAsFile()));
	          } else {
	            _results.push(void 0);
	          }
	        } else {
	          _results.push(void 0);
	        }
	      }
	      return _results;
	    };

	    Dropzone.prototype._addFilesFromDirectory = function (directory, path) {
	      var dirReader, errorHandler, readEntries;
	      dirReader = directory.createReader();
	      errorHandler = function errorHandler(error) {
	        return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log(error) : void 0 : void 0;
	      };
	      readEntries = function (_this) {
	        return function () {
	          return dirReader.readEntries(function (entries) {
	            var entry, _i, _len;
	            if (entries.length > 0) {
	              for (_i = 0, _len = entries.length; _i < _len; _i++) {
	                entry = entries[_i];
	                if (entry.isFile) {
	                  entry.file(function (file) {
	                    if (_this.options.ignoreHiddenFiles && file.name.substring(0, 1) === '.') {
	                      return;
	                    }
	                    file.fullPath = "" + path + "/" + file.name;
	                    return _this.addFile(file);
	                  });
	                } else if (entry.isDirectory) {
	                  _this._addFilesFromDirectory(entry, "" + path + "/" + entry.name);
	                }
	              }
	              readEntries();
	            }
	            return null;
	          }, errorHandler);
	        };
	      }(this);
	      return readEntries();
	    };

	    Dropzone.prototype.accept = function (file, done) {
	      if (file.size > this.options.maxFilesize * 1024 * 1024) {
	        return done(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(file.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize));
	      } else if (!Dropzone.isValidFile(file, this.options.acceptedFiles)) {
	        return done(this.options.dictInvalidFileType);
	      } else if (this.options.maxFiles != null && this.getAcceptedFiles().length >= this.options.maxFiles) {
	        done(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles));
	        return this.emit("maxfilesexceeded", file);
	      } else {
	        return this.options.accept.call(this, file, done);
	      }
	    };

	    Dropzone.prototype.addFile = function (file) {
	      file.upload = {
	        progress: 0,
	        total: file.size,
	        bytesSent: 0
	      };
	      this.files.push(file);
	      file.status = Dropzone.ADDED;
	      this.emit("addedfile", file);
	      this._enqueueThumbnail(file);
	      return this.accept(file, function (_this) {
	        return function (error) {
	          if (error) {
	            file.accepted = false;
	            _this._errorProcessing([file], error);
	          } else {
	            file.accepted = true;
	            if (_this.options.autoQueue) {
	              _this.enqueueFile(file);
	            }
	          }
	          return _this._updateMaxFilesReachedClass();
	        };
	      }(this));
	    };

	    Dropzone.prototype.enqueueFiles = function (files) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        this.enqueueFile(file);
	      }
	      return null;
	    };

	    Dropzone.prototype.enqueueFile = function (file) {
	      if (file.status === Dropzone.ADDED && file.accepted === true) {
	        file.status = Dropzone.QUEUED;
	        if (this.options.autoProcessQueue) {
	          return setTimeout(function (_this) {
	            return function () {
	              return _this.processQueue();
	            };
	          }(this), 0);
	        }
	      } else {
	        throw new Error("This file can't be queued because it has already been processed or was rejected.");
	      }
	    };

	    Dropzone.prototype._thumbnailQueue = [];

	    Dropzone.prototype._processingThumbnail = false;

	    Dropzone.prototype._enqueueThumbnail = function (file) {
	      if (this.options.createImageThumbnails && file.type.match(/image.*/) && file.size <= this.options.maxThumbnailFilesize * 1024 * 1024) {
	        this._thumbnailQueue.push(file);
	        return setTimeout(function (_this) {
	          return function () {
	            return _this._processThumbnailQueue();
	          };
	        }(this), 0);
	      }
	    };

	    Dropzone.prototype._processThumbnailQueue = function () {
	      if (this._processingThumbnail || this._thumbnailQueue.length === 0) {
	        return;
	      }
	      this._processingThumbnail = true;
	      return this.createThumbnail(this._thumbnailQueue.shift(), function (_this) {
	        return function () {
	          _this._processingThumbnail = false;
	          return _this._processThumbnailQueue();
	        };
	      }(this));
	    };

	    Dropzone.prototype.removeFile = function (file) {
	      if (file.status === Dropzone.UPLOADING) {
	        this.cancelUpload(file);
	      }
	      this.files = without(this.files, file);
	      this.emit("removedfile", file);
	      if (this.files.length === 0) {
	        return this.emit("reset");
	      }
	    };

	    Dropzone.prototype.removeAllFiles = function (cancelIfNecessary) {
	      var file, _i, _len, _ref;
	      if (cancelIfNecessary == null) {
	        cancelIfNecessary = false;
	      }
	      _ref = this.files.slice();
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        file = _ref[_i];
	        if (file.status !== Dropzone.UPLOADING || cancelIfNecessary) {
	          this.removeFile(file);
	        }
	      }
	      return null;
	    };

	    Dropzone.prototype.createThumbnail = function (file, callback) {
	      var fileReader;
	      fileReader = new FileReader();
	      fileReader.onload = function (_this) {
	        return function () {
	          if (file.type === "image/svg+xml") {
	            _this.emit("thumbnail", file, fileReader.result);
	            if (callback != null) {
	              callback();
	            }
	            return;
	          }
	          return _this.createThumbnailFromUrl(file, fileReader.result, callback);
	        };
	      }(this);
	      return fileReader.readAsDataURL(file);
	    };

	    Dropzone.prototype.createThumbnailFromUrl = function (file, imageUrl, callback, crossOrigin) {
	      var img;
	      img = document.createElement("img");
	      if (crossOrigin) {
	        img.crossOrigin = crossOrigin;
	      }
	      img.onload = function (_this) {
	        return function () {
	          var canvas, ctx, resizeInfo, thumbnail, _ref, _ref1, _ref2, _ref3;
	          file.width = img.width;
	          file.height = img.height;
	          resizeInfo = _this.options.resize.call(_this, file);
	          if (resizeInfo.trgWidth == null) {
	            resizeInfo.trgWidth = resizeInfo.optWidth;
	          }
	          if (resizeInfo.trgHeight == null) {
	            resizeInfo.trgHeight = resizeInfo.optHeight;
	          }
	          canvas = document.createElement("canvas");
	          ctx = canvas.getContext("2d");
	          canvas.width = resizeInfo.trgWidth;
	          canvas.height = resizeInfo.trgHeight;
	          drawImageIOSFix(ctx, img, (_ref = resizeInfo.srcX) != null ? _ref : 0, (_ref1 = resizeInfo.srcY) != null ? _ref1 : 0, resizeInfo.srcWidth, resizeInfo.srcHeight, (_ref2 = resizeInfo.trgX) != null ? _ref2 : 0, (_ref3 = resizeInfo.trgY) != null ? _ref3 : 0, resizeInfo.trgWidth, resizeInfo.trgHeight);
	          thumbnail = canvas.toDataURL("image/png");
	          _this.emit("thumbnail", file, thumbnail);
	          if (callback != null) {
	            return callback();
	          }
	        };
	      }(this);
	      if (callback != null) {
	        img.onerror = callback;
	      }
	      return img.src = imageUrl;
	    };

	    Dropzone.prototype.processQueue = function () {
	      var i, parallelUploads, processingLength, queuedFiles;
	      parallelUploads = this.options.parallelUploads;
	      processingLength = this.getUploadingFiles().length;
	      i = processingLength;
	      if (processingLength >= parallelUploads) {
	        return;
	      }
	      queuedFiles = this.getQueuedFiles();
	      if (!(queuedFiles.length > 0)) {
	        return;
	      }
	      if (this.options.uploadMultiple) {
	        return this.processFiles(queuedFiles.slice(0, parallelUploads - processingLength));
	      } else {
	        while (i < parallelUploads) {
	          if (!queuedFiles.length) {
	            return;
	          }
	          this.processFile(queuedFiles.shift());
	          i++;
	        }
	      }
	    };

	    Dropzone.prototype.processFile = function (file) {
	      return this.processFiles([file]);
	    };

	    Dropzone.prototype.processFiles = function (files) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.processing = true;
	        file.status = Dropzone.UPLOADING;
	        this.emit("processing", file);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("processingmultiple", files);
	      }
	      return this.uploadFiles(files);
	    };

	    Dropzone.prototype._getFilesWithXhr = function (xhr) {
	      var file, files;
	      return files = function () {
	        var _i, _len, _ref, _results;
	        _ref = this.files;
	        _results = [];
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          file = _ref[_i];
	          if (file.xhr === xhr) {
	            _results.push(file);
	          }
	        }
	        return _results;
	      }.call(this);
	    };

	    Dropzone.prototype.cancelUpload = function (file) {
	      var groupedFile, groupedFiles, _i, _j, _len, _len1, _ref;
	      if (file.status === Dropzone.UPLOADING) {
	        groupedFiles = this._getFilesWithXhr(file.xhr);
	        for (_i = 0, _len = groupedFiles.length; _i < _len; _i++) {
	          groupedFile = groupedFiles[_i];
	          groupedFile.status = Dropzone.CANCELED;
	        }
	        file.xhr.abort();
	        for (_j = 0, _len1 = groupedFiles.length; _j < _len1; _j++) {
	          groupedFile = groupedFiles[_j];
	          this.emit("canceled", groupedFile);
	        }
	        if (this.options.uploadMultiple) {
	          this.emit("canceledmultiple", groupedFiles);
	        }
	      } else if ((_ref = file.status) === Dropzone.ADDED || _ref === Dropzone.QUEUED) {
	        file.status = Dropzone.CANCELED;
	        this.emit("canceled", file);
	        if (this.options.uploadMultiple) {
	          this.emit("canceledmultiple", [file]);
	        }
	      }
	      if (this.options.autoProcessQueue) {
	        return this.processQueue();
	      }
	    };

	    resolveOption = function resolveOption() {
	      var args, option;
	      option = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
	      if (typeof option === 'function') {
	        return option.apply(this, args);
	      }
	      return option;
	    };

	    Dropzone.prototype.uploadFile = function (file) {
	      return this.uploadFiles([file]);
	    };

	    Dropzone.prototype.uploadFiles = function (files) {
	      var file, formData, handleError, headerName, headerValue, headers, i, input, inputName, inputType, key, method, option, progressObj, response, updateProgress, url, value, xhr, _i, _j, _k, _l, _len, _len1, _len2, _len3, _m, _ref, _ref1, _ref2, _ref3, _ref4, _ref5;
	      xhr = new XMLHttpRequest();
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.xhr = xhr;
	      }
	      method = resolveOption(this.options.method, files);
	      url = resolveOption(this.options.url, files);
	      xhr.open(method, url, true);
	      xhr.withCredentials = !!this.options.withCredentials;
	      response = null;
	      handleError = function (_this) {
	        return function () {
	          var _j, _len1, _results;
	          _results = [];
	          for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
	            file = files[_j];
	            _results.push(_this._errorProcessing(files, response || _this.options.dictResponseError.replace("{{statusCode}}", xhr.status), xhr));
	          }
	          return _results;
	        };
	      }(this);
	      updateProgress = function (_this) {
	        return function (e) {
	          var allFilesFinished, progress, _j, _k, _l, _len1, _len2, _len3, _results;
	          if (e != null) {
	            progress = 100 * e.loaded / e.total;
	            for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
	              file = files[_j];
	              file.upload = {
	                progress: progress,
	                total: e.total,
	                bytesSent: e.loaded
	              };
	            }
	          } else {
	            allFilesFinished = true;
	            progress = 100;
	            for (_k = 0, _len2 = files.length; _k < _len2; _k++) {
	              file = files[_k];
	              if (!(file.upload.progress === 100 && file.upload.bytesSent === file.upload.total)) {
	                allFilesFinished = false;
	              }
	              file.upload.progress = progress;
	              file.upload.bytesSent = file.upload.total;
	            }
	            if (allFilesFinished) {
	              return;
	            }
	          }
	          _results = [];
	          for (_l = 0, _len3 = files.length; _l < _len3; _l++) {
	            file = files[_l];
	            _results.push(_this.emit("uploadprogress", file, progress, file.upload.bytesSent));
	          }
	          return _results;
	        };
	      }(this);
	      xhr.onload = function (_this) {
	        return function (e) {
	          var _ref;
	          if (files[0].status === Dropzone.CANCELED) {
	            return;
	          }
	          if (xhr.readyState !== 4) {
	            return;
	          }
	          response = xhr.responseText;
	          if (xhr.getResponseHeader("content-type") && ~xhr.getResponseHeader("content-type").indexOf("application/json")) {
	            try {
	              response = JSON.parse(response);
	            } catch (_error) {
	              e = _error;
	              response = "Invalid JSON response from server.";
	            }
	          }
	          updateProgress();
	          if (!(200 <= (_ref = xhr.status) && _ref < 300)) {
	            return handleError();
	          } else {
	            return _this._finished(files, response, e);
	          }
	        };
	      }(this);
	      xhr.onerror = function (_this) {
	        return function () {
	          if (files[0].status === Dropzone.CANCELED) {
	            return;
	          }
	          return handleError();
	        };
	      }(this);
	      progressObj = (_ref = xhr.upload) != null ? _ref : xhr;
	      progressObj.onprogress = updateProgress;
	      headers = {
	        "Accept": "application/json",
	        "Cache-Control": "no-cache",
	        "X-Requested-With": "XMLHttpRequest"
	      };
	      if (this.options.headers) {
	        extend(headers, this.options.headers);
	      }
	      for (headerName in headers) {
	        headerValue = headers[headerName];
	        if (headerValue) {
	          xhr.setRequestHeader(headerName, headerValue);
	        }
	      }
	      formData = new FormData();
	      if (this.options.params) {
	        _ref1 = this.options.params;
	        for (key in _ref1) {
	          value = _ref1[key];
	          formData.append(key, value);
	        }
	      }
	      for (_j = 0, _len1 = files.length; _j < _len1; _j++) {
	        file = files[_j];
	        this.emit("sending", file, xhr, formData);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("sendingmultiple", files, xhr, formData);
	      }
	      if (this.element.tagName === "FORM") {
	        _ref2 = this.element.querySelectorAll("input, textarea, select, button");
	        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
	          input = _ref2[_k];
	          inputName = input.getAttribute("name");
	          inputType = input.getAttribute("type");
	          if (input.tagName === "SELECT" && input.hasAttribute("multiple")) {
	            _ref3 = input.options;
	            for (_l = 0, _len3 = _ref3.length; _l < _len3; _l++) {
	              option = _ref3[_l];
	              if (option.selected) {
	                formData.append(inputName, option.value);
	              }
	            }
	          } else if (!inputType || (_ref4 = inputType.toLowerCase()) !== "checkbox" && _ref4 !== "radio" || input.checked) {
	            formData.append(inputName, input.value);
	          }
	        }
	      }
	      for (i = _m = 0, _ref5 = files.length - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; i = 0 <= _ref5 ? ++_m : --_m) {
	        formData.append(this._getParamName(i), files[i], this._renameFilename(files[i].name));
	      }
	      return this.submitRequest(xhr, formData, files);
	    };

	    Dropzone.prototype.submitRequest = function (xhr, formData, files) {
	      return xhr.send(formData);
	    };

	    Dropzone.prototype._finished = function (files, responseText, e) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.status = Dropzone.SUCCESS;
	        this.emit("success", file, responseText, e);
	        this.emit("complete", file);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("successmultiple", files, responseText, e);
	        this.emit("completemultiple", files);
	      }
	      if (this.options.autoProcessQueue) {
	        return this.processQueue();
	      }
	    };

	    Dropzone.prototype._errorProcessing = function (files, message, xhr) {
	      var file, _i, _len;
	      for (_i = 0, _len = files.length; _i < _len; _i++) {
	        file = files[_i];
	        file.status = Dropzone.ERROR;
	        this.emit("error", file, message, xhr);
	        this.emit("complete", file);
	      }
	      if (this.options.uploadMultiple) {
	        this.emit("errormultiple", files, message, xhr);
	        this.emit("completemultiple", files);
	      }
	      if (this.options.autoProcessQueue) {
	        return this.processQueue();
	      }
	    };

	    return Dropzone;
	  }(Emitter);

	  Dropzone.version = "4.3.0";

	  Dropzone.options = {};

	  Dropzone.optionsForElement = function (element) {
	    if (element.getAttribute("id")) {
	      return Dropzone.options[camelize(element.getAttribute("id"))];
	    } else {
	      return void 0;
	    }
	  };

	  Dropzone.instances = [];

	  Dropzone.forElement = function (element) {
	    if (typeof element === "string") {
	      element = document.querySelector(element);
	    }
	    if ((element != null ? element.dropzone : void 0) == null) {
	      throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
	    }
	    return element.dropzone;
	  };

	  Dropzone.autoDiscover = true;

	  Dropzone.discover = function () {
	    var checkElements, dropzone, dropzones, _i, _len, _results;
	    if (document.querySelectorAll) {
	      dropzones = document.querySelectorAll(".dropzone");
	    } else {
	      dropzones = [];
	      checkElements = function checkElements(elements) {
	        var el, _i, _len, _results;
	        _results = [];
	        for (_i = 0, _len = elements.length; _i < _len; _i++) {
	          el = elements[_i];
	          if (/(^| )dropzone($| )/.test(el.className)) {
	            _results.push(dropzones.push(el));
	          } else {
	            _results.push(void 0);
	          }
	        }
	        return _results;
	      };
	      checkElements(document.getElementsByTagName("div"));
	      checkElements(document.getElementsByTagName("form"));
	    }
	    _results = [];
	    for (_i = 0, _len = dropzones.length; _i < _len; _i++) {
	      dropzone = dropzones[_i];
	      if (Dropzone.optionsForElement(dropzone) !== false) {
	        _results.push(new Dropzone(dropzone));
	      } else {
	        _results.push(void 0);
	      }
	    }
	    return _results;
	  };

	  Dropzone.blacklistedBrowsers = [/opera.*Macintosh.*version\/12/i];

	  Dropzone.isBrowserSupported = function () {
	    var capableBrowser, regex, _i, _len, _ref;
	    capableBrowser = true;
	    if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector) {
	      if (!("classList" in document.createElement("a"))) {
	        capableBrowser = false;
	      } else {
	        _ref = Dropzone.blacklistedBrowsers;
	        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	          regex = _ref[_i];
	          if (regex.test(navigator.userAgent)) {
	            capableBrowser = false;
	            continue;
	          }
	        }
	      }
	    } else {
	      capableBrowser = false;
	    }
	    return capableBrowser;
	  };

	  without = function without(list, rejectedItem) {
	    var item, _i, _len, _results;
	    _results = [];
	    for (_i = 0, _len = list.length; _i < _len; _i++) {
	      item = list[_i];
	      if (item !== rejectedItem) {
	        _results.push(item);
	      }
	    }
	    return _results;
	  };

	  camelize = function camelize(str) {
	    return str.replace(/[\-_](\w)/g, function (match) {
	      return match.charAt(1).toUpperCase();
	    });
	  };

	  Dropzone.createElement = function (string) {
	    var div;
	    div = document.createElement("div");
	    div.innerHTML = string;
	    return div.childNodes[0];
	  };

	  Dropzone.elementInside = function (element, container) {
	    if (element === container) {
	      return true;
	    }
	    while (element = element.parentNode) {
	      if (element === container) {
	        return true;
	      }
	    }
	    return false;
	  };

	  Dropzone.getElement = function (el, name) {
	    var element;
	    if (typeof el === "string") {
	      element = document.querySelector(el);
	    } else if (el.nodeType != null) {
	      element = el;
	    }
	    if (element == null) {
	      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector or a plain HTML element.");
	    }
	    return element;
	  };

	  Dropzone.getElements = function (els, name) {
	    var e, el, elements, _i, _j, _len, _len1, _ref;
	    if (els instanceof Array) {
	      elements = [];
	      try {
	        for (_i = 0, _len = els.length; _i < _len; _i++) {
	          el = els[_i];
	          elements.push(this.getElement(el, name));
	        }
	      } catch (_error) {
	        e = _error;
	        elements = null;
	      }
	    } else if (typeof els === "string") {
	      elements = [];
	      _ref = document.querySelectorAll(els);
	      for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
	        el = _ref[_j];
	        elements.push(el);
	      }
	    } else if (els.nodeType != null) {
	      elements = [els];
	    }
	    if (!(elements != null && elements.length)) {
	      throw new Error("Invalid `" + name + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
	    }
	    return elements;
	  };

	  Dropzone.confirm = function (question, accepted, rejected) {
	    if (window.confirm(question)) {
	      return accepted();
	    } else if (rejected != null) {
	      return rejected();
	    }
	  };

	  Dropzone.isValidFile = function (file, acceptedFiles) {
	    var baseMimeType, mimeType, validType, _i, _len;
	    if (!acceptedFiles) {
	      return true;
	    }
	    acceptedFiles = acceptedFiles.split(",");
	    mimeType = file.type;
	    baseMimeType = mimeType.replace(/\/.*$/, "");
	    for (_i = 0, _len = acceptedFiles.length; _i < _len; _i++) {
	      validType = acceptedFiles[_i];
	      validType = validType.trim();
	      if (validType.charAt(0) === ".") {
	        if (file.name.toLowerCase().indexOf(validType.toLowerCase(), file.name.length - validType.length) !== -1) {
	          return true;
	        }
	      } else if (/\/\*$/.test(validType)) {
	        if (baseMimeType === validType.replace(/\/.*$/, "")) {
	          return true;
	        }
	      } else {
	        if (mimeType === validType) {
	          return true;
	        }
	      }
	    }
	    return false;
	  };

	  if (typeof jQuery !== "undefined" && jQuery !== null) {
	    jQuery.fn.dropzone = function (options) {
	      return this.each(function () {
	        return new Dropzone(this, options);
	      });
	    };
	  }

	  if (typeof module !== "undefined" && module !== null) {
	    module.exports = Dropzone;
	  } else {
	    window.Dropzone = Dropzone;
	  }

	  Dropzone.ADDED = "added";

	  Dropzone.QUEUED = "queued";

	  Dropzone.ACCEPTED = Dropzone.QUEUED;

	  Dropzone.UPLOADING = "uploading";

	  Dropzone.PROCESSING = Dropzone.UPLOADING;

	  Dropzone.CANCELED = "canceled";

	  Dropzone.ERROR = "error";

	  Dropzone.SUCCESS = "success";

	  /*
	  
	  Bugfix for iOS 6 and 7
	  Source: http://stackoverflow.com/questions/11929099/html5-canvas-drawimage-ratio-bug-ios
	  based on the work of https://github.com/stomita/ios-imagefile-megapixel
	   */

	  detectVerticalSquash = function detectVerticalSquash(img) {
	    var alpha, canvas, ctx, data, ey, ih, iw, py, ratio, sy;
	    iw = img.naturalWidth;
	    ih = img.naturalHeight;
	    canvas = document.createElement("canvas");
	    canvas.width = 1;
	    canvas.height = ih;
	    ctx = canvas.getContext("2d");
	    ctx.drawImage(img, 0, 0);
	    data = ctx.getImageData(0, 0, 1, ih).data;
	    sy = 0;
	    ey = ih;
	    py = ih;
	    while (py > sy) {
	      alpha = data[(py - 1) * 4 + 3];
	      if (alpha === 0) {
	        ey = py;
	      } else {
	        sy = py;
	      }
	      py = ey + sy >> 1;
	    }
	    ratio = py / ih;
	    if (ratio === 0) {
	      return 1;
	    } else {
	      return ratio;
	    }
	  };

	  drawImageIOSFix = function drawImageIOSFix(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh) {
	    var vertSquashRatio;
	    vertSquashRatio = detectVerticalSquash(img);
	    return ctx.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
	  };

	  /*
	   * contentloaded.js
	   *
	   * Author: Diego Perini (diego.perini at gmail.com)
	   * Summary: cross-browser wrapper for DOMContentLoaded
	   * Updated: 20101020
	   * License: MIT
	   * Version: 1.2
	   *
	   * URL:
	   * http://javascript.nwbox.com/ContentLoaded/
	   * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
	   */

	  contentLoaded = function contentLoaded(win, fn) {
	    var add, doc, done, _init, _poll, pre, rem, root, top;
	    done = false;
	    top = true;
	    doc = win.document;
	    root = doc.documentElement;
	    add = doc.addEventListener ? "addEventListener" : "attachEvent";
	    rem = doc.addEventListener ? "removeEventListener" : "detachEvent";
	    pre = doc.addEventListener ? "" : "on";
	    _init = function init(e) {
	      if (e.type === "readystatechange" && doc.readyState !== "complete") {
	        return;
	      }
	      (e.type === "load" ? win : doc)[rem](pre + e.type, _init, false);
	      if (!done && (done = true)) {
	        return fn.call(win, e.type || e);
	      }
	    };
	    _poll = function poll() {
	      var e;
	      try {
	        root.doScroll("left");
	      } catch (_error) {
	        e = _error;
	        setTimeout(_poll, 50);
	        return;
	      }
	      return _init("poll");
	    };
	    if (doc.readyState !== "complete") {
	      if (doc.createEventObject && root.doScroll) {
	        try {
	          top = !win.frameElement;
	        } catch (_error) {}
	        if (top) {
	          _poll();
	        }
	      }
	      doc[add](pre + "DOMContentLoaded", _init, false);
	      doc[add](pre + "readystatechange", _init, false);
	      return win[add](pre + "load", _init, false);
	    }
	  };

	  Dropzone._autoDiscoverFunction = function () {
	    if (Dropzone.autoDiscover) {
	      return Dropzone.discover();
	    }
	  };

	  contentLoaded(window, Dropzone._autoDiscoverFunction);
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(72)(module)))

/***/ },
/* 72 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _materialUi = __webpack_require__(7);

	var _WaterfallList = __webpack_require__(74);

	var _WaterfallList2 = _interopRequireDefault(_WaterfallList);

	var _Goods = __webpack_require__(75);

	var _Goods2 = _interopRequireDefault(_Goods);

	var _Order = __webpack_require__(76);

	var _Order2 = _interopRequireDefault(_Order);

	var _UserInfo = __webpack_require__(77);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _reactSwipeableViews = __webpack_require__(80);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _userService = __webpack_require__(32);

	var _userService2 = _interopRequireDefault(_userService);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/23.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// From https://github.com/oliviertassinari/react-swipeable-views


	var styles = {
	    headline: {
	        fontSize: 24,
	        paddingTop: 16,
	        marginBottom: 12,
	        fontWeight: 400
	    },
	    tab: {
	        background: "#fff",
	        color: "#000"
	    },
	    checkbox: {
	        marginBottom: 16,
	        width: "150px",
	        display: "inline-block"
	    },
	    checkboxContainer: {
	        width: "450px",
	        margin: "5px auto 0"
	    }
	};

	var UserCenter = function (_React$Component) {
	    _inherits(UserCenter, _React$Component);

	    function UserCenter(props) {
	        _classCallCheck(this, UserCenter);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserCenter).call(this, props));

	        _this.state = {
	            goodsList: false,
	            orderList: false,
	            orderType: 4,
	            hack: true
	        };
	        return _this;
	    }

	    _createClass(UserCenter, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('change header', {
	                title: '闲鹅 - 个人中心',
	                color: '#cddc39'
	            });
	            _event2.default.emit('show header');
	        }
	    }, {
	        key: 'activeGoodsList',
	        value: function activeGoodsList() {
	            this.setState(Object.assign(this.state, {
	                goodsList: true
	            }));

	            this.forceUpdate();
	        }
	    }, {
	        key: 'activeOrderList',
	        value: function activeOrderList() {
	            this.setState(Object.assign(this.state, {
	                orderList: true
	            }));

	            this.forceUpdate();
	        }
	    }, {
	        key: 'switchOrderType',
	        value: function switchOrderType(event, value) {
	            var _this2 = this;

	            this.setState(Object.assign(this.state, {
	                hack: false
	            }));
	            this.setState(Object.assign(this.state, {
	                orderType: value
	            }));
	            setTimeout(function (_) {
	                _this2.setState(Object.assign(_this2.state, {
	                    hack: true
	                }));
	            }, 0);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var OrderWaterFall = this.state.hack ? _react2.default.createElement(_WaterfallList2.default, {
	                type: 'user',
	                api: 'getMyOrder', s: true,
	                active: true,
	                target: '.ordersList',
	                params: {
	                    status: parseInt(this.state.orderType)
	                },
	                subComponent: _Order2.default,
	                data: 'orders',
	                ref: 'orderList'
	            }) : null;
	            return _react2.default.createElement(
	                _PageContent2.default,
	                null,
	                _react2.default.createElement(
	                    'div',
	                    { style: { position: 'relative', top: '-40px' } },
	                    _react2.default.createElement(
	                        _materialUi.Tabs,
	                        null,
	                        _react2.default.createElement(
	                            _materialUi.Tab,
	                            { label: '个人信息', style: styles.tab },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(_UserInfo2.default, null)
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _materialUi.Tab,
	                            { label: '我的发布', style: styles.tab, onActive: this.activeGoodsList.bind(this) },
	                            _react2.default.createElement(
	                                'div',
	                                { className: 'goodsList' },
	                                _react2.default.createElement(
	                                    _materialUi.Card,
	                                    {
	                                        style: {
	                                            backgroundColor: "rgba(255,255,255,0.8)",
	                                            width: "100%",
	                                            margin: "0 auto",
	                                            position: "relative",
	                                            paddingBottom: "40px"
	                                        } },
	                                    this.state.goodsList ? _react2.default.createElement(_WaterfallList2.default, {
	                                        type: 'user',
	                                        api: 'getMyGoods',
	                                        active: true,
	                                        target: '.goodsList',
	                                        params: {
	                                            userID: _userService2.default.userInfo && _userService2.default.userInfo.id || "",
	                                            type: ""
	                                        },
	                                        subComponent: _Goods2.default,
	                                        data: 'goods'
	                                    }) : null
	                                )
	                            )
	                        ),
	                        _react2.default.createElement(
	                            _materialUi.Tab,
	                            { label: '我的订单', style: styles.tab, onActive: this.activeOrderList.bind(this) },
	                            _react2.default.createElement(
	                                'div',
	                                null,
	                                _react2.default.createElement(
	                                    _materialUi.Card,
	                                    {
	                                        style: {
	                                            backgroundColor: "rgba(255,255,255,0.8)",
	                                            width: "100%",
	                                            margin: "0 auto",
	                                            position: "relative",
	                                            paddingBottom: "40px"
	                                        } },
	                                    _react2.default.createElement(
	                                        _materialUi.List,
	                                        null,
	                                        _react2.default.createElement(
	                                            'div',
	                                            { style: styles.checkboxContainer, className: 'ordersList' },
	                                            _react2.default.createElement(
	                                                _materialUi.RadioButtonGroup,
	                                                { name: 'orderType', defaultSelected: '4', onChange: this.switchOrderType.bind(this) },
	                                                _react2.default.createElement(_materialUi.RadioButton, {
	                                                    label: '所有订单',
	                                                    style: styles.checkbox,
	                                                    value: '4'
	                                                }),
	                                                _react2.default.createElement(_materialUi.RadioButton, {
	                                                    label: '已完成',
	                                                    style: styles.checkbox,
	                                                    value: '3'
	                                                }),
	                                                _react2.default.createElement(_materialUi.RadioButton, {
	                                                    label: '未完成',
	                                                    style: styles.checkbox,
	                                                    value: '0'
	                                                })
	                                            )
	                                        ),
	                                        _react2.default.createElement(_materialUi.Divider, null),
	                                        this.state.orderList ? OrderWaterFall : null
	                                    )
	                                )
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return UserCenter;
	}(_react2.default.Component);

	exports.default = UserCenter;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _materialUi = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var WaterfallList = function (_React$Component) {
	    _inherits(WaterfallList, _React$Component);

	    function WaterfallList(props) {
	        _classCallCheck(this, WaterfallList);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WaterfallList).call(this, props));

	        _this.state = {
	            tilesData: [],
	            type: _this.props.type,
	            api: _this.props.api,
	            active: _this.props.active,
	            target: _this.props.target,
	            start: 0,
	            limit: 10,
	            data: _this.props.data,
	            params: _this.props.params,
	            isShow: false
	        };
	        return _this;
	    }

	    _createClass(WaterfallList, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            if (this.props.active) {
	                this.fetchData();
	            }
	            window.onscroll = function (_) {
	                var height = $(_this2.state.target).height() + $(_this2.state.target).offset().top - $(window).height() - $(document).scrollTop();
	                if (height < 10 && !_this2.fetching) {
	                    _this2.fetchData();
	                }
	            };
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            window.onscroll = null;
	        }
	    }, {
	        key: 'fetchData',
	        value: function fetchData() {
	            var _this3 = this;

	            this.fetching = true;
	            this.showProgress();
	            _api2.default[this.state.type][this.state.api](Object.assign({
	                begin: this.state.start,
	                limit: this.state.limit
	            }, this.props.params)).then(function (res) {
	                _this3.fetching = false;
	                var tilesData = _this3.state.tilesData.concat(res.data[_this3.state.data]);
	                _this3.setState(Object.assign(_this3.state, {
	                    tilesData: tilesData,
	                    progress: false,
	                    begin: tilesData.length + 1,
	                    isShow: true
	                }));
	            });
	        }
	    }, {
	        key: 'showProgress',
	        value: function showProgress() {
	            this.setState(Object.assign(this.state, {
	                progress: true
	            }));
	        }
	    }, {
	        key: 'hideProgress',
	        value: function hideProgress() {
	            this.setState(Object.assign(this.state, {
	                progress: false
	            }));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var SubComponent = this.props.subComponent;
	            var mainInfo = this.state.isShow && this.state.tilesData.length ? this.state.tilesData.map(function (tile, index) {
	                return _react2.default.createElement(SubComponent, { tile: tile, key: index });
	            }) : null;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _materialUi.List,
	                    null,
	                    _react2.default.createElement(
	                        _reactAddonsCssTransitionGroup2.default,
	                        {
	                            component: 'div',
	                            transitionName: 'main-info',
	                            transitionEnterTimeout: 1000,
	                            transitionLeaveTimeout: 1000
	                        },
	                        mainInfo
	                    )
	                ),
	                this.state.progress ? _react2.default.createElement(
	                    'div',
	                    { className: 'loading-container' },
	                    _react2.default.createElement(_materialUi.RefreshIndicator, {
	                        size: 40,
	                        left: 10,
	                        top: 10,
	                        status: 'loading',
	                        style: {
	                            display: 'inline-block',
	                            position: 'relative',
	                            margin: '0 auto'
	                        }
	                    })
	                ) : null
	            );
	        }
	    }]);

	    return WaterfallList;
	}(_react2.default.Component);

	exports.default = WaterfallList;

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _reactRouter = __webpack_require__(3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Goods = function (_React$Component) {
	    _inherits(Goods, _React$Component);

	    function Goods(props) {
	        _classCallCheck(this, Goods);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Goods).call(this, props));
	    }

	    _createClass(Goods, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            _reactRouter.browserHistory.push("/detail/" + this.props.tile.goodID);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_materialUi.ListItem, {
	                    leftAvatar: _react2.default.createElement(_materialUi.Avatar, { src: this.props.tile.compressImage }),
	                    primaryText: this.props.tile.goodName,
	                    secondaryText: this.props.tile.description.length > 100 ? this.props.tile.description.substr(0, 100) + "..." : this.props.tile.description,
	                    secondaryTextLines: 2,
	                    onClick: this.handleClick.bind(this)
	                }),
	                _react2.default.createElement(_materialUi.Divider, { inset: true })
	            );
	        }
	    }]);

	    return Goods;
	}(_react2.default.Component);

	exports.default = Goods;

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var Orders = function (_React$Component) {
	    _inherits(Orders, _React$Component);

	    function Orders(props) {
	        _classCallCheck(this, Orders);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Orders).call(this, props));
	    }

	    _createClass(Orders, [{
	        key: 'render',
	        value: function render() {
	            var List = !!this.props.tile.count ? _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(_materialUi.ListItem, {
	                    leftAvatar: _react2.default.createElement(_materialUi.Badge, { badgeContent: this.props.tile.count + "个", primary: true, className: 'badge-custom' }),
	                    primaryText: this.props.tile.goodName,
	                    secondaryText: "",
	                    secondaryTextLines: 2
	                }),
	                _react2.default.createElement(_materialUi.Divider, { inset: true })
	            ) : null;
	            return _react2.default.createElement(
	                'div',
	                null,
	                List
	            );
	        }
	    }]);

	    return Orders;
	}(_react2.default.Component);

	exports.default = Orders;

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(7);

	var _api = __webpack_require__(33);

	var _api2 = _interopRequireDefault(_api);

	var _permIdentity = __webpack_require__(25);

	var _permIdentity2 = _interopRequireDefault(_permIdentity);

	var _permPhoneMsg = __webpack_require__(78);

	var _permPhoneMsg2 = _interopRequireDefault(_permPhoneMsg);

	var _stars = __webpack_require__(79);

	var _stars2 = _interopRequireDefault(_stars);

	var _accountCircle = __webpack_require__(64);

	var _accountCircle2 = _interopRequireDefault(_accountCircle);

	var _reactAddonsCssTransitionGroup = __webpack_require__(28);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by natumsol on 16/7/24.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var UserInfo = function (_React$Component) {
	    _inherits(UserInfo, _React$Component);

	    function UserInfo(props) {
	        _classCallCheck(this, UserInfo);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserInfo).call(this, props));

	        _this.state = {
	            isShow: false
	        };
	        return _this;
	    }

	    _createClass(UserInfo, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;

	            _api2.default.user.getUserInfo().then(function (res) {
	                _this2.setState({
	                    isShow: true,
	                    userInfo: res.data
	                });
	            }).catch(function (err) {});
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var userInfo = this.state.isShow ? _react2.default.createElement(
	                _materialUi.Card,
	                {
	                    style: {
	                        backgroundColor: "rgba(255,255,255,0.8)",
	                        width: "100%",
	                        margin: "0 auto",
	                        position: "relative",
	                        paddingBottom: "40px"
	                    } },
	                _react2.default.createElement(_materialUi.CardHeader, {
	                    title: this.state.userInfo.nickname,
	                    subtitle: '',
	                    avatar: this.state.userInfo.compressPicture
	                }),
	                _react2.default.createElement(_materialUi.Divider, null),
	                _react2.default.createElement(
	                    _materialUi.List,
	                    null,
	                    _react2.default.createElement(_materialUi.ListItem, { primaryText: '昵称', secondaryText: this.state.userInfo.nickname, leftIcon: _react2.default.createElement(_permIdentity2.default, null) }),
	                    _react2.default.createElement(_materialUi.ListItem, { primaryText: '电子邮箱', secondaryText: this.state.userInfo.email, leftIcon: _react2.default.createElement(_stars2.default, null) }),
	                    _react2.default.createElement(_materialUi.ListItem, { primaryText: '电话', secondaryText: this.state.userInfo.username, leftIcon: _react2.default.createElement(_permPhoneMsg2.default, null) }),
	                    _react2.default.createElement(_materialUi.ListItem, { primaryText: 'QQ', secondaryText: this.state.userInfo.qq, leftIcon: _react2.default.createElement(_accountCircle2.default, null) })
	                )
	            ) : null;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    _reactAddonsCssTransitionGroup2.default,
	                    {
	                        component: 'div',
	                        transitionName: 'main-info',
	                        transitionEnterTimeout: 1000,
	                        transitionLeaveTimeout: 1000
	                    },
	                    userInfo
	                )
	            );
	        }
	    }]);

	    return UserInfo;
	}(_react2.default.Component);

	exports.default = UserInfo;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionPermPhoneMsg = function ActionPermPhoneMsg(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z' }));
	};
	ActionPermPhoneMsg = (0, _pure2.default)(ActionPermPhoneMsg);
	ActionPermPhoneMsg.displayName = 'ActionPermPhoneMsg';
	ActionPermPhoneMsg.muiName = 'SvgIcon';

	exports.default = ActionPermPhoneMsg;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(9);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(21);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var ActionStars = function ActionStars(props) {
	  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' }));
	};
	ActionStars = (0, _pure2.default)(ActionStars);
	ActionStars.displayName = 'ActionStars';
	ActionStars.muiName = 'SvgIcon';

	exports.default = ActionStars;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SwipeableViews = __webpack_require__(81);

	var _SwipeableViews2 = _interopRequireDefault(_SwipeableViews);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.default = _SwipeableViews2.default;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactMotion = __webpack_require__(82);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _objectWithoutProperties(obj, keys) {
	  var target = {};for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	  }return target;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var styles = {
	  root: {
	    overflowX: 'hidden'
	  },
	  container: {
	    display: 'flex',
	    willChange: 'transform'
	  },
	  slide: {
	    width: '100%',
	    flexShrink: 0,
	    overflow: 'auto'
	  }
	};

	var RESISTANCE_COEF = 0.7;
	var UNCERTAINTY_THRESHOLD = 3; // px

	var SwipeableViews = function (_Component) {
	  _inherits(SwipeableViews, _Component);

	  function SwipeableViews() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, SwipeableViews);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SwipeableViews)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTouchStart = function (event) {
	      if (_this.props.onTouchStart) {
	        _this.props.onTouchStart(event);
	      }

	      var touch = event.touches[0];

	      _this.startWidth = (0, _reactDom.findDOMNode)(_this).getBoundingClientRect().width;
	      _this.startX = touch.pageX;
	      _this.lastX = touch.pageX;
	      _this.vx = 0;
	      _this.startY = touch.pageY;
	      _this.isSwiping = undefined;
	      _this.started = true;
	    }, _this.handleTouchMove = function (event) {
	      // The touch start event can be cancel.
	      // Makes sure we set a starting point.
	      if (!_this.started) {
	        _this.handleTouchStart(event);
	        return;
	      }

	      var touch = event.touches[0];

	      // We don't know yet.
	      if (_this.isSwiping === undefined) {
	        if (event.defaultPrevented) {
	          _this.isSwiping = false;
	        } else {
	          var dx = Math.abs(_this.startX - touch.pageX);
	          var dy = Math.abs(_this.startY - touch.pageY);

	          var isSwiping = dx > dy && dx > UNCERTAINTY_THRESHOLD;

	          if (isSwiping === true || dx > UNCERTAINTY_THRESHOLD || dy > UNCERTAINTY_THRESHOLD) {
	            _this.isSwiping = isSwiping;
	            _this.startX = touch.pageX; // Shift the starting point.
	          }
	        }
	      }

	      if (_this.isSwiping !== true) {
	        return;
	      }

	      // Prevent native scrolling
	      event.preventDefault();

	      _this.vx = _this.vx * 0.5 + (touch.pageX - _this.lastX) * 0.5;
	      _this.lastX = touch.pageX;

	      var indexMax = _react.Children.count(_this.props.children) - 1;

	      var index = _this.state.indexLatest + (_this.startX - touch.pageX) / _this.startWidth;

	      if (!_this.props.resistance) {
	        // Reset the starting point
	        if (index < 0) {
	          index = 0;
	          _this.startX = touch.pageX;
	        } else if (index > indexMax) {
	          index = indexMax;
	          _this.startX = touch.pageX;
	        }
	      } else {
	        if (index < 0) {
	          index = Math.exp(index * RESISTANCE_COEF) - 1;
	        } else if (index > indexMax) {
	          index = indexMax + 1 - Math.exp((indexMax - index) * RESISTANCE_COEF);
	        }
	      }

	      _this.setState({
	        isDragging: true,
	        indexCurrent: index
	      }, function () {
	        if (_this.props.onSwitching) {
	          _this.props.onSwitching(index, 'move');
	        }
	      });
	    }, _this.handleTouchEnd = function (event) {
	      if (_this.props.onTouchEnd) {
	        _this.props.onTouchEnd(event);
	      }

	      // The touch start event can be cancel.
	      // Makes sure that a starting point is set.
	      if (!_this.started) {
	        return;
	      }

	      _this.started = false;

	      if (_this.isSwiping !== true) {
	        return;
	      }

	      var indexLatest = _this.state.indexLatest;
	      var indexCurrent = _this.state.indexCurrent;

	      var indexNew = void 0;

	      // Quick movement
	      if (Math.abs(_this.vx) > _this.props.threshold) {
	        if (_this.vx > 0) {
	          indexNew = Math.floor(indexCurrent);
	        } else {
	          indexNew = Math.ceil(indexCurrent);
	        }
	      } else {
	        // Some hysteresis with indexLatest
	        if (Math.abs(indexLatest - indexCurrent) > 0.6) {
	          indexNew = Math.round(indexCurrent);
	        } else {
	          indexNew = indexLatest;
	        }
	      }

	      var indexMax = _react.Children.count(_this.props.children) - 1;

	      if (indexNew < 0) {
	        indexNew = 0;
	      } else if (indexNew > indexMax) {
	        indexNew = indexMax;
	      }

	      _this.setState({
	        indexCurrent: indexNew,
	        indexLatest: indexNew,
	        isDragging: false
	      }, function () {
	        if (_this.props.onSwitching) {
	          _this.props.onSwitching(indexNew, 'end');
	        }

	        if (_this.props.onChangeIndex && indexNew !== indexLatest) {
	          _this.props.onChangeIndex(indexNew, indexLatest);
	        }
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(SwipeableViews, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.setState({
	        indexCurrent: this.props.index,
	        indexLatest: this.props.index,
	        isDragging: false,
	        isFirstRender: true,
	        heightLatest: 0
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      /* eslint-disable react/no-did-mount-set-state */
	      this.setState({
	        isFirstRender: false
	      });
	      /* eslint-enable react/no-did-mount-set-state */
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var index = nextProps.index;

	      if (typeof index === 'number' && index !== this.props.index) {
	        this.setState({
	          indexCurrent: index,
	          indexLatest: index
	        });
	      }
	    }
	  }, {
	    key: 'updateHeight',
	    value: function updateHeight(node, index) {
	      if (node !== null && index === this.state.indexLatest) {
	        var child = node.children[0];
	        if (child !== undefined && child.offsetHeight !== undefined && this.state.heightLatest !== child.offsetHeight) {
	          this.setState({
	            heightLatest: child.offsetHeight
	          });
	        }
	      }
	    }
	  }, {
	    key: 'renderContainer',
	    value: function renderContainer(interpolatedStyle, updateHeight, childrenToRender) {
	      var containerStyle = this.props.containerStyle;

	      var translate = -interpolatedStyle.translate;

	      var styleNew = {
	        WebkitTransform: 'translate3d(' + translate + '%, 0, 0)',
	        transform: 'translate3d(' + translate + '%, 0, 0)'
	      };

	      if (updateHeight) {
	        styleNew.height = interpolatedStyle.height;
	      }

	      return _react2.default.createElement('div', { style: _extends(styleNew, styles.container, containerStyle) }, childrenToRender);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var index = _props.index;
	      var onChangeIndex = _props.onChangeIndex;
	      var onSwitching = _props.onSwitching;
	      var resistance = _props.resistance;
	      var threshold = _props.threshold;
	      var animateTransitions = _props.animateTransitions;
	      var children = _props.children;
	      var containerStyle = _props.containerStyle;
	      var slideStyle = _props.slideStyle;
	      var disabled = _props.disabled;
	      var springConfig = _props.springConfig;
	      var style = _props.style;

	      var other = _objectWithoutProperties(_props, ['index', 'onChangeIndex', 'onSwitching', 'resistance', 'threshold', 'animateTransitions', 'children', 'containerStyle', 'slideStyle', 'disabled', 'springConfig', 'style']);

	      var _state = this.state;
	      var indexCurrent = _state.indexCurrent;
	      var isDragging = _state.isDragging;
	      var isFirstRender = _state.isFirstRender;
	      var heightLatest = _state.heightLatest;

	      var translate = indexCurrent * 100;
	      var height = heightLatest;

	      var motionStyle = isDragging || !animateTransitions ? {
	        translate: translate,
	        height: height
	      } : {
	        translate: (0, _reactMotion.spring)(translate, springConfig),
	        height: height !== 0 ? (0, _reactMotion.spring)(height, springConfig) : 0
	      };

	      var touchEvents = disabled ? {} : {
	        onTouchStart: this.handleTouchStart,
	        onTouchMove: this.handleTouchMove,
	        onTouchEnd: this.handleTouchEnd
	      };

	      var updateHeight = true;
	      // There is no point to animate if we already provide a height
	      if (containerStyle && (containerStyle.height || containerStyle.maxHeight || containerStyle.minHeight)) {
	        updateHeight = false;
	      }

	      var slideStyleObj = _extends({}, styles.slide, slideStyle);

	      var childrenToRender = _react.Children.map(children, function (child, index2) {
	        if (isFirstRender && index2 > 0) {
	          return null;
	        }

	        var ref = void 0;

	        if (updateHeight) {
	          ref = function ref(node) {
	            return _this2.updateHeight(node, index2);
	          };
	        }

	        return _react2.default.createElement('div', { ref: ref, style: slideStyleObj }, child);
	      });

	      return _react2.default.createElement('div', _extends({}, other, {
	        style: _extends({}, styles.root, style)
	      }, touchEvents), _react2.default.createElement(_reactMotion.Motion, { style: motionStyle }, function (interpolatedStyle) {
	        return _this2.renderContainer(interpolatedStyle, updateHeight, childrenToRender);
	      }));
	    }
	  }]);

	  return SwipeableViews;
	}(_react.Component);

	SwipeableViews.propTypes = {
	  /**
	   * If `false`, changes to the index prop will not cause an animated transition.
	   */
	  animateTransitions: _react.PropTypes.bool,
	  /**
	   * Use this property to provide your slides.
	   */
	  children: _react.PropTypes.node.isRequired,
	  /**
	   * This is the inlined style that will be applied
	   * to each slide container.
	   */
	  containerStyle: _react.PropTypes.object,
	  /**
	   * If `true`, it will disable touch events.
	   * This is useful when you want to prohibit the user from changing slides.
	   */
	  disabled: _react.PropTypes.bool,
	  /**
	   * This is the index of the slide to show.
	   * This is useful when you want to change the default slide shown.
	   * Or when you have tabs linked to each slide.
	   */
	  index: _react.PropTypes.number,
	  /**
	   * This is callback prop. It's call by the
	   * component when the shown slide change after a swipe made by the user.
	   * This is useful when you have tabs linked to each slide.
	   *
	   * @param {integer} index This is the current index of the slide.
	   * @param {integer} fromIndex This is the oldest index of the slide.
	   */
	  onChangeIndex: _react.PropTypes.func,
	  /**
	   * This is callback prop. It's called by the
	   * component when the slide switching.
	   * This is useful when you want to implement something corresponding to the current slide position.
	   *
	   * @param {integer} index This is the current index of the slide.
	   * @param {string} type Can be either `move` or `end`.
	   */
	  onSwitching: _react.PropTypes.func,
	  /**
	   * @ignore
	   */
	  onTouchEnd: _react.PropTypes.func,
	  /**
	   * @ignore
	   */
	  onTouchStart: _react.PropTypes.func,
	  /**
	   * If `true`, it will add bounds effect on the edges.
	   */
	  resistance: _react.PropTypes.bool,
	  /**
	   * This is the inlined style that will be applied
	   * on the slide component.
	   */
	  slideStyle: _react.PropTypes.object,
	  /**
	   * This is the config given to react-motion for the spring.
	   * This is useful to change the dynamic of the transition.
	   */
	  springConfig: _react.PropTypes.object,
	  /**
	   * This is the inlined style that will be applied
	   * on the root component.
	   */
	  style: _react.PropTypes.object,
	  /**
	   * This is the threshold used for detecting a quick swipe.
	   * If the computed speed is above this value, the index change.
	   */
	  threshold: _react.PropTypes.number
	};
	SwipeableViews.defaultProps = {
	  animateTransitions: true,
	  index: 0,
	  threshold: 5,
	  resistance: false,
	  disabled: false,
	  springConfig: {
	    stiffness: 300,
	    damping: 30
	  }
	};
	exports.default = SwipeableViews;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequire(obj) {
	  return obj && obj.__esModule ? obj['default'] : obj;
	}

	var _Motion = __webpack_require__(83);

	exports.Motion = _interopRequire(_Motion);

	var _StaggeredMotion = __webpack_require__(90);

	exports.StaggeredMotion = _interopRequire(_StaggeredMotion);

	var _TransitionMotion = __webpack_require__(91);

	exports.TransitionMotion = _interopRequire(_TransitionMotion);

	var _spring = __webpack_require__(93);

	exports.spring = _interopRequire(_spring);

	var _presets = __webpack_require__(94);

	exports.presets = _interopRequire(_presets);

	// deprecated, dummy warning function

	var _reorderKeys = __webpack_require__(95);

	exports.reorderKeys = _interopRequire(_reorderKeys);

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _mapToZero = __webpack_require__(84);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(85);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(86);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(87);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(88);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(89);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	var Motion = _react2['default'].createClass({
	  displayName: 'Motion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyle: _react.PropTypes.objectOf(_react.PropTypes.number),
	    style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    onRest: _react.PropTypes.func
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyle = _props.defaultStyle;
	    var style = _props.style;

	    var currentStyle = defaultStyle || _stripStyle2['default'](style);
	    var currentVelocity = _mapToZero2['default'](currentStyle);
	    return {
	      currentStyle: currentStyle,
	      currentVelocity: currentVelocity,
	      lastIdealStyle: currentStyle,
	      lastIdealVelocity: currentVelocity
	    };
	  },

	  wasAnimating: false,
	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyle: null,
	  // after checking for unreadPropStyle != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(destStyle) {
	    var dirty = false;
	    var _state = this.state;
	    var currentStyle = _state.currentStyle;
	    var currentVelocity = _state.currentVelocity;
	    var lastIdealStyle = _state.lastIdealStyle;
	    var lastIdealVelocity = _state.lastIdealVelocity;

	    for (var key in destStyle) {
	      if (!destStyle.hasOwnProperty(key)) {
	        continue;
	      }

	      var styleValue = destStyle[key];
	      if (typeof styleValue === 'number') {
	        if (!dirty) {
	          dirty = true;
	          currentStyle = _extends({}, currentStyle);
	          currentVelocity = _extends({}, currentVelocity);
	          lastIdealStyle = _extends({}, lastIdealStyle);
	          lastIdealVelocity = _extends({}, lastIdealVelocity);
	        }

	        currentStyle[key] = styleValue;
	        currentVelocity[key] = 0;
	        lastIdealStyle[key] = styleValue;
	        lastIdealVelocity[key] = 0;
	      }
	    }

	    if (dirty) {
	      this.setState({ currentStyle: currentStyle, currentVelocity: currentVelocity, lastIdealStyle: lastIdealStyle, lastIdealVelocity: lastIdealVelocity });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      // check if we need to animate in the first place
	      var propsStyle = _this.props.style;
	      if (_shouldStopAnimation2['default'](_this.state.currentStyle, propsStyle, _this.state.currentVelocity)) {
	        if (_this.wasAnimating && _this.props.onRest) {
	          _this.props.onRest();
	        }

	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.wasAnimating = false;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      _this.wasAnimating = true;

	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyle = {};
	      var newLastIdealVelocity = {};
	      var newCurrentStyle = {};
	      var newCurrentVelocity = {};

	      for (var key in propsStyle) {
	        if (!propsStyle.hasOwnProperty(key)) {
	          continue;
	        }

	        var styleValue = propsStyle[key];
	        if (typeof styleValue === 'number') {
	          newCurrentStyle[key] = styleValue;
	          newCurrentVelocity[key] = 0;
	          newLastIdealStyle[key] = styleValue;
	          newLastIdealVelocity[key] = 0;
	        } else {
	          var newLastIdealStyleValue = _this.state.lastIdealStyle[key];
	          var newLastIdealVelocityValue = _this.state.lastIdealVelocity[key];
	          for (var i = 0; i < framesToCatchUp; i++) {
	            var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            newLastIdealStyleValue = _stepper[0];
	            newLastIdealVelocityValue = _stepper[1];
	          }

	          var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	          var nextIdealX = _stepper2[0];
	          var nextIdealV = _stepper2[1];

	          newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	          newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	          newLastIdealStyle[key] = newLastIdealStyleValue;
	          newLastIdealVelocity[key] = newLastIdealVelocityValue;
	        }
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyle: newCurrentStyle,
	        currentVelocity: newCurrentVelocity,
	        lastIdealStyle: newLastIdealStyle,
	        lastIdealVelocity: newLastIdealVelocity
	      });

	      _this.unreadPropStyle = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyle != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyle);
	    }

	    this.unreadPropStyle = props.style;
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyle);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = Motion;
	module.exports = exports['default'];

/***/ },
/* 84 */
/***/ function(module, exports) {

	

	// currently used to initiate the velocity style object to 0
	'use strict';

	exports.__esModule = true;
	exports['default'] = mapToZero;

	function mapToZero(obj) {
	  var ret = {};
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      ret[key] = 0;
	    }
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 85 */
/***/ function(module, exports) {

	
	// turn {x: {val: 1, stiffness: 1, damping: 2}, y: 2} generated by
	// `{x: spring(1, {stiffness: 1, damping: 2}), y: 2}` into {x: 1, y: 2}

	'use strict';

	exports.__esModule = true;
	exports['default'] = stripStyle;

	function stripStyle(style) {
	  var ret = {};
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = typeof style[key] === 'number' ? style[key] : style[key].val;
	  }
	  return ret;
	}

	module.exports = exports['default'];

/***/ },
/* 86 */
/***/ function(module, exports) {

	

	// stepper is used a lot. Saves allocation to return the same array wrapper.
	// This is fine and danger-free against mutations because the callsite
	// immediately destructures it and gets the numbers inside without passing the
	"use strict";

	exports.__esModule = true;
	exports["default"] = stepper;

	var reusedTuple = [];

	function stepper(secondPerFrame, x, v, destX, k, b, precision) {
	  // Spring stiffness, in kg / s^2

	  // for animations, destX is really spring length (spring at rest). initial
	  // position is considered as the stretched/compressed position of a spring
	  var Fspring = -k * (x - destX);

	  // Damping, in kg / s
	  var Fdamper = -b * v;

	  // usually we put mass here, but for animation purposes, specifying mass is a
	  // bit redundant. you could simply adjust k and b accordingly
	  // let a = (Fspring + Fdamper) / mass;
	  var a = Fspring + Fdamper;

	  var newV = v + a * secondPerFrame;
	  var newX = x + newV * secondPerFrame;

	  if (Math.abs(newV) < precision && Math.abs(newX - destX) < precision) {
	    reusedTuple[0] = destX;
	    reusedTuple[1] = 0;
	    return reusedTuple;
	  }

	  reusedTuple[0] = newX;
	  reusedTuple[1] = newV;
	  return reusedTuple;
	}

	module.exports = exports["default"];
	// array reference around.

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";

	// Generated by CoffeeScript 1.7.1
	(function () {
	  var getNanoSeconds, hrtime, loadTime;

	  if (typeof performance !== "undefined" && performance !== null && performance.now) {
	    module.exports = function () {
	      return performance.now();
	    };
	  } else if (typeof process !== "undefined" && process !== null && process.hrtime) {
	    module.exports = function () {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function getNanoSeconds() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function () {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function () {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }
	}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var now = __webpack_require__(87),
	    root = typeof window === 'undefined' ? global : window,
	    vendors = ['moz', 'webkit'],
	    suffix = 'AnimationFrame',
	    raf = root['request' + suffix],
	    caf = root['cancel' + suffix] || root['cancelRequest' + suffix];

	for (var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix];
	  caf = root[vendors[i] + 'Cancel' + suffix] || root[vendors[i] + 'CancelRequest' + suffix];
	}

	// Some versions of FF have rAF but not cAF
	if (!raf || !caf) {
	  var last = 0,
	      id = 0,
	      queue = [],
	      frameDuration = 1000 / 60;

	  raf = function raf(callback) {
	    if (queue.length === 0) {
	      var _now = now(),
	          next = Math.max(0, frameDuration - (_now - last));
	      last = next + _now;
	      setTimeout(function () {
	        var cp = queue.slice(0);
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0;
	        for (var i = 0; i < cp.length; i++) {
	          if (!cp[i].cancelled) {
	            try {
	              cp[i].callback(last);
	            } catch (e) {
	              setTimeout(function () {
	                throw e;
	              }, 0);
	            }
	          }
	        }
	      }, Math.round(next));
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    });
	    return id;
	  };

	  caf = function caf(handle) {
	    for (var i = 0; i < queue.length; i++) {
	      if (queue[i].handle === handle) {
	        queue[i].cancelled = true;
	      }
	    }
	  };
	}

	module.exports = function (fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn);
	};
	module.exports.cancel = function () {
	  caf.apply(root, arguments);
	};
	module.exports.polyfill = function () {
	  root.requestAnimationFrame = raf;
	  root.cancelAnimationFrame = caf;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 89 */
/***/ function(module, exports) {

	

	// usage assumption: currentStyle values have already been rendered but it says
	// nothing of whether currentStyle is stale (see unreadPropStyle)
	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldStopAnimation;

	function shouldStopAnimation(currentStyle, style, currentVelocity) {
	  for (var key in style) {
	    if (!style.hasOwnProperty(key)) {
	      continue;
	    }

	    if (currentVelocity[key] !== 0) {
	      return false;
	    }

	    var styleValue = typeof style[key] === 'number' ? style[key] : style[key].val;
	    // stepper will have already taken care of rounding precision errors, so
	    // won't have such thing as 0.9999 !=== 1
	    if (currentStyle[key] !== styleValue) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _mapToZero = __webpack_require__(84);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(85);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(86);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _performanceNow = __webpack_require__(87);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(88);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(89);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	function shouldStopAnimationAll(currentStyles, styles, currentVelocities) {
	  for (var i = 0; i < currentStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], styles[i], currentVelocities[i])) {
	      return false;
	    }
	  }
	  return true;
	}

	var StaggeredMotion = _react2['default'].createClass({
	  displayName: 'StaggeredMotion',

	  propTypes: {
	    // TOOD: warn against putting a config in here
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.objectOf(_react.PropTypes.number)),
	    styles: _react.PropTypes.func.isRequired,
	    children: _react.PropTypes.func.isRequired
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;

	    var currentStyles = defaultStyles || styles().map(_stripStyle2['default']);
	    var currentVelocities = currentStyles.map(function (currentStyle) {
	      return _mapToZero2['default'](currentStyle);
	    });
	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: currentStyles,
	      lastIdealVelocities: currentVelocities
	    };
	  },

	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _state = this.state;
	    var currentStyles = _state.currentStyles;
	    var currentVelocities = _state.currentVelocities;
	    var lastIdealStyles = _state.lastIdealStyles;
	    var lastIdealVelocities = _state.lastIdealVelocities;

	    var someDirty = false;
	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i];
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!unreadPropStyle.hasOwnProperty(key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            someDirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	        }
	      }
	    }

	    if (someDirty) {
	      this.setState({ currentStyles: currentStyles, currentVelocities: currentVelocities, lastIdealStyles: lastIdealStyles, lastIdealVelocities: lastIdealVelocities });
	    }
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      var destStyles = _this.props.styles(_this.state.lastIdealStyles);

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var newLastIdealStyles = [];
	      var newLastIdealVelocities = [];
	      var newCurrentStyles = [];
	      var newCurrentVelocities = [];

	      for (var i = 0; i < destStyles.length; i++) {
	        var destStyle = destStyles[i];
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in destStyle) {
	          if (!destStyle.hasOwnProperty(key)) {
	            continue;
	          }

	          var styleValue = destStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = _this.state.lastIdealStyles[i][key];
	            var newLastIdealVelocityValue = _this.state.lastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles != null) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    this.unreadPropStyles = props.styles(this.state.lastIdealStyles);
	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var renderedChildren = this.props.children(this.state.currentStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = StaggeredMotion;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _mapToZero = __webpack_require__(84);

	var _mapToZero2 = _interopRequireDefault(_mapToZero);

	var _stripStyle = __webpack_require__(85);

	var _stripStyle2 = _interopRequireDefault(_stripStyle);

	var _stepper3 = __webpack_require__(86);

	var _stepper4 = _interopRequireDefault(_stepper3);

	var _mergeDiff = __webpack_require__(92);

	var _mergeDiff2 = _interopRequireDefault(_mergeDiff);

	var _performanceNow = __webpack_require__(87);

	var _performanceNow2 = _interopRequireDefault(_performanceNow);

	var _raf = __webpack_require__(88);

	var _raf2 = _interopRequireDefault(_raf);

	var _shouldStopAnimation = __webpack_require__(89);

	var _shouldStopAnimation2 = _interopRequireDefault(_shouldStopAnimation);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var msPerFrame = 1000 / 60;

	// the children function & (potential) styles function asks as param an
	// Array<TransitionPlainStyle>, where each TransitionPlainStyle is of the format
	// {key: string, data?: any, style: PlainStyle}. However, the way we keep
	// internal states doesn't contain such a data structure (check the state and
	// TransitionMotionState). So when children function and others ask for such
	// data we need to generate them on the fly by combining mergedPropsStyles and
	// currentStyles/lastIdealStyles
	function rehydrateStyles(mergedPropsStyles, unreadPropStyles, plainStyles) {
	  if (unreadPropStyles == null) {
	    // $FlowFixMe
	    return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	      return {
	        key: mergedPropsStyle.key,
	        data: mergedPropsStyle.data,
	        style: plainStyles[i]
	      };
	    });
	  }
	  return mergedPropsStyles.map(function (mergedPropsStyle, i) {
	    // $FlowFixMe
	    for (var j = 0; j < unreadPropStyles.length; j++) {
	      // $FlowFixMe
	      if (unreadPropStyles[j].key === mergedPropsStyle.key) {
	        return {
	          // $FlowFixMe
	          key: unreadPropStyles[j].key,
	          data: unreadPropStyles[j].data,
	          style: plainStyles[i]
	        };
	      }
	    }
	    // $FlowFixMe
	    return { key: mergedPropsStyle.key, data: mergedPropsStyle.data, style: plainStyles[i] };
	  });
	}

	function shouldStopAnimationAll(currentStyles, destStyles, currentVelocities, mergedPropsStyles) {
	  if (mergedPropsStyles.length !== destStyles.length) {
	    return false;
	  }

	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (mergedPropsStyles[i].key !== destStyles[i].key) {
	      return false;
	    }
	  }

	  // we have the invariant that mergedPropsStyles and
	  // currentStyles/currentVelocities/last* are synced in terms of cells, see
	  // mergeAndSync comment for more info
	  for (var i = 0; i < mergedPropsStyles.length; i++) {
	    if (!_shouldStopAnimation2['default'](currentStyles[i], destStyles[i].style, currentVelocities[i])) {
	      return false;
	    }
	  }

	  return true;
	}

	// core key merging logic

	// things to do: say previously merged style is {a, b}, dest style (prop) is {b,
	// c}, previous current (interpolating) style is {a, b}
	// **invariant**: current[i] corresponds to merged[i] in terms of key

	// steps:
	// turn merged style into {a?, b, c}
	//    add c, value of c is destStyles.c
	//    maybe remove a, aka call willLeave(a), then merged is either {b, c} or {a, b, c}
	// turn current (interpolating) style from {a, b} into {a?, b, c}
	//    maybe remove a
	//    certainly add c, value of c is willEnter(c)
	// loop over merged and construct new current
	// dest doesn't change, that's owner's
	function mergeAndSync(willEnter, willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldLastIdealStyles, oldLastIdealVelocities) {
	  var newMergedPropsStyles = _mergeDiff2['default'](oldMergedPropsStyles, destStyles, function (oldIndex, oldMergedPropsStyle) {
	    var leavingStyle = willLeave(oldMergedPropsStyle);
	    if (leavingStyle == null) {
	      return null;
	    }
	    if (_shouldStopAnimation2['default'](oldCurrentStyles[oldIndex], leavingStyle, oldCurrentVelocities[oldIndex])) {
	      return null;
	    }
	    return { key: oldMergedPropsStyle.key, data: oldMergedPropsStyle.data, style: leavingStyle };
	  });

	  var newCurrentStyles = [];
	  var newCurrentVelocities = [];
	  var newLastIdealStyles = [];
	  var newLastIdealVelocities = [];
	  for (var i = 0; i < newMergedPropsStyles.length; i++) {
	    var newMergedPropsStyleCell = newMergedPropsStyles[i];
	    var foundOldIndex = null;
	    for (var j = 0; j < oldMergedPropsStyles.length; j++) {
	      if (oldMergedPropsStyles[j].key === newMergedPropsStyleCell.key) {
	        foundOldIndex = j;
	        break;
	      }
	    }
	    // TODO: key search code
	    if (foundOldIndex == null) {
	      var plainStyle = willEnter(newMergedPropsStyleCell);
	      newCurrentStyles[i] = plainStyle;
	      newLastIdealStyles[i] = plainStyle;

	      // $FlowFixMe
	      var velocity = _mapToZero2['default'](newMergedPropsStyleCell.style);
	      newCurrentVelocities[i] = velocity;
	      newLastIdealVelocities[i] = velocity;
	    } else {
	      newCurrentStyles[i] = oldCurrentStyles[foundOldIndex];
	      newLastIdealStyles[i] = oldLastIdealStyles[foundOldIndex];
	      newCurrentVelocities[i] = oldCurrentVelocities[foundOldIndex];
	      newLastIdealVelocities[i] = oldLastIdealVelocities[foundOldIndex];
	    }
	  }

	  return [newMergedPropsStyles, newCurrentStyles, newCurrentVelocities, newLastIdealStyles, newLastIdealVelocities];
	}

	var TransitionMotion = _react2['default'].createClass({
	  displayName: 'TransitionMotion',

	  propTypes: {
	    defaultStyles: _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.number).isRequired
	    })),
	    styles: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.arrayOf(_react.PropTypes.shape({
	      key: _react.PropTypes.string.isRequired,
	      data: _react.PropTypes.any,
	      style: _react.PropTypes.objectOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.object])).isRequired
	    }))]).isRequired,
	    children: _react.PropTypes.func.isRequired,
	    willLeave: _react.PropTypes.func,
	    willEnter: _react.PropTypes.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      willEnter: function willEnter(styleThatEntered) {
	        return _stripStyle2['default'](styleThatEntered.style);
	      },
	      // recall: returning null makes the current unmounting TransitionStyle
	      // disappear immediately
	      willLeave: function willLeave() {
	        return null;
	      }
	    };
	  },

	  getInitialState: function getInitialState() {
	    var _props = this.props;
	    var defaultStyles = _props.defaultStyles;
	    var styles = _props.styles;
	    var willEnter = _props.willEnter;
	    var willLeave = _props.willLeave;

	    var destStyles = typeof styles === 'function' ? styles(defaultStyles) : styles;

	    // this is special. for the first time around, we don't have a comparison
	    // between last (no last) and current merged props. we'll compute last so:
	    // say default is {a, b} and styles (dest style) is {b, c}, we'll
	    // fabricate last as {a, b}
	    var oldMergedPropsStyles = undefined;
	    if (defaultStyles == null) {
	      oldMergedPropsStyles = destStyles;
	    } else {
	      // $FlowFixMe
	      oldMergedPropsStyles = defaultStyles.map(function (defaultStyleCell) {
	        // TODO: key search code
	        for (var i = 0; i < destStyles.length; i++) {
	          if (destStyles[i].key === defaultStyleCell.key) {
	            return destStyles[i];
	          }
	        }
	        return defaultStyleCell;
	      });
	    }
	    var oldCurrentStyles = defaultStyles == null ? destStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _stripStyle2['default'](s.style);
	    });
	    var oldCurrentVelocities = defaultStyles == null ? destStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    }) : defaultStyles.map(function (s) {
	      return _mapToZero2['default'](s.style);
	    });

	    var _mergeAndSync = mergeAndSync(
	    // $FlowFixMe
	    willEnter,
	    // $FlowFixMe
	    willLeave, oldMergedPropsStyles, destStyles, oldCurrentStyles, oldCurrentVelocities, oldCurrentStyles, // oldLastIdealStyles really
	    oldCurrentVelocities);

	    var mergedPropsStyles = _mergeAndSync[0];
	    var currentStyles = _mergeAndSync[1];
	    var currentVelocities = _mergeAndSync[2];
	    var lastIdealStyles = _mergeAndSync[3];
	    var lastIdealVelocities = _mergeAndSync[4];
	    // oldLastIdealVelocities really

	    return {
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities,
	      mergedPropsStyles: mergedPropsStyles
	    };
	  },

	  animationID: null,
	  prevTime: 0,
	  accumulatedTime: 0,
	  // it's possible that currentStyle's value is stale: if props is immediately
	  // changed from 0 to 400 to spring(0) again, the async currentStyle is still
	  // at 0 (didn't have time to tick and interpolate even once). If we naively
	  // compare currentStyle with destVal it'll be 0 === 0 (no animation, stop).
	  // In reality currentStyle should be 400
	  unreadPropStyles: null,
	  // after checking for unreadPropStyles != null, we manually go set the
	  // non-interpolating values (those that are a number, without a spring
	  // config)
	  clearUnreadPropStyle: function clearUnreadPropStyle(unreadPropStyles) {
	    var _mergeAndSync2 = mergeAndSync(
	    // $FlowFixMe
	    this.props.willEnter,
	    // $FlowFixMe
	    this.props.willLeave, this.state.mergedPropsStyles, unreadPropStyles, this.state.currentStyles, this.state.currentVelocities, this.state.lastIdealStyles, this.state.lastIdealVelocities);

	    var mergedPropsStyles = _mergeAndSync2[0];
	    var currentStyles = _mergeAndSync2[1];
	    var currentVelocities = _mergeAndSync2[2];
	    var lastIdealStyles = _mergeAndSync2[3];
	    var lastIdealVelocities = _mergeAndSync2[4];

	    for (var i = 0; i < unreadPropStyles.length; i++) {
	      var unreadPropStyle = unreadPropStyles[i].style;
	      var dirty = false;

	      for (var key in unreadPropStyle) {
	        if (!unreadPropStyle.hasOwnProperty(key)) {
	          continue;
	        }

	        var styleValue = unreadPropStyle[key];
	        if (typeof styleValue === 'number') {
	          if (!dirty) {
	            dirty = true;
	            currentStyles[i] = _extends({}, currentStyles[i]);
	            currentVelocities[i] = _extends({}, currentVelocities[i]);
	            lastIdealStyles[i] = _extends({}, lastIdealStyles[i]);
	            lastIdealVelocities[i] = _extends({}, lastIdealVelocities[i]);
	            mergedPropsStyles[i] = {
	              key: mergedPropsStyles[i].key,
	              data: mergedPropsStyles[i].data,
	              style: _extends({}, mergedPropsStyles[i].style)
	            };
	          }
	          currentStyles[i][key] = styleValue;
	          currentVelocities[i][key] = 0;
	          lastIdealStyles[i][key] = styleValue;
	          lastIdealVelocities[i][key] = 0;
	          mergedPropsStyles[i].style[key] = styleValue;
	        }
	      }
	    }

	    // unlike the other 2 components, we can't detect staleness and optionally
	    // opt out of setState here. each style object's data might contain new
	    // stuff we're not/cannot compare
	    this.setState({
	      currentStyles: currentStyles,
	      currentVelocities: currentVelocities,
	      mergedPropsStyles: mergedPropsStyles,
	      lastIdealStyles: lastIdealStyles,
	      lastIdealVelocities: lastIdealVelocities
	    });
	  },

	  startAnimationIfNecessary: function startAnimationIfNecessary() {
	    var _this = this;

	    // TODO: when config is {a: 10} and dest is {a: 10} do we raf once and
	    // call cb? No, otherwise accidental parent rerender causes cb trigger
	    this.animationID = _raf2['default'](function () {
	      var propStyles = _this.props.styles;
	      var destStyles = typeof propStyles === 'function' ? propStyles(rehydrateStyles(_this.state.mergedPropsStyles, _this.unreadPropStyles, _this.state.lastIdealStyles)) : propStyles;

	      // check if we need to animate in the first place
	      if (shouldStopAnimationAll(_this.state.currentStyles, destStyles, _this.state.currentVelocities, _this.state.mergedPropsStyles)) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.accumulatedTime = 0;
	        return;
	      }

	      var currentTime = _performanceNow2['default']();
	      var timeDelta = currentTime - _this.prevTime;
	      _this.prevTime = currentTime;
	      _this.accumulatedTime = _this.accumulatedTime + timeDelta;
	      // more than 10 frames? prolly switched browser tab. Restart
	      if (_this.accumulatedTime > msPerFrame * 10) {
	        _this.accumulatedTime = 0;
	      }

	      if (_this.accumulatedTime === 0) {
	        // no need to cancel animationID here; shouldn't have any in flight
	        _this.animationID = null;
	        _this.startAnimationIfNecessary();
	        return;
	      }

	      var currentFrameCompletion = (_this.accumulatedTime - Math.floor(_this.accumulatedTime / msPerFrame) * msPerFrame) / msPerFrame;
	      var framesToCatchUp = Math.floor(_this.accumulatedTime / msPerFrame);

	      var _mergeAndSync3 = mergeAndSync(
	      // $FlowFixMe
	      _this.props.willEnter,
	      // $FlowFixMe
	      _this.props.willLeave, _this.state.mergedPropsStyles, destStyles, _this.state.currentStyles, _this.state.currentVelocities, _this.state.lastIdealStyles, _this.state.lastIdealVelocities);

	      var newMergedPropsStyles = _mergeAndSync3[0];
	      var newCurrentStyles = _mergeAndSync3[1];
	      var newCurrentVelocities = _mergeAndSync3[2];
	      var newLastIdealStyles = _mergeAndSync3[3];
	      var newLastIdealVelocities = _mergeAndSync3[4];

	      for (var i = 0; i < newMergedPropsStyles.length; i++) {
	        var newMergedPropsStyle = newMergedPropsStyles[i].style;
	        var newCurrentStyle = {};
	        var newCurrentVelocity = {};
	        var newLastIdealStyle = {};
	        var newLastIdealVelocity = {};

	        for (var key in newMergedPropsStyle) {
	          if (!newMergedPropsStyle.hasOwnProperty(key)) {
	            continue;
	          }

	          var styleValue = newMergedPropsStyle[key];
	          if (typeof styleValue === 'number') {
	            newCurrentStyle[key] = styleValue;
	            newCurrentVelocity[key] = 0;
	            newLastIdealStyle[key] = styleValue;
	            newLastIdealVelocity[key] = 0;
	          } else {
	            var newLastIdealStyleValue = newLastIdealStyles[i][key];
	            var newLastIdealVelocityValue = newLastIdealVelocities[i][key];
	            for (var j = 0; j < framesToCatchUp; j++) {
	              var _stepper = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	              newLastIdealStyleValue = _stepper[0];
	              newLastIdealVelocityValue = _stepper[1];
	            }

	            var _stepper2 = _stepper4['default'](msPerFrame / 1000, newLastIdealStyleValue, newLastIdealVelocityValue, styleValue.val, styleValue.stiffness, styleValue.damping, styleValue.precision);

	            var nextIdealX = _stepper2[0];
	            var nextIdealV = _stepper2[1];

	            newCurrentStyle[key] = newLastIdealStyleValue + (nextIdealX - newLastIdealStyleValue) * currentFrameCompletion;
	            newCurrentVelocity[key] = newLastIdealVelocityValue + (nextIdealV - newLastIdealVelocityValue) * currentFrameCompletion;
	            newLastIdealStyle[key] = newLastIdealStyleValue;
	            newLastIdealVelocity[key] = newLastIdealVelocityValue;
	          }
	        }

	        newLastIdealStyles[i] = newLastIdealStyle;
	        newLastIdealVelocities[i] = newLastIdealVelocity;
	        newCurrentStyles[i] = newCurrentStyle;
	        newCurrentVelocities[i] = newCurrentVelocity;
	      }

	      _this.animationID = null;
	      // the amount we're looped over above
	      _this.accumulatedTime -= framesToCatchUp * msPerFrame;

	      _this.setState({
	        currentStyles: newCurrentStyles,
	        currentVelocities: newCurrentVelocities,
	        lastIdealStyles: newLastIdealStyles,
	        lastIdealVelocities: newLastIdealVelocities,
	        mergedPropsStyles: newMergedPropsStyles
	      });

	      _this.unreadPropStyles = null;

	      _this.startAnimationIfNecessary();
	    });
	  },

	  componentDidMount: function componentDidMount() {
	    this.prevTime = _performanceNow2['default']();
	    this.startAnimationIfNecessary();
	  },

	  componentWillReceiveProps: function componentWillReceiveProps(props) {
	    if (this.unreadPropStyles) {
	      // previous props haven't had the chance to be set yet; set them here
	      this.clearUnreadPropStyle(this.unreadPropStyles);
	    }

	    if (typeof props.styles === 'function') {
	      // $FlowFixMe
	      this.unreadPropStyles = props.styles(rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles));
	    } else {
	      this.unreadPropStyles = props.styles;
	    }

	    if (this.animationID == null) {
	      this.prevTime = _performanceNow2['default']();
	      this.startAnimationIfNecessary();
	    }
	  },

	  componentWillUnmount: function componentWillUnmount() {
	    if (this.animationID != null) {
	      _raf2['default'].cancel(this.animationID);
	      this.animationID = null;
	    }
	  },

	  render: function render() {
	    var hydratedStyles = rehydrateStyles(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles);
	    var renderedChildren = this.props.children(hydratedStyles);
	    return renderedChildren && _react2['default'].Children.only(renderedChildren);
	  }
	});

	exports['default'] = TransitionMotion;
	module.exports = exports['default'];

	// list of styles, each containing interpolating values. Part of what's passed
	// to children function. Notice that this is
	// Array<ActualInterpolatingStyleObject>, without the wrapper that is {key: ...,
	// data: ... style: ActualInterpolatingStyleObject}. Only mergedPropsStyles
	// contains the key & data info (so that we only have a single source of truth
	// for these, and to save space). Check the comment for `rehydrateStyles` to
	// see how we regenerate the entirety of what's passed to children function

	// the array that keeps track of currently rendered stuff! Including stuff
	// that you've unmounted but that's still animating. This is where it lives

/***/ },
/* 92 */
/***/ function(module, exports) {

	

	// core keys merging algorithm. If previous render's keys are [a, b], and the
	// next render's [c, b, d], what's the final merged keys and ordering?

	// - c and a must both be before b
	// - b before d
	// - ordering between a and c ambiguous

	// this reduces to merging two partially ordered lists (e.g. lists where not
	// every item has a definite ordering, like comparing a and c above). For the
	// ambiguous ordering we deterministically choose to place the next render's
	// item after the previous'; so c after a

	// this is called a topological sorting. Except the existing algorithms don't
	// work well with js bc of the amount of allocation, and isn't optimized for our
	// current use-case bc the runtime is linear in terms of edges (see wiki for
	// meaning), which is huge when two lists have many common elements
	'use strict';

	exports.__esModule = true;
	exports['default'] = mergeDiff;

	function mergeDiff(prev, next, onRemove) {
	  // bookkeeping for easier access of a key's index below. This is 2 allocations +
	  // potentially triggering chrome hash map mode for objs (so it might be faster

	  var prevKeyIndex = {};
	  for (var i = 0; i < prev.length; i++) {
	    prevKeyIndex[prev[i].key] = i;
	  }
	  var nextKeyIndex = {};
	  for (var i = 0; i < next.length; i++) {
	    nextKeyIndex[next[i].key] = i;
	  }

	  // first, an overly elaborate way of merging prev and next, eliminating
	  // duplicates (in terms of keys). If there's dupe, keep the item in next).
	  // This way of writing it saves allocations
	  var ret = [];
	  for (var i = 0; i < next.length; i++) {
	    ret[i] = next[i];
	  }
	  for (var i = 0; i < prev.length; i++) {
	    if (!nextKeyIndex.hasOwnProperty(prev[i].key)) {
	      // this is called my TM's `mergeAndSync`, which calls willLeave. We don't
	      // merge in keys that the user desires to kill
	      var fill = onRemove(i, prev[i]);
	      if (fill != null) {
	        ret.push(fill);
	      }
	    }
	  }

	  // now all the items all present. Core sorting logic to have the right order
	  return ret.sort(function (a, b) {
	    var nextOrderA = nextKeyIndex[a.key];
	    var nextOrderB = nextKeyIndex[b.key];
	    var prevOrderA = prevKeyIndex[a.key];
	    var prevOrderB = prevKeyIndex[b.key];

	    if (nextOrderA != null && nextOrderB != null) {
	      // both keys in next
	      return nextKeyIndex[a.key] - nextKeyIndex[b.key];
	    } else if (prevOrderA != null && prevOrderB != null) {
	      // both keys in prev
	      return prevKeyIndex[a.key] - prevKeyIndex[b.key];
	    } else if (nextOrderA != null) {
	      // key a in next, key b in prev

	      // how to determine the order between a and b? We find a "pivot" (term
	      // abuse), a key present in both prev and next, that is sandwiched between
	      // a and b. In the context of our above example, if we're comparing a and
	      // d, b's (the only) pivot
	      for (var i = 0; i < next.length; i++) {
	        var pivot = next[i].key;
	        if (!prevKeyIndex.hasOwnProperty(pivot)) {
	          continue;
	        }

	        if (nextOrderA < nextKeyIndex[pivot] && prevOrderB > prevKeyIndex[pivot]) {
	          return -1;
	        } else if (nextOrderA > nextKeyIndex[pivot] && prevOrderB < prevKeyIndex[pivot]) {
	          return 1;
	        }
	      }
	      // pluggable. default to: next bigger than prev
	      return 1;
	    }
	    // prevOrderA, nextOrderB
	    for (var i = 0; i < next.length; i++) {
	      var pivot = next[i].key;
	      if (!prevKeyIndex.hasOwnProperty(pivot)) {
	        continue;
	      }
	      if (nextOrderB < nextKeyIndex[pivot] && prevOrderA > prevKeyIndex[pivot]) {
	        return 1;
	      } else if (nextOrderB > nextKeyIndex[pivot] && prevOrderA < prevKeyIndex[pivot]) {
	        return -1;
	      }
	    }
	    // pluggable. default to: next bigger than prev
	    return -1;
	  });
	}

	module.exports = exports['default'];
	// to loop through and find a key's index each time), but I no longer care

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	exports['default'] = spring;

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	var _presets = __webpack_require__(94);

	var _presets2 = _interopRequireDefault(_presets);

	var defaultConfig = _extends({}, _presets2['default'].noWobble, {
	  precision: 0.01
	});

	function spring(val, config) {
	  return _extends({}, defaultConfig, config, { val: val });
	}

	module.exports = exports['default'];

/***/ },
/* 94 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = {
	  noWobble: { stiffness: 170, damping: 26 }, // the default, if nothing provided
	  gentle: { stiffness: 120, damping: 14 },
	  wobbly: { stiffness: 180, damping: 12 },
	  stiff: { stiffness: 210, damping: 20 }
	};
	module.exports = exports["default"];

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports['default'] = reorderKeys;

	var hasWarned = false;

	function reorderKeys() {
	  if (process.env.NODE_ENV === 'development') {
	    if (!hasWarned) {
	      hasWarned = true;
	      console.error('`reorderKeys` has been removed, since it is no longer needed for TransitionMotion\'s new styles array API.');
	    }
	  }
	}

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _event = __webpack_require__(30);

	var _event2 = _interopRequireDefault(_event);

	var _userService = __webpack_require__(32);

	var _userService2 = _interopRequireDefault(_userService);

	var _materialUi = __webpack_require__(7);

	var _PageContent = __webpack_require__(52);

	var _PageContent2 = _interopRequireDefault(_PageContent);

	var _WaterFall = __webpack_require__(53);

	var _WaterFall2 = _interopRequireDefault(_WaterFall);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CategoryPage = function (_React$Component) {
	    _inherits(CategoryPage, _React$Component);

	    function CategoryPage(props) {
	        _classCallCheck(this, CategoryPage);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CategoryPage).call(this, props));

	        _this.titles = ['手机电脑', '数码家电', '房屋租售', '票券卡务', '家居日用', '图书音像', '纪念品', '交通工具', '服饰配饰', '其它'];
	        _this.colors = ['#4caf50', '#17AFC6', '#3f51b5', '#cddc39'];
	        return _this;
	    }

	    _createClass(CategoryPage, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            _event2.default.emit('change header', {
	                title: '闲鹅 - 分类商品：' + this.titles[this.props.params.id],
	                color: this.colors[parseInt(this.props.params.id) % this.colors.length]
	            });
	        }
	    }, {
	        key: 'componentDidUpdate',
	        value: function componentDidUpdate() {
	            _event2.default.emit('change header', {
	                title: '闲鹅 - 分类商品' + this.titles[this.props.params.id],
	                color: this.colors[parseInt(this.props.params.id) % this.colors.length]
	            });
	            _event2.default.emit('waterfall update');
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                _PageContent2.default,
	                { className: 'category-page' },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'page-body' },
	                    _react2.default.createElement(
	                        'p',
	                        { className: 'title' },
	                        this.titles[this.props.params.id]
	                    ),
	                    _react2.default.createElement(_materialUi.Divider, { className: 'hr' })
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'waterfall' },
	                    _react2.default.createElement(_WaterFall2.default, { category: this.props.params.id, active: true })
	                )
	            );
	        }
	    }]);

	    return CategoryPage;
	}(_react2.default.Component);

	exports.default = CategoryPage;

/***/ }
/******/ ]);