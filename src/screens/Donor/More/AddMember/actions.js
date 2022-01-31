export const ADD_MEMBER_START = "ADD_MEMBER_START";
export const ADD_MEMBER_SUCCESS = "ADD_MEMBER_SUCCESS";
export const ADD_MEMBER_FAIL = "ADD_MEMBER_FAIL";
export const ADD_MEMBER_CLEAR = "ADD_MEMBER_CLEAR";


export const UPDATE_MEMBER_START = "UPDATE_MEMBER_START";
export const UPDATE_MEMBER_SUCCESS = "UPDATE_MEMBER_SUCCESS";
export const UPDATE_MEMBER_FAIL = "UPDATE_MEMBER_FAIL";


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


export const addMemberClear = (payload) => ({
  type: ADD_MEMBER_CLEAR,
  payload,
});

export const updateMemberStart = (payload) => {
  return {
    type: UPDATE_MEMBER_START,
    payload,
  };
};

export const updateMemberSuccess = (payload) => ({
  type: UPDATE_MEMBER_SUCCESS,
  payload,
});

export const updateMemberFail = (payload) => ({
  type: UPDATE_MEMBER_FAIL,
  payload,
});

