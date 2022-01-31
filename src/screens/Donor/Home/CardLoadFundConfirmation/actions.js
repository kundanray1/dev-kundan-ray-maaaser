export const CARD_LOAD_FUND_CONFIRMATION_START = "CARD_LOAD_FUND_CONFIRMATION_START";
export const CARD_LOAD_FUND_CONFIRMATION_SUCCESS = "CARD_LOAD_FUND_CONFIRMATION_SUCCESS";
export const CARD_LOAD_FUND_CONFIRMATION_FAIL = "CARD_LOAD_FUND_CONFIRMATION_FAIL";
export const CARD_LOAD_FUND_CONFIRMATION_CLEAR = "CARD_LOAD_FUND_CONFIRMATION_CLEAR";

export const cardLoadFundConfirmationStart = (payload) => {
  return {
    type: CARD_LOAD_FUND_CONFIRMATION_START,
    payload,
  };
};

export const cardLoadFundConfirmationSuccess = (payload) => ({
  type: CARD_LOAD_FUND_CONFIRMATION_SUCCESS,
  payload,
});

export const cardLoadFundConfirmationFail = (payload) => ({
  type: CARD_LOAD_FUND_CONFIRMATION_FAIL,
  payload,
});

export const cardLoadFundConfirmationClear = (payload) => ({
  type: CARD_LOAD_FUND_CONFIRMATION_CLEAR,
  payload,
});
