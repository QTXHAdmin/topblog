import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './style.less';
import Moment from '../../components/moment';
import Loginform from './components/loginform';
import Registeform from './components/registeform';
import { Tabs, Form } from 'antd';
const TabPane = Tabs.TabPane;
class Login extends Component {
  state = { activeKey: '1' };

  onChangeActiveKey = activeKey => {
    this.setState({ activeKey });
  };
  render() {
    const { loginStatus } = this.props;
    console.log(loginStatus);
    if (!loginStatus) {
      return (
        <Fragment>
          <div className="wrapper">

          <header className="header-title">
            <h1>欢迎登录</h1>
          </header>
          <div className="moment">
            <Moment />
          </div>
          <div className="login-wrapper">
            <Tabs
              //默认页签的key值
              onChange={this.onChangeActiveKey}
              activeKey={this.state.activeKey}
              style={{
                background: '#fff',
                opacity:.8,
                paddingBottom: '30px',
                width: '30%',
                margin: '0 auto'
              }}
            >
              {/* 登录 */}
              <TabPane tab="账号登录" key="1">
                <div className="input-border">
                  <Loginform />
                </div>
              </TabPane>

              {/* 注册 */}
              <TabPane tab="注册账号" key="2">
                <div className="input-border">
                  <p className="prompt-msg">新用户</p>
                  <Registeform onChangeActiveKey={this.onChangeActiveKey} />
                  {/* <Registeform /> */}
                </div>
              </TabPane>
            </Tabs>
          </div>
          </div>
        </Fragment>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Login));
