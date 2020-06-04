import { DEFAULT_DATA } from "../appConfig";
import * as actions from "../actions";

const todoListFilterFunction = (todoGroups, todoListFilter, payload) => {
   return todoGroups.map((groupItem) => {
      const todoList = groupItem.todoList.map((todoItem) => todoListFilter(todoItem, payload));
      return { ...groupItem, todoList };
   });
};

const filterTodoByDone = (todoListItem, completed) => {
   if (completed === true) {
      return { ...todoListItem, sortByDone: todoListItem.done };
   } else {
      return { ...todoListItem, sortByDone: null };
   }
};

const filterTodoByTitle = (todoListItem, searchTitle) => {
   if (searchTitle.length > 0) {
      return { ...todoListItem, sortByTitle: todoListItem.title.startsWith(searchTitle) };
   } else {
      return {
         ...todoListItem,
         sortByTitle: null,
      };
   }
};

const groupListFilterFunction = (filterArray, callFilter, payload) => {
   return filterArray.map((group) => callFilter(group, payload));
};

const searchGroupByColor = (group, searchColor) => {
   if (searchColor === "white") {
      return { ...group, sortByColor: null };
   } else {
      return {
         ...group,
         sortByColor: group.color === searchColor,
      };
   }
};

const searchGroupByCreated = (group, selectedDate) => {
   if (selectedDate === null) {
      return { ...group, sortByCreated: null };
   } else {
      return {
         ...group,
         sortByCreated: group.created === selectedDate,
      };
   }
};

const groupReducer = (state = DEFAULT_DATA, action) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.ADD_NEW_GROUP:
         return [...state, payLoad.newGroup];

      case actions.SEARCH_GROUP_BY_COLOR:
         return groupListFilterFunction(state, searchGroupByColor, payLoad.searchColor);
      case actions.ADD_NEW_TODO: {
         const index = state.findIndex((group) => group.id === payLoad.id);
         state[index].todoList.push(payLoad.newTodo);

         return [...state];
      }
      case actions.CHECK_TODO: {
         const groupIndex = state.findIndex((groups) => groups.id === payLoad.groupId);
         const { todoList } = state[groupIndex];

         const todoIndex = todoList.findIndex((todo) => todo.id === payLoad.todoId);
         state[groupIndex].todoList[todoIndex].done = payLoad.done;

         return [...state];
      }
      case actions.FILTER_TODO_BY_DONE:
         return todoListFilterFunction(state, filterTodoByDone, payLoad.completed);
      case actions.SEARCH_TODO_BY_TITLE:
         return todoListFilterFunction(state, filterTodoByTitle, payLoad.searchTitle);
      case actions.FILTER_BY_DATE:
         return groupListFilterFunction(state, searchGroupByCreated, payLoad.selectedDate);

      default:
         return state;
   }
};

export default groupReducer;
