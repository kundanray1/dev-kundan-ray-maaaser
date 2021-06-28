export const WITHDRAW_FUND_CONFIRMATION_START = "WITHDRAW_FUND_CONFIRMATION_START";
export const WITHDRAW_FUND_CONFIRMATION_SUCCESS = "WITHDRAW_FUND_CONFIRMATION_SUCCESS";
export const WITHDRAW_FUND_CONFIRMATION_FAIL = "WITHDRAW_FUND_CONFIRMATION_FAIL";
export const WITHDRAW_FUND_CONFIRMATION_CLEAR = "WITHDRAW_FUND_CONFIRMATION_CLEAR";

export const withdrawFundConfirmationStart = (payload) => {
  return {
    type: WITHDRAW_FUND_CONFIRMATION_START,
    payload,
  };
};

export const withdrawFundConfirmationSuccess = (payload) => ({
  type: WITHDRAW_FUND_CONFIRMATION_SUCCESS,
  payload,
});

export const withdrawFundConfirmationFail = (payload) => ({
  type: WITHDRAW_FUND_CONFIRMATION_FAIL,
  payload,
});

export const withdrawFundConfirmationClear = (payload) => ({
  type: WITHDRAW_FUND_CONFIRMATION_CLEAR,
  payload,
});
