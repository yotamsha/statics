(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("wix"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "wix"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash"), require("wix")) : factory(root["_"], root["wix"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__451__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 450);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/*!****************************************************************************************************!*\
  !*** external {"amd":"lodash","umd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 42:
/*!********************************!*\
  !*** ./WixCode/wixCodeCore.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wixcodeSdk = __webpack_require__(/*! wixcode-sdk */ 451);

var ui = _wixcodeSdk.core.ui,
    mixins = _wixcodeSdk.core.mixins,
    members = _wixcodeSdk.core.members,
    validation = _wixcodeSdk.core.validation,
    validationsService = _wixcodeSdk.core.validationsService,
    componentInitializeService = _wixcodeSdk.core.componentInitializeService,
    reporter = _wixcodeSdk.core.reporter,
    extendCompSchema = _wixcodeSdk.core.extendCompSchema,
    errors = _wixcodeSdk.core.errors,
    mediaUtils = _wixcodeSdk.core.mediaUtils;
exports.default = {
  ui: ui,
  mixins: mixins,
  members: members,
  validation: validation,
  validationsService: validationsService,
  componentInitializeService: componentInitializeService,
  reporter: reporter,
  errors: errors,
  extendCompSchema: extendCompSchema,
  mediaUtils: mediaUtils
};

/***/ }),

/***/ 450:
/*!**************************!*\
  !*** ./WixCode/index.js ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _wixCodeCore = __webpack_require__(/*! ./wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

var _RatingsDisplay = __webpack_require__(/*! ../components/Rating/wixcode/RatingsDisplay.js */ 452);

var _RatingsDisplay2 = _interopRequireDefault(_RatingsDisplay);

var _RatingsInput = __webpack_require__(/*! ../components/RatingsInput/wixcode/RatingsInput.js */ 454);

var _RatingsInput2 = _interopRequireDefault(_RatingsInput);

var _VideoPlayer = __webpack_require__(/*! ../components/VideoPlayer/wixcode/VideoPlayer.js */ 458);

var _VideoPlayer2 = _interopRequireDefault(_VideoPlayer);

var _Pagination = __webpack_require__(/*! ../components/Pagination/wixcode/Pagination */ 460);

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Slider = __webpack_require__(/*! ../components/Slider/wixcode/Slider */ 462);

var _Slider2 = _interopRequireDefault(_Slider);

var _BaseUIToggleSwitch = __webpack_require__(/*! ../baseUI/components/BaseUIToggleSwitch/wixcode/BaseUIToggleSwitch */ 464);

var _BaseUIToggleSwitch2 = _interopRequireDefault(_BaseUIToggleSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ui = _wixCodeCore2.default.ui;

ui.register('wixui.Pagination', 'Pagination', _Pagination2.default);
ui.register('wixui.RatingsDisplay', 'RatingsDisplay', _RatingsDisplay2.default);
ui.register('wixui.RatingsInput', 'RatingsInput', _RatingsInput2.default);
ui.register('wixui.Slider', 'Slider', _Slider2.default);
ui.register('wixui.VideoPlayer', 'VideoPlayer', _VideoPlayer2.default);
ui.register('wixui.baseui.ToggleSwitch', 'BaseUIToggleSwitch', _BaseUIToggleSwitch2.default);

/***/ }),

/***/ 451:
/*!**********************!*\
  !*** external "wix" ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__451__;

/***/ }),

/***/ 452:
/*!*****************************************************!*\
  !*** ./components/Rating/wixcode/RatingsDisplay.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _compSchema = __webpack_require__(/*! ./compSchema */ 453);

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ui = _wixCodeCore2.default.ui,
    mixins = _wixCodeCore2.default.mixins,
    members = _wixCodeCore2.default.members,
    validation = _wixCodeCore2.default.validation;

/**
 * @class RatingsDisplay
 * @summary A Rating Display element allows you to display a value to your users
 *  using icons.
 * @mixes $w.Element
 * @mixes $w.HiddenCollapsedMixin
 * @mixes $w.ClickableMixin
 * @memberof $w
 * @tagname ratingsDisplay
 * @viewername wixui.ratingsDisplay
 */

var RatingsDisplay = function (_ui$Element) {
  _inherits(RatingsDisplay, _ui$Element);

  function RatingsDisplay() {
    _classCallCheck(this, RatingsDisplay);

    return _possibleConstructorReturn(this, (RatingsDisplay.__proto__ || Object.getPrototypeOf(RatingsDisplay)).apply(this, arguments));
  }

  _createClass(RatingsDisplay, [{
    key: 'toJSON',
    value: function toJSON() {
      var id = this.id,
          type = this.type,
          global = this.global,
          rendered = this.rendered,
          rating = this.rating,
          numRatings = this.numRatings;

      return { id: id, type: type, global: global, rendered: rendered, rating: rating, numRatings: numRatings };
    }
  }, {
    key: 'rating',


    /**
       * @member rating
       * @label property
       * @syntax
       * get rating(): Number
       * set rating(value: Number): void
       * @summary Sets or gets the displayed rating.
       * @description
       *  Setting the `rating` property sets how many icons are displayed in the on
       *  state and what value to show textually if the element is set to show a textual
       *  value.
       *
       *  Set the `rating` value to a number between 1.0 and 5.0 to display a rating.
       *  The textual value, if set to show, will display the `rating` value to the
       *  nearest tenth and the rating icons will round that value to the nearest half
       *  icon. For example, if you set `rating` to 4.24, it will be show textually as
       *  4.2 and 4 stars will be displayed in the on state. However, if you set it to
       *  4.25, it will be show textually as 4.3 and 4 and a half stars will be displayed
       *  in the on state.
       *
       *  To reset the rating display element, restoring it to the empty state, set the value
       *  property to `null` or `undefined`.
       *
       *  Getting the `rating` property returns the current displayed rating.
       * @snippet [RatingDisplay-rating_get.es6=Get the displayed rating]
       * @snippet [RatingDisplay-rating_set.es6=Set the displayed rating]
       * @type {external:Number}
       * @memberof $w.RatingsDisplay
       * @readonly
       */
    get: function get() {
      return ui.Utils.getData(this, 'rating');
    }

    /**
       * @param {external:Number} rating
       * @ignore
       */
    ,
    set: function set(rating) {
      var compType = members._type.get(this).compType;
      var valid = validation.validate({ compType: compType, functionName: 'rating', dataToValidate: { rating: rating } });

      if (!valid || _lodash2.default.isNil(rating)) {
        rating = null;
        ui.Utils.setData(this, { rating: rating });
        return;
      }

      // Round rating to one decimal place
      rating = _lodash2.default.round(rating, 1);

      ui.Utils.setData(this, { rating: rating });
    }

    /**
       * @member numRatings
       * @label property
       * @syntax
       * get numRatings(): Number
       * set numRatings(value: Number): void
       * @summary Sets or gets the displayed number of ratings.
       * @description
       *  Setting the `numRatings` property sets the displayed number of ratings if the
       *  element is set to show the number of ratings.
       *
       *  Set the `numRatings` value to a non-negative number.
       *
       *  Getting the `numRatings` property returns the current number of ratings.
       * @snippet [RatingDisplay-numRatings_get.es6=Get the displayed rating]
       * @snippet [RatingDisplay-numRatings_set.es6=Set the displayed rating]
       * @type {external:Number}
       * @memberof $w.RatingsDisplay
       * @readonly
       */

  }, {
    key: 'numRatings',
    get: function get() {
      return ui.Utils.getData(this, 'numRatings');
    }

    /**
       * @param {external:Number} number of ratings
       * @ignore
       */
    ,
    set: function set(numRatings) {
      var compType = members._type.get(this).compType;

      if (!validation.validate({ compType: compType, functionName: 'numRatings', dataToValidate: { numRatings: numRatings } })) {
        numRatings = 0;
      }

      if (_lodash2.default.isNil(numRatings)) {
        numRatings = 0;
      }

      ui.Utils.setData(this, { numRatings: numRatings });
    }
  }]);

  return RatingsDisplay;
}(ui.Element);

mixins.mixin(RatingsDisplay.prototype, mixins.HiddenCollapsedMixin.prototype);
mixins.mixin(RatingsDisplay.prototype, mixins.ClickableMixin.prototype);
mixins.mixin(RatingsDisplay.prototype, mixins.LinkableMixin.prototype);

(0, _compSchema.extendRatingsDisplayCompSchema)();

exports.default = RatingsDisplay;

/***/ }),

/***/ 453:
/*!*************************************************!*\
  !*** ./components/Rating/wixcode/compSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendRatingsDisplayCompSchema = undefined;

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendCompSchema = _wixCodeCore2.default.extendCompSchema;


var extendRatingsDisplayCompSchema = function extendRatingsDisplayCompSchema() {

  extendCompSchema('RatingsDisplay', {
    rating: {
      schemaType: ['number'],
      // Should be float for correct error message formatting
      maxVal: 5.0,
      minVal: 1.0,
      warnIfNil: true,
      acceptNil: true,
      validations: {
        type: true,
        range: true
      }
    },
    numRatings: {
      schemaType: ['integer'],
      minVal: 0,
      warnIfNil: true,
      acceptNil: true,
      validations: {
        type: true,
        minimum: true
      }
    },
    compExtensions: ['element', 'clickableMixin', 'linkableMixin', 'viewportMixin']
  });
};

exports.extendRatingsDisplayCompSchema = extendRatingsDisplayCompSchema;

/***/ }),

/***/ 454:
/*!*********************************************************!*\
  !*** ./components/RatingsInput/wixcode/RatingsInput.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _compSchema = __webpack_require__(/*! ./compSchema */ 455);

var _ratingsInputInitialize = __webpack_require__(/*! ./ratingsInputInitialize */ 456);

var _ratingsInputValueValidation = __webpack_require__(/*! ./ratingsInputValueValidation */ 457);

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ui = _wixCodeCore2.default.ui,
    mixins = _wixCodeCore2.default.mixins,
    members = _wixCodeCore2.default.members,
    validation = _wixCodeCore2.default.validation,
    validationsService = _wixCodeCore2.default.validationsService;

/**
 * @class RatingsInput
 * @summary RatingsInputs are used for displaying and choosing a rating of stars
 * @mixes $w.FormElement
 * @mixes $w.DisabledMixin
 * @mixes $w.RequiredMixin
 * @mixes $w.HiddenCollapsedMixin
 * @mixes $w.FocusMixin
 * @mixes $w.ClickableMixin
 * @mixes $w.ViewportMixin
 * @memberof $w
 * @tagname ratingsInput
 * @viewername wixui.RatingsInput
 */

var RatingsInput = function (_ui$FormElement) {
  _inherits(RatingsInput, _ui$FormElement);

  function RatingsInput() {
    _classCallCheck(this, RatingsInput);

    return _possibleConstructorReturn(this, (RatingsInput.__proto__ || Object.getPrototypeOf(RatingsInput)).apply(this, arguments));
  }

  _createClass(RatingsInput, [{
    key: 'onIconMouseIn',

    /**
       * @function onIconMouseIn
       * @syntax
       * function onIconMouseIn(handler: IconMouseInHandler): RatingsInput
       * callback IconMouseInHandler(event, selector: Function): void
       * @summary Sets the function that runs when a user hovers over one of the rating icons
       * @description
       * @param {$w.IconMouseInHandler} handler The name of the function or
       *  the function expression to run when the item is ready.
       * @returns {$w.RatingsInput} The element on which the event is now registered.
       * @eventtype IconMouseIn
       * @eventhandler
       * @memberof $w.RatingsInput
       */

    value: function onIconMouseIn(cb) {
      var compType = members._type.get(this).compType;
      if (!validation.validate({
        compType: compType,
        functionName: 'onIconMouseIn',
        dataToValidate: { onIconMouseIn: cb },
        compName: this.id
      })) {
        return this;
      }

      var RMI = members._RMI.get(this);
      var contextId = members._contextId.get(this);
      var controllerId = members._controllerId.get(this);
      var compId = members._compId.get(this);
      RMI.registerEvent(contextId, compId, RMI.getEventTypes().ICON_MOUSE_IN, controllerId, cb);
      return this;
    }

    /**
       * @member value
       * @label property
       * @syntax
       * get value(): number
       * set value(value: number): void
       * @summary Sets or gets the value
       * @description
       *
       * @type {external:Number}
       * @memberof $w.RatingsInput
       * @instance
       */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var id = this.id,
          type = this.type,
          global = this.global,
          rendered = this.rendered,
          value = this.value;

      return { id: id, type: type, global: global, rendered: rendered, value: value };
    }
  }, {
    key: 'value',
    get: function get() {
      return ui.Utils.getData(this, 'value');
    },
    set: function set(value) {
      var compType = members._type.get(this).compType;
      var valid = validation.validate({ compType: compType, functionName: 'value', dataToValidate: { value: value } });
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      if (!valid) {
        return;
      }

      validationsService.runValidationsAndSyncAfterChange(RMI, compId, value);
      ui.Utils.setData(this, { value: _lodash2.default.isNil(value) ? null : value });
    }
  }]);

  return RatingsInput;
}(ui.FormElement);

mixins.mixin(RatingsInput.prototype, mixins.DisabledMixin.prototype);
mixins.mixin(RatingsInput.prototype, mixins.HiddenCollapsedMixin.prototype);
mixins.mixin(RatingsInput.prototype, mixins.FocusMixin.prototype);
mixins.mixin(RatingsInput.prototype, mixins.ClickableMixin.prototype);
mixins.mixin(RatingsInput.prototype, mixins.RequiredMixin.prototype);

(0, _compSchema.extendRatingsInputCompSchema)();
(0, _ratingsInputValueValidation.extendRatingsInputGetValidatorByType)();
(0, _ratingsInputInitialize.extendRatingsInputComponentsInitialize)();
(0, _ratingsInputInitialize.extendRatingsInputComponentsRemoval)();

exports.default = RatingsInput;

/***/ }),

