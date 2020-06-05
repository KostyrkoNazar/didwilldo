import { getTestUserToken, updateUserToken } from "./utils";

export const login = (email, password) => {
   getTestUserToken();
   return true;
};

export const logout = () => {
   updateUserToken("");
   return false;
};
