import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
class LeftMenu extends Component {
  render() {
    return (
   <Menu mode="horizontal" className='nav-item'>
        <Menu.Item key="alipay">
          {/* <a href="">About Us</a> */}
          <Link to='/About'>About Us</Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;