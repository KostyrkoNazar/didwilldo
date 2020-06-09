import * as actions from "../actions";
import { login, logout } from "../api";
import { getUserToken } from "../utils";


const appStateReducer = (state = { isLoggedIn: getUserToken() }, action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.LOGOUT: {
         logout();
         return { ...state, isLoggedIn: false };
      }

      case actions.LOGIN: {
         if (!state.isLoggedIn) {

            return{ ...state, isLoggedIn: login(payLoad.email, payLoad.password) }

         } else {
            return { ...state, isLoggedIn: false};
         }

      }

      case actions.REGISTER: {
         return { ...state, isLoggedIn: login(payLoad.email, payLoad.password) };

      }
      default:
         return state;
   }
};

export default appStateReducer;
