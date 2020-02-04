import React from 'react';
import PropTypes from 'prop-types';
import { Popover, Button } from 'antd';

const Lot = ({
  name, lat, lng, onLotClick,
}) => (
  <>
    <Popover
      title={name}
      content={(
        <div>
          <p>
            Latitude:
            {' '}
            {lat}
          </p>
          <p>
            Longitude:
            {' '}
            {lng}
          </p>
        </div>
      )}
    >
      <Button
        type="danger"
        shape="circle"
        icon="environment"
        onClick={() => onLotClick({ name, lat, lng })}
      />
    </Popover>
  </>
);

Lot.propTypes = {
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
  onLotClick: PropTypes.func,
};

Lot.defaultProps = {
  name: undefined,
  lat: undefined,
  lng: undefined,
  onLotClick: undefined,
};

export default Lot;
