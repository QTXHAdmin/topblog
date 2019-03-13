import * as constants from './constants';
import axios from 'axios';
export const getUserInfo = data => ({
  type: constants.GET_USER_INFO,
  data
});
export const getuserinfo = () =>{
  return dispatch =>{
    axios.get('/api/userinfo.json')
    .then(res=>{
      const data = res.data.userinfo[0];
      dispatch(getUserInfo(data));
    })
  }
}
export const xiugaiuserinfo = (obj) =>{
  return dispatch =>{
    axios.post('http://localhost:3002/userinfo',obj)
    .then(res=>{
      const data = res.data;
      console.log(data);
      dispatch(getUserInfo(data));
    })
  }
}
export const handlechangenicheng = (value) =>({
  type:constants.HANDLE_CHANGE_NICHENG,
  value 
})
export const handlechangename = (value) =>({
  type:constants.HANDLE_CHANGE_NAME,
  value 
})
export const handlechangesex = (value) =>({
  type:constants.HANDLE_CHANGE_SEX,
  value 
})
export const handlechangebirth = (value) =>({
  type:constants.HANDLE_CHANGE_BIRTHDAY,
  value 
})
export const handlechangevocation = (value) =>({
  type:constants.HANDLE_CHANGE_VOCATION,
  value 
})
export const handlechangedis = (value) =>({
  type:constants.HANDLE_CHANGE_DESCRIPTION,
  value 
})