import { ADD_NEW_TODO } from "../actions";
import { IS_COMPLETED } from "../actions";
// state = todoList;

const todoReducer = (state = [], action) => {
   const { type, payLoad } = action;

   switch (type) {
      case ADD_NEW_TODO:
         return [...state, payLoad.newTodo];
      case IS_COMPLETED: {
         const todoList = [...state];
         const todoIndex = state.findIndex((todo) => todo.itemId === payLoad.itemId);

         todoList[todoIndex].done = payLoad.done;
         return todoList;
      }

      default:
         return state;
   }
};

export default todoReducer;
