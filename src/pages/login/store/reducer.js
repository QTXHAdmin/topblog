import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
  userName:'',
  userPwd:'',
  login:false
})
export default (state = defaultState,action) =>{
  switch(action.type){
    case constants.CHANGE_USER_NAME:
    return state.set('userName',action.value);
    case constants.CHANGE_USER_PWD:
    return state.set('userPwd',action.value);
    default:
    return state;
  }
}
