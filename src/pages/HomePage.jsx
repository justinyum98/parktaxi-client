import React, { useState } from 'react';
import { Layout, message } from 'antd';
import SideNavbar from '../components/HomePage/SideNavbar';
import HomeContent from '../components/HomePage/HomeContent';

function HomePage() {
  const [isRideVisible, setIsRideVisible] = useState(false);

  const onRideClick = () => {
    setIsRideVisible(true);
  };

  const onRideSubmit = rideData => {
    message.success('Ride requested!');
    console.log('submitted rideData:', rideData);
    setIsRideVisible(false);
  };

  const onRideCancel = () => {
    console.log('Ride cancelled');
    setIsRideVisible(false);
  };

  const onParkClick = () => {};

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNavbar />
      <Layout>
        <Layout.Content style={{ margin: '0 16px' }}>
          <HomeContent
            isRideVisible={isRideVisible}
            onRideClick={onRideClick}
            onRideSubmit={onRideSubmit}
            onRideCancel={onRideCancel}
            onParkClick={onParkClick}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
