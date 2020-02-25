import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import _ from 'lodash';
import getCurrentLocation from '../../utils/geolocation';

const MapContainer = ({ google, lots, style }) => {
  const [state, setState] = useState({
    activeMarker: {},
    currentLocation: {},
    selectedPlace: {},
    showingInfoWindow: false
  });

  useEffect(() => {
    getCurrentLocation().then(location => {
      setState({
        ...state,
        currentLocation: location
      });
    });
  }, []);

  const onMarkerClick = (props, marker) => {
    setState({
      ...state,
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  };

  const onInfoWindowClose = () => {
    setState({
      ...state,
      activeMarker: null,
      showingInfoWindow: false
    });
  };

  const onMapClicked = () => {
    if (state.showingInfoWindow) {
      setState({
        ...state,
        activeMarker: null,
        showingInfoWindow: false
      });
    }
  };

  return (
    <Map
      style={style}
      google={google}
      onClick={onMapClicked}
      initialCenter={{
        lat: 32.88,
        lng: -117.225
      }}
      zoom={15}
    >
      {lots.map(({ name, lat, lng }) => (
        <Marker
          title={name}
          name={name}
          position={{ lat, lng }}
          onClick={onMarkerClick}
        />
      ))}
      {!_.isEmpty(state.currentLocation) && (
        <Marker
          title="Current Location"
          name="Current Location"
          position={{
            lat: state.currentLocation.lat,
            lng: state.currentLocation.lng
          }}
          onClick={onMarkerClick}
        />
      )}
      <InfoWindow
        marker={state.activeMarker}
        onClose={onInfoWindowClose}
        visible={state.showingInfoWindow}
      >
        <div>
          <h2>{state.selectedPlace.name}</h2>
        </div>
      </InfoWindow>
    </Map>
  );
};

MapContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  google: PropTypes.object,
  lots: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      lat: PropTypes.number,
      lng: PropTypes.number
    })
  ),
  style: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string
  })
};

MapContainer.defaultProps = {
  google: undefined,
  lots: undefined,
  style: undefined
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(MapContainer);
