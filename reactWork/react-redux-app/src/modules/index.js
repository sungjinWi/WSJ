import { combineReducers } from "redux"; //reducer를 합친다
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;