import React, { Component } from 'react';
import { Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
class RightMenu extends Component {
  render() {
    return (
      <Menu mode="horizontal" className='nav-item'>
        <Menu.Item key="app">
          <UserOutlined />
          <Link to='/Login'>Signin</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default RightMenu;