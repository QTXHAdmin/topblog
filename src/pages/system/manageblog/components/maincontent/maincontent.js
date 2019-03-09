import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './maincontent.less';
class Maincontent extends Component {
  render() {
    return (
      <Fragment>
        <ul className="arcitle-list-wrap">
          <li>
            <h3>标题</h3>
            <div className="arcitile-info-wrap">
              <div className="left-info">
                <span>原创</span>
                <span>时间</span> <span>人数</span> <span>评论数</span>
              </div>
              <div className="right-info">
                <Link to="/maincontent">
                  <Button size="small" type="primary">查看</Button>
                </Link>
                <Button size="small">禁止评论</Button>
                <Button size="small">置顶</Button>
                <Button size="small" type="danger">
                  删除
                </Button>
              </div>
            </div>
          </li>
          <li>
            <h3>标题</h3>
            <div className="arcitile-info-wrap">
              <div className="left-info">
                <span>原创</span>
                <span>时间</span> <span>人数</span> <span>评论数</span>
              </div>
              <div className="right-info">
                <Link to="/maincontent">
                  <Button size="small" type="primary">查看</Button>
                </Link>
                <Button size="small">禁止评论</Button>
                <Button size="small">置顶</Button>
                <Button size="small" type="danger">
                  删除
                </Button>
              </div>
            </div>
          </li>
          <li>
            <h3>标题</h3>
            <div className="arcitile-info-wrap">
              <div className="left-info">
                <span>原创</span>
                <span>时间</span> <span>人数</span> <span>评论数</span>
              </div>
              <div className="right-info">
                <Link to="/maincontent">
                  <Button size="small" type="primary">查看</Button>
                </Link>
                <Button size="small">禁止评论</Button>
                <Button size="small">置顶</Button>
                <Button size="small" type="danger">
                  删除
                </Button>
              </div>
            </div>
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
)(Maincontent);
