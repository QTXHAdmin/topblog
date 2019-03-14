import React, { Component, Fragment } from 'react';
import { Avatar } from 'antd';
import './style.less';
class index extends Component {
  render() {
    return (
      <Fragment>
        <div className="myBlogBody-l">
          <div className="l-top">
            {/* <Avatar size="large" icon="user" /> */}
            <img style={{height:30,width:30}} src="/touxiang.jpg" alt=""/>
            <span className="username">蒸蒸</span>
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
            <div />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default index;
