import * as constants from './constants';
import axios from 'axios';
const getinfolist = data => ({
  type: constants.GETINFOLIST,
  data
});

export const getInfoList = () => {
  return dispatch => {
    axios.get('http://192.168.1.119:8088/getblog').then(res => {
      const data = res.data.data;
      console.log(data);
      dispatch(getinfolist(data));
    });
  };
};
