import React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';
import { message } from 'antd';
import { LOGIN_USER } from '../graphql/mutations/login';
import verifyJWT from '../utils/jwt';
import { ReactComponent as Logo } from '../assets/parktaxilogo.svg';
import LoginForm from '../components/login/LoginForm';

const LoginPage = () => {
  const client = useApolloClient();
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted: ({ login }) => {
      const { user, token } = login;
      verifyJWT(token)
        .then(() => {
          client.writeData({
            data: {
              isLoggedIn: true,
              currentUser: user
            }
          });
          window.sessionStorage.setItem('token', token);
          window.location.href = process.env.REACT_APP_LOGIN_SUCCESS_REDIRECT;
        })
        .catch(err => {
          console.log(err);
          message.error('Error verifying token.');
        });
    },
    onError: gqlError => {
      console.log(gqlError);
      message.error('Error logging in. Try again.');
    }
  });

  const handleLogin = ({ email, password }) => {
    loginUser({
      variables: { email, password }
    });
  };

  if (loading) return <div>Loggin in...</div>;
  if (error) return <div>Error</div>;

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
          height: '200px',
          width: '200px',
          margin: '40px'
        }}
      />
      <div
        style={{
          width: '300px'
        }}
      >
        <LoginForm handleLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
