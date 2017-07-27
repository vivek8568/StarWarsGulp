'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PlanetActions = require('../actions/PlanetActions');

var initialState = {
    searchedPlanets: {},
    lastSearchResult: [],
    timeIntervals: [],
    searchCount: 0,
    disableSearch: false
};

var planetDetails = function planetDetails() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _PlanetActions.SEARCH_SUCCESS:
            return Object.assign({}, state, {
                lastSearchResult: action.newResult,
                searchedPlanets: action.searchedPlanets
            });
        case _PlanetActions.INCREMENT_SEARCH_COUNT:
            return Object.assign({}, state, {
                searchCount: state.searchCount + 1
            });
        case _PlanetActions.DECREMENT_SEARCH_COUNT:
            return Object.assign({}, state, {
                searchCount: state.searchCount - 1,
                disableSearch: false
            });
        case _PlanetActions.DISABLE_SEARCH:
            return Object.assign({}, state, {
                disableSearch: true
            });
        case _PlanetActions.SET_LAST_SEARCH_RESULT:
            return Object.assign({}, state, {
                lastSearchResult: action.result
            });
        case _PlanetActions.BLANK_LAST_SEARCH_RESULT:
            return Object.assign({}, state, {
                lastSearchResult: []
            });
        default:
            return state;
    }
};

exports.default = planetDetails;