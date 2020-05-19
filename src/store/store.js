import { createStore } from "redux";
import allTodoReducers from "../reducers";

const store = createStore(
   allTodoReducers,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
