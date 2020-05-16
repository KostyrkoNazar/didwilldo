const todos = (state = [], action) => {
   switch (action.type) {
      case "ADD_NEW_TODO":
         return [
            ...state,
            {
               itemId: action.itemId,
               title: action.title,
               completed: action.done,
               filtered: action.filtered,
            },
         ];
      default:
         return state;
   }
};

export default todos;
