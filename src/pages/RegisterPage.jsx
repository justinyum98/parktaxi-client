import React from 'react';

import WrappedRegistrationForm from '../components/RegisterPage/WrappedRegistrationForm';

const RegisterPage = () => (
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
    <WrappedRegistrationForm />
  </div>
);

export default RegisterPage;
