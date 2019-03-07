import * as constants from './constants';
import axios from 'axios';
const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
});
export const logout = () => ({
  type: constants.LOGOUT,
  value: false
});
export const login = (obj) => {
  return dispatch => {
   
    // axios.get('/api/login.json?account=' + account + '&password=' + password)
      // .get('192.168.0.222:8088' + account + '&password=' + password)
      axios.post('http://192.168.0.222:8088/login',obj)
      .then(res => {
        console.log(11);
        const result = res.data;
        console.log(result);
        if (result.code === 0) {
          dispatch(changeLogin());
        } 
      }).catch(err=>{
        console.log(err);
      })
  };
};
