import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
class Myblog extends Component {
  render() {
    const { loginStatus} = this.props;
    if(loginStatus){
      return (
        <div>
          写博客
        </div>
      );
    }else{
      return <Redirect to="/login" />
    }
  }
}
const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
   
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Myblog);
