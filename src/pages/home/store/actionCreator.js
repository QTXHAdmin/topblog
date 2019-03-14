import * as constants from './constants';
import axios from 'axios';
const getAllArticles = (data,page) => ({
  type: constants.GET_ALL_ARCITLES,
  data,
  page
});

export const getallarticles = (page) => {
  return dispatch => {
    page++;
    axios
      .get('http://192.168.1.119:8088/getblog?curpage='+page)
      .then(res => {
          const data = res.data.data;
          dispatch(getAllArticles(data,page));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const getlessarticles = (page) => {
  return dispatch => {
    page--;
    axios
      .get('http://192.168.1.119:8088/getblog?curpage='+page)
      .then(res => {
        const data = res.data.data;
        dispatch(getAllArticles(data,page));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
