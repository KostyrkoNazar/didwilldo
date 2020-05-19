import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const allTodoReducers = combineReducers({
   todoReducer,
});

export default allTodoReducers;
