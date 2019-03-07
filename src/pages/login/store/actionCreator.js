import * as constants from './constants';
import axios from 'axios';
export const changeusername = (value) =>({
  type:constants.CHANGE_USER_NAME,
  value
});
export const changeuserpwd = (value) =>({
  type:constants.CHANGE_USER_PWD,
  value
});
// export const getlogininfo = (value) =>{
//   return (dispatch)=>{
//     axios.get('/user.json')
//       .then(res=>{
//         if(res.data.code ===1){
//           //跳转页面
//           console.log(111);
//         }
//       })
//       .catch(err=>{
//         console.log('登录失败');
//       })
//   }
// };
