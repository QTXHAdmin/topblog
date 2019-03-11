import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.less';
class Homepageheader extends Component {
  render() {
    return (
      <Fragment>
        <ul className="nav clearfix">
          <li>
            <Link to="/personhomepage/blog">
              <span>博客</span>
            </Link>
          </li>
          <li>
            <Link to="/personhomepage/pubsource">
              <span>资源</span>
            </Link>
          </li>
          <li>
            <Link to="/personhomepage/pubcard">
              <span>帖子</span>
            </Link>
          </li>
          <li>
            <Link to="/personhomepage/question">
              <span>问答</span>
            </Link>
          </li>
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
)(Homepageheader);
