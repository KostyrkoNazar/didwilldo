import { getTestUserToken } from "./utils";

export const loginIn = (email, password) => {
   return getTestUserToken(10);
};
