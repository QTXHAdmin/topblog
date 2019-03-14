import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, Card, Input, Upload, Icon } from 'antd';
import './style.less';
import store from '../../../../store';
import { actionCreator } from '../store';
class Maininfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url:
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    };
  }

  componentDidMount() {
    store.dispatch(actionCreator.getuserinfo());
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    let obj = {
      nicheng: this.props.nicheng,
      name: this.props.name,
      sex: this.props.sex,
      birthday: this.props.birthday,
      vocation: this.props.vocation,
      description: this.props.description
    };
    console.log(obj);
    store.dispatch(actionCreator.xiugaiuserinfo(obj));
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
  handleuploadCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });
  render() {
    const {
      visible,
      confirmLoading,
      previewVisible,
      previewImage,
      fileList
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const {
      userinfo,
      handleChangenicheng,
      handlechangename,
      handlechangesex,
      handlechangebirth,
      handlechangevocation,
      handlechangedis,
      nicheng,
      name,
      sex,
      birthday,
      vocation,
      description
    } = this.props;
    console.log(userinfo);
    return (
      <Fragment>
        <div className="personal-wrap">
          <h3>个人资料</h3>
          <div className="personal-info clearfix">
            <div className="picture">
              <Upload
                action="//jsonplaceholder.typicode.com/posts/"
                listType="picture-card"
                fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
              >
                {fileList.length >= 3 ? null : uploadButton}
              </Upload>
              <Modal
                visible={previewVisible}
                footer={null}
                onCancel={this.handleuploadCancel}
              >
                <img
                  alt="example"
                  style={{ width: '100%' }}
                  src={previewImage}
                />
              </Modal>
            </div>
            <div className="right-into">
              <div className="right-info-border">
                <p>ID ： weixin_41608453</p>
                <p style={{marginBottom:10}}>
                  <span>关注 3</span> <span>粉丝 1</span>
                </p>
              </div>
              <div className="detail-info">
                <ul>
                  <li>
                    <span>昵称 ：{userinfo.nicheng}</span>
                  </li>
                  <li>
                    <span>实名 ：{userinfo.name}</span>
                  </li>
                  <li>
                    <span>性别 ：{userinfo.sex}</span>
                  </li>
                  <li>
                    <span>生日 ：{userinfo.birthday}</span>
                  </li>
                  <li>
                    <span>行业 ：{userinfo.vocation}</span>
                  </li>
                  <li>
                    <span>简介 ：{userinfo.description}</span>
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
                  <Input
                    value={nicheng}
                    onChange={handleChangenicheng}
                    style={{ width: 200, marginBottom: 5 }}
                    placeholder="昵称"
                  />
                  <br />
                  <Input
                    value={name}
                    onChange={handlechangename}
                    style={{ width: 200, marginBottom: 5 }}
                    placeholder="实名"
                  />
                  <br />
                  <Input
                    value={sex}
                    onChange={handlechangesex}
                    style={{ width: 200, marginBottom: 5 }}
                    placeholder="性别"
                  />
                  <br />
                  <Input
                    value={birthday}
                    onChange={handlechangebirth}
                    style={{ width: 200, marginBottom: 5 }}
                    placeholder="生日"
                  />
                  <br />
                  <Input
                    value={vocation}
                    onChange={handlechangevocation}
                    style={{ width: 200, marginBottom: 5 }}
                    placeholder="行业"
                  />
                  <br />
                  <Input
                    value={description}
                    onChange={handlechangedis}
                    style={{ width: 200, marginBottom: 5 }}
                    placeholder="简介"
                  />
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
  return {
    userinfo: state.getIn(['usermanage', 'userinfo']),
    nicheng: state.getIn(['usermanage', 'nicheng']),
    name: state.getIn(['usermanage', 'name']),
    sex: state.getIn(['usermanage', 'sex']),
    birthday: state.getIn(['usermanage', 'birthday']),
    vocation: state.getIn(['usermanage', 'vocation']),
    description: state.getIn(['usermanage', 'description'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChangenicheng(e) {
      dispatch(actionCreator.handlechangenicheng(e.target.value));
    },
    handlechangename(e) {
      dispatch(actionCreator.handlechangename(e.target.value));
    },
    handlechangesex(e) {
      dispatch(actionCreator.handlechangesex(e.target.value));
    },
    handlechangebirth(e) {
      dispatch(actionCreator.handlechangebirth(e.target.value));
    },
    handlechangevocation(e) {
      dispatch(actionCreator.handlechangevocation(e.target.value));
    },
    handlechangedis(e) {
      dispatch(actionCreator.handlechangedis(e.target.value));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maininfo);
