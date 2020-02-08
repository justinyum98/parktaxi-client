import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const token = window.sessionStorage.getItem('token');
  if (token) return true;
  return false;
};

const PrivateRoute = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={(innerProps) => (
      isAuthenticated()
        ? <Component {...innerProps} />
        : <Redirect to="/login" />
    )}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.node,
};

PrivateRoute.defaultProps = {
  component: undefined,
};

export default PrivateRoute;
