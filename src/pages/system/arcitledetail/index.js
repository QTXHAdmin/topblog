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
    const { onearcitle, one } = this.props;
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
                  <span />
                  <span>蒸蒸</span>
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
              <div className="ad-wrapper">
                  <img src="/ad2.jpg" style={{height:140,width:800}} alt=""/>
              </div>
              <div className="commentarea">
                <span>
                  <img src="/touxiang.jpg" alt="" style={{width:30,height:30}}/>
                </span>
                <Input placeholder="添加评论内容" style={{ width: '70%' }} />
                <Button type="primary"> 发表评论 </Button>
                <div className="comment-content">
                  <ul>
                    <li>
                      <span>
                      <img src="/touxiang.jpg" alt="" style={{width:30,height:30}}/>
                      </span>
                      <span>蒸蒸</span>:
                      <span>内容</span>
                    </li>
                  </ul>
                </div>
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
