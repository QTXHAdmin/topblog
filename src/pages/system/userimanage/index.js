import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Headers from '../../../components/header';
import Navleft from './leftnav';
import Maininfo  from './maininfo';
import Foot from './foot';
import './style.less';
class Usermanage extends Component {
  render() {
    return (
      <Fragment>
        <Headers />
        <div className="main clearfix">
          <div className="btn-wrap ">
            <Navleft />
          </div>
          {/* 需要子路由 */}
          <Maininfo />
        </div>
        <Foot />
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
)(Usermanage);
