export const REQUEST_GROUPS = "REQUEST_GROUPS";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUPS_ERROR = "RECEIVE_GROUPS_ERROR";

export const requestGroups = () => {
   return {
      type: REQUEST_GROUPS,
   };
};

export const receiveGroups = (groups) => {
   return {
      type: RECEIVE_GROUPS,
      payLoad: { groups },
   };
};

export const receiveGroupsError = (error) => {
   return {
      type: RECEIVE_GROUPS_ERROR,
      payLoad: error,
   };
};
