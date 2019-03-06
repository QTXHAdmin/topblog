import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './style.less';
import { Tabs, Icon, Checkbox, Button, Form, Input } from 'antd';
const TabPane = Tabs.TabPane;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 }
  }
};
class Login extends Component {
  callback = key => {
    console.log(key);
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pwd: ''
    };
  }
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };
  onChangePwd = e => {
    this.setState({ pwd: e.target.value });
  };
  render() {
    const { userName, pwd } = this.state;
    return (
      <Fragment>
        <header className="header-title">
          <h1>欢迎登录</h1>
        </header>
        <div className="login-wrapper">
          <Tabs
            defaultActiveKey="1"
            onChange={this.callback}
            style={{
              background: '#fff',
              paddingBottom: '30px',
              width: '30%',
              margin: '50px auto 0'
            }}
          >
            <TabPane tab="账号登录" key="1">
              <div className="input-border">
                <p className="prompt-msg">如果您有我们的帐户，请登录！</p>
                <Input
                  style={{ width: '80%', marginBottom: '20px' }}
                  placeholder="输入用户名"
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  value={userName}
                  onChange={this.onChangeUserName}
                  ref={node => (this.userNameInput = node)}
                />
                <Input
                  style={{ width: '80%', marginBottom: '20px' }}
                  placeholder="输入密码"
                  prefix={
                    <Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  value={pwd}
                  onChange={this.onChangePwd}
                  ref={node => (this.pwdInput = node)}
                />
                <Button type="primary" onClick={this.handleClickLoginIn}><Link to="/home">登录</Link></Button>
              </div>
            </TabPane>
            <TabPane tab="注册账号" key="2">
              <p className="prompt-msg">新用户</p>
              <Form {...formItemLayout}>
                <div className="form-wrapper">
                  <Form.Item
                    label="用户名"
                    validateStatus="error"
                    help="字母数字结合"
                    hasFeedback
                  >
                    <Input placeholder="输入用户名" id="error" />
                  </Form.Item>
                  <Form.Item
                    label="密码"
                    validateStatus="warning"
                    hasFeedback
                    help="字母数字结合"
                  >
                    <Input placeholder="输入密码" id="warning" />
                  </Form.Item>

                  <Form.Item
                    label="密码"
                    validateStatus="warning"
                    help="字母数字结合"
                  >
                    <Input placeholder="再次输入密码" id="validating" />
                  </Form.Item>
                  <Form.Item label="电话" hasFeedback validateStatus="success">
                    <Input placeholder="输入电话" id="success" />
                  </Form.Item>

                  <Form.Item
                    label="邮箱"
                    hasFeedback
                    validateStatus="validating"
                  >
                    <Input placeholder="输入邮箱地址" id="warning2" />
                  </Form.Item>
                </div>
                <Checkbox
                  onChange={this.onChange}
                  style={{ marginBottom: '20px' }}
                >
                  同意注册
                </Checkbox>
                <br />
                <Button type="primary">注册</Button>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    handleClickLoginIn(){
      console.log(this.props);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
