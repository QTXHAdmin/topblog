import * as constants from './constants';
import axios from 'axios';
const changeLogin = (userdata) => ({
  type: constants.CHANGE_LOGIN,
  value: true,
  userdata
});
export const usernamechange = value => ({
  type: constants.USER_NAME_CHANGE,
  value
});
export const passwordchange = value => ({
  type: constants.PASS_WROD_CHANGE,
  value
});
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});
export const login = obj => {
  return dispatch => {
    axios
      .get('/api/login.json')
      // .post('http://192.168.1.119:8088/login', obj)
      .then(res => {
        const result = res.data;
        const userdata = result.data[0];
        console.log(userdata);
        // if (result.code === 0) {
          console.log('成功');
          dispatch(changeLogin(userdata));
        // }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const registe = obj => {
  return dispatch => {
    console.log(typeof obj);
    axios
      .post('http://192.168.1.119:8088/login/createUser', JSON.parse(obj))
      .then(res => {
        const result = res.data;
        console.log(result);
        if (result.code === 0) {
          console.log('添加用户成功');
        }
      });
  };
};
