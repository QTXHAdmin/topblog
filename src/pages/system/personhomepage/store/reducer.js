import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  articleslist: []
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INIT_ARTICLES:
      return state.set('articleslist', action.data);
    default:
      return state;
  }
};
