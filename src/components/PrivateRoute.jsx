import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const isAuthenticated = () => {
  const session = Cookies.get('connect.sid');
  console.log('session cookie:', session);
  if (session) return true;
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
