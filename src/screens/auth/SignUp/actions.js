export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";

export const signUpStart = (payload) => {
  return {
    type: SIGNUP_START,
    payload,
  };
};

export const signUpSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signUpFail = (payload) => ({
  type: SIGNUP_FAIL,
  payload,
});

