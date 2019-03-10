import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
class Writeblog extends Component {
  render() {
    return (
      <Fragment>
        <span style={{color:'#fff'}}>写博客</span>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writeblog);