import {
  ACH_LOAD_FUND_CONFIRMATION_FAIL,
  ACH_LOAD_FUND_CONFIRMATION_START,
  ACH_LOAD_FUND_CONFIRMATION_SUCCESS,
  ACH_LOAD_FUND_CONFIRMATION_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  ACHLoadFundConfirmation:null,
  error: null,
};

export const ACHLoadFundConfirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case ACH_LOAD_FUND_CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case ACH_LOAD_FUND_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ACHLoadFundConfirmation: payload,
      };
    case ACH_LOAD_FUND_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case ACH_LOAD_FUND_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
