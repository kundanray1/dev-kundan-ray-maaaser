import {
  WITHDRAW_FUND_CONFIRMATION_FAIL,
  WITHDRAW_FUND_CONFIRMATION_START,
  WITHDRAW_FUND_CONFIRMATION_SUCCESS,
  WITHDRAW_FUND_CONFIRMATION_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  withdrawFundConfirmation:null,
  error: null,
};

export const withdrawFundConfirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case WITHDRAW_FUND_CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case WITHDRAW_FUND_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        withdrawFundConfirmation: payload,
      };
    case WITHDRAW_FUND_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case WITHDRAW_FUND_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
