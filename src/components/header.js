import React from 'react'
import { navigate } from 'gatsby'
import { Layout, Menu } from 'antd'

const menuNavigation = ({ _item, key, _keyPath }) => {
  navigate(key)
}

// const setSelectedMenuItem = ({ item, key, selectedKeys }) => {}

const Header = ({ siteTitle }) => (
  <Layout.Header>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['/']}
      style={{ lineHeight: '64px' }}
      onClick={menuNavigation}
    >
      <Menu.Item key="/">{siteTitle}</Menu.Item>
      <Menu.Item key="/about/">About</Menu.Item>
      <Menu.Item key="/contact/">Contact</Menu.Item>
    </Menu>
  </Layout.Header>
)

export default Header
