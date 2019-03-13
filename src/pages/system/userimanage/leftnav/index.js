import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link}from 'react-router-dom';
import { Menu, Icon, Switch } from 'antd';
import './style.less';
const { SubMenu } = Menu;

class Leftnav extends Component {
  state = {
    mode: 'inline',
    theme: 'light'
  };
  changeMode = value => {
    this.setState({
      mode: value ? 'vertical' : 'inline'
    });
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light'
    });
  };
  render() {
    return (
      <div>
        <div className="switch-wrap">
          <Switch
            onChange={this.changeMode}
            style={{ backgroundColor: '#f00' }}
          />
          <span>改变模式</span>
          <span className="ant-divider" style={{ margin: '0 1em' }} />
          <Switch
            onChange={this.changeTheme}
            style={{ backgroundColor: '#f00' }}
          />
          <span>改变主题</span>
        </div>
        <Menu
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="appstore" />
                <span>我的</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Icon type="mail" />
              个人资料
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="/myblog">
              <Icon type="calendar" />
              我的博客
            </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="calendar" />
              我的关注
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="calendar" />
              我的收藏
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leftnav);
