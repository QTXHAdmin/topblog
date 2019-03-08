import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.less';
import Moment from '../moment';
import { actionCreator as loginActionCreators } from '../../pages/login/store';
class Header extends Component {
  render() {
    const { login, logout } = this.props;
    return (
      <Fragment>
        <header className="header">
          <div className="header-top ">
            <div className="main">
              <Moment className="moment" />
              <div className="count-info">
                <input type="text" placeholder="搜Topblog" className="search" />
                <ul className="right-menu clearfix">
                  <Link to="/myblog">
                    <li>写博客</li>
                  </Link>
                  <li>消息</li>
                  {login ? (
                    <li onClick={logout}>退出</li>
                  ) : (
                    <Link to="/login">
                      <li>登录</li>
                    </Link>
                  )}
                  <li className="userinfo">
                    <span>头像</span>
                    <ul className="usermanage">
                      <li>我的博客</li>
                      <li>管理博客</li>
                      <li>个人中心</li>
                      <li>退出</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout() {
      sessionStorage.clear();
      dispatch(loginActionCreators.logout());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
