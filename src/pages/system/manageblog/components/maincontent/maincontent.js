import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { actionCreator } from '../../store';
import store from '../../../../../store';
import './maincontent.less';
const confirm = Modal.confirm;

class Maincontent extends Component {

  componentDidMount() {
      store.dispatch(actionCreator.getarticles());
  }
  render() {
    const {
      showDeleteConfirm,
      articleslist,
      handleStick,
      getItemInfo
    } = this.props;
    console.log(articleslist)
    return (
      <Fragment>
        <ul className="arcitle-list-wrap">
          {articleslist.map((item, index) => {
            return (
              <li key={item._id}>
                <h3>{item.title}</h3>
                <div className="arcitile-info-wrap">
                  <div className="left-info">
                    <span>原创</span>
                    <span>时间:{item.time}</span>
                    <span>人数:{item.visitors}</span>
                    <span>评论数:{item.commits}</span>
                  </div>
                  <div className="right-info">
                    <Link to="/articledetail">
                      <Button
                        size="small"
                        type="primary"
                        onClick={() => getItemInfo(item._id)}
                        // onClick={() => getItemInfo(index)}
                      >
                        查看
                      </Button>
                    </Link>
                    <Button size="small">禁止评论</Button>
                    <Button size="small" onClick={() => handleStick(index)}>
                      置顶
                    </Button>
                    <Button
                      onClick={() => showDeleteConfirm(item._id)}
                      style={{ color: 'red' }}
                      size="small"
                      type="dashed"
                    >
                      删除
                    </Button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    articleslist: state.getIn(['manageblog', 'articleslist'])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    showDeleteConfirm(id) {
      confirm({
        title: '确定要删除吗',
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
        onOk() {
          dispatch(actionCreator.deleteitem(id));
        },
        onCancel() {
          console.log(id);
        }
      });
    },
    handleStick(index) {
      dispatch(actionCreator.handleStick(index));
    },
    getItemInfo(id) {
      console.log(id);
      dispatch(actionCreator.getiteminfo(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Maincontent);
