import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import _ from 'lodash';
import Lot from './Lot';
import UserLocationPin from './UserLocationPin';

const Map = ({ lots, currentLocation }) => {
  const currentLat = _.get(currentLocation, 'lat');
  const currentLng = _.get(currentLocation, 'lng');

  return (
    <div style={{ height: '85vh', width: '100%' }}>
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
          />
        ))}
        {currentLocation ? (
          <UserLocationPin
            lat={currentLat}
            lng={currentLng}
          />
        ) : (
          <div />
        )}

      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  lots: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    lat: PropTypes.number,
    lng: PropTypes.number,
  })),
  currentLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

Map.defaultProps = {
  lots: [],
  currentLocation: undefined,
};

export default Map;
