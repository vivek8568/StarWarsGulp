'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        isLoggedIn: state.userDetails.isLoggedIn
    };
};

var PrivateRoute = function PrivateRoute(_ref) {
    var Component = _ref.component,
        isLoggedIn = _ref.isLoggedIn,
        path = _ref.path;
    return _react2.default.createElement(_reactRouterDom.Route, { path: path, render: function render(props) {
            return isLoggedIn ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, { to: {
                    pathname: '/',
                    state: { from: props.location }
                } });
        } });
};

PrivateRoute.propTypes = {
    isLoggedIn: _propTypes2.default.bool.isRequired,
    component: _propTypes2.default.func.isRequired,
    path: _propTypes2.default.string.isRequired,
    location: _propTypes2.default.object
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PrivateRoute);