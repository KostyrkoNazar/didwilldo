import { USER_TOKEN } from "./appConfig";

export const getCurrentDate = () => {
   const today = new Date();
   const dd = String(today.getDate()).padStart(2, "0");
   const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
   const yyyy = today.getFullYear();

   return dd + "-" + mm + "-" + yyyy;
};

export const updateUserToken = (userToken) => {
   userToken.length > 0 ? localStorage.setItem(USER_TOKEN, userToken) : localStorage.setItem(USER_TOKEN, "");
};

export const getTestUserToken = () => {
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   const tokenLength = 10;
   let testToken = "";

   for (let i = 0; i < tokenLength; i++) {
      testToken += characters.charAt(Math.floor(Math.random() * characters.length));
   }

   return testToken;
};

export const isLoggedIn = () => !!localStorage.getItem(USER_TOKEN);
