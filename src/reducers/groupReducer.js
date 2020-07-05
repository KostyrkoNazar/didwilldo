import * as actions from "../actions";
import * as asyncActions from "../actions/async";

const todoListFilterFunction = (todoGroups, todoListFilter, payload) => {
   return todoGroups.map((groupItem) => {
      const todoList = groupItem["todoList"].map((todoItem) => todoListFilter(todoItem, payload));
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

const groupReducer = (
   state = {
      error: null,
      loading: false,
      groups: [],
   },
   action
) => {
   const { type, payLoad } = action;
   const { groups } = state;

   switch (type) {
      case asyncActions.ADD_NEW_GROUP:
         return { ...state, groups: [...groups, payLoad.newGroup] };
      case actions.SEARCH_GROUP_BY_COLOR:
         return { ...state, groups: groupListFilterFunction(groups, searchGroupByColor, payLoad.searchColor) };
      case asyncActions.ADD_NEW_TODO: {
         const index = groups.findIndex((group) => group.id === payLoad.id);
         groups[index].todoList.push(payLoad.newTodo);

         return { ...state, groups };
      }
      case actions.CHECK_TODO: {
         const groupIndex = groups.findIndex((group) => group.id === payLoad.groupId);
         const { todoList } = groups[groupIndex];

         const todoIndex = todoList.findIndex((todo) => todo.id === payLoad.todoId);
         groups[groupIndex].todoList[todoIndex].done = payLoad.done;

         return { ...state };
      }
      case actions.FILTER_TODO_BY_DONE:
         return { ...state, groups: todoListFilterFunction(groups, filterTodoByDone, payLoad.completed) };
      case actions.SEARCH_TODO_BY_TITLE:
         return { ...state, groups: todoListFilterFunction(groups, filterTodoByTitle, payLoad.searchTitle) };
      case actions.FILTER_BY_DATE:
         return { ...state, groups: groupListFilterFunction(groups, searchGroupByCreated, payLoad.selectedDate) };
      case asyncActions.REQUEST_GROUPS: {
         return { ...state, error: null, loading: true };
      }
      case asyncActions.RECEIVE_GROUPS: {
         return { ...state, loading: false, groups: payLoad.groups };
      }
      case asyncActions.RECEIVE_GROUPS_ERROR: {
         return { ...state, error: payLoad.error, loading: false };
      }
      default:
         return state;
   }
};

export default groupReducer;
