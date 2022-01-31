export const DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_START = "DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_START";
export const DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_SUCCESS = "DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_SUCCESS";
export const DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_FAIL = "DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_FAIL";
export const DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_CLEAR = "DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_CLEAR";

export const donateFromReceiversListConfirmationStart = (payload) => {
  return {
    type: DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_START,
    payload,
  };
};

export const donateFromReceiversListConfirmationSuccess = (payload) => ({
  type: DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_SUCCESS,
  payload,
});

export const donateFromReceiversListConfirmationFail = (payload) => ({
  type: DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_FAIL,
  payload,
});

export const donateFromReceiversListConfirmationClear = (payload) => ({
  type: DONATE_FROM_RECEIVERS_LIST_CONFIRMATION_CLEAR,
  payload,
});
