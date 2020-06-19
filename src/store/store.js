import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from "redux";
import { reducers } from "../reducers";
import {fetchGroups} from "../actions";

const loggerMiddleware = createLogger();

export const store = createStore(
   reducers,applyMiddleware(thunk,loggerMiddleware),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(fetchGroups('http://localhost/groupList'))
  .then(()=>console.log(store.getState()))