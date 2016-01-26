'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toastrEmitter = exports.EE = undefined;

var _utils = require('./utils.js');

var _eventemitter = require('eventemitter3');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _eventemitter2.default();

var EE = exports.EE = emitter;
var toastrEmitter = exports.toastrEmitter = {
  message: function message() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    addToToastr('message', args);
  },
  info: function info() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    addToToastr('info', args);
  },
  success: function success() {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    addToToastr('success', args);
  },
  warning: function warning() {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    addToToastr('warning', args);
  },
  error: function error() {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    addToToastr('error', args);
  },
  clean: function clean() {
    cleanToastr();
  },
  confirm: function confirm() {
    emitter.emit('toastr/confirm', {
      message: (arguments.length <= 0 ? undefined : arguments[0]).toString(),
      options: arguments.length <= 1 ? undefined : arguments[1]
    });
  }
};

function addToToastr(type, array) {
  emitter.emit('add/toastr', (0, _utils.mapToToastrMessage)(type, array));
}

function cleanToastr() {
  emitter.emit('clean/toastr');
}