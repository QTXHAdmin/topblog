import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreator } from './store';
import './style.less';
import Moment from '../../components/moment';
import { Tabs, Icon, Checkbox, Button, Form, Input, Radio } from 'antd';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
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
class Login extends Component {
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    const { loginStatus } = this.props;
    const { getFieldDecorator } = this.props.form;
    if (!loginStatus) {
      return (
        <Fragment>
          <header className="header-title">
            <h1>欢迎登录</h1>
          </header>
          <Moment className="moment"/>
          <div className="login-wrapper">
            <Tabs
              //默认页签的key值
              defaultActiveKey="1"
              style={{
                background: '#fff',
                paddingBottom: '30px',
                width: '30%',
                margin: '50px auto 0'
              }}
            >
            {/* 登录 */}
              <TabPane tab="账号登录" key="1">
                <div className="input-border">
                  <Form>
                    <p className="prompt-msg">如果您有我们的帐户，请登录！</p>
                    <FormItem label="用户名" {...formItemLayout}>
                      {getFieldDecorator('userName', {
                        initialValue: '',
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
                          style={{ width: '80%', marginBottom: '20px' }}
                          placeholder="输入用户名"
                          prefix={
                            <Icon
                              type="user"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
                          }
                          ref={input => {
                            this.account = input;
                          }}
                        />
                      )}
                    </FormItem>
                    <FormItem label="密码" {...formItemLayout}>
                      {getFieldDecorator('password', {
                        initialValue: '',
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
                          style={{ width: '80%', marginBottom: '20px' }}
                          placeholder="输入密码"
                          prefix={
                            <Icon
                              type="lock"
                              style={{ color: 'rgba(0,0,0,.25)' }}
                            />
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
                      })(
                        <Checkbox style={{ float: 'left' }}>记住密码</Checkbox>
                      )}
                      <a style={{ float: 'right', marginRight: '20px' }}>
                        忘记密码?
                      </a>
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
                </div>
              </TabPane>
              {/* 注册 */}
              <TabPane tab="注册账号" key="2">
                <div className="input-border">
                  <p className="prompt-msg">新用户</p>
                  <Form>
                    <div className="form-wrapper">
                      <FormItem label="用户名" {...formItemLayout}>
                        {getFieldDecorator('regusername', {
                          initialValue: '',
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
                            style={{ width: '80%', marginBottom: '20px' }}
                            placeholder="请输入用户名"
                          />
                        )}
                      </FormItem>
                      <FormItem label="密码" {...formItemLayout}>
                        {getFieldDecorator('reguserpwd', {
                          initialValue: '',
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
                            style={{ width: '80%', marginBottom: '20px' }}
                            placeholder="请输入用户名"
                          />
                        )}
                      </FormItem>
                      <FormItem label="性别" {...formItemLayout}>
                        {getFieldDecorator('sex', {
                          initialValue: '1'
                        })(
                          <RadioGroup>
                            <Radio value="1">男</Radio>
                            <Radio value="2">女</Radio>
                          </RadioGroup>
                        )}
                      </FormItem>
                      <FormItem {...formItemLayout}>
                        {getFieldDecorator('agree', {
                          valuePropName: 'checked',
                          initialValue: true
                        })(
                          <Checkbox
                            onChange={this.onChange}
                            style={{ marginBottom: '20px' }}
                          >
                            同意注册
                          </Checkbox>
                        )}
                      </FormItem>
                    </div>
                    <br />
                    <Button
                      type="primary"
                      onClick={() => this.props.Regiest(this.props.form)}
                    >
                      注册
                    </Button>
                  </Form>
                </div>
              </TabPane>
            </Tabs>
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
const mapDispatchToProps = dispatch => ({
  //登录功能
  Login(props, accountElem, passwordElem, form) {
    form.validateFields(['userName', 'password'], err => {
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
  },
  //注册功能
  Regiest(form) {
    form.validateFields(['regusername', 'reguserpwd'], err => {
      if (!err) {
        let infolist = form.getFieldsValue(['regusername', 'reguserpwd']);
        dispatch(actionCreator.regiest(JSON.stringify(infolist)));
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Login));
