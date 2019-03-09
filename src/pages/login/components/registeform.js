import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from '../store';
import './registeformstyle.less';
import { Checkbox, Button, Form, Input, Radio } from 'antd';
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
class Registefrom extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Form>
          <div className="form-wrapper">
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
                  placeholder="请输入用户名"
                />
              )}
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {getFieldDecorator('password', {
                initialValue: '',
                rules: [
                  {
                    required: true,
                    message: '密码不能为空'
                  },
                  {
                    message: '请输入密码长度5-12',
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
                  placeholder="请输入密码"
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
            to="/login/login"
            type="primary"
            onClick={() => this.props.Registe(this.props.form, this.props)}
          >
            注册
          </Button>
        </Form>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {};
};
const mapDispatchToProps = dispatch => ({
  //注册功能
  Registe(form, props) {
    form.validateFields(['userName', 'password'], err => {
      if (!err) {
        let infolist = form.getFieldsValue(['userName', 'password']);
        console.log(infolist);
        dispatch(actionCreator.registe(JSON.stringify(infolist)));
        props.onChangeActiveKey('1');
      }
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(Registefrom));
