import React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { message } from 'antd';
import { ReactComponent as Logo } from '../assets/parktaxilogo.svg';
import { REGISTER_USER } from '../graphql/mutations/register';
import RegisterForm from '../components/register/RegisterForm';
import verifyJWT from '../utils/jwt';

const RegisterPage = () => {
  const client = useApolloClient();
  const [registerUser, { loading, error }] = useMutation(REGISTER_USER, {
    onCompleted: ({ signup }) => {
      const { user, token } = signup;
      verifyJWT(token)
        .then(() => {
          client.writeData({
            data: {
              isLoggedIn: true,
              currentUser: user
            }
          });
          window.sessionStorage.setItem('token', token);
          message.success('Registered succesfully.');
          window.location.href = process.env.REACT_APP_LOGIN_SUCCESS_REDIRECT;
        })
        .catch(err => {
          console.log(err);
          message.error('Error verifying token.');
        });
    },
    onError: gqlError => {
      console.log(gqlError);
      message.error('Error registering user.');
    }
  });

  const handleRegister = ({
    firstName,
    lastName,
    email,
    password,
    validSpotTypes
  }) => {
    registerUser({
      variables: { firstName, lastName, email, password, validSpotTypes }
    });
  };

  if (loading) return <div>Registering user...</div>;

  return (
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
      <RegisterForm handleRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
