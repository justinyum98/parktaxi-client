import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';

const Lot = ({ name, lat, lng }) => (
  <>
    <Popover title={name}>
      <Button
        type="danger"
        size="small"
        shape="circle"
        icon="environment"
      />
    </Popover>
  </>
);

Lot.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Lot.defaultProps = {
  name: undefined,
  lat: undefined,
  lng: undefined,
};

export default Lot;
