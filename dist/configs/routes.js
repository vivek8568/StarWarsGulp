'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Login = require('../components/container/Login');

var _Login2 = _interopRequireDefault(_Login);

var _PlanetSearch = require('../components/container/PlanetSearch');

var _PlanetSearch2 = _interopRequireDefault(_PlanetSearch);

var _PrivateRoute = require('../components/container/PrivateRoute');

var _PrivateRoute2 = _interopRequireDefault(_PrivateRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
    return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Login2.default }),
        _react2.default.createElement(_PrivateRoute2.default, { path: '/planets', component: _PlanetSearch2.default })
    );
};

exports.default = Routes;