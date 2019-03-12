import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfigProvider, Table } from 'antd';
import Navbar from '../components/navbar';
import './style.less';
class Pubcard extends Component {
  state = {
    level: '等级',
    visit: '发帖',
    original: '回帖',
    repeat: '结贴率'
  };
  render() {
    return (
      <Fragment>
        <div className="pubcard-wrapper clearfix">
          <Navbar
            repeat={this.state.repeat}
            visit={this.state.visit}
            original={this.state.original}
            level={this.state.level}
          />
          <ConfigProvider>
            <div className="config-provider">
              <Table style={{ marginTop: 8 }} />
            </div>
          </ConfigProvider>
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
)(Pubcard);
