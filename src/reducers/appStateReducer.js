import * as actions from "../actions";
import { login, logout } from "../api";

const appStateReducer = (state = { isLoggedIn: false }, action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.LOGIN: {
         login(payLoad.email, payLoad.password);
         return { ...state, isLoggedIn: true };
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
