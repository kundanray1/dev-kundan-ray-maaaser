export const WITHDRAW_FUND_START = "WITHDRAW_FUND_START";
export const WITHDRAW_FUND_SUCCESS = "WITHDRAW_FUND_SUCCESS";
export const WITHDRAW_FUND_FAIL = "WITHDRAW_FUND_FAIL";
export const WITHDRAW_FUND_CLEAR = "WITHDRAW_FUND_CLEAR";

export const withdrawFundStart = (payload) => {
  return {
    type: WITHDRAW_FUND_START,
    payload,
  };
};

export const withdrawFundSuccess = (payload) => ({
  type: WITHDRAW_FUND_SUCCESS,
  payload,
});

export const withdrawFundFail = (payload) => ({
  type: WITHDRAW_FUND_FAIL,
  payload,
});

export const withdrawFundClear = (payload) => ({
  type: WITHDRAW_FUND_CLEAR,
  payload,
});
