import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Headers from '../../../components/header';
import './style.less';
class Arcitledetail extends Component {
  render() {
    return (
      <Fragment>
        <Headers />
        <span style={{ color: '#fff' }}>Arcitledetail</span>
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
)(Arcitledetail);
