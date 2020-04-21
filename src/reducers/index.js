import { combineReducers } from "redux";
import counter from "./counter";
import heroReducer from "./hero";


const rootReducer = combineReducers({
  counter,
  hero: heroReducer,
});

export default rootReducer;