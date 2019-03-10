import { combineReducers } from 'redux-immutable';
//利用redux提供的combineReducers方法把分发出去的reducer整合
// import { reducer as homeReducer } from '../pages/home/store';
import { reducer as loginReducer } from '../pages/login/store';
import { reducer as headerReducer } from '../components/header/store';
import { reducer as manageblogReducer } from '../pages/system/manageblog/store';
import {reducer as personhomepageReducer} from '../pages/system/personhomepage/store';
const reducer = combineReducers({
  login: loginReducer,
  header: headerReducer,
  manageblog: manageblogReducer,
  personhomepage:personhomepageReducer
});
export default reducer;
