import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';

import { ReactComponent as Logo } from '../../assets/parktaxilogo.svg';

function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onCollapse = collapsed => {
    console.log(collapsed);
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
          <Icon type="user" />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="credit-card" />
          <span>Payment</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="clock-circle" />
          <span>History</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="setting" />
          <span>Settings</span>
        </Menu.Item>
        <Menu.Item key="5">
          <Icon type="gift" />
          <span>Rewards</span>
        </Menu.Item>
        <Menu.Item key="6">
          <Icon type="question-circle" />
          <span>Help</span>
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default SideNavbar;
