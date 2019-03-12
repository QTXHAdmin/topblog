import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Headers from '../../../components/Header/index';
import store from '../../../store';
import { actionCreator } from '../manageblog/store';
// import Blogleftmsg from '../../../components/blogleftmsg';
import './style.less';
class Arcitledetail extends Component {
  componentDidMount() {
    // console.log(this.props.arcitleid)
    store.dispatch(actionCreator.getarticleid(this.props.arcitleid));
  }
  render() {
    return (
      <Fragment>
        <Headers />
        <div className="main clearfix">
          {/* <Blogleftmsg /> */}
          <div className="detail-wrapper">
            <div className="detail-top">
              <h3>
                <span className="articletype">原</span>
                <span>标题</span>
              </h3>
              <p>
                <span>2018年02月24体 18：24：01</span>
                <span>名字</span>
                <span>阅读数：28</span> <span>更多</span>
              </p>
            </div>
            <div className="content-box">
              <p>版权声明：本文为博主原创文章，未经博主允许不得转载</p>
              <div className="main-content" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    arcitleid: state.getIn(['manageblog', 'arcitleid'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arcitledetail);
