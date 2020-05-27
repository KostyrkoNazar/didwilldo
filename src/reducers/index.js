import groupReducer from "./groupReducer";
import { combineReducers } from "redux";

export const reducers = combineReducers({
   groupList: groupReducer,
});
