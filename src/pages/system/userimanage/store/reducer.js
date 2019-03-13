import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  userinfo:[],
  nicheng:'',
  name:'',
  sex:'',
  birthday:'',
  vocation:'',
  description:''
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_USER_INFO:
      return state.set('userinfo', action.data);
    case constants.HANDLE_CHANGE_NICHENG:
      return state.set('nicheng', action.value);
    case constants.HANDLE_CHANGE_NAME:
      return state.set('name', action.value);
    case constants.HANDLE_CHANGE_SEX:
      return state.set('sex', action.value);
    case constants.HANDLE_CHANGE_BIRTHDAY:
      return state.set('birthday', action.value);
    case constants.HANDLE_CHANGE_VOCATION:
      return state.set('vocation', action.value);
    case constants.HANDLE_CHANGE_DESCRIPTION:
      return state.set('description', action.value);
    default:
      return state;
  }
};
