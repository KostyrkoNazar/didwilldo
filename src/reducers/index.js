import todoReducer from "./todoReducer";
import groupReducer from "./groupReducer";
import { combineReducers } from "redux";

export const allTodoReducers = combineReducers({
   todoList: todoReducer,
});

export const reducers = combineReducers({
   groupList: groupReducer,
});
