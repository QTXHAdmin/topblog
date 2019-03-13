import * as constants from './constants';
import { fromJS } from 'immutable';
let login = sessionStorage.getItem('login')
  ? sessionStorage.getItem('login')
  : '';
const defaultState = fromJS({
  articleslist: [],
  login: login,
  arcitleid: '',
  onearcitle: []
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      sessionStorage.setItem('login', action.value);
      return state.set('login', action.value);
    case constants.INIT_ARTICLES:
      return state.set('articleslist', action.data);
    case constants.GET_ITEM_INFO:
      return state.set('arcitleid', action.id);
    case constants.GET_ONE_ARCITLE:
      return state.set('onearcitle', action.data);
    case constants.PUSH_ONE_ARTICLE:
    const pushonearcitle = JSON.parse(JSON.stringify(state));
    pushonearcitle.articleslist.push(action.data);
    return pushonearcitle;
      // return state.set('onearcitle', action.data);
    //模拟删除数据时用到的删除方法
    // case constants.DELETE_ARTICLES:
    //   const newState = JSON.parse(JSON.stringify(state));
    //   newState.articleslist.splice(action.index, 1);
    //   return newState;
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
