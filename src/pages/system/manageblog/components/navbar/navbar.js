import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
const { Sider } = Layout;
class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <Sider
          style={{
            overflow: 'auto',
            height: '100%',
            // position: 'fixed',
            top: '4px',
            zIndex: 1
          }}
        >
          <Menu theme="light " mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
              <Link to="/markdownedit">
                <Icon type="user" />
                <span className="nav-text">Markdown编辑器</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/writeblog">
                <Icon type="video-camera" />
                <span className="nav-text">富文本编辑器</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/myblog">
                <Icon type="upload" />
                <span className="nav-text">查看主页</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="bar-chart" />
              <span className="nav-text">文章管理</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="cloud-o" />
              <span className="nav-text">专栏管理</span>
            </Menu.Item>
            <Menu.Item key="6">
              <Icon type="appstore-o" />
              <span className="nav-text">评论管理</span>
            </Menu.Item>
            <Menu.Item key="7">
              <Icon type="team" />
              <span className="nav-text">个人分类管理</span>
            </Menu.Item>
            <Menu.Item key="8">
              <Icon type="shop" />
              <span className="nav-text">博客搬家</span>
            </Menu.Item>
            <Menu.Item key="9">
              <Icon type="shop" />
              <span className="nav-text">博客设置</span>
            </Menu.Item>
            {/* <div className="erweima">客服</div> */}
          </Menu>
        </Sider>
      </Fragment>
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
)(Navbar);
