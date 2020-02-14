import React from 'react';

import WrappedLoginForm from '../components/LoginPage/WrappedLoginForm';

const LoginPage = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div className="logo">
      Logo here
    </div>
    <WrappedLoginForm />
  </div>
);

export default LoginPage;
