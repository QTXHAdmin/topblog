import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { actionCreator } from './store';
import store from '../../store';
import Header from '../../components/header';
import './style.less';
class Home extends Component {
  componentDidMount() {
    store.dispatch(actionCreator.getallarticles());
  }
  render() {
    const { articles } = this.props;
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
                <Carousel autoplay >
                  <div>
                      <h3>
                       <img style={{width:'100%',height:'169px'}} src="/icon/lundun.jpg" alt=""/>
                      </h3>
                  </div>
                  <div>
                    <h3>
                      <img style={{width:'100%',height:'169px'}} src="/icon/lundunyan.jpg" alt=""/>
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img style={{width:'100%',height:'169px'}} src="/icon/tieta.jpg" alt=""/>
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img style={{width:'100%',height:'169px'}} src="/icon/lundun.jpg" alt=""/>
                    </h3>
                  </div>
                </Carousel>
              </div>
              <div className="blog-list-wrap">
                <ul className="blog-list">
                  {articles.map((item, index) => (
                    <li key={item._id}>
                      <h3>{item.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: item.wrap }} />
                      <div className="bottom-wrap">
                        <div className="bottom-left">
                          <Link to="/home">
                            <span>头像 zhanghe</span>
                          </Link>
                          <Link to="/home">
                            <span>程序人生</span>
                          </Link>
                          <span className="timer">{item.date}</span>
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
                  ))}
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
  return {
    articles: state.getIn(['home', 'articles'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
