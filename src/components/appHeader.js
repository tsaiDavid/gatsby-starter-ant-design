import React from 'react'
import { navigate } from 'gatsby'
import { Layout as AntLayout, Menu } from 'antd'
const { Header } = AntLayout

const menuNavigation = ({ _item, key, _keyPath }) => {
  navigate(key)
}

// const setSelectedMenuItem = ({ item, key, selectedKeys }) => {}

const AppHeader = ({ siteTitle }) => (
  <Header style={{ background: '#fff' }}>
    <Menu
      mode="horizontal"
      defaultSelectedKeys={['/']}
      style={{ lineHeight: '64px' }}
      onClick={menuNavigation}
    >
      <Menu.Item key="/">{siteTitle}</Menu.Item>
      <Menu.Item key="/about/">About</Menu.Item>
      <Menu.Item key="/contact/">Contact</Menu.Item>
    </Menu>
  </Header>
)

export default AppHeader
