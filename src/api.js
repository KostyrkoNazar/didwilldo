import { getTestUserToken, updateUserToken } from "./utils";
import { receiveGroups, receiveGroupsError, requestGroups } from "./actions/async";

const BASE_URL = "http://localhost:3000";
const GROUPS_ENDPOINT = "/groupList";
const TODO_LIST_ENDPOINT = "/todoList";
const SORT_BY_COLOR_ENDPOINT = "/sortByColor";
const SORT_BY_CREATED_ENDPOINT = "/sortByCreated";
const COLOR_ENDPOINT = "/color";
const TITLE_ENDPOINT = "/title";
const CREATED_ENDPOINT = "/created";
const ID_ENDPOINT = "/id";

export const login = (email, password) => {
   getTestUserToken();
   return true;
};

export const logout = () => {
   updateUserToken("");
   return false;
};

export async function fetchGroups() {
   const initParams = {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   };

   fetchFromApi(BASE_URL + GROUPS_ENDPOINT, initParams, requestGroups, receiveGroups, receiveGroupsError);
}

export function fetchFromApi(url, param, requestCallback, successCallback, errorCallback) {
   return async function (dispatch) {
      dispatch(requestCallback());
      try {
         let response = await fetch(url, param);
         let data = await response.json();
         if (data["error"] === "serverError") {
            dispatch(errorCallback("serverError"));
         } else {
            dispatch(successCallback(data));
         }
      } catch (error) {
         dispatch(errorCallback(error));
      }
   };
}
