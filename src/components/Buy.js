import React from 'react';
import { TextField, Slider } from '@material-ui/core';
import { getSpots } from '../redux/actions';

export default function Buy() {
  const marks = [
    {
      value: 0,
      label: '0°C'
    },
    {
      value: 20,
      label: '20°C'
    },
    {
      value: 37,
      label: '37°C'
    },
    {
      value: 100,
      label: '100°C'
    }
  ];
  return (
    <p>
      <Slider marks={marks}></Slider>
    </p>
  );
}
