import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Input, Button, message } from 'antd';

const RegistrationForm = ({ form }) => {
  const [isConfirmDirty, setIsConfirmDirty] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        message.loading('Registering user...');
        const request = {
          method: 'post',
          url: `${process.env.REACT_APP_BACKEND_URL}/register`,
          data: { ...values }
        };
        axios(request)
          .then(response => {
            message.success('Succesfully registered!');
          })
          .catch(error => {
            if (error.response) {
              if (error.response.status === 409) {
                message.error('Error 409: User already exists.');
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

  const handleConfirmBlur = e => {
    const { value } = e.target;
    setIsConfirmDirty(isConfirmDirty || !!value);
  };

  const validateUCSDEmail = (rule, value, callback) => {
    const re = /\S+@ucsd\.edu/;
    if (value && !re.test(value)) {
      callback('Please enter a valid UCSD e-mail.');
    } else {
      callback();
    }
  };

  const validateToNextPassword = (rule, value, callback) => {
    if (value && isConfirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  const compareToFirstPassword = (rule, value, callback) => {
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 }
    }
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0
      },
      sm: {
        span: 16,
        offset: 8
      }
    }
  };

  const { getFieldDecorator } = form;
  return (
    <Form {...formItemLayout} onSubmit={handleSubmit} className="register-form">
      <Form.Item label="First Name">
        {getFieldDecorator('firstName', {
          rules: [
            {
              required: true,
              message: 'Please input your first name!'
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Last Name">
        {getFieldDecorator('lastName', {
          rules: [
            {
              required: true,
              message: 'Please input your last name!'
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="E-mail" extra="Currently, only UCSD emails are valid.">
        {getFieldDecorator('email', {
          rules: [
            {
              type: 'email',
              message: 'The input is not a valid e-mail.'
            },
            {
              required: true,
              message: 'Please input your e-mail!'
            },
            {
              validator: validateUCSDEmail
            }
          ]
        })(<Input />)}
      </Form.Item>
      <Form.Item label="Password" hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: 'Please input your password'
            },
            {
              validator: validateToNextPassword
            }
          ]
        })(<Input.Password />)}
      </Form.Item>
      <Form.Item label="Confirm Password" hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            {
              required: true,
              message: 'Please confirm your password!'
            },
            {
              validator: compareToFirstPassword
            }
          ]
        })(<Input.Password onBlur={handleConfirmBlur} />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          className="register-form-button"
        >
          Register
        </Button>
        Or <Link to="/login">login to existing account.</Link>
      </Form.Item>
    </Form>
  );
};

RegistrationForm.propTypes = {
  form: PropTypes.shape({
    getFieldDecorator: PropTypes.func,
    validateFields: PropTypes.func,
    getFieldValue: PropTypes.func
  })
};

RegistrationForm.defaultProps = {
  form: undefined
};

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm
);

export default WrappedRegistrationForm;
