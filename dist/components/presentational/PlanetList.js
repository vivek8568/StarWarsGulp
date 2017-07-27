'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PlanetList = function PlanetList(_ref) {
    var planetList = _ref.planetList;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'span',
            { className: 'listHeader' },
            'Planets'
        ),
        _react2.default.createElement(
            'span',
            { className: 'listHeader' },
            'Population'
        ),
        _react2.default.createElement(
            'div',
            null,
            planetList && planetList.map(function (planet, index) {
                var fontSize = 30 - index * 3 + 'px';
                return _react2.default.createElement(
                    'span',
                    { key: planet.name },
                    _react2.default.createElement(
                        'span',
                        { style: { fontSize: fontSize }, className: 'listItem' },
                        planet.name
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: { fontSize: fontSize }, className: 'listItem' },
                        planet.population
                    ),
                    _react2.default.createElement('br', null)
                );
            })
        )
    );
};

PlanetList.propTypes = {
    planetList: _propTypes2.default.array.isRequired
};

exports.default = PlanetList;