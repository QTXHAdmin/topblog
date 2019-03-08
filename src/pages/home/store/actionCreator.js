import * as constants from './constants';
import axios from 'axios';

export const login = (account,password) =>{
  return (dispatch)=>{
    axios.post('/api/login.json?account='+account+'&password='+password)
    .then(res=>{
      console.log(res);
    })
  }
}

