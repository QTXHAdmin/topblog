import * as constants from './constants';
import axios from 'axios';
const getAllArticles = data => ({
  type: constants.GET_ALL_ARCITLES,
  data
});
export const getallarticles = () => {
  return dispatch => {
    axios
      .get('http://192.168.1.119:8088/getblog')
      .then(res => {
        const data = res.data.data;
        dispatch(getAllArticles(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