/***/ 455:
/*!*******************************************************!*\
  !*** ./components/RatingsInput/wixcode/compSchema.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendRatingsInputCompSchema = undefined;

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendCompSchema = _wixCodeCore2.default.extendCompSchema;


var extendRatingsInputCompSchema = function extendRatingsInputCompSchema() {

  extendCompSchema('RatingsInput', {
    value: {
      schemaType: ['integer'],
      maxVal: 5,
      minVal: 1,
      acceptNil: true,
      validations: {
        type: true,
        range: true
      }
    },
    onChange: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    onIconMouseIn: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    compExtensions: ['requiredMixin', 'focusMixin', 'formElement', 'focusMixin', 'clickableMixin', 'viewportMixin']
  });
};

exports.extendRatingsInputCompSchema = extendRatingsInputCompSchema;

/***/ }),

/***/ 456:
/*!*******************************************************************!*\
  !*** ./components/RatingsInput/wixcode/ratingsInputInitialize.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendRatingsInputComponentsRemoval = exports.extendRatingsInputComponentsInitialize = undefined;

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentInitializeService = _wixCodeCore2.default.componentInitializeService;


var ratingsInputInitialize = function ratingsInputInitialize(RMI, contextId, compId) {
  return componentInitializeService.validatableWithSyncInitialize(RMI, contextId, compId);
};
var ratingsInputClearance = function ratingsInputClearance(RMI, contextId, compId) {
  return componentInitializeService.valueValidatableClearance(RMI, contextId, compId);
};

var extendRatingsInputComponentsInitialize = function extendRatingsInputComponentsInitialize() {
  componentInitializeService.extendComponentsInitialize('wixui.RatingsInput', ratingsInputInitialize);
};

var extendRatingsInputComponentsRemoval = function extendRatingsInputComponentsRemoval() {
  componentInitializeService.extendComponentsRemoval('wixui.RatingsInput', ratingsInputClearance);
};

exports.extendRatingsInputComponentsInitialize = extendRatingsInputComponentsInitialize;
exports.extendRatingsInputComponentsRemoval = extendRatingsInputComponentsRemoval;

/***/ }),

/***/ 457:
/*!************************************************************************!*\
  !*** ./components/RatingsInput/wixcode/ratingsInputValueValidation.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extendRatingsInputGetValidatorByType = undefined;

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var validationsService = _wixCodeCore2.default.validationsService;


var extendRatingsInputGetValidatorByType = function extendRatingsInputGetValidatorByType() {
  validationsService.extendGetValidatorByType('RatingsInput', 'RATINGS_INPUT', function (value, compData, compProps) {
    return _lodash2.default.flow([validationsService.validators.validateRequired(value, compData, compProps)]);
  });
};

exports.extendRatingsInputGetValidatorByType = extendRatingsInputGetValidatorByType;

/***/ }),

/***/ 458:
/*!*******************************************************!*\
  !*** ./components/VideoPlayer/wixcode/VideoPlayer.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _compSchema = __webpack_require__(/*! ./compSchema */ 459);

var _compSchema2 = _interopRequireDefault(_compSchema);

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ui = _wixCodeCore2.default.ui,
    mixins = _wixCodeCore2.default.mixins,
    members = _wixCodeCore2.default.members,
    validation = _wixCodeCore2.default.validation,
    mediaUtils = _wixCodeCore2.default.mediaUtils;

/**
 * @class VideoPlayer
 * @summary An element presenting videos.
 * @mixes $w.Element
 * @mixes $w.HiddenCollapsedMixin
 * @memberof $w
 * @tagname videoPlayer
 * @viewername wixui.VideoPlayer
 */

