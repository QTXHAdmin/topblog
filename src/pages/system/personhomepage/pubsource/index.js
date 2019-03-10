import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfigProvider, Table } from 'antd';
import Navbar from '../components/navbar';
import './style.less';

class Pubsource extends Component {
  state = {
    customize: false,
    level: '等级',
    visit: '下载次数',
    original: '上传资源数'
  };
  render() {
    return (
      <Fragment>
        <div className="pubsource-wrapper">
          <Navbar
            level={this.state.level}
            visit={this.state.visit}
            original={this.state.original}
          />

          <ConfigProvider>
            <div className="config-provider">
              <h3>Table</h3>
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
)(Pubsource);
