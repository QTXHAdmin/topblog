import React, { Component, Fragment } from 'react';
import './style.less';
class Home extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="main">
            <div className="logo-wrap">
              {/* <img src="" alt=""/> */}
              <span>Logoimg</span>
              <ul className="left-menu clearfix">
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
            </div>
            <div className="input-wrap">
              <input type="text" placeholder="搜Topblog" className="search" />
              <ul className="right-menu clearfix">
                <li>写博客</li>
                <li>赚零钱</li>
                <li>消息</li>
                <li>登录</li>
                <li>
                  <span>头像</span>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="content">
          <div className="main">
            <div className="left-nav">
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
            </div>
            <div className="wrapper clearfix">
              <div className="main-content">
                <div className="ad">{/* <img src="" alt=""/> */}</div>
                <div className="swiper">
                  {/* <img src="" alt=""/> */}
                </div>
                <ul className="item-wrap">
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
                  
                </ul>
              </div>
              <div className="right-nav" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
