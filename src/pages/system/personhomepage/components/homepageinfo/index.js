import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Tabs, Icon } from 'antd';
import './style.less';
const TabPane = Tabs.TabPane;
class Homepageinfo extends Component {
  render() {
    return (
      <Fragment>
        <div className="Homepageinfo-wrapper">
          <div className="top-wrapper">
            <div className="touxiang">头像 ： 名字</div>
            <div className="address">图标 ：中国</div>
            <Tabs defaultActiveKey="2">
              <TabPane
                tab={
                  <span>
                    <Icon type="apple" />
                    粉丝：1
                  </span>
                }
                key="1"
              >
                Tab 1
              </TabPane>
              <TabPane
                style={{ height: '100px' }}
                tab={
                  <span>
                    <Icon type="android" />
                    关注： 3
                  </span>
                }
                key="2"
              >
                Tab 2
              </TabPane>
            </Tabs>
          </div>
          <div className="bottom-wrapper" />
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
)(Homepageinfo);
