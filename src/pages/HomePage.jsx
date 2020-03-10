import React, { useState } from 'react';
import { Layout, message } from 'antd';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import SideNavbar from '../components/routing/SideNavbar';
import InfoMap from '../components/home/InfoMap';
import Options from '../components/home/Options';
import Ride from '../components/home/ride/Ride';

const REQUEST_RIDE = gql`
  mutation RequestRide(
    $dateTime: DateTime!
    $location: LocationInput!
    $parkingLotName: ParkingLotName!
    $spotType: SpotType!
  ) {
    requestRide(
      dateTime: $dateTime
      location: $location
      parkingLotName: $parkingLotName
      spotType: $spotType
    ) {
      requester {
        email
        firstName
        lastName
      }
      dateTime
      location {
        lat
        lng
      }
      parkingLot {
        name
        lat
        lng
      }
      spotType
    }
  }
`;

function HomePage() {
  const [isRideVisible, setIsRideVisible] = useState(false);
  const [requestRide] = useMutation(REQUEST_RIDE, {
    onCompleted: data => {
      console.log('requestRide:', data.requestRide);
      message.success('Ride requested!');
    },
    onError: gqlError => {
      console.log(gqlError);
      message.error('Error requesting ride.');
    }
  });

  const onRideClick = () => {
    setIsRideVisible(true);
  };

  const onRideSubmit = rideData => {
    const { dateTime, location, parkingLotName, spotType } = rideData;
    const jsDateTime = dateTime.toDate();
    console.log(rideData);
    console.log(jsDateTime);
    message.info('Processing request...');
    requestRide({
      variables: {
        dateTime: jsDateTime,
        location,
        parkingLotName,
        spotType
      }
    });
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
          <div style={{ height: '80%' }}>
            <InfoMap style={{ height: '80vh' }} />
          </div>
          <div style={{ height: '20%', paddingTop: '15px' }}>
            <Options onRideClick={onRideClick} onParkClick={onParkClick} />
          </div>
          <Ride
            isRideVisible={isRideVisible}
            onRideSubmit={onRideSubmit}
            onRideCancel={onRideCancel}
          />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default HomePage;
