import { DEFAULT_DATA } from "../appConfig";
// state = todoGroups;

const groupReducer = (state = DEFAULT_DATA, action) => {
   const { type } = action;
   console.log(state);
   switch (type) {
      default:
         return state;
   }
};

export default groupReducer;
