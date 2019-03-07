import { combineReducers } from 'redux-immutable';
//利用redux提供的combineReducers方法把分发出去的reducer整合
import { reducer as headerReducer } from '../pages/login/store';
const reducer = combineReducers({
  login: headerReducer
});
export default reducer;