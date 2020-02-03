import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Lot from './Lot';

function Map({ lots, onLotClick }) {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
        defaultCenter={{
          lat: 32.88,
          lng: -117.23,
        }}
        defaultZoom={15}
      >
        {lots.map(({ name, lat, lng }) => (
          <Lot
            name={name}
            lat={lat}
            lng={lng}
            onLotClick={onLotClick}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
}

Map.propTypes = {
  lots: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
  })),
  onLotClick: PropTypes.func,
};

Map.defaultProps = {
  lots: [],
  onLotClick: undefined,
};

export default Map;
