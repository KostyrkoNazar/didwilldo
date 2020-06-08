import * as actions from "../actions";
import { login, logout } from "../api";
import { getTestUserToken } from "../utils";

const appStateReducer = (state = { isLoggedIn: getTestUserToken() }, action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.LOGIN: {
         return state.isLoggedIn.length > 0 ?
           { ...state, isLoggedIn: login(payLoad.email, payLoad.password) } : { ...state, isLoggedIn:false};
         
      }

      case actions.LOGOUT: {
         logout();
         return { ...state, isLoggedIn: false };
      }

      case actions.REGISTER: {
         return { ...state, isLoggedIn: false };
      }

      default:
         return state;
   }
};

export default appStateReducer;
