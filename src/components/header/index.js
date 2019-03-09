import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store';
import './style.less';
import Moment from '../moment';
import { actionCreator as loginActionCreators } from '../../pages/login/store';
class Header extends Component {
  render() {
    const {
      login,
      inputflag,
      handleFocus,
      handleBlur,
      logout,
      handleHover,
      focused,
      handleLeave
    } = this.props;
    return (
      <Fragment>
        <header className="header">
          <div className="header-top ">
            <div className="main">
              <Moment className="moment" />
              <div className="count-info">
                <CSSTransition in={inputflag} timeout={1000} classNames="slide">
                  <input
                    type="text"
                    placeholder="搜Topblog"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={inputflag ? 'search active' : 'search'}
                  />
                </CSSTransition>
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
                  <li
                    className="userinfo"
                    onMouseOver={handleHover}
                    onMouseLeave={handleLeave}
                  >
                    <span>头像</span>
                    <CSSTransition
                      in={focused}
                      timeout={1000}
                      classNames="fade"
                      unmountOnExit
                      onEntered={el => (el.style.opacity = 1)}
                    >
                      <ul className="usermanage">
                        <li>我的博客</li>
                        <Link to="/manageblog">
                          <li>管理博客</li>
                        </Link>
                        <li>个人中心</li>
                        <li>退出</li>
                      </ul>
                    </CSSTransition>
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
    login: state.getIn(['login', 'login']),
    focused: state.getIn(['header', 'focused']),
    inputflag: state.getIn(['header', 'inputflag'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout() {
      sessionStorage.clear();
      dispatch(loginActionCreators.logout());
    },
    handleHover() {
      dispatch(actionCreator.handleover());
    },
    handleLeave() {
      dispatch(actionCreator.handleleave());
    },
    handleFocus() {
      dispatch(actionCreator.handlefocus());
    },
    handleBlur() {
      dispatch(actionCreator.handleblur());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
