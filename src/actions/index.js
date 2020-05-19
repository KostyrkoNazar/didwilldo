export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const IS_COMPLETED = "IS_COMPLETED";

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
