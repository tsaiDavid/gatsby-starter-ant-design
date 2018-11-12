import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import AppHeader from './appHeader'
import { Layout, Menu, Icon } from 'antd'
const { SubMenu } = Menu
const { Content, Sider } = Layout

export class AppLayout extends React.Component {
  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({ collapsed })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Layout style={{ minHeight: '100vh' }}>
              <Sider
                collapsible
                width={200}
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}
              >
                <div
                  style={{
                    height: 32,
                    background: 'rgba(255,255,255,.2)',
                    margin: 16,
                  }}
                />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 2</span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        <span>User</span>
                      </span>
                    }
                  >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="team" />
                        <span>Team</span>
                      </span>
                    }
                  >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                  </SubMenu>
                  <Menu.Item key="9">
                    <Icon type="file" />
                    <span>File</span>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout>
                <AppHeader siteTitle={data.site.siteMetadata.title} />
                <Content style={{ padding: 24 }}>{this.props.children}</Content>
              </Layout>
            </Layout>
          </>
        )}
      />
    )
  }
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout
