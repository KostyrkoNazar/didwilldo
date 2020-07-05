export const REQUEST_GROUPS = "REQUEST_GROUPS";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUPS_ERROR = "RECEIVE_GROUPS_ERROR";
export const ADD_NEW_GROUP = "ADD_NEW_GROUP";
export const ADD_NEW_TODO = "ADD_NEW_TODO";

export const requestGroups = () => {
   return {
      type: REQUEST_GROUPS,
   };
};

export const receiveGroups = (groups) => {
   return {
      type: RECEIVE_GROUPS,
      payLoad: { groups },
   };
};

export const receiveGroupsError = (error) => {
   return {
      type: RECEIVE_GROUPS_ERROR,
      payLoad: { error },
   };
};

export const addNewGroup = (newGroup) => {
   return {
      type: ADD_NEW_GROUP,
      payLoad: { newGroup },
   };
};
export const addNewTodo = (id, newTodo) => {
   return {
      type: ADD_NEW_TODO,
      payLoad: { id, newTodo },
   };
};
