import { DEFAULT_DATA } from "../appConfig";
import * as actions from "../actions";

const todoListFilterFunction = (filterArray, callFilter, payload) => {
   return filterArray.map((arrayItem) => {
      const { todoList } = arrayItem;

      return todoList.map((todoItem) => callFilter(todoItem, payload));
   });
};

const filterTodoByDone = (todoListItem, completed) => {
   return { ...todoListItem, filtered: !todoListItem.done ? !completed : todoListItem.done };
};

const searchTodoByTitle = (todos, searchTitle) => {
   return {
      ...todos,
      filtered: searchTitle.length ? todos.title.startsWith(searchTitle) : todos.filtered,
   };
};

const groupListFilterFunction = (filterArray, callFilter, payload) => {
   return filterArray.map((group) => callFilter(group, payload));
};

const searchGroupByColor = (group, searchColor) => {
   return {
      ...group,
      filtered: searchColor === "white" ? true : group.color === searchColor,
   };
};

const searchGroupByCreated = (group, selectedDate) => {
   return {
      ...group,
      filtered: selectedDate === null ? group.filtered : group.created === selectedDate,
   };
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

         const todoIndex = todoList.findIndex((todo) => todo.itemId === payLoad.todoId);

         state[groupIndex].todoList[todoIndex].done = payLoad.done;

         return [...state];
      }
      case actions.FILTER_TODO_BY_DONE:
         return todoListFilterFunction(state, filterTodoByDone, payLoad.completed);
      case actions.SEARCH_TODO_BY_TITLE:
         return todoListFilterFunction(state, searchTodoByTitle, payLoad.searchTitle);
      case actions.FILTER_BY_DATE:
         return groupListFilterFunction(state, searchGroupByCreated, payLoad.selectedDate);

      default:
         return state;
   }
};

/*When checkbox is checked and user change Input type date value (using date picker),
filterByDate Action called with updated 'selectedData' value.
Use useEffect to subscribe on state 'selectedData' and 'filterEnabled'
property to call actions only after 'selectedData' and 'filterEnabled' has changed.*/

export default groupReducer;
