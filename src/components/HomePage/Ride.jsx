/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Steps, TimePicker, Select, message } from 'antd';
import _ from 'lodash';
import PickUpMap from './PickUpMap';

const Ride = ({ isRideVisible, onRideSubmit, onRideCancel }) => {
  const [rideForm, setRideForm] = useState({
    current: 0,
    pickUpTime: {},
    pickUpTimeString: '',
    pickUpLocation: {},
    parkingLot: '',
    spotType: ''
  });

  const resetRideForm = () => {
    setRideForm({
      current: 0,
      pickUpTime: {},
      pickUpTimeString: '',
      pickUpLocation: {},
      parkingLot: '',
      spotType: ''
    });
  };

  const validateRide = () => {
    const {
      pickUpTime,
      pickUpTimeString,
      pickUpLocation,
      parkingLot,
      spotType
    } = rideForm;
    return (
      !_.isEmpty(pickUpTime) &&
      !_.isEmpty(pickUpTimeString) &&
      !_.isEmpty(pickUpLocation) &&
      !_.isEmpty(parkingLot) &&
      !_.isEmpty(spotType)
    );
  };

  const handleRideSubmit = () => {
    if (validateRide()) {
      const rideData = _.omit(rideForm, 'current');
      resetRideForm();
      onRideSubmit(rideData);
    } else {
      message.error('Error: Ride request incomplete');
    }
  };

  const handleRideCancel = () => {
    resetRideForm();
    onRideCancel();
  };

  const onTimeChange = (time, timeString) => {
    setRideForm({
      ...rideForm,
      pickUpTime: time,
      pickUpTimeString: timeString
    });
  };

  const handlePickUp = location => {
    setRideForm({
      ...rideForm,
      pickUpLocation: location
    });
  };

  const handleParkingLotChange = parkingLot => {
    setRideForm({
      ...rideForm,
      parkingLot
    });
  };

  const handleSpotTypeChange = spotType => {
    setRideForm({
      ...rideForm,
      spotType
    });
  };

  const next = () => {
    const current = rideForm.current + 1;
    setRideForm({
      ...rideForm,
      current
    });
  };

  const prev = () => {
    const current = rideForm.current - 1;
    setRideForm({
      ...rideForm,
      current
    });
  };

  const parkingLots = [
    'Pangea',
    'Gilman',
    'Hopkins',
    'Revelle',
    'Osler',
    'Sixth'
  ];

  const spotTypes = ['S', 'A', 'B'];

  const steps = [
    {
      title: 'Time',
      content: (
        <div style={{ textAlign: 'center' }}>
          <TimePicker use12Hours format="h:mm a" onChange={onTimeChange} />
        </div>
      )
    },
    {
      title: 'Pickup Location',
      content: (
        <div style={{ height: '500px', textAlign: 'center' }}>
          <PickUpMap
            style={{ height: '500px', width: '950px' }}
            handlePickUp={handlePickUp}
          />
        </div>
      )
    },
    {
      title: 'Parking Spot',
      content: (
        <div style={{ textAlign: 'center' }}>
          <div>
            <Select
              style={{ width: '190px' }}
              placeholder="Select your parking lot"
              onChange={handleParkingLotChange}
            >
              {parkingLots.map(parkingLot => (
                <Select.Option value={parkingLot}>{parkingLot}</Select.Option>
              ))}
            </Select>
          </div>
          <div>
            <Select
              style={{ width: '190px' }}
              placeholder="Select your spot type"
              onChange={handleSpotTypeChange}
            >
              {spotTypes.map(spotType => (
                <Select.Option value={spotType}>{spotType}</Select.Option>
              ))}
            </Select>
          </div>
        </div>
      )
    },
    {
      title: 'Confirm',
      content: (
        <div style={{ textAlign: 'center' }}>
          <p>Pick-up Time: {rideForm.pickUpTimeString}</p>
          <p>
            Pick-up Location:{' '}
            {!_.isEmpty(rideForm.pickUpLocation) &&
              `(${rideForm.pickUpLocation.lat}, ${rideForm.pickUpLocation.lng})`}
          </p>
          <p>Parking Lot: {rideForm.parkingLot}</p>
          <p>Spot Type: {rideForm.spotType}</p>
        </div>
      )
    }
  ];

  return (
    <Modal
      title="Ride"
      width={1000}
      centered
      visible={isRideVisible}
      onCancel={handleRideCancel}
      footer={null}
    >
      <Steps current={rideForm.current}>
        {steps.map(item => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[rideForm.current].content}</div>
      <div className="steps-action">
        {rideForm.current < steps.length - 1 && (
          <Button type="primary" onClick={next}>
            Next
          </Button>
        )}
        {rideForm.current === steps.length - 1 && (
          <Button type="primary" onClick={handleRideSubmit}>
            Done
          </Button>
        )}
        {rideForm.current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={prev}>
            Previous
          </Button>
        )}
      </div>
    </Modal>
  );
};

Ride.propTypes = {
  isRideVisible: PropTypes.bool,
  currentLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  onRideSubmit: PropTypes.func,
  onRideCancel: PropTypes.func
};

Ride.defaultProps = {
  isRideVisible: false,
  currentLocation: undefined,
  onRideSubmit: undefined,
  onRideCancel: undefined
};

export default Ride;
