import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const PickUpMap = ({ google, style, handlePickUp }) => {
  const [pickUpLocation, setPickUpLocation] = useState({});

  const setMarker = (location, map) => {
    map.panTo(location);
    const coords = {
      lat: location.lat(),
      lng: location.lng()
    };
    setPickUpLocation(coords);
    handlePickUp(coords);
  };

  return (
    <Map
      style={style}
      google={google}
      onClick={(t, map, c) => setMarker(c.latLng, map)}
      initialCenter={{
        lat: 32.88,
        lng: -117.225
      }}
      zoom={15}
    >
      <Marker position={pickUpLocation} />
    </Map>
  );
};

PickUpMap.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  google: PropTypes.object,
  style: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string
  }),
  handlePickUp: PropTypes.func
};

PickUpMap.defaultProps = {
  google: undefined,
  style: undefined,
  handlePickUp: undefined
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(PickUpMap);
