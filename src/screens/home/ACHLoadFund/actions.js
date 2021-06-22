export const ACH_LOAD_FUND_START = "ACH_LOAD_FUND_START";
export const ACH_LOAD_FUND_SUCCESS = "ACH_LOAD_FUND_SUCCESS";
export const ACH_LOAD_FUND_FAIL = "ACH_LOAD_FUND_FAIL";
export const ACH_LOAD_FUND_CLEAR = "ACH_LOAD_FUND_CLEAR";

export const ACHLoadFundStart = (payload) => {
  return {
    type: ACH_LOAD_FUND_START,
    payload,
  };
};

export const ACHLoadFundSuccess = (payload) => ({
  type: ACH_LOAD_FUND_SUCCESS,
  payload,
});

export const ACHLoadFundFail = (payload) => ({
  type: ACH_LOAD_FUND_FAIL,
  payload,
});

export const ACHLoadFundClear = (payload) => ({
  type: ACH_LOAD_FUND_CLEAR,
  payload,
});
