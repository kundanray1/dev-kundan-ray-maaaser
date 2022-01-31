export const MANUAL_START = "MANUAL_START";
export const MANUAL_SUCCESS = "MANUAL_SUCCESS";
export const MANUAL_FAIL = "MANUAL_FAIL";

export const MANUAL_RECEIVERS_START = "MANUAL_RECEIVERS_START";
export const MANUAL_RECEIVERS_SUCCESS = "MANUAL_RECEIVERS_SUCCESS";
export const MANUAL_RECEIVERS_FAIL = "MANUAL_RECEIVERS_FAIL";


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


export const manualReceiversStart = (payload) => {
  return {
    type: MANUAL_RECEIVERS_START,
    payload,
  };
};

export const manualReceiversSuccess = (payload) => ({
  type: MANUAL_RECEIVERS_SUCCESS,
  payload,
});

export const manualReceiversFail = (payload) => ({
  type: MANUAL_RECEIVERS_FAIL,
  payload,
});

