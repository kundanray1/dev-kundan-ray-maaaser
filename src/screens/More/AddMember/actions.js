export const ADD_MEMBER_START = "ADD_MEMBER_START";
export const ADD_MEMBER_SUCCESS = "ADD_MEMBER_SUCCESS";
export const ADD_MEMBER_FAIL = "ADD_MEMBER_FAIL";

export const addMemberStart = (payload) => {
  return {
    type: ADD_MEMBER_START,
    payload,
  };
};

export const addMemberSuccess = (payload) => ({
  type: ADD_MEMBER_SUCCESS,
  payload,
});

export const addMemberFail = (payload) => ({
  type: ADD_MEMBER_FAIL,
  payload,
});

