import { DEFAULT_DATA } from "../appConfig";
import * as actions from "../actions";
// state = todoGroups;

/*
   Фільтр по даті повинен мати окремий компонент. В якому ти зможеш обрати дату по якій ти хочеш фільтрувати.
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date

   how to get data values
   const now = moment(); //create new data object (time is now)
   const min = now.add(1, "d").format("YYYY-MM-DD");
   const max = now
      .add(3, "M")
      .subtract(1, "d")
      .format("YYYY-MM-DD");

      від сьогодні і максимум 3 місяці вперед
 */

const todoListFilterFunction = (filterArray, filter, payload) => {
   return filterArray
      .map((arrayItem) => {
         const { todoList } = arrayItem;

         const sortedTodoList = todoList
            .map((todoItem) => filter(todoItem, payload))
            .filter((item) => item !== undefined);

         return sortedTodoList.length !== 0 ? { ...arrayItem, todoList: sortedTodoList } : undefined;
      })
      .filter((groups) => groups !== undefined);
};

const filterTodoByDone = (todoListItem, completed) => {
   return { ...todoListItem, filtered: !todoListItem.done ? !completed : todoListItem.done };
};

const searchTodoByTitle = (todos, searchTitle) => {
   return todos.title.startsWith(searchTitle) ? todos : undefined;
};

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
         return todoListFilterFunction(state, filterTodoByDone, payLoad.completed);
      case actions.SEARCH_TODO_BY_TITLE:
         return todoListFilterFunction(state, searchTodoByTitle, payLoad.searchTitle);
      default:
         return state;
   }
};

export default groupReducer;
