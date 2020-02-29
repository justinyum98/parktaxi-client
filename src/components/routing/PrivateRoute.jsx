/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { IS_LOGGED_IN } from '../../graphql/queries/user';

const PrivateRoute = ({ component: Component, ...props }) => {
  const { data } = useQuery(IS_LOGGED_IN);

  return (
    <Route
      {...props}
      render={innerProps =>
        data.isLoggedIn ? (
          <Component {...innerProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node
};

PrivateRoute.defaultProps = {
  component: undefined
};

export default PrivateRoute;
