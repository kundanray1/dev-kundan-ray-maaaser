export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_CLEAR = "LOGIN_CLEAR";
export const LOGIN_EMPLOYEE_SUCCESS = "LOGIN_EMPLOYEE_SUCCESS";

export const loginStart = (payload) => {
  return {
    type: LOGIN_START,
    payload,
  };
};

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFail = (payload) => ({
  type: LOGIN_FAIL,
  payload,
});

export const employeeSuccess = (payload) => ({
  type: LOGIN_EMPLOYEE_SUCCESS,
  payload,
});
//logout
export const loginClear = (payload) => ({
  type: LOGIN_CLEAR,
  payload,
});

