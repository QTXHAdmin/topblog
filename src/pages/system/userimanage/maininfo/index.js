import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, Card } from 'antd';
import './style.less';
class Maininfo extends Component {
  state = {
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false
    });
  };
  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <Fragment>
        <div className="personal-wrap">
          <h3>个人资料</h3>
          <div className="personal-info clearfix">
            <div className="picture">头像</div>
            <div className="right-into">
              <div className="right-info-border">
                <p>ID:weixin_41608453</p>
                <p>
                  <span>关注 3</span> <span>粉丝 1</span>
                </p>
              </div>
              <div className="detail-info">
                <ul>
                  <li>
                    <span>昵称 ：嘻嘻哈哈</span>
                  </li>
                  <li>
                    <span>实名 ：zhanghe</span>
                  </li>
                  <li>
                    <span>性别 ：男</span>
                  </li>
                  <li>
                    <span>生日 ：1989-05-24</span>
                  </li>
                  <li>
                    <span>行业 ：万金油</span>
                  </li>
                  <li>
                    <span>简介 ：这是一个神奇的人</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="personmain">
              <Link to="/personhomepage">
                <Button>个人主页 ></Button>
              </Link>
              <Button type="primary" onClick={this.showModal}>
                修改资料
              </Button>
              <Modal
                title="修改资料"
                visible={visible}
                onOk={this.handleOk}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
              >
                <Card
                  // title="修改资料"
                  style={{ width: 450 }}
                >
                  这里放表单
                </Card>
              </Modal>
            </div>
          </div>
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
)(Maininfo);
