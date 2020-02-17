import React from 'react';
import { ReactComponent as Logo } from '../assets/parktaxilogo.svg';

import WrappedLoginForm from '../components/LoginPage/WrappedLoginForm';

const LoginPage = () => (
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
        height: '200px',
        width: '200px',
        margin: '40px'
      }}
    />
    <WrappedLoginForm />
  </div>
);

export default LoginPage;
