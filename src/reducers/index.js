import todos from "./addTodoReducer";
import { combineReducers } from "redux";

const allTodoReducers = combineReducers({
   todo: todos,
});

export default allTodoReducers;
