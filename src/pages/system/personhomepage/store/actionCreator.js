import * as constants from './constants';
import axios from 'axios';
const initarticles = data => ({
  type: constants.INIT_ARTICLES,
  data
});
export const getinfo = () => {
  return dispatch => {
    axios.get('http://localhost:3000/articles').then(res => {
      const data = res.data;
      dispatch(initarticles(data));
    });
  };
};
