import * as constants from './constants';
import axios from 'axios';
export const inputvalue = value => ({
  type: constants.INPUT_VALUE,
  value
});
//添加请求
export const publishblog = obj => {
  return dispatch => {
    axios.post('http://192.168.1.119:8088/addblog', obj).then(res => {
      console.log(res.data);
    });
  };
};
