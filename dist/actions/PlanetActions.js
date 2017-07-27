"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setLastSearchResult = exports.blankSearchResult = exports.searchPlanet = exports.authoriseUser = exports.searchSuccess = exports.BLANK_LAST_SEARCH_RESULT = exports.SET_LAST_SEARCH_RESULT = exports.DISABLE_SEARCH = exports.DECREMENT_SEARCH_COUNT = exports.INCREMENT_SEARCH_COUNT = exports.SEARCH_SESSION_STOPPED = exports.SEARCH_SESSION_STARTED = exports.SEARCH_SUCCESS = undefined;

var _isomorphicFetch = require("isomorphic-fetch");

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SEARCH_SUCCESS = exports.SEARCH_SUCCESS = "SEARCH_SUCCESS";
var SEARCH_SESSION_STARTED = exports.SEARCH_SESSION_STARTED = "SEARCH_SESSION_STARTED";
var SEARCH_SESSION_STOPPED = exports.SEARCH_SESSION_STOPPED = "SEARCH_SESSION_STOPPED";
var INCREMENT_SEARCH_COUNT = exports.INCREMENT_SEARCH_COUNT = "INCREMENT_SEARCH_COUNT";
var DECREMENT_SEARCH_COUNT = exports.DECREMENT_SEARCH_COUNT = "DECREMENT_SEARCH_COUNT";
var DISABLE_SEARCH = exports.DISABLE_SEARCH = "DISABLE_SEARCH";
var SET_LAST_SEARCH_RESULT = exports.SET_LAST_SEARCH_RESULT = "SET_LAST_SEARCH_RESULT";
var BLANK_LAST_SEARCH_RESULT = exports.BLANK_LAST_SEARCH_RESULT = "BLANK_LAST_SEARCH_RESULT";

var searchSuccess = exports.searchSuccess = function searchSuccess(result, keyword) {
    return function (dispatch, getState) {
        var newResult = [];
        var searchedPlanets = getState().planetsDetail.searchedPlanets;

        if (result.length > 0) {
            newResult = result.sort(function (a, b) {
                return a.population != 'unknown' ? b.population - a.population : 1;
            });
        }

        searchedPlanets[keyword] = newResult;

        dispatch({ type: SEARCH_SUCCESS, newResult: newResult, searchedPlanets: searchedPlanets });
    };
};

var authoriseUser = exports.authoriseUser = function authoriseUser() {
    return function (dispatch, getState) {
        var planetsDetail = getState().planetsDetail;

        dispatch({ type: INCREMENT_SEARCH_COUNT });
        setTimeout(function () {
            dispatch({ type: DECREMENT_SEARCH_COUNT });
        }, 60000);

        if (planetsDetail.searchCount >= 14) {
            dispatch({ type: DISABLE_SEARCH });
        }
    };
};

var searchPlanet = exports.searchPlanet = function searchPlanet(keyword) {
    return function (dispatch, getState) {

        var userDetails = getState().userDetails;
        var planetsDetail = getState().planetsDetail;

        if (userDetails.username != "Luke Skywalker") {
            dispatch(authoriseUser(keyword));
        }

        if (planetsDetail.searchedPlanets[keyword]) {
            dispatch(setLastSearchResult(planetsDetail.searchedPlanets[keyword]));
        } else {
            return (0, _isomorphicFetch2.default)('http://swapi.co/api/planets/?search=' + keyword).then(function (response) {
                return response.json();
            }, function (error) {
                return console.log('An error occured while planet search.', error);
            }).then(function (json) {
                dispatch(searchSuccess(json.results, keyword));
            });
        }
    };
};

var blankSearchResult = exports.blankSearchResult = function blankSearchResult() {
    return { type: BLANK_LAST_SEARCH_RESULT };
};

var setLastSearchResult = exports.setLastSearchResult = function setLastSearchResult(result) {
    return { type: SET_LAST_SEARCH_RESULT, result: result };
};