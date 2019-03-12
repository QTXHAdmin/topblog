import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from 'antd';
import store from '../../../store';
import { actionCreator } from '../manageblog/store';
import Headers from '../../../components/header';
import Blogleftmsg from '../../../components/blogleftmsg';
import './style.less';
class Arcitledetail extends Component {
  componentDidMount() {
    store.dispatch(actionCreator.getarticleid(this.props.arcitleid));
      // if(this.props.onearcitle){
      //   store.dispatch(actionCreator.getonearcitle());
      // }
  }
  render() {
    const { onearcitle ,one} = this.props;
    console.log(one);
    return (
      <Fragment>
        <Headers />
        <div className="main clearfix">
          <div className="wrap">
            <Blogleftmsg />
            <div className="detail-wrapper">
              <div className="detail-top">
                <h3>
                  <span className="articletype">原</span>
                  <span>{onearcitle.title}</span>
                </h3>
                <p>
                  <span></span>
                  <span>名字</span>
                  <span>阅读数：28</span> <span>更多</span>
                </p>
                <div className="content-box">
                  <p>版权声明：本文为博主原创文章，未经博主允许不得转载</p>
                  {
                    <div
                      className="main-content"
                      dangerouslySetInnerHTML={{ __html: onearcitle.wrap }}
                    />
                  }
                </div>
              </div>
              <div className="ad-wrapper">广告位</div>
              <div className="commentarea">
                <span>头像</span>
                <Input placeholder="添加评论内容" style={{ width: '70%' }} />
                <Button type="primary"> 发表评论 </Button>
                <div className="comment-content">
                  <ul>
                    <li>
                      <span>头像</span>
                      <span>名字:</span>
                      <span>内容</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="recommend-wrap">
                <ul>
                  <li className="clearfix">
                    <div className="recommend-item ">
                      <h3>标题</h3>
                      <span>阅读数：30</span>
                    </div>
                    <div className="recommend-userinfo">
                      <p>一段文章描述...</p>
                      <span>来自：作者</span>
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
  return {
    arcitleid: state.getIn(['manageblog', 'arcitleid']),
    onearcitle: state.getIn(['manageblog', 'onearcitle'])
    // one:state.getIn(['manageblog','one'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arcitledetail);