var VideoPlayer = function (_ui$Element) {
  _inherits(VideoPlayer, _ui$Element);

  function VideoPlayer() {
    _classCallCheck(this, VideoPlayer);

    return _possibleConstructorReturn(this, (VideoPlayer.__proto__ || Object.getPrototypeOf(VideoPlayer)).apply(this, arguments));
  }

  _createClass(VideoPlayer, [{
    key: 'play',


    /**
       * @function play
       * @syntax
       * function play(): VideoPlayer
       * @summary Begins or resumes playback.
       * @description
       *  The `play()` function plays the current video and fires a `play` event.
       *
       *  The `play` event handlers set on the video player by the [onPlay( )](#onPlay)
       *  function or in the Editor are called.
       * @snippet [VideoPlayer-play.es6=Begin or resume playback]
       * @returns {Promise}
       * @fulfill {void} When playback begins or resumes.
       * @memberof $w.VideoPlayer
       */
    value: function play() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'play', {}, function () {
          return resolve();
        });
      });
    }

    /**
       * @function pause
       * @syntax
       * function pause(): VideoPlayer
       * @summary Pauses playback.
       * @description
       *  The `pause()` function pauses the current video and fires a `pause` event.
       *
       *  The `pause` event handlers set on the vido player by the [onPause( )](#onPause)
       *  function or in the Editor are called.
       * @snippet [VideoPlayer-pause.es6=Pause playback]
       * @returns {Promise}
       * @fulfill {void} When playback has been paused.
       * @memberof $w.VideoPlayer
       */

  }, {
    key: 'pause',
    value: function pause() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'pause', {}, function () {
          return resolve();
        });
      });
    }

    /**
       * @function stop
       * @syntax
       * function stop(): VideoPlayer
       * @summary Pauses playback.
       * @description
       *  The `stop()` function stops the current video and fires a `pause` event.
       *
       *  The `pause` event handlers set on the video player by the [onPause( )](#onPause)
       *  function or in the Editor are called.
       * @snippet [VideoPlayer-stop.es6=Stop playback]
       * @returns {Promise}
       * @fulfill {void} When playback has been stopped.
       * @memberof $w.VideoPlayer
       */

  }, {
    key: 'stop',
    value: function stop() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'stop', {}, function () {
          return resolve();
        });
      });
    }

    /**
       * @function togglePlay
       * @syntax
       * function togglePlay(): VideoPlayer
       * @summary Toggles playback.
       * @description
       *  The `togglePlay()` function either pauses or plays the current video based
       *  on its current state:
       *  + If the video is paused, it plays and a `play` event is fired. The
       *    `play` event handlers set on the video player by the [onPlay( )](#onPlay)
       *    function or in the Editor are called.
       *  + If the video is playing, it is paused and a `pause` event is fired. The
       *    `pause` event handlers set on the video player by the [onPause( )](#onPause)
       *    function or in the Editor are called.
       * @snippet [VideoPlayer-togglePlay.es6=Toggle playback]
       * @returns {Promise}
       * @fulfill {void} When playback has been toggled.
       * @memberof $w.VideoPlayer
       */

  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'togglePlay', {}, function () {
          return resolve();
        });
      });
    }

    /**
       * @function mute
       * @syntax
       * function mute(): VideoPlayer
       * @summary Mutes video volume.
       * @snippet [VideoPlayer-mute.es6=Mute volume]
       * @returns {Promise}
       * @fulfill {void} When the volume has been muted.
       * @memberof $w.VideoPlayer
       */

  }, {
    key: 'mute',
    value: function mute() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'mute', {}, function () {
          return resolve();
        });
      });
    }

    /**
       * @function unmute
       * @syntax
       * function unmute(): VideoPlayer
       * @summary Unmutes video volume.
       * @snippet [VideoPlayer-unmute.es6=Unmute volume]
       * @returns {Promise}
       * @fulfill {void} When the volume has been unmuted.
       * @memberof $w.VideoPlayer
       */

  }, {
    key: 'unmute',
    value: function unmute() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'unmute', {}, function () {
          return resolve();
        });
      });
    }

    /**
       * @function seek
       * @syntax
       * function seek(time: Number): VideoPlayer
       * @summary Moves playback to the specified time, in seconds.
       * @snippet [VideoPlayer-seek.es6=Move playback to 1 minute and 42 seconds into the video]
       * @returns {Promise}
       * @fulfill {void} When the playback has been moved to the specified time.
       * @memberof $w.VideoPlayer
       */

  }, {
    key: 'seek',
    value: function seek(time) {
      var RMI = members._RMI.get(this);
      var compType = members._type.get(this).compType;

      if (!validation.validate({
        compType: compType,
        functionName: 'seek',
        dataToValidate: { seek: time },
        compName: this.id
      })) {
        return;
      }

      var compId = members._compId.get(this);

      return new Promise(function (resolve) {
        RMI.executeCompBehavior(compId, 'seek', { time: time }, function () {
          return resolve();
        });
      });
    }

    /**
       * @function onPlay
       * @syntax
       * function onPlay(handler: EventHandler): VideoPlayer
       * callback EventHandler(): void
       * @summary Adds an event handler that runs when playback is started or restarted.
       * @description
       *  A video can be played by a user clicking the video player's
       *  play button or by calling its [`play()`](#play) function.
       * @snippet [VideoPlayer-onPlay.es6=Get the ID of the video player that is playing]
       * @param {$w.EventHandler} handler The name of the function or
       *  the function expression to run when the video is played.
       * @returns {$w.VideoPlayer} The video player that triggered the event.
       * @memberof $w.VideoPlayer
       * @see [play( )](#play)
       * @eventtype onPlay
       * @eventhandler
       */

  }, {
    key: 'onPlay',
    value: function onPlay(cb) {
      var RMI = members._RMI.get(this);
      var compType = members._type.get(this).compType;

      if (!validation.validate({
        compType: compType,
        functionName: 'onPlay',
        dataToValidate: { onPlay: cb },
        compName: this.id
      })) {
        return this;
      }

      var contextId = members._contextId.get(this);
      var controllerId = members._controllerId.get(this);
      var compId = members._compId.get(this);
      RMI.registerEvent(contextId, compId, RMI.getEventTypes().AUTOPLAY_ON, controllerId, cb);
      return this;
    }

    /**
       * @function onPause
       * @syntax
       * function onPause(handler: EventHandler): VideoPlayer
       * callback EventHandler(): void
       * @summary Adds an event handler that runs when playback is paused.
       * @description
       *  A video can be paused by a user clicking the video player's
       *  pause button or by calling its [`pause()`](#pause) or [`stop()`](#stop) functions.
       * @snippet [VideoPlayer-onPause.es6=Get the ID of the video player has been paused]
       * @param {$w.EventHandler} handler The name of the function or
       *  the function expression to run when the video is paused.
       * @returns {$w.VideoPlayer} The video player that triggered the event.
       * @memberof $w.VideoPlayer
       * @see [pause( )](#pause)
       * @eventtype onPause
       * @eventhandler
       */

  }, {
    key: 'onPause',
    value: function onPause(cb) {
      var RMI = members._RMI.get(this);
      var compType = members._type.get(this).compType;

      if (!validation.validate({
        compType: compType,
        functionName: 'onPause',
        dataToValidate: { onPause: cb },
        compName: this.id
      })) {
        return this;
      }

      var contextId = members._contextId.get(this);
      var controllerId = members._controllerId.get(this);
      var compId = members._compId.get(this);
      RMI.registerEvent(contextId, compId, RMI.getEventTypes().AUTOPLAY_OFF, controllerId, cb);
      return this;
    }

    /**
       * @function onEnded
       * @syntax
       * function onEnded(handler: EventHandler): VideoPlayer
       * callback EventHandler(): void
       * @summary Adds an event handler that runs when playback has ended.
       * @description
       *  A video ends when playback reaches the [`duration`](#duration) of the video.
       * @snippet [VideoPlayer-onEnded.es6=Get the ID of the video player whose video has ended]
       * @param {$w.EventHandler} handler The name of the function or
       *  the function expression to run when the video has ended.
       * @returns {$w.VideoPlayer} The video player that triggered the event.
       * @memberof $w.VideoPlayer
       * @eventtype onEnded
       * @eventhandler
       */

  }, {
    key: 'onEnded',
    value: function onEnded(cb) {
      var RMI = members._RMI.get(this);
      var compType = members._type.get(this).compType;

      if (!validation.validate({
        compType: compType,
        functionName: 'onEnded',
        dataToValidate: { onEnded: cb },
        compName: this.id
      })) {
        return this;
      }

      var contextId = members._contextId.get(this);
      var controllerId = members._controllerId.get(this);
      var compId = members._compId.get(this);
      RMI.registerEvent(contextId, compId, RMI.getEventTypes().PLAY_ENDED, controllerId, cb);
      return this;
    }

    /**
       * @function onProgress
       * @syntax
       * function onProgress(handler: EventHandler): VideoPlayer
       * callback EventHandler(): void
       * @summary Adds an event handler that runs when playback progresses.
       * @description
       *  A video continually progresses as the video plays.
       * @param {$w.EventHandler} handler The name of the function or
       *  the function expression to run when the video progresses.
       * @returns {$w.VideoPlayer}
       * @memberof $w.VideoPlayer
       * @eventtype onProgress
       * @eventhandler
       */

  }, {
    key: 'onProgress',
    value: function onProgress(cb) {
      var RMI = members._RMI.get(this);
      var compType = members._type.get(this).compType;

      if (!validation.validate({
        compType: compType,
        functionName: 'onProgress',
        dataToValidate: { onProgress: cb },
        compName: this.id
      })) {
        return this;
      }

      var contextId = members._contextId.get(this);
      var controllerId = members._controllerId.get(this);
      var compId = members._compId.get(this);
      RMI.registerEvent(contextId, compId, RMI.getEventTypes().PLAY_PROGRESS, controllerId, cb);
      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var id = this.id,
          type = this.type,
          global = this.global,
          rendered = this.rendered,
          title = this.title,
          isPlaying = this.isPlaying,
          currentTime = this.currentTime,
          duration = this.duration,
          volume = this.volume,
          isMuted = this.isMuted;

      return { id: id, type: type, global: global, rendered: rendered, title: title, isPlaying: isPlaying, currentTime: currentTime, duration: duration, volume: volume, isMuted: isMuted };
    }
  }, {
    key: 'title',


    /**
       * @member title
       * @label property
       * @syntax
       * get title(): string
       * set title(value: string): void
       * @summary Sets or gets the title displayed in a video player.
       * @snippet [VideoPlayer-title_get.es6=Get a video player's title]
       * @snippet [VideoPlayer-title_set.es6=Set a video player's title]
       * @type {external:String}
       * @memberof $w.VideoPlayer
       * @instance
       */
    get: function get() {
      return ui.Utils.getData(this, 'videoTitle');
    }

    /*
       * @param {external:String} title
       * @ignore
       */
    ,
    set: function set(videoTitle) {
      var compType = members._type.get(this).compType;
      var newData = { videoTitle: videoTitle };

      if (!validation.validate({
        compType: compType,
        functionName: 'title',
        dataToValidate: newData,
        compName: this.id
      })) {
        return;
      }

      return ui.Utils.setData(this, newData);
    }

    /**
       * @member isPlaying
       * @label property
       * @syntax
       * get isPlaying(): boolean
       * @summary Indicates if a video is currently playing.
       * @description
       *  To set the `isPlaying` property, use the [`play()`](#play),
       *  [`pause()`](#pause), and [`stop()`](#stop) functions.
       * @snippet [VideoPlayer-isPlaying_get.es6=Get whether a video is playing]
       * @type {external:Boolean}
       * @memberof $w.VideoPlayer
       * @instance
       */

  }, {
    key: 'isPlaying',
    get: function get() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var state = RMI.getState(compId);

      return _lodash2.default.get(state, 'isPlaying', false);
    }

    /**
       * @member currentTime
       * @label property
       * @syntax
       * get currentTime(): Number
       * @summary Gets the current play time from the beginning of the current video, in seconds.
       * @description
       *  To set the `currentTime` property, use the [`seek()`](#seek) function.
       * @snippet [VideoPlayer-currentTime_get.es6=Get the current play time]
       * @type {external:Number}
       * @memberof $w.VideoPlayer
       * @instance
       */

  }, {
    key: 'currentTime',
    get: function get() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var state = RMI.getState(compId);

      return _lodash2.default.get(state, 'currentTime', 0);
    }

    /**
       * @member duration
       * @label property
       * @syntax
       * get duration(): Number
       * @summary Gets the total play time of the current video, in seconds.
       * @snippet [VideoPlayer-duration_get.es6=Get the current video's duration]
       * @type {external:Number}
       * @memberof $w.VideoPlayer
       * @instance
       */

  }, {
    key: 'duration',
    get: function get() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var state = RMI.getState(compId);

      return _lodash2.default.get(state, 'duration');
    }

    /**
       * @member volume
       * @label property
       * @syntax
       * get volume(): Number
       * set volume(value: Number): void
       * @summary Sets or gets the video player volume.
       * @description
       *  Setting the `volume` property sets the video player's percentage of total
       *  volume. Set the value to a number between `0` and `100`.
       *
       *  Getting the `volume` property returns the video player's current
       *  percentage of total volume.
       * @note
       *  The actual volume heard by a site visitor depends on the value of the
       *  `volume` property and the volume settings on the visitor's device.
       * @snippet [VideoPlayer-volume_get.es6=Get a video player's volume]
       * @snippet [VideoPlayer-volume_set.es6=Set a video player's volume]
       * @type {external:Number}
       * @memberof $w.VideoPlayer
       * @instance
       */

  }, {
    key: 'volume',
    get: function get() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var state = RMI.getState(compId);

      return _lodash2.default.get(state, 'volume', 0);
    }

    /*
       * @param {external:Number} volume
       * @ignore
       */
    ,
    set: function set(volume) {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var compType = members._type.get(this).compType;

      if (!validation.validate({
        compType: compType,
        functionName: 'volume',
        dataToValidate: { volume: volume },
        compName: this.id
      })) {
        return;
      }

      RMI.executeCompBehavior(compId, 'setVolume', { volume: volume });
    }

    /**
       * @member isMuted
       * @label property
       * @syntax
       * get isMuted(): boolean
       * @summary Indicates if the volume is currently muted.
       * @description
       *  To set the `isMuted` property, use the [`mute()`](#mute)
       *  and [`unmute()`](#unmute) functions.
       * @snippet [VideoPlayer-isMuted_get.es6=Get whether the volume is muted]
       * @type {external:Boolean}
       * @memberof $w.VideoPlayer
       * @instance
       */

  }, {
    key: 'isMuted',
    get: function get() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var state = RMI.getState(compId);

      return _lodash2.default.get(state, 'isMuted', false);
    }

    /**
       * @member src
       * @label property
       * @syntax
       * get src(): string
       * set src(value: string): void
       * @summary Sets or gets the file location of the current video.
       * @description
       *  Setting the `src` property changes the displayed video to
       *  the video found at the new `src` value.
       *
       *  Getting the `src` property returns the location of the
       *  current video file.
       *
       *  The video file is a video from the <a href="https://support.wix.com/en/article/about-the-media-manager" target="_blank">Media Manager</a>.
       *
       *  The URL format is: `wix:video://v1/<video_uri>/<filename>#posterUri=<poster_uri>&posterWidth=<width>&posterHeight=<height>`
       * @snippet [VideoPlayer-src_get.es6=Get the current video's location]
       * @snippet [VideoPlayer-src_set.es6=Set the current video's location]
       * @type {external:String}
       * @memberof $w.VideoPlayer
       * @instance
       */

  }, {
    key: 'src',
    get: function get() {
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);
      var mediaRef = RMI.getData(compId).videoRef;

      if (!mediaRef) {
        return null;
      }

      return mediaUtils.backgroundMediaUtils.buildFullUrlFromMediaRef(mediaRef);
    }

    /*
       * @param {external:String} title
       * @ignore
       */
    ,
    set: function set(value) {
      var compType = members._type.get(this).compType;
      if (!validation.validate({
        compType: compType,
        functionName: 'src',
        dataToValidate: { src: value },
        compName: this.id
      })) {
        return;
      }
      var RMI = members._RMI.get(this);
      var compId = members._compId.get(this);

      if (_lodash2.default.isNil(value)) {
        RMI.setData(compId, { videoRef: null });
        return;
      }

      var currentMediaRef = ui.Utils.getData(this, 'videoRef');
      var mediaData = mediaUtils.backgroundMediaUtils.getMediaDataFromSrc(value);
      if (!mediaData) {
        return;
      }
      if (currentMediaRef && currentMediaRef.opacity) {
        _lodash2.default.assign(mediaData, { opacity: currentMediaRef.opacity });
      }

      mediaUtils.backgroundMediaUtils.getFullMediaData(mediaData, function (fullMediaRefData) {
        if (!fullMediaRefData) {
          return;
        }
        /*setDesignAsync with all media data*/
        RMI.setData(compId, { videoRef: fullMediaRefData });
      });

      // set mediaData only for poster
      RMI.setData(compId, { videoRef: mediaData });
    }
  }]);

  return VideoPlayer;
}(ui.Element);

