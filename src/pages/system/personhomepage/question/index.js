import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './style.less';
class Question extends Component {
  render() {
    return (
      <Fragment>
        <div className="info"> Question</div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);