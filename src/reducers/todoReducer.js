import * as actions from "../actions";
// state = todoList;

const todoReducer = (state = [], action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.IS_COMPLETED: {
         const todoList = [...state];

         const todoIndex = state.findIndex((todo) => todo.itemId === payLoad.itemId);
         todoList[todoIndex].done = payLoad.done;

         return todoList;
      }
      case actions.SEARCH_TODO_BY_TITLE:
         return state
            .map((todos) => {
               const { title } = todos;

               if (title.startsWith(payLoad.searchTitle)) {
                  return todos;
               } else {
                  return undefined;
               }
            })
            .filter((item) => item !== undefined);

      default:
         return state;
   }
};

export default todoReducer;
