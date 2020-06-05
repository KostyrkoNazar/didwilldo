export const ADD_NEW_TODO = "ADD_NEW_TODO";
export const ADD_NEW_GROUP = "ADD_NEW_GROUP";
export const SEARCH_GROUP_BY_COLOR = "SEARCH_GROUP_BY_COLOR";
export const CHECK_TODO = "CHECK_TODO";
export const FILTER_TODO_BY_DONE = "FILTER_TODO_BY_DONE";
export const SEARCH_TODO_BY_TITLE = "SEARCH_TODO_BY_TITLE";
export const FILTER_BY_DATE = "FILTER_BY_DATE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";

export const register = (email, password) => {
   return {
      type: REGISTER,
      payLoad: { email, password },
   };
};

export const login = (email, password) => {
   return {
      type: LOGIN,
      payLoad: { email, password },
   };
};

export const logout = () => {
   return {
      type: LOGOUT,
   };
};

export const filterByDate = (selectedDate) => {
   return {
      type: FILTER_BY_DATE,
      payLoad: { selectedDate },
   };
};

export const searchTodoByTitle = (searchTitle) => {
   return {
      type: SEARCH_TODO_BY_TITLE,
      payLoad: { searchTitle },
   };
};

export const filterTodoByDone = (completed) => {
   return {
      type: FILTER_TODO_BY_DONE,
      payLoad: { completed },
   };
};

export const todoCheckBox = (groupId, todoId, done) => {
   return {
      type: CHECK_TODO,
      payLoad: { groupId, todoId, done },
   };
};

export const addNewTodo = (id, newTodo) => {
   return {
      type: ADD_NEW_TODO,
      payLoad: { id, newTodo },
   };
};

export const addNewGroup = (newGroup) => {
   return {
      type: ADD_NEW_GROUP,
      payLoad: { newGroup },
   };
};

export const searchGroupByColor = (searchColor) => {
   return {
      type: SEARCH_GROUP_BY_COLOR,
      payLoad: { searchColor },
   };
};
