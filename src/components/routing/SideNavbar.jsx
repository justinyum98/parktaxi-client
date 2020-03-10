import React, { useState } from 'react';

import {
  ClockCircleOutlined,
  CreditCardOutlined,
  GiftOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';

import { ReactComponent as Logo } from '../../assets/parktaxilogo.svg';

function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onCollapse = collapsed => {
    setIsCollapsed(collapsed);
  };

  return (
    <Layout.Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse}>
      <Logo
        style={{
          height: '50px',
          width: '50px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '10px',
          marginBottom: '10px'
        }}
      />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">
          <UserOutlined />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="2">
          <CreditCardOutlined />
          <span>Payment</span>
        </Menu.Item>
        <Menu.Item key="3">
          <ClockCircleOutlined />
          <span>History</span>
        </Menu.Item>
        <Menu.Item key="4">
          <SettingOutlined />
          <span>Settings</span>
        </Menu.Item>
        <Menu.Item key="5">
          <GiftOutlined />
          <span>Rewards</span>
        </Menu.Item>
        <Menu.Item key="6">
          <QuestionCircleOutlined />
          <span>Help</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default SideNavbar;
