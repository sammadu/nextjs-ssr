import { combineReducers } from 'redux';

import { xMoneyApi } from '../../services/xMoneyApi';


export default combineReducers({
  [xMoneyApi.reducerPath]: xMoneyApi.reducer,
});
