import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState =fromJS({
  userName:''
})
export default (state = defaultState,action) =>{
  switch(action.type){
    case constants.INPUT_CHANGE:
    return state.set('userName',action.value);
    default:
    return state;
  }
}