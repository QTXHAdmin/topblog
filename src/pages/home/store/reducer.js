import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  articles: [],
  page:-1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.GET_ALL_ARCITLES:
      return state.set('articles', action.data).set('page',action.page);
    default:
      return state;
  }
};
