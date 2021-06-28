export const ACH_LOAD_FUND_CONFIRMATION_START = "ACH_LOAD_FUND_CONFIRMATION_START";
export const ACH_LOAD_FUND_CONFIRMATION_SUCCESS = "ACH_LOAD_FUND_CONFIRMATION_SUCCESS";
export const ACH_LOAD_FUND_CONFIRMATION_FAIL = "ACH_LOAD_FUND_CONFIRMATION_FAIL";
export const ACH_LOAD_FUND_CONFIRMATION_CLEAR = "ACH_LOAD_FUND_CONFIRMATION_CLEAR";

export const ACHLoadFundConfirmationStart = (payload) => {
  return {
    type: ACH_LOAD_FUND_CONFIRMATION_START,
    payload,
  };
};

export const ACHLoadFundConfirmationSuccess = (payload) => ({
  type: ACH_LOAD_FUND_CONFIRMATION_SUCCESS,
  payload,
});

export const ACHLoadFundConfirmationFail = (payload) => ({
  type: ACH_LOAD_FUND_CONFIRMATION_FAIL,
  payload,
});

export const ACHLoadFundConfirmationClear = (payload) => ({
  type: ACH_LOAD_FUND_CONFIRMATION_CLEAR,
  payload,
});
