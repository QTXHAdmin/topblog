import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import './loginformstyle.less';
import { Icon, Checkbox, Button, Form, Input } from 'antd';
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
class Loginfom extends Component {
  render() {
    const { username, password } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form>
          <p className="prompt-msg">如果您有我们的帐户，请登录！</p>
          <FormItem label="用户名" {...formItemLayout}>
            {getFieldDecorator('userName', {
              initialValue: username,
              rules: [
                {
                  required: true,
                  message: '用户名不能为空'
                },
                {
                  message: '请输入用户名长度5-12',
                  min: 5,
                  max: 12
                },
                {
                  pattern: new RegExp('^\\w+$', 'g'),
                  message: '用户名必须为字母或者数字'
                }
              ]
            })(
              <Input
                onChange={this.props.userNameChange}
                style={{ width: '80%', marginBottom: '20px' }}
                placeholder="输入用户名"
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                ref={input => {
                  this.account = input;
                }}
              />
            )}
          </FormItem>
          <FormItem label="密码" {...formItemLayout}>
            {getFieldDecorator('passWord', {
              initialValue: password,
              rules: [
                {
                  required: true,
                  message: '用户名不能为空'
                },
                {
                  message: '请输入用户名长度5-12',
                  min: 5,
                  max: 12
                },
                {
                  pattern: new RegExp('^\\w+$', 'g'),
                  message: '用户名必须为字母或者数字'
                }
              ]
            })(
              <Input
                onChange={this.props.passWordChange}
                style={{ width: '80%', marginBottom: '20px' }}
                placeholder="输入密码"
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                ref={input => {
                  this.password = input;
                }}
              />
            )}
          </FormItem>
          <br />
          <FormItem className="btn-wrap">
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox style={{ float: 'left' }}>记住密码</Checkbox>)}
            <span style={{ float: 'right', marginRight: '20px' }}>
              忘记密码?
            </span>
          </FormItem>
          <Button
            type="primary"
            className="loginbtn"
            onClick={() =>
              this.props.Login(
                this.props,
                this.account,
                this.password,
                this.props.form
              )
            }
          >
            登录
          </Button>
        </Form>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.getIn(['login', 'username']),
    password: state.getIn(['login', 'password'])
  };
};
const mapDispatchToProps = dispatch => ({
  userNameChange(e) {
    dispatch(actionCreator.usernamechange(e.target.value));
  },
  passWordChange(e) {
    dispatch(actionCreator.passwordchange(e.target.value));
  },
  //登录功能
  Login(props, accountElem, passwordElem, form) {
    form.validateFields(['userName', 'passWord'], err => {
      if (!err) {
        // 查看控制台找到想要的属性
        let obj = {
          userName: accountElem.state.value,
          password: passwordElem.state.value
        };
        sessionStorage.setItem('APP_LOGIN_USER', JSON.stringify(obj));
        let lastLocation = JSON.parse(sessionStorage.getItem('APP_LAST_URL'));
        if (lastLocation) {
          props.history.push(lastLocation);
          sessionStorage.removeItem('APP_LAST_URL');
        }
        dispatch(actionCreator.login(obj));
      }
    });
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Loginfom));
