export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const IS_COMPLETED = "IS_COMPLETED";

export const addNewTodo = (newTodo, groupId) => {
   return {
      type: ADD_NEW_TODO,
      payLoad: { newTodo, groupId },
   };
};

export const isCompleted = (done, itemId) => {
   return {
      type: IS_COMPLETED,
      payLoad: { done, itemId },
   };
};
