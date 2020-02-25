const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser.'));
    } else {
      navigator.geolocation.getCurrentPosition((success, error) => {
        if (error) {
          reject(new Error('Cannot retrieve current location.'));
        } else {
          const { latitude, longitude } = success.coords;
          resolve({
            lat: latitude,
            lng: longitude
          });
        }
      });
    }
  });
};

export default getCurrentLocation;
