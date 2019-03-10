import { combineReducers } from 'redux-immutable';
//利用redux提供的combineReducers方法把分发出去的reducer整合
// import { reducer as homeReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';

import { reducer as headerReducer } from '../components/Header/store';
import { reducer as manageblogReducer } from '../pages/system/manageblog/store';
const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer,
  manageblog: manageblogReducer
});
export default reducer;
