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

      default:
         return state;
   }
};

export default groupReducer;
