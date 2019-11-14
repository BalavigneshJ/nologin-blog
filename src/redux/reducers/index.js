import { combineReducers } from 'redux';
import PostReducer from "./PostReducer" ;



const rootReducer = combineReducers({
  Posts : PostReducer
});

export default rootReducer;
