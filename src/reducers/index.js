import todos from "./todoReducer";
import { combineReducers } from "redux";

const allTodoReducers = combineReducers({
   todo: todos,
});

export default allTodoReducers;
