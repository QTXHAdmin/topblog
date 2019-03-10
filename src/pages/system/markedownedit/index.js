import React, { Component ,Fragment} from 'react';
import {connect}from 'react-redux';
class Markedownedit extends Component {
  render() {
    return (
      <Fragment>
          <span style={{color:'#fff'}}>富文本编辑器</span>
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
)(Markedownedit);