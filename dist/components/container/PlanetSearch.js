'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PlanetList = require('../presentational/PlanetList');

var _PlanetList2 = _interopRequireDefault(_PlanetList);

var _PlanetActions = require('../../actions/PlanetActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        username: state.userDetails.username,
        planetList: state.planetsDetail.lastSearchResult,
        disableSearch: state.planetsDetail.disableSearch
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        searchPlanet: function searchPlanet(keyword) {
            dispatch((0, _PlanetActions.searchPlanet)(keyword));
        },
        blankSearchResult: function blankSearchResult() {
            dispatch((0, _PlanetActions.blankSearchResult)());
        }
    };
};

var PlanetSearch = function (_Component) {
    _inherits(PlanetSearch, _Component);

    function PlanetSearch(props) {
        _classCallCheck(this, PlanetSearch);

        return _possibleConstructorReturn(this, (PlanetSearch.__proto__ || Object.getPrototypeOf(PlanetSearch)).call(this, props));
    }

    _createClass(PlanetSearch, [{
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var value = event.target.value;

            if (value) {
                this.props.searchPlanet(value);
            } else {
                this.props.blankSearchResult();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    { className: 'welcomeText' },
                    'Welcome ',
                    this.props.username,
                    '!'
                ),
                _react2.default.createElement('input', {
                    type: 'text',
                    name: 'searchKeyword',
                    placeholder: 'Search planets',
                    onChange: this.handleInputChange.bind(this),
                    disabled: this.props.disableSearch
                }),
                this.props.disableSearch && _react2.default.createElement(
                    'span',
                    { className: 'error' },
                    'Your search for this interval has been completed. Please try again later!'
                ),
                _react2.default.createElement(_PlanetList2.default, { planetList: this.props.planetList })
            );
        }
    }]);

    return PlanetSearch;
}(_react.Component);

PlanetSearch.propTypes = {
    username: _propTypes2.default.string.isRequired,
    planetList: _propTypes2.default.array.isRequired,
    disableSearch: _propTypes2.default.bool.isRequired,
    searchPlanet: _propTypes2.default.func.isRequired,
    blankSearchResult: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PlanetSearch);