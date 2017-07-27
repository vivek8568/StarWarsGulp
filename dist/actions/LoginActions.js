"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.attemptLogin = exports.LOGIN_FAILURE = exports.LOGIN_SUCCESS = exports.ATTEMPT_LOGIN = undefined;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ATTEMPT_LOGIN = exports.ATTEMPT_LOGIN = "ATTEMPT_LOGIN";
var LOGIN_SUCCESS = exports.LOGIN_SUCCESS = "LOGIN_SUCCESS";
var LOGIN_FAILURE = exports.LOGIN_FAILURE = "LOGIN_FAILURE";

var loginSuccess = function loginSuccess(username) {
    return { type: LOGIN_SUCCESS, username: username };
};

var loginFailure = function loginFailure() {
    return { type: LOGIN_FAILURE };
};

var attemptLogin = exports.attemptLogin = function attemptLogin(username, password) {
    return function (dispatch) {
        dispatch({ type: ATTEMPT_LOGIN });

        return (0, _isomorphicFetch2.default)('http://swapi.co/api/people/?search=' + username).then(function (response) {
            return response.json();
        }, function (error) {
            return console.log('An error occured while login.', error);
        }).then(function (json) {
            if (json.results.length != 0 && json.results[0].birth_year === password) {
                dispatch(loginSuccess(json.results[0].name));
            } else {
                dispatch(loginFailure());
            }
        });
    };
};