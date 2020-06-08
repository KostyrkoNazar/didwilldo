export const getCurrentDate = () => {
   const today = new Date();
   const dd = String(today.getDate()).padStart(2, "0");
   const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
   const yyyy = today.getFullYear();

   return dd + "-" + mm + "-" + yyyy;
};

export const updateUserToken = (userToken) => {
   userToken.length > 0 ? localStorage.setItem("token", userToken) : localStorage.setItem("token", "");
};

export const getTestUserToken = () => {
   let result = "";
   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
   const charactersLength = characters.length;
   for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   updateUserToken(result);

   return result;
};

export const getUserToken =() => {
   const localData = localStorage.getItem('token');
   return !!localData.length;
}