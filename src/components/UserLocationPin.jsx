import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';

const UserLocationPin = ({ lat, lng }) => (
  <>
    <Popover title="Current Location">
      <Button
        type="primary"
        size="small"
        shape="circle"
        icon="user"
      />
    </Popover>
  </>
);

UserLocationPin.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

UserLocationPin.defaultProps = {
  lat: undefined,
  lng: undefined,
};

export default UserLocationPin;
