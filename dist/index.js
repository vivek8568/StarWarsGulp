'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _routes = require('./configs/routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('./configs/store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: _store2.default },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_routes2.default, null)
  )
), document.getElementById('root'));