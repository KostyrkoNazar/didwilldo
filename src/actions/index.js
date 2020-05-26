export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const IS_COMPLETED = "IS_COMPLETED";
export const ADD_NEW_GROUP = "ADD_NEW_GROUP";
export const SEARCH_GROUP_BY_COLOR = "SEARCH_GROUP_BY_COLOR";

export const addNewTodo = (id, newTodo) => {
   return {
      type: ADD_NEW_TODO,
      payLoad: { id, newTodo },
   };
};

export const isCompleted = (done, itemId) => {
   return {
      type: IS_COMPLETED,
      payLoad: { done, itemId },
   };
};

export const addNewGroup = (newGroup) => {
   return {
      type: ADD_NEW_GROUP,
      payLoad: { newGroup },
   };
};

export const searchGroupByColor = (searchColor) => {
   return {
      type: SEARCH_GROUP_BY_COLOR,
      payLoad: { searchColor },
   };
};
