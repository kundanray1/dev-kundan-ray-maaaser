import {
  CARD_LOAD_FUND_CONFIRMATION_FAIL,
  CARD_LOAD_FUND_CONFIRMATION_START,
  CARD_LOAD_FUND_CONFIRMATION_SUCCESS,
  CARD_LOAD_FUND_CONFIRMATION_CLEAR,
} from "./actions";

const initialState = {
  isLoading: false,
  cardLoadFundConfirmation: null,
  error: null,
};

export const cardLoadFundConfirmationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CARD_LOAD_FUND_CONFIRMATION_START:
      return {
        ...state,
        isLoading: true,
      };
    case CARD_LOAD_FUND_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cardLoadFundConfirmation: payload,
      };
    case CARD_LOAD_FUND_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case CARD_LOAD_FUND_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
