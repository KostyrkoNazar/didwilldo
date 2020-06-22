import * as actions from "../actions/async";

const groupAsyncReducer = (
   state = {
      error: null,
      loading: false,
      groups: [],
   },
   action
) => {
   const { type, payLoad } = action;

   switch (type) {
      case actions.RECEIVE_GROUPS: {
         return { ...state, loading: false, groups: payLoad.groups };
      }
      case actions.RECEIVE_GROUPS_ERROR: {
         return { ...state, error: payLoad.error, loading: false };
      }
      case actions.REQUEST_GROUPS: {
         return { ...state, error: null, loading: true };
      }
      default:
         return state;
   }
};

export default groupAsyncReducer;
