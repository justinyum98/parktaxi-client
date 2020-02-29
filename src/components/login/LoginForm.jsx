import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = ({ handleLogin }) => {
  const onFinish = values => {
    const { email, password } = values;
    handleLogin({ email, password });
  };

  return (
    <Form onFinish={onFinish} className="login-form">
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your UCSD email address.'
          }
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password.'
          }
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Link className="login-form-forgot" to="/forgot">
          Forgot password
        </Link>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or
        <Link to="/register"> register now!</Link>
      </Form.Item>
    </Form>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func
};

LoginForm.defaultProps = {
  handleLogin: undefined
};

export default LoginForm;
