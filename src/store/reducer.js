import { combineReducers } from 'redux-immutable';
import { homeReducer } from "@pages/home/store";

const reducer = combineReducers({
  home: homeReducer,
});
export default reducer;