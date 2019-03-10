import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import './style.less';
class Foot extends Component {
  render() {
    return (
      <Fragment>
          <div className="foot-wrap">
              广告位 随意放 ！！！
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
)(Foot);
