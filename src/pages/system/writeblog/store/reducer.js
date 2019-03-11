import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  inputValue: ''
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.INPUT_VALUE:
      return state.set('inputValue', action.value);
    default:
      return state;
  }
};
