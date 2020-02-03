import React, { useState } from 'react';
import { Layout } from 'antd';
import SideNavbar from '../components/SideNavbar';
import Map from '../components/Map';

function HomePage() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const onLotClick = ({ name, lat, lng }) => {
    console.log('onLotClick');
    console.log('name:', name);
    console.log('lat:', lat);
    console.log('lng:', lng);
    setIsDrawerVisible(true);
  };

  // TODO: Finish setup of the drawer.

  // TODO: Replace fakeLots with actual data from db.
  const fakeLots = [
    {
      name: 'Pangea',
      lat: 32.8842556,
      lng: -117.2431062,
    },
    {
      name: 'Gilman',
      lat: 32.8773774,
      lng: -117.2338526,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideNavbar />
      <Layout>
        <Layout.Content style={{ margin: '0 16px' }}>
          <Map lots={fakeLots} onLotClick={onLotClick} />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
