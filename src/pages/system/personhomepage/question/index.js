import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ConfigProvider, Table } from 'antd';
import Navbar from '../components/navbar';
import './style.less';
class Question extends Component {
  state = {
    level: '等级',
    visit: '提问',
    original: '回答'
  };
  render() {
    return (
      <Fragment>
        <div className="question-wrapper">
          <Navbar
            level={this.state.level}
            visit={this.state.visit}
            original={this.state.original}
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
)(Question);
