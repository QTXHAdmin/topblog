import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Header from '../../../components/header';
import './style.less';
import { Checkbox, Button } from 'antd';
import BlogLeft from '../../../components/blogleftmsg';
import store from '../../../store';
import { actionCreator } from './store';
class Myblog extends Component {
  componentDidMount() {
    store.dispatch(actionCreator.getInfoList());
  }

  render() {
    const { loginStatus, getinfolist } = this.props;
    console.log(getinfolist);
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
              {/* <Button icon="setting" className="myblogbtn">
                管理博客
              </Button> */}
            </div>
          </div>
          <div className="myBlogBody">
            <BlogLeft />

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
                  {/* <Button icon="search">RSS订阅</Button> */}
                </div>
              </div>
              <div className="myBlogwrap">
                <ul className="arcitle-list-wrap">
                  {this.props.getinfolist.map((item, index) => {
                    return (
                      <li key={item._id}>
                        <h3>{item.title}</h3>
                        <div className="arcitile-info-wrap">
                          <div className="left-info">
                            <span>原创</span>
                            <span>时间:{item.time}</span>
                            <span>人数:{item.visitors}</span>
                            <span>评论数:{item.commits}</span>
                          </div>
                          <div className="right-info">
                            <Button size="small" type="primary">
                              查看
                            </Button>

                            {/* <Button size="small">禁止评论</Button>
                            <Button size="small">置顶</Button> */}
                            {/* <Button
                              style={{ color: 'red' }}
                              size="small"
                              type="dashed"
                            >
                              删除
                            </Button> */}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
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
    getinfolist: state.getIn(['myblog', 'getinfolist']),
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
