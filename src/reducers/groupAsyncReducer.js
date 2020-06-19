import * as actions from "../actions";

const groupAsyncReducer = (state = {
  error : null,
  loading: false,
  groups: []
}, action) => {
  const {type, payLoad} = action;

  console.log(state)
  switch (type) {
    case actions.RECEIVE_GROUPS : {
      return {...state, loading: false, groups: payLoad.groups }
    }
    case actions.RECEIVE_GROUPS_ERROR : {
      return {...state, error: Error, loading: false}
    }
    case actions.REQUEST_GROUPS : {
      return {...state, error: null, loading: true}
    }
    default :
      return state
  }
}

export default groupAsyncReducer;