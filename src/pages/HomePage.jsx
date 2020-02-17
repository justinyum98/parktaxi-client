import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import axios from 'axios';
import SideNavbar from '../components/HomePage/SideNavbar';
import Map from '../components/HomePage/Map';
import Options from '../components/HomePage/Options';

function HomePage() {
  const [lots, setLots] = useState([]);
  useEffect(() => {
    const request = {
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/api/lot`
    };
    axios(request)
      .then(response => {
        console.log(response);
        setLots(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const [currentLocation, setCurrentLocation] = useState(undefined);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({
        lat: latitude,
        lng: longitude
      });
    });
  }, []);

  const onRideClick = () => {};

  const onParkClick = () => {};

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNavbar />
      <Layout>
        <Layout.Content style={{ margin: '0 16px' }}>
          <Map lots={lots} currentLocation={currentLocation} />
          <Options onRideClick={onRideClick} onParkClick={onParkClick} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
