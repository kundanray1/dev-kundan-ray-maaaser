export const MANUAL_DONATE_CONFIRMATION_START = "MANUAL_DONATE_CONFIRMATION_START";
export const MANUAL_DONATE_CONFIRMATION_SUCCESS = "MANUAL_DONATE_CONFIRMATION_SUCCESS";
export const MANUAL_DONATE_CONFIRMATION_FAIL = "MANUAL_DONATE_CONFIRMATION_FAIL";
export const MANUAL_DONATE_CONFIRMATION_CLEAR = "MANUAL_DONATE_CONFIRMATION_CLEAR";

export const manualDonateConfirmationStart = (payload) => {
  return {
    type: MANUAL_DONATE_CONFIRMATION_START,
    payload,
  };
};

export const manualDonateConfirmationSuccess = (payload) => ({
  type: MANUAL_DONATE_CONFIRMATION_SUCCESS,
  payload,
});

export const manualDonateConfirmationFail = (payload) => ({
  type: MANUAL_DONATE_CONFIRMATION_FAIL,
  payload,
});

export const manualDonateConfirmationClear = (payload) => ({
  type: MANUAL_DONATE_CONFIRMATION_CLEAR,
  payload,
});
