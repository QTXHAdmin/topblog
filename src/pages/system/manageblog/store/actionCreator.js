import * as constants from './constants';
import axios from 'axios';
const initarticles = data => ({
  type: constants.INIT_ARTICLES,
  data
});
////模拟删除数据时用到的action
// const deletearticles = index => ({
//   type: constants.DELETE_ARTICLES,
//   index
// });
const handlestick = index => ({
  type: constants.STICK,
  index
});
const getonearcitle = data => ({
  type: constants.GET_ONE_ARCITLE,
  data
});
//存一条博客文章的id到store中
export const getiteminfo = id => ({
  type: constants.GET_ITEM_INFO,
  id
});
export const getarticles = () => {
  return dispatch => {
    axios.get('http://192.168.1.119:8088/getblog').then(res => {
      const data = res.data.data;
      dispatch(initarticles(data));
    });
  };
};
//此处需要用到async await提高性能
export const deleteitem = id => {
  return dispatch => {
    // 发送请求到后台删除数据
    axios.get('http://192.168.1.119:8088/delblog?id=' + id).then(() => {
      // 删除成功之后再请求数据渲染到页面上
      axios.get('http://192.168.1.119:8088/getblog').then(res => {
        const data = res.data.data;
        dispatch(initarticles(data));
      });
    });
  };
};
// const qwert = (id) =>({
//   type:'QWERT',
//   id
// })
// 查看按钮请求一条信息
export const getarticleid = id => {
  return dispatch => {
    axios.post('http://192.168.1.119:8088/blog?id=' + id).then(res => {
      const data = res.data.data;
      dispatch(getonearcitle(data));
    });
    // dispatch(qwert(id));
  };
};
export const handleStick = index => {
  return dispatch => {
    dispatch(handlestick(index));
  };
};
