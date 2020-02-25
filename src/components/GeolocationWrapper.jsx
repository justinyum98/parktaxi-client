import React, { useState, useEffect } from 'react';
import getCurrentLocation from '../utils/geolocation';

const GeolocationWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentLocation, setCurrentLocation] = useState({});
  useEffect(() => {
    getCurrentLocation()
      .then(location => {
        setCurrentLocation(location);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return children({ currentLocation, loading, error });
};

export default GeolocationWrapper;
