import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  inputflag: false
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LIST_BLOCK:
      return state.set('focused', action.value);
    case constants.LIST_NONE:
      return state.set('focused', action.value);
    case constants.INPUT_FOCUS:
      return state.set('inputflag', action.value);
    case constants.INPUT_BLUR:
      return state.set('inputflag', action.value);
    default:
      return state;
  }
};
