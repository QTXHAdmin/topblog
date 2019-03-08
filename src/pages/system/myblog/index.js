import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.less';
class Myblog extends Component {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <Fragment>
          <div className="myBlogNav">
            <div className="myBlogwrap">
              <h3>zhengzheng的博客</h3>
              <button>管理博客</button>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
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
)(Myblog);