mixins.mixin(VideoPlayer.prototype, mixins.HiddenCollapsedMixin.prototype);

(0, _compSchema2.default)();

exports.default = VideoPlayer;

/***/ }),

/***/ 459:
/*!******************************************************!*\
  !*** ./components/VideoPlayer/wixcode/compSchema.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendCompSchema = _wixCodeCore2.default.extendCompSchema;


var extendVideoPlayerCompSchema = function extendVideoPlayerCompSchema() {

  extendCompSchema('VideoPlayer', {
    videoTitle: {
      acceptNil: true,
      schemaType: ['string'],
      maxLength: 255,
      minLength: 0,
      validations: {
        type: true,
        length: true
      }
    },
    volume: {
      schemaType: ['number'],
      maxVal: 100,
      minVal: 0,
      validations: {
        type: true,
        range: true
      }
    },
    src: {
      schemaType: ['string'],
      acceptNil: true,
      validations: {
        type: true
      }
    },
    seek: {
      schemaType: ['number'],
      validations: {
        type: true
      }
    },
    onPlay: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    onReady: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    onPause: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    onEnded: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    onProgress: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    }
  });
};

exports.default = extendVideoPlayerCompSchema;

/***/ }),

/***/ 460:
/*!*****************************************************!*\
  !*** ./components/Pagination/wixcode/Pagination.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(/*! lodash */ 4);

var _lodash2 = _interopRequireDefault(_lodash);

var _compSchema = __webpack_require__(/*! ./compSchema */ 461);

var _compSchema2 = _interopRequireDefault(_compSchema);

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ui = _wixCodeCore2.default.ui,
    mixins = _wixCodeCore2.default.mixins,
    members = _wixCodeCore2.default.members,
    validation = _wixCodeCore2.default.validation,
    reporter = _wixCodeCore2.default.reporter,
    errors = _wixCodeCore2.default.errors;

/**
 * @class Pagination
 * @summary An element for working with paging.
 * @mixes $w.Element
 * @mixes $w.DisabledMixin
 * @mixes $w.HiddenCollapsedMixin
 * @mixes $w.ClickableMixin
 * @mixes $w.ViewportMixin
 * @memberof $w
 * @classdesc
 *  A pagination bar provides a way for your users to control the [paging of
 *  a dataset](wix-dataset.html#data-paging). Elements that are connected to the
 *  same dataset as the pagination bar are affected when the user
 *  interacts with the pagination bar.
 *
 *  For example, suppose you have a repeater connected to a dataset and that dataset
 *  is set to have a page size of 5. When the page loads, the repeater shows
 *  the first 5 items from the dataset. If a user clicks on the next page button
 *  of a pagination bar connected to the same dataset as the repeater,
 *  the repeater then shows items 6-10 from the dataset.
 *
 *  You can also use a pagination bar without connecting it to a dataset.
 *  When doing so, you have to provide the pagination logic that runs when
 *  a user interacts with the pagination bar.
 * @tagname pagination
 * @viewername wixui.Pagination
 */

var Pagination = function (_ui$Element) {
  _inherits(Pagination, _ui$Element);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'onChange',


    /**
       * @function onChange
       * @syntax
       * function onChange(handler: ChangeEventHandler): Pagination
       * callback EventHandler(event, selector: Function): void
       * @summary Adds an event handler that runs when the pagination bar
       *  is changed.
       * @description
       *  A pagination bar receives a `change` event when a user changes the
       *  current page by interacting with the pagination bar.
       *
       *  A `change` event is not triggered when you change a pagination bar's
       *  current page using the [`currentPage`](#currentPage) property.
       *
       *  When a pagination bar is connected to a dataset, changing the [dataset's
       *  current page](wix-dataset.html#data-paging) using dataset functions, such
       *  as [`nextPage()`](wix-dataset.html#nextPage), do not trigger `change`
       *  events on the pagination bar.
       * @snippet [Pagination-onChange.es6=Get the new current page of the pagination bar that was changed]
       * @param {$w.EventHandler} handler The name of the function or
       *  the function expression to run when the item is ready.
       * @returns {$w.Pagination} The pagination bar on which the event is now registered.
       * @eventtype Change
       * @eventhandler
       * @memberof $w.Pagination
       */

    value: function onChange(cb) {
      var compType = members._type.get(this).compType;
      if (!validation.validate({
        compType: compType,
        functionName: 'onChange',
        dataToValidate: { onChange: cb },
        compName: this.id
      })) {
        return this;
      }

      var RMI = members._RMI.get(this);
      var contextId = members._contextId.get(this);
      var controllerId = members._controllerId.get(this);
      var compId = members._compId.get(this);
      RMI.registerEvent(contextId, compId, RMI.getEventTypes().CHANGE, controllerId, cb);
      return this;
    }

    /**
       * @member currentPage
       * @label property
       * @syntax
       * get currentPage(): number
       * set currentPage(value: number): void
       * @summary Sets or gets the current page.
       * @description
       *  Setting the `currentPage` property updates the visual indicator of the
       *  pagination bar to display the current page. The `currentPage` cannot be
       *  set to a value greater than [`totalPages`](#totalPages).
       *
       *  If the pagination bar is connected to a dataset, setting `currentPage`
       *  updates the current page of the dataset and updates any relevant
       *  elements connected to that dataset.
       *
       *  Getting the `currentPage` property returns the index of the current page.
       * @note
       *  Page numbers begin with 1.
       * @snippet [Pagination-currentPage_get.es6=Get a pagination bar's current page]
       * @snippet [Pagination-currentPage_set.es6=Set a pagination bar's current page]
       * @type {external:Number}
       * @memberof $w.Pagination
       * @see [totalPages](#totalPages)
       * @instance
       */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var id = this.id,
          type = this.type,
          global = this.global,
          rendered = this.rendered,
          currentPage = this.currentPage,
          totalPages = this.totalPages;

      return { id: id, type: type, global: global, rendered: rendered, currentPage: currentPage, totalPages: totalPages };
    }
  }, {
    key: 'currentPage',
    get: function get() {
      return ui.Utils.getData(this, 'currentPage');
    }

    /*
       * @param {external:Number} currentPage
       * @ignore
       */
    ,
    set: function set(currentPage) {
      var compType = members._type.get(this).compType;
      var acceptNil = true;
      var index = null;

      if (!validation.validate({
        compType: compType,
        functionName: 'currentPage',
        dataToValidate: { currentPage: currentPage },
        compName: this.id
      }) || !validation.validateRange({
        functionName: 'currentPage',
        propertyName: 'currentPage',
        value: currentPage,
        minValue: 1,
        maxValue: this.totalPages,
        itemIndex: index,
        acceptNil: acceptNil
      })) {
        return;
      }

      if (_lodash2.default.isNil(currentPage)) {
        currentPage = 1;
      }

      ui.Utils.setData(this, { currentPage: currentPage });
    }

    /**
       * @member totalPages
       * @label property
       * @syntax
       * get totalPages(): number
       * set totalPages(value: number): void
       * @summary Sets or gets the total number of pages shown in a pagination bar.
       * @description
       *  Setting the `totalPages` property updates the number of pages shown in
       *  the pagination bar.
       *
       *  Setting `totalPages` to a value less than [`currentPage`](#currentPage)
       *  causes `currentPage` to be reset to the new `totalPages` value. For
       *  example, if `currentPage` is `8` and `totalPages` is set to `5`, `currentPage`
       *  is reset automatically to `5`.
       *
       *  If the pagination bar is connected to a dataset, it is recommended that
       *  you allow the dateset to control the pagination bar's `totalPages` value.
       *
       *  Getting the `totalPages` property returns the total number of pages available
       *  for selection in the pagination bar. If the pagination bar is
       *  connected to a dataset, the initial `totalPages` value is calculated based
       *  on the total number of items in the dataset and the dataset's page size.
       * @snippet [Pagination-totalPages_get.es6=Get the number of pages available in a pagination element]
       * @snippet [Pagination-totalPages_set.es6=Set the number of pages available in a pagination element]
       * @type {external:Number}
       * @memberof $w.Pagination
       * @see [currentPage](#currentPage)
       * @instance
       */

  }, {
    key: 'totalPages',
    get: function get() {
      return ui.Utils.getData(this, 'totalPages');
    }

    /*
       * @param {external:Number} total Pages
       * @ignore
       */
    ,
    set: function set(totalPages) {
      var compType = members._type.get(this).compType;
      if (!validation.validate({
        compType: compType,
        functionName: 'totalPages',
        dataToValidate: { totalPages: totalPages },
        compName: this.id
      })) {
        return;
      }

      var newData = { totalPages: totalPages };

      if (ui.Utils.getData(this, 'currentPage') > totalPages) {
        newData.currentPage = totalPages;
        reporter.reportSdkWarning(errors.generateError.warning_value_changed({
          propertyName: 'totalPages',
          compName: this.id,
          newValue: totalPages,
          changedProperty: 'currentPage'
        }));
      }

      ui.Utils.setData(this, newData);
    }
  }]);

  return Pagination;
}(ui.Element);

