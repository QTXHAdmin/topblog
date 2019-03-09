import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './topbar.less';
class Topbar extends Component {
  render() {
    return (
      <Fragment>
        <ul className="topbar-wrap clearfix">
        <Link to="/manageblog"><li>全部(0)</li></Link> 
        <Link to="/manageblog"><li>公开(0)</li></Link> 
        <Link to="/manageblog"><li>私密(0)</li></Link> 
        <Link to="/manageblog"><li>草稿箱(0)</li></Link> 
        <Link to="/manageblog"><li>回收站(0)</li></Link> 
        </ul>
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
)(Topbar);