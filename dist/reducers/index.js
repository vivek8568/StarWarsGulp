'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _LoginReducer = require('./LoginReducer');

var _LoginReducer2 = _interopRequireDefault(_LoginReducer);

var _PlanetReducer = require('./PlanetReducer');

var _PlanetReducer2 = _interopRequireDefault(_PlanetReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    userDetails: _LoginReducer2.default,
    planetsDetail: _PlanetReducer2.default
});