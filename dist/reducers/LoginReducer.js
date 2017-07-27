'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _LoginActions = require('../actions/LoginActions');

var initialState = {
    loginAttempted: false,
    username: '',
    isLoggedIn: false,
    loginFailed: false
};

var LoginReducer = function LoginReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _LoginActions.ATTEMPT_LOGIN:
            return Object.assign({}, state, {
                loginAttempted: true
            });
        case _LoginActions.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                username: action.username,
                isLoggedIn: true,
                loginFailed: false
            });
        case _LoginActions.LOGIN_FAILURE:
            return Object.assign({}, state, {
                loginFailed: true,
                isLoggedIn: false,
                username: ""
            });
        default:
            return state;
    }
};

exports.default = LoginReducer;