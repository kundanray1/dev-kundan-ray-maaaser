export const CARD_LOAD_FUND_START = "CARD_LOAD_FUND_START";
export const CARD_LOAD_FUND_SUCCESS = "CARD_LOAD_FUND_SUCCESS";
export const CARD_LOAD_FUND_FAIL = "CARD_LOAD_FUND_FAIL";
export const CARD_LOAD_FUND_CLEAR = "CARD_LOAD_FUND_CLEAR";

export const cardLoadFundStart = (payload) => {
  return {
    type: CARD_LOAD_FUND_START,
    payload,
  };
};

export const cardLoadFundSuccess = (payload) => ({
  type: CARD_LOAD_FUND_SUCCESS,
  payload,
});

export const cardLoadFundFail = (payload) => ({
  type: CARD_LOAD_FUND_FAIL,
  payload,
});

export const cardLoadFundClear = (payload) => ({
  type: CARD_LOAD_FUND_CLEAR,
  payload,
});
