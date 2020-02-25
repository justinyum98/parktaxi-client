import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const LoadingSpinner = ({ message }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Spin />
    <p>{message}</p>
  </div>
);

LoadingSpinner.propTypes = {
  message: PropTypes.string
};

LoadingSpinner.defaultProps = {
  message: undefined
};

export default LoadingSpinner;
