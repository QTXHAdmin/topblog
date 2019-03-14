import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Carousel, Button } from 'antd';
import { actionCreator as manageActionCreator } from '../system/manageblog/store';
import { actionCreator } from './store';
import store from '../../store';
import Header from '../../components/header';
import './style.less';
class Home extends Component {
  constructor(props){
    super(props);
      this.state={
        page:-1
      }
  }
  componentDidMount() {
    store.dispatch(actionCreator.getallarticles(this.state.page));
  }
  render() {
    const { articles, handleOneArcitle, getmore,getless } = this.props;
    return (
      <Fragment>
        <Header />
        <div className="header-nav-wrap ">
          <div className="main ">
            <div className="logo-wrap ">
              <div className="logo-left">
                <Link to="/userimanage">
                  <span>
                    <img
                      src="/touxiang.jpg"
                      alt=""
                      style={{ width: 40, height: 40 }}
                    />
                  </span>
                </Link>
                <ul className="left-menu ">
                  <Link to="/home">
                    <li>首页</li>
                  </Link>
                  <Link to="/about">
                    <li>关于</li>
                  </Link>
                  <Link to="/messageboard">
                    <li>留言板</li>
                  </Link>
                  <Link to="/comment">
                    <li>评论</li>
                  </Link>
                  <Link to="/home">
                    <li>交流群</li>
                  </Link>
                </ul>
              </div>
              <div className="ad">
                <Link to="/ad">
                  <img
                    src="/ad1.jpg"
                    style={{ width: 400, height: 100 }}
                    alt=""
                  />
                </Link>
              </div>
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
                    <h3>
                      <img
                        style={{ width: '100%', height: '169px' }}
                        src="/icon/lundun.jpg"
                        alt=""
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        style={{ width: '100%', height: '169px' }}
                        src="/icon/lundunyan.jpg"
                        alt=""
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        style={{ width: '100%', height: '169px' }}
                        src="/icon/tieta.jpg"
                        alt=""
                      />
                    </h3>
                  </div>
                  <div>
                    <h3>
                      <img
                        style={{ width: '100%', height: '169px' }}
                        src="/icon/lundun.jpg"
                        alt=""
                      />
                    </h3>
                  </div>
                </Carousel>
              </div>
              <div className="blog-list-wrap">
                <ul className="blog-list">
                  {articles.map((item, index) => (
                    <li key={item._id}>
                      <Link to="/articledetail">
                        <h3 onClick={() => handleOneArcitle(item._id)}>
                          {item.title}
                        </h3>
                      </Link>
                      <p dangerouslySetInnerHTML={{ __html: item.wrap }} className="arcitle"/>
                      <div className="bottom-wrap">
                        <div className="bottom-left">
                          <Link to="/userimanage">
                            <span>
                              <img
                                src="/touxiang2.jpg"
                                style={{ width: 30, height: 30,borderRadius:'50%',marginRight:5 }}
                                alt=""
                              />
                              zhanghe
                            </span>
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
              <div className="btn">
                <Button onClick={()=>getless(this.props.page)} style={{marginRight:10}}>上一页</Button>
                <Button onClick={()=>getmore(this.props.page)}>下一页</Button>
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
    articles: state.getIn(['home', 'articles']),
    page:state.getIn(['home','page'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleOneArcitle(id) {
      dispatch(manageActionCreator.getiteminfo(id));
    },
    getmore(page) {
      console.log(page);

      dispatch(actionCreator.getallarticles(page));
    },
    getless(page) {
      dispatch(actionCreator.getlessarticles(page));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
