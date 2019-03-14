import * as constants from './constants';
import axios from 'axios';
const initarticles = data => ({
  type: constants.INIT_ARTICLES,
  data
});
export const getinfo = () => {
  return dispatch => {
    axios.get('http://192.168.1.119:8088/getblog').then(res => {
      const data = res.data.data;
      dispatch(initarticles(data));
    });
  };
};
