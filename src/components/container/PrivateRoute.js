import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => {
    return{
        isLoggedIn : state.userDetails.isLoggedIn
    }
}

const PrivateRoute = ({ component: Component, isLoggedIn, path }) => (
    <Route path = {path} render = {props => (
        isLoggedIn ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname : '/',
                state : { from : props.location }
            }} />
        )
    )} />
)

PrivateRoute.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired,
    path : PropTypes.string.isRequired,
    location : PropTypes.object
}

export default connect(mapStateToProps)(PrivateRoute);