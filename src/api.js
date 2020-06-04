import { getTestUserToken } from "./utils";
import { setUserToken } from "./utils";

export const login = (email, password) => {
   getTestUserToken();
   return true;
};

export const logout = (emptyString) => {
   setUserToken(emptyString);
   return false;
};
