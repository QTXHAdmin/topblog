import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './style.less';
class Navbar extends Component {
  render() {
    const {
      level,
      visit,
      original,
      repeat,
      ranking,
      comment,
      praised
    } = this.props;
    return (
      <Fragment>
        <div className="navbar-wrapper clearfix">
          <ul className="clearfix">
            <li>
              <p>后台</p>
              <span>{level}</span>
            </li>
            <li>
              <p>后台</p>
              <span>{visit}</span>
            </li>
            <li>
              <p>后台</p>
              <span>{original}</span>
            </li>
            <li>
              <p>后台</p>
              <span>{repeat}</span>
            </li>
            <li>
              <p>后台</p>
              <span>{ranking}</span>
            </li>
            <li>
              <p>后台</p>
              <span>{comment}</span>
            </li>
            <li>
              <p>后台</p>
              <span>{praised}</span>
            </li>
          </ul>
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
)(Navbar);
