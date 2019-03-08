import React, { Component, Fragment } from 'react';
import './style.less';
import {Link} from 'react-router-dom';
import Header from '../../components/header';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <Fragment>
          <Header />
          <div className="header-nav-wrap ">
            <div className="main ">
              <div className="logo-wrap ">
                {/* <img src="" alt=""/> */}
                <span>Logoimg</span>
                <ul className="left-menu ">
                  <Link to="/home"><li>html</li></Link>
                  <Link to="/home"><li>css</li></Link>
                  <Link to="/home"><li>javascript</li></Link>
                  <Link to="/home"><li>jquery</li></Link>
                  <Link to="/home"><li>bootstrap</li></Link>
                  <Link to="/home"><li>nodejs</li></Link>
                  <Link to="/home"><li>exporess</li></Link>
                  <Link to="/home"><li>vue</li></Link>
                  <Link to="/home"><li>webpack</li></Link>
                  <Link to="/home"><li>react</li></Link>
                </ul>
              </div>
            </div>
          </div>
        <div className="content">
          <div className="main">
            {/* <div className="left-nav">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
              </ul>
            </div> */}
            {/* <div className="wrapper clearfix">
              <div className="main-content">
                <div className="ad">{/* <img src="" alt=""/> </div>
                <div className="swiper">{/* <img src="" alt=""/> </div> */}
                {/* <ul className="item-wrap">
                  <li>
                    <h3>标题</h3>
                    <p>主题</p>
                    <div className="userinfo">
                      <span>头像|姓名</span>
                      <span>分类</span>
                      <span>时间</span>
                    </div>
                    <div className="count-wrap">
                      <span>阅读数 |</span>
                      <span>评论数</span>
                    </div>
                  </li>
                  <li>
                    <h3>标题</h3>
                    <p>主题</p>
                    <div className="userinfo">
                      <span>头像|姓名</span>
                      <span>分类</span>
                      <span>时间</span>
                    </div>
                    <div className="count-wrap">
                      <span>阅读数 |</span>
                      <span>评论数</span>
                    </div>
                  </li>
                </ul> */}
              {/* </div> */}
              {/* <div className="right-nav" /> */}
            {/* </div> */}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // login: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // logout() {
    //   sessionStorage.clear();
    //   dispatch(loginActionCreators.logout());
    // }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
