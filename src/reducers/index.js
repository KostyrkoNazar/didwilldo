import todoReducer from "./todoReducer";
import { combineReducers } from "redux";

const allTodoReducers = combineReducers({
   todoList: todoReducer,
});

export default allTodoReducers;
