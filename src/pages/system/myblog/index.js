import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../../components/Header';
import './style.less';
import { Checkbox, Button, Avatar } from 'antd';
class Myblog extends Component {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <Fragment>
          <Header />
          <div className="myBlogNav">
            <div className="myBlogwrap">
              <h3 className="blogtitle">zhengzheng的博客</h3>
              {/* <button className="myblogbtn">
               
                管理博客
              </button> */}
              <Button icon="setting" className="myblogbtn">
                管理博客
              </Button>
            </div>
          </div>
          <div className="myBlogBody">
            <div className="myBlogBody-l">
              <div className="l-top">
                <Avatar size="large" icon="user" />
                <span className="username">zhengzheng</span>
              </div>
              <div className="l-middle">
                <ul className="l-middlelist">
                  <li>
                    <p>原创</p>
                    <p>0</p>
                  </li>
                  <li>
                    <p>粉丝</p>
                    <p>0</p>
                  </li>
                  <li>
                    <p>喜欢</p>
                    <p>0</p>
                  </li>
                  <li>
                    <p>评论</p>
                    <p>0</p>
                  </li>
                </ul>
              </div>
              <div className="l-bottom">
                <p>
                  <span>等级：</span>
                  <span>博客1</span>
                </p>
                <p>
                  <span>访问: </span>
                  <span>3</span>
                </p>
                <p>
                  <span>积分: </span>
                  <span>10</span>
                </p>
                <p>
                  <span>排名: </span>
                  <span>269万+</span>
                </p>
              </div>
              <div className="l-hot">
                <span className="l-hottext">热门文章</span>
              </div>
            </div>
            <div className="myBlogBody-r">
              <div className="r-title">
                <Checkbox>只看原创</Checkbox>
                <div className="r-title-r">
                  <span>排序：</span>
                  <ul className="typelist">
                    <li className="actived">默认</li>
                    <li>按更新时间</li>
                    <li>按访问量</li>
                  </ul>
                  <Button icon="search">RSS订阅</Button>
                </div>
              </div>
              <div className="myBlogwrap" />
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Myblog);
