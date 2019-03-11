import * as constants from './constants';
import { fromJS } from 'immutable';
let login = sessionStorage.getItem('login')
  ? sessionStorage.getItem('login')
  : '';
const defaultState = fromJS({
  articleslist: [],
  login: login,
  arcitleid:''
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      sessionStorage.setItem('login', action.value);
      return state.set('login', action.value);
    case constants.INIT_ARTICLES:
      return state.set('articleslist', action.data);
    case constants.GET_ITEM_INFO :
      return state.set('arcitleid', action.id);
    case constants.DELETE_ARTICLES:
      const newState = JSON.parse(JSON.stringify(state));
      newState.articleslist.splice(action.index, 1);
      return newState;
    case constants.STICK:
      const newStates = JSON.parse(JSON.stringify(state));
      newStates.articleslist.unshift(
        newStates.articleslist.splice(action.index, 1)[0]
      );
      return newStates;
    default:
      return state;
  }
};