mixins.mixin(Pagination.prototype, mixins.DisabledMixin.prototype);
mixins.mixin(Pagination.prototype, mixins.HiddenCollapsedMixin.prototype);
mixins.mixin(Pagination.prototype, mixins.ClickableMixin.prototype);

(0, _compSchema2.default)();

exports.default = Pagination;

/***/ }),

/***/ 461:
/*!*****************************************************!*\
  !*** ./components/Pagination/wixcode/compSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendCompSchema = _wixCodeCore2.default.extendCompSchema;


var extendPaginationCompSchema = function extendPaginationCompSchema() {

  extendCompSchema('Pagination', {
    currentPage: {
      schemaType: ['integer'],
      acceptNil: true,
      warnIfNil: true,
      validations: {
        type: true
      }
    },
    totalPages: {
      schemaType: ['integer'],
      minVal: 1,
      validations: {
        type: true,
        minimum: true
      }
    },
    onChange: {
      schemaType: ['function'],
      validations: {
        type: true
      }
    },
    compExtensions: ['focusMixin', 'element', 'clickableMixin', 'viewportMixin']
  });
};

exports.default = extendPaginationCompSchema;

/***/ }),

/***/ 462:
/*!*********************************************!*\
  !*** ./components/Slider/wixcode/Slider.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _compSchema = __webpack_require__(/*! ./compSchema */ 463);

var _compSchema2 = _interopRequireDefault(_compSchema);

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ui = _wixCodeCore2.default.ui,
    mixins = _wixCodeCore2.default.mixins,
    members = _wixCodeCore2.default.members,
    validation = _wixCodeCore2.default.validation,
    reporter = _wixCodeCore2.default.reporter,
    errors = _wixCodeCore2.default.errors,
    validationsService = _wixCodeCore2.default.validationsService;
/**
 * @class Slider
 * @summary Sliders allow users to select a number from a given range.
 * @classdesc
 *  Sliders offer your users a way of inputing a number by sliding a "handle" one
 *  way or the other along a track. You can set the range of values for the
 *  slider and also its default value.
 *
 *  The slider's values can be configured in one of two ways:
 *  + Value - You define the size of the steps between values, and the slider
 *    calculates how many steps fit in the slider's range.
 *  + Count - You define the number of steps between the values you want your
 *    slider to have, and the slider calculates the size of each step.
 * @mixes $w.Element
 * @mixes $w.ValueMixin
 * @mixes $w.DisabledMixin
 * @mixes $w.HiddenCollapsedMixin
 * @mixes $w.FocusMixin
 * @memberof $w
 * @tagname slider
 * @viewername wixui.Slider
 */

var Slider = function (_ui$Element) {
  _inherits(Slider, _ui$Element);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
  }

  _createClass(Slider, [{
    key: 'toJSON',
    value: function toJSON() {
      var id = this.id,
          type = this.type,
          global = this.global,
          rendered = this.rendered,
          value = this.value,
          disabled = this.disabled,
          vertical = this.vertical,
          min = this.min,
          max = this.max,
          stepType = this.stepType,
          step = this.step;

      return { id: id, type: type, global: global, rendered: rendered, value: value, disabled: disabled, vertical: vertical, min: min, max: max, stepType: stepType, step: step };
    }
  }, {
    key: 'min',

    /**
       * @member min
       * @label property
       * @syntax
       * get min(): number
       * set min(value: number): void
       * @summary Sets or gets the slider's minimum value.
       * @snippet [Slider-min_get.es6=Get a slider's minimum value]
       * @snippet [Slider-min_set.es6=Set a slider's minimum value]
       * @type {external:Number}
       * @memberof $w.Slider
       * @instance
       */
    get: function get() {
      return getField.call(this, 'min', 0);
    }

    /**
       * @param {external:Number} val The slider's new min value.
       * @ignore
       */
    ,
    set: function set(val) {
      setField.call(this, 'min', val);

      var maxValue = getField.call(this, 'max');

      if (val > maxValue) {
        reporter.reportSdkWarning(errors.generateError.warning_at_most({
          propertyName: 'min',
          wrongValue: val,
          maxValue: maxValue
        }));
      }
    }

    /**
       * @member max
       * @label property
       * @syntax
       * get max(): number
       * set max(value: number): void
       * @summary Sets or gets the slider's maximum value.
       * @snippet [Slider-max_get.es6=Get a slider's maximum value]
       * @snippet [Slider-max_set.es6=Set a slider's maximum value]
       * @type {external:Number}
       * @memberof $w.Slider
       * @instance
       */

  }, {
    key: 'max',
    get: function get() {
      return getField.call(this, 'max', 10);
    }

    /**
       * @param {external:Number} val The slider's new max value.
       * @ignore
       */
    ,
    set: function set(value) {
      setField.call(this, 'max', value);

      var minValue = getField.call(this, 'min');

      if (value < minValue) {
        reporter.reportSdkWarning(errors.generateError.warning_at_least({
          propertyName: 'max',
          wrongValue: value,
          minValue: minValue
        }));
      }
    }

    /**
       * @member stepType
       * @label property
       * @syntax
       * get stepType(): string
       * set stepType(value: string): void
       * @summary Sets or gets a slider's step type.
       * @description
       *  The `stepType` determines how the slider's steps work:
       *
       *  The step type can be:
       *  + `"value"` - Each step's size is the number of units defined by the
       *    [`step`](#step) property's value. For example, suppose a slider has a
       *    [`min`](#min) value of `0`, [`max`](#max) value of `10`, and
       *    [`step`](#step) value of `5`. Each step's size will be 5 units, meaning
       *    there will be 2 steps.
       *  + `"count"` - The number of steps is determined by number the units
       *    in the [`step`](#step) property's value. For example, suppose a slider
       *    has a [`min`](#min) value of `0`, [`max`](#max) value of `10`, and
       *    [`step`](#step) value of `5`. There will be 5 steps, meaning each step
       *    will be 2 units.
       * @snippet [Slider-stepType_get.es6=Get a slider's step type]
       * @snippet [Slider-stepType_set.es6=Set a slider's step type]
       * @default `"value"`
       * @type {external:String}
       * @memberof $w.Slider
       * @instance
       */

  }, {
    key: 'stepType',
    get: function get() {
      return getField.call(this, 'stepType', 'value');
    }

    /**
       * @param {external:String} val The slider's new stepType value.
       * @ignore
       */
    ,
    set: function set(value) {
      setField.call(this, 'stepType', value);
    }

    /**
       * @member step
       * @label property
       * @syntax
       * get step(): number
       * set step(value: number): void
       * @summary Sets or gets a slider's step value.
       * @description
       *  The `step` property along with the [`stepType`](#stepType) determes the
       *  size of each slider step and how many step units the slider is divided into.
       * @snippet [Slider-step_get.es6=Get a slider's step value]
       * @snippet [Slider-step_set.es6=Set a slider's step value]
       * @default `0.1`
       * @type {external:Number}
       * @memberof $w.Slider
       * @instance
       */

  }, {
    key: 'step',
    get: function get() {
      return getField.call(this, 'step', 0.1);
    }

    /**
       * @param {external:String} val The slider's new step value.
       * @ignore
       */
    ,
    set: function set(val) {
      setField.call(this, 'step', val);
    }
  }]);

  return Slider;
}(ui.Element);

