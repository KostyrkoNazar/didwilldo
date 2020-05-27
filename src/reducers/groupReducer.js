import { DEFAULT_DATA } from "../appConfig";
import * as actions from "../actions";
// state = todoGroups;

const groupReducer = (state = DEFAULT_DATA, action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.ADD_NEW_GROUP:
         return [...state, payLoad.newGroup];

      case actions.SEARCH_GROUP_BY_COLOR:
         return state
            .map((group) => {
               const { color } = group;

               if (payLoad.searchColor === color) {
                  return { ...group, color: payLoad.searchColor };
               } else {
                  return undefined;
               }
            })
            .filter((groups) => groups !== undefined);

      case actions.ADD_NEW_TODO: {
         const index = state.findIndex((group) => group.id === payLoad.id);
         state[index].todoList.push(payLoad.newTodo);

         return [...state];
      }
      case actions.CHECK_TODO: {
         const groupIndex = state.findIndex((groups) => groups.id === payLoad.groupId);
         const { todoList } = state[groupIndex];

         const todoIndex = todoList.findIndex((todo) => todo.itemId === payLoad.todoId);

         state[groupIndex].todoList[todoIndex].done = payLoad.done;

         return [...state];
      }
      case actions.FILTER_TODO_BY_DONE:
         return state.map((group) => {
            const { todoList } = group;

            const sortedListByDone = todoList.map((item) => {
               const { done } = item;

               if (!done) {
                  return { ...item, filtered: !payLoad.completed };
               } else {
                  return { ...item };
               }
            });

            return { ...group, todoList: sortedListByDone };
         });

      case actions.SEARCH_TODO_BY_TITLE:
         return state
            .map((obj) => {
               const { todoList } = obj;

               const searchResult = todoList
                  .map((todos) => {
                     const { title } = todos;

                     if (title.startsWith(payLoad.searchTitle)) {
                        return todos;
                     } else {
                        return undefined;
                     }
                  })
                  .filter((item) => item !== undefined);

               if (searchResult.length !== 0) {
                  return { ...obj, todoList: searchResult };
               } else {
                  return undefined;
               }
            })
            .filter((groups) => groups !== undefined);

      default:
         return state;
   }
};

export default groupReducer;
