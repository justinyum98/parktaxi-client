import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner';
import LotsDataWrapper from '../LotsDataWrapper';
import MapContainer from './MapContainer';
import Options from './Options';
import Ride from './Ride';

const HomeContent = ({
  isRideVisible,
  onRideClick,
  onRideSubmit,
  onRideCancel,
  onParkClick
}) => (
  <LotsDataWrapper>
    {({ lotsData, loading, error }) => {
      if (loading) return <LoadingSpinner message="Retreiving lots..." />;
      if (error) return <p>Error getting lotsData.</p>;

      return (
        <div>
          <div style={{ height: '85vh', width: '100%' }}>
            <MapContainer
              style={{ height: '85%', width: '100%' }}
              lots={lotsData}
            />
          </div>
          <div style={{ height: '15vh', width: '100%' }}>
            <Options onRideClick={onRideClick} onParkClick={onParkClick} />
          </div>
          <Ride
            isRideVisible={isRideVisible}
            onRideSubmit={onRideSubmit}
            onRideCancel={onRideCancel}
          />
        </div>
      );
    }}
  </LotsDataWrapper>
);

HomeContent.propTypes = {
  isRideVisible: PropTypes.bool,
  onRideClick: PropTypes.func,
  onRideSubmit: PropTypes.func,
  onRideCancel: PropTypes.func,
  onParkClick: PropTypes.func
};

HomeContent.defaultProps = {
  isRideVisible: false,
  onRideClick: undefined,
  onRideSubmit: undefined,
  onRideCancel: undefined,
  onParkClick: undefined
};

export default HomeContent;
