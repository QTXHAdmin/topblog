import * as constants from './constants';
import { fromJS } from 'immutable';
let login = sessionStorage.getItem('login')
  ? sessionStorage.getItem('login')
  : '';
const defaultState = fromJS({
  getinfolist: []
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GETINFOLIST:
      return state.set('getinfolist', action.data);

    default:
      return state;
  }
};
