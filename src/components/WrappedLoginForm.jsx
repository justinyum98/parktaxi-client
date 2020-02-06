import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Form, Icon, Input, Button, message,
} from 'antd';

const LoginForm = ({ form }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        message.loading('Logging in...');
        const request = {
          method: 'post',
          url: 'https://api.parktaxi.app/login',
          data: { ...values },
          withCredentials: true,
        };
        axios(request)
          .then((response) => {
            console.log(response);
            message.success('Successfully logged in!');
          })
          .catch((error) => {
            console.log(error);
            message.error('Error when logging in. Try again.');
          });
      }
    });
  };

  const { getFieldDecorator } = form;
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
        {getFieldDecorator('email', {
          rules: [{
            required: true,
            message: 'Please input a valid UCSD email address!',
          }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Email Address"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{
            required: true,
            message: 'Please input your password!',
          }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Link className="login-form-forgot" to="/forgot">
          Forgot password
        </Link>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or
        {' '}
        <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func,
  }),
};

LoginForm.defaultProps = {
  form: undefined,
};

const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

export default WrappedLoginForm;
