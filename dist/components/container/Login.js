'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LoginActions = require('../../actions/LoginActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        userDetails: state.userDetails
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        doLogin: function doLogin(username, password) {
            dispatch((0, _LoginActions.attemptLogin)(username, password));
        }
    };
};

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

        _this.state = {
            username: '',
            password: '',
            loginError: false
        };

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps) {
            if (nextProps.userDetails.loginFailed && nextProps.userDetails.loginFailed !== this.props.userDetails.loginFailed) {
                this.setState({ loginError: true });
            }
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'handleFormSubmit',
        value: function handleFormSubmit(event) {
            event.preventDefault();
            this.props.doLogin(this.state.username, this.state.password);
        }
    }, {
        key: 'render',
        value: function render() {
            var _from = { from: { pathname: '/planets' } },
                from = _from.from;


            if (this.props.userDetails.isLoggedIn) {
                alert("from : " + JSON.stringify(from));
                return _react2.default.createElement(_reactRouterDom.Redirect, { to: from });
            }

            return _react2.default.createElement(
                'div',
                { className: 'center' },
                _react2.default.createElement(
                    'form',
                    { onSubmit: this.handleFormSubmit.bind(this) },
                    _react2.default.createElement(
                        'div',
                        { className: 'form_field' },
                        _react2.default.createElement(
                            'label',
                            { className: 'fieldHeading' },
                            'Username:'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('input', {
                                type: 'text',
                                name: 'username',
                                placeholder: 'Enter your username',
                                value: this.state.username,
                                onChange: this.handleInputChange,
                                required: true
                            })
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'div',
                        { className: 'form_field' },
                        _react2.default.createElement(
                            'label',
                            { className: 'fieldHeading' },
                            'Password:'
                        ),
                        _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement('input', {
                                type: 'password',
                                name: 'password',
                                placeholder: 'Enter your password',
                                value: this.state.password,
                                onChange: this.handleInputChange,
                                required: true
                            })
                        )
                    ),
                    _react2.default.createElement('br', null),
                    this.state.loginError && _react2.default.createElement(
                        'span',
                        { className: 'error' },
                        'Invalid username or password.'
                    ),
                    _react2.default.createElement('input', { type: 'submit', value: 'submit' })
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

Login.propTypes = {
    userDetails: _propTypes2.default.object.isRequired,
    doLogin: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Login);