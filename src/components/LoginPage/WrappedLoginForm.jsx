import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Icon, Input, Button, message } from 'antd';
import verifyJWT from '../../utils/jwt';

const LoginForm = ({ form }) => {
  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        // TODO: Refactor, needs cutting down.
        message.loading('Logging in...');
        const request = {
          method: 'post',
          url: `${process.env.REACT_APP_BACKEND_URL}/login`,
          data: { ...values },
          withCredentials: true
        };
        axios(request)
          .then(response => {
            const token = response.data.jwt;
            verifyJWT(token)
              .then(decoded => {
                window.sessionStorage.setItem('token', token);
                window.location.href =
                  process.env.REACT_APP_LOGIN_SUCCESS_REDIRECT;
              })
              .catch(err2 => {
                console.log('Error in verifying JWT:', err2);
                message.error('Error has occured. Try again.');
              });
          })
          .catch(error => {
            if (error.response) {
              if (error.response.status === 401) {
                message.error('Error 401: Authentication failed.');
              } else if (error.response.status === 500) {
                message.error('Error 500: Internal Server Error.');
              }
            } else {
              message.error('Unknown error has occured.');
            }
          });
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              required: true,
              message: 'Please input a valid UCSD email address!'
            }
          ]
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email Address"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password!'
            }
          ]
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Link className="login-form-forgot" to="/forgot">
          Forgot password
        </Link>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func
  })
};

LoginForm.defaultProps = {
  form: undefined
};

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm;
