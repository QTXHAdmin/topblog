import React, { Component, Fragment } from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import Header from '../../components/header';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
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
                <Link to="/home">
                  <li>首页</li>
                </Link>
                <Link to="/home">
                  <li>关于</li>
                </Link>
                <Link to="/home">
                  <li>留言板</li>
                </Link>
                <Link to="/home">
                  <li>评论</li>
                </Link>
                <Link to="/home">
                  <li>交流群</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="main">
            <div className="content-left">
              <ul className="left-nav ">
                <Link to="/home">
                  <li>html</li>
                </Link>
                <Link to="/home">
                  <li>css</li>
                </Link>
                <Link to="/home">
                  <li>javascript</li>
                </Link>
                <Link to="/home">
                  <li>jquery</li>
                </Link>
                <Link to="/home">
                  <li>bootstrap</li>
                </Link>
                <Link to="/home">
                  <li>nodejs</li>
                </Link>
                <Link to="/home">
                  <li>exporess</li>
                </Link>
                <Link to="/home">
                  <li>vue</li>
                </Link>
                <Link to="/home">
                  <li>webpack</li>
                </Link>
                <Link to="/home">
                  <li>react</li>
                </Link>
              </ul>
            </div>
            <div className="content-right">
              <div className="swiper">
                <Carousel autoplay>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                </Carousel>
              </div>
              <div className="blog-list-wrap">
                <ul className="blog-list">
                  <li>
                    <h3>我在阿里做了5年招聘</h3>
                    <p>
                      前阵子，我和阿里的薪酬福利专家M同学聊了一下午，M同学做了9年薪酬，和我们吐槽了很多薪酬方面的现象，
                    </p>
                    <div className="bottom-wrap">
                      <div className="bottom-left">
                        <Link to="/home">
                          <span>头像 zhanghe</span>
                        </Link>
                        <Link to="/home">
                          <span>程序人生</span>
                        </Link>
                        <span className="timer">1天前</span>
                      </div>
                      <div className="bottom-right">
                        <Link to="/home">
                          <span>阅读数 : 200</span>
                        </Link>

                        <Link to="/home">
                          <span>评论数 : 300</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h3>我在阿里做了5年招聘</h3>
                    <p>
                      前阵子，我和阿里的薪酬福利专家M同学聊了一下午，M同学做了9年薪酬，和我们吐槽了很多薪酬方面的现象，
                    </p>
                    <div className="bottom-wrap">
                      <div className="bottom-left">
                        <Link to="/home">
                          <span>头像 zhanghe</span>
                        </Link>
                        <Link to="/home">
                          <span>程序人生</span>
                        </Link>
                        <span className="timer">1天前</span>
                      </div>
                      <div className="bottom-right">
                        <Link to="/home">
                          <span>阅读数 : 200</span>
                        </Link>

                        <Link to="/home">
                          <span>评论数 : 300</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h3>我在阿里做了5年招聘</h3>
                    <p>
                      前阵子，我和阿里的薪酬福利专家M同学聊了一下午，M同学做了9年薪酬，和我们吐槽了很多薪酬方面的现象，
                    </p>
                    <div className="bottom-wrap">
                      <div className="bottom-left">
                        <Link to="/home">
                          <span>头像 zhanghe</span>
                        </Link>
                        <Link to="/home">
                          <span>程序人生</span>
                        </Link>
                        <span className="timer">1天前</span>
                      </div>
                      <div className="bottom-right">
                        <Link to="/home">
                          <span>阅读数 : 200</span>
                        </Link>

                        <Link to="/home">
                          <span>评论数 : 300</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
)(Home);
