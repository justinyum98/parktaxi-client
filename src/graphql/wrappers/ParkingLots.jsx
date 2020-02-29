import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_ALL_PARKING_LOTS from '../queries/lots';

const ParkingLots = ({ children }) => {
  const { loading, error, data } = useQuery(GET_ALL_PARKING_LOTS);

  if (loading) return <p>Getting parking lots...</p>;
  if (error) return <p>Error getting parking lots...</p>;

  return children({ parkingLots: data });
};

export default ParkingLots;
