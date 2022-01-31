import {
  WITHDRAW_FUND_START,
  WITHDRAW_FUND_SUCCESS,
  WITHDRAW_FUND_FAIL,
  WITHDRAW_FUND_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  withdrawFund:null,
  error: null,
};

export const withdrawFundReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case WITHDRAW_FUND_START:
    return {
        ...state,
        isLoading: true,
      };
    case WITHDRAW_FUND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        withdrawFund: payload,
      };
    case WITHDRAW_FUND_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case WITHDRAW_FUND_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
