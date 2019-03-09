import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  username:'',
  passoword:'',
  login: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.USER_NAME_CHANGE:
      return state.set('username', action.value);
    case constants.PASS_WROD_CHANGE:
      return state.set('passoword', action.value);
    case constants.CHANGE_LOGIN:
      return state.set('login', action.value);
    case constants.LOGOUT:
      return state.set('login', action.value);
    case constants.REGIS_LOGIN:
      return state.set('login', action.value);
    default:
      return state;
  }
};
