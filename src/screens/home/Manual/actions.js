export const MANUAL_START = "MANUAL_START";
export const MANUAL_SUCCESS = "MANUAL_SUCCESS";
export const MANUAL_FAIL = "MANUAL_FAIL";

export const manualStart = (payload) => {
  return {
    type: MANUAL_START,
    payload,
  };
};

export const manualSuccess = (payload) => ({
  type: MANUAL_SUCCESS,
  payload,
});

export const manualFail = (payload) => ({
  type: MANUAL_FAIL,
  payload,
});

