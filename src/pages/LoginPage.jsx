import React from 'react';
import { Row, Col } from 'antd';

import WrappedLoginForm from '../components/WrappedLoginForm';

const LoginPage = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Row>
      <Col>
        <div
          style={{
            width: '120px',
            height: '31px',
            background: 'yellow',
            margin: '16px 24px 16px 0',
          }}
        >
          Logo here
        </div>
      </Col>
      <Col>
        <WrappedLoginForm />
      </Col>
    </Row>
  </div>
);

export default LoginPage;
