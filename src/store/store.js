import { createStore } from "redux";
import allTodoReducers from "../reducers";

export const store = createStore(
   allTodoReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
