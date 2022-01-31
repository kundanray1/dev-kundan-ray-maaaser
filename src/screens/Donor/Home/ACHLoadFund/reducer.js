import {
  ACH_LOAD_FUND_FAIL,
  ACH_LOAD_FUND_START,
  ACH_LOAD_FUND_SUCCESS,
  ACH_LOAD_FUND_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  ACHLoadFund:null,
  error: null,
};

export const ACHLoadFundReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case ACH_LOAD_FUND_START:
    return {
        ...state,
        isLoading: true,
      };
    case ACH_LOAD_FUND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ACHLoadFund: payload,
      };
    case ACH_LOAD_FUND_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case ACH_LOAD_FUND_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
