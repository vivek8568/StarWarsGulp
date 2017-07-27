'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reducers = require('../reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxThunk2.default, _reduxLogger2.default];
var store = (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', function () {
    var nextRootReducer = require('../reducers');
    store.replaceReducer(nextRootReducer);
  });
}

exports.default = store;