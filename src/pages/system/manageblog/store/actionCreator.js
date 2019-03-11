import * as constants from './constants';
import axios from 'axios';
const initarticles = data => ({
  type: constants.INIT_ARTICLES,
  data
});
const deletearticles = index => ({
  type: constants.DELETE_ARTICLES,
  index
});
const handlestick = index => ({
  type: constants.STICK,
  index
});
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
export const deleteitem = index => {
  return dispatch => {
    axios.get('http://localhost:3000/articles').then(() => {
      dispatch(deletearticles(index));
    });
  };
};
export const getarticleid = id => {
  return dispatch => {
    axios.post('http://192.168.1.119:8088/getblog?id='+id)
    .then((res) => {
        console.log(res);
    });
  };
};
export const handleStick = index => {
  return dispatch => {
    dispatch(handlestick(index));
  };
};