function setField(key, value) {
  var RMI = members._RMI.get(this);
  var compId = members._compId.get(this);
  var compType = members._type.get(this).compType;

  var isValid = validation.validate({
    compType: compType,
    functionName: key,
    dataToValidate: _defineProperty({}, key, value),
    compName: this.id
  });
  if (!isValid) {
    return;
  }

  validationsService.runValidationsAfterChange(RMI, compId, value);

  ui.Utils.setData(this, _defineProperty({}, key, value));
}

function getField(key, defaultValue) {
  return ui.Utils.getData(this, key) || defaultValue;
}

mixins.mixin(Slider.prototype, mixins.DisabledMixin.prototype);
mixins.mixin(Slider.prototype, mixins.HiddenCollapsedMixin.prototype);
mixins.mixin(Slider.prototype, mixins.FocusMixin.prototype);
mixins.mixin(Slider.prototype, mixins.ValueMixin.prototype);

(0, _compSchema2.default)();

exports.default = Slider;

/***/ }),

/***/ 463:
/*!*************************************************!*\
  !*** ./components/Slider/wixcode/compSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wixCodeCore = __webpack_require__(/*! ../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendCompSchema = _wixCodeCore2.default.extendCompSchema;


var extendSliderCompSchema = function extendSliderCompSchema() {

  extendCompSchema('Slider', {
    value: {
      schemaType: ['number'],
      validations: {
        type: true
      }
    },
    vertical: {
      schemaType: ['boolean'],
      validations: {
        type: true
      }
    },
    min: {
      schemaType: ['number'],
      validations: {
        type: true
      }
    },
    max: {
      schemaType: ['number'],
      validations: {
        type: true
      }
    },
    step: {
      schemaType: ['number'],
      acceptNil: true,
      validations: {
        type: true
      }
    },
    stepType: {
      schemaType: ['string'],
      enum: ['value', 'count'],
      validations: {
        type: true
      }
    },
    compExtensions: ['focusMixin', 'formElement', 'element', 'clickableMixin', 'viewportMixin']
  });
};

exports.default = extendSliderCompSchema;

/***/ }),

/***/ 464:
/*!****************************************************************************!*\
  !*** ./baseUI/components/BaseUIToggleSwitch/wixcode/BaseUIToggleSwitch.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _compSchema = __webpack_require__(/*! ./compSchema */ 465);

var _compSchema2 = _interopRequireDefault(_compSchema);

var _wixCodeCore = __webpack_require__(/*! ../../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ui = _wixCodeCore2.default.ui,
    mixins = _wixCodeCore2.default.mixins;

/**
 * @class BaseUIToggleSwitch
 * @summary BaseUIToggleSwitches are used for a single binary choice.
 * @mixes $w.Element
 * @mixes $w.DisabledMixin
 * @mixes $w.HiddenCollapsedMixin
 * @mixes $w.FocusMixin
 * @mixes $w.ClickableMixin
 * @mixes $w.ValueMixin
 * @mixes $w.CheckedMixin
 * @mixes $w.LabelMixin
 * @memberof $w
 * @tagname switch
 * @viewername wixui.baseui.ToggleSwitch
 */

var BaseUIToggleSwitch = function (_ui$Element) {
  _inherits(BaseUIToggleSwitch, _ui$Element);

  function BaseUIToggleSwitch() {
    _classCallCheck(this, BaseUIToggleSwitch);

    return _possibleConstructorReturn(this, (BaseUIToggleSwitch.__proto__ || Object.getPrototypeOf(BaseUIToggleSwitch)).apply(this, arguments));
  }

  _createClass(BaseUIToggleSwitch, [{
    key: 'toJSON',
    value: function toJSON() {
      var id = this.id,
          type = this.type,
          global = this.global,
          rendered = this.rendered,
          value = this.value,
          checked = this.checked,
          label = this.label;

      return { id: id, type: type, global: global, rendered: rendered, value: value, checked: checked, label: label };
    }
  }]);

  return BaseUIToggleSwitch;
}(ui.Element);

mixins.mixin(BaseUIToggleSwitch.prototype, mixins.DisabledMixin.prototype);
mixins.mixin(BaseUIToggleSwitch.prototype, mixins.HiddenCollapsedMixin.prototype);
mixins.mixin(BaseUIToggleSwitch.prototype, mixins.FocusMixin.prototype);
mixins.mixin(BaseUIToggleSwitch.prototype, mixins.ClickableMixin.prototype);
mixins.mixin(BaseUIToggleSwitch.prototype, mixins.ValueMixin.prototype);
mixins.mixin(BaseUIToggleSwitch.prototype, mixins.CheckedMixin.prototype);
mixins.mixin(BaseUIToggleSwitch.prototype, mixins.LabelMixin.prototype);

(0, _compSchema2.default)();

exports.default = BaseUIToggleSwitch;

/***/ }),

/***/ 465:
/*!********************************************************************!*\
  !*** ./baseUI/components/BaseUIToggleSwitch/wixcode/compSchema.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wixCodeCore = __webpack_require__(/*! ../../../../WixCode/wixCodeCore */ 42);

var _wixCodeCore2 = _interopRequireDefault(_wixCodeCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extendCompSchema = _wixCodeCore2.default.extendCompSchema;


var extendBaseUIToggleSwitchCompSchema = function extendBaseUIToggleSwitchCompSchema() {
  extendCompSchema('BaseUIToggleSwitch', {
    compExtensions: ['requiredMixin', 'focusMixin', 'formElement', 'element', 'clickableMixin', 'viewportMixin', 'checkedMixin', 'labelMixin']
  });
};

exports.default = extendBaseUIToggleSwitchCompSchema;

/***/ })

/******/ });
});
//# sourceMappingURL=wixcode-components.bundle.js.map
