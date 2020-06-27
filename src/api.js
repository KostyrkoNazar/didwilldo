import { getTestUserToken, updateUserToken } from "./utils";
import { receiveGroups, receiveGroupsError, requestGroups } from "./actions/async";

const BASE_URL = "http://localhost:3000";
const GROUPS_ENDPOINT = "/groupList";

// eslint-disable-next-line no-unused-vars
export const login = (email, password) => {
   const testToken = getTestUserToken();
   updateUserToken(testToken);

   return true;
};

export const logout = () => {
   updateUserToken("");

   return false;
};

export function fetchGroups() {
   const initParams = {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   };

   return fetchFromApi(BASE_URL + GROUPS_ENDPOINT, initParams, requestGroups, receiveGroups, receiveGroupsError);
}

export function fetchFromApi(url, param, requestCallback, successCallback, errorCallback) {
   return async (dispatch) => {
      dispatch(requestCallback());
      try {
         let response = await fetch(url, param);
         let data = await response.json();

         if (data["error"]) {
            dispatch(errorCallback(data.error));
         } else {
            dispatch(successCallback(data));
         }
      } catch (error) {
         dispatch(errorCallback(error));
      }
   };
}
