import {
  CARD_LOAD_FUND_FAIL,
  CARD_LOAD_FUND_START,
  CARD_LOAD_FUND_SUCCESS,
  CARD_LOAD_FUND_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  cardLoadFund:null,
  error: null,
};

export const cardLoadFundReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CARD_LOAD_FUND_START:
    return {
        ...state,
        isLoading: true,
      };
    case CARD_LOAD_FUND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cardLoadFund: payload,
      };
    case CARD_LOAD_FUND_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case CARD_LOAD_FUND_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
