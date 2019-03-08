import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
class Myblog extends Component {
  render() {
    const { loginStatus} = this.props;
    if(loginStatus){
      return (
        <Fragment>
          写博客
        </Fragment>
      );
    }else{
      return <Redirect to="/login" />
    }
  }
}
const mapStateToProps = state => {
  return {

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
