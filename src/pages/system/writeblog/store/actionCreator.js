import * as constants from './constants';
import axios from 'axios';
export const inputvalue = value => ({
  type: constants.INPUT_VALUE,
  value
});
export const publishblog = obj => {
  console.log(1111);
  return dispatch => {
    axios.post('http://192.168.1.119:8088/addblog', obj).then(res => {
      console.log(res.data);
    });
  };
};
