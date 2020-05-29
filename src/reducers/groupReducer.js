import { DEFAULT_DATA } from "../appConfig";
import * as actions from "../actions";

const todoListFilterFunction = (filterArray, callFilter, payload) => {
   return filterArray
      .map((arrayItem) => {
         const { todoList } = arrayItem;

         const sortedTodoList = todoList
            .map((todoItem) => callFilter(todoItem, payload))
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

const groupListFilterFunction = (filterArray, callFilter, payload) => {
   return filterArray.map((group) => callFilter(group, payload.searchColor)).filter((groups) => groups !== undefined);
};

const searchGroupByProperty = (group, property) => {
   return group.color === property ? { ...group, color: group.color } : undefined;
};

const groupReducer = (state = DEFAULT_DATA, action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.ADD_NEW_GROUP:
         return [...state, payLoad.newGroup];

      case actions.SEARCH_GROUP_BY_COLOR:
         return groupListFilterFunction(state, searchGroupByProperty, payLoad);
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
      case actions.FILTER_BY_DATE:
         // return groupListFilterFunction(state, searchGroupByProperty, payLoad.selectedDate)
         return state
            .map((group) => {
               if (group.created.localeCompare(payLoad.selectedDate) === 0) {
                  return group;
               } else {
                  return null;
               }
            })
            .filter((value) => value !== undefined);
      default:
         return state;
   }
};

export default groupReducer;
