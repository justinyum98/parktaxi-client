import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

const Options = ({ onRideClick, onParkClick }) => (
  <div style={{ height: '15vh', width: '100%' }}>
    <Button
      style={{ height: '100%', width: '50%' }}
      type="danger"
      onClick={onRideClick}
    >
      Ride
    </Button>
    <Button
      style={{ height: '100%', width: '50%' }}
      type="danger"
      onClick={onParkClick}
    >
      Park
    </Button>
  </div>
);

Options.propTypes = {
  onRideClick: PropTypes.func,
  onParkClick: PropTypes.func
};

Options.defaultProps = {
  onRideClick: undefined,
  onParkClick: undefined
};

export default Options;
