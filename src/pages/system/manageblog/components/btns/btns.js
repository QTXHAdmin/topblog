import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import './btns.less';
import { Select, Input } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
class Btns extends Component {
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    return (
      <Fragment>
        <div className="select-wrap clearfix">
          <Select
            className="select-item"
            defaultValue="year"
            style={{ width: 100 }}
            onChange={this.handleChange}
          >
            <Option value="year">年</Option>
          </Select>
          <Select
            className="select-item"
            defaultValue="month"
            style={{ width: 100 }}
            onChange={this.handleChange}
          >
            <Option value="month">月</Option>
          </Select>
          <Select
            className="select-item"
            defaultValue="arcitletype"
            style={{ width: 100 }}
            onChange={this.handleChange}
          >
            <Option value="arcitletype">文章类型</Option>
          </Select>
          <Select
            className="select-item"
            defaultValue="classify"
            style={{ width: 100 }}
            onChange={this.handleChange}
          >
            <Option value="classify">个人分类</Option>
          </Select>
          <Search
            style={{ width: '200px' }}
            placeholder="请输入标题关键词"
            onSearch={value => console.log(value)}
            enterButton
          />
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
)(Btns);
