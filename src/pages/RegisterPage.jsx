import React from 'react';
import { ReactComponent as Logo } from '../assets/parktaxilogo.svg';

import WrappedRegistrationForm from '../components/RegisterPage/WrappedRegistrationForm';

const RegisterPage = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}
  >
    <Logo
      style={{
        height: '150px',
        width: '150px',
        margin: '20px'
      }}
    />
    <WrappedRegistrationForm />
  </div>
);

export default RegisterPage;
