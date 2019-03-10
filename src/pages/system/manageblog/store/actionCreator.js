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
export const getarticles = () => {
  return dispatch => {
    axios.get('http://localhost:3000/articles').then(res => {
      const data = res.data;
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
export const handleStick = index => {
  return dispatch => {
    dispatch(handlestick(index));
  };
};
