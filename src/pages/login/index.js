import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Tabs, Form } from 'antd';
import './style.less';
import Moment from '../../components/moment';
import Loginform from './components/loginform';
import Registeform from './components/registeform';
const TabPane = Tabs.TabPane;
class Login extends Component {
  //设置activeKey的默认值
  state = { activeKey: '1' };
  //把tabs的activeKey值动态绑定
  onChangeActiveKey = activeKey => {
    this.setState({ activeKey });
  };
  render() {
    const { loginStatus } = this.props;
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
                //当tabs发生变化的时候通过change事件改变activeKey的值
                //改功能用于注册成功跳转到登录tabs
                onChange={this.onChangeActiveKey}
                //默认页签的key值
                activeKey={this.state.activeKey}
                style={{
                  background: '#fff',
                  opacity: 0.8,
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
