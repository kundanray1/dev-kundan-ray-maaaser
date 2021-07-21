import {
  LOAD_FUND_DETAILS_START,
  LOAD_FUND_DETAILS_SUCCESS,
  LOAD_FUND_DETAILS_FAIL,
  LOAD_FUND_DETAILS_CLEAR,
} from './actions';

const initialState = {
  isLoading: true,
  loadFundDetails: null,
  error: null,
};

export const loadFundDetailsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_FUND_DETAILS_START:
    return {
        ...state,
        isLoading: true,
      };
    case LOAD_FUND_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadFundDetails: payload,
      };
    case LOAD_FUND_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
       case LOAD_FUND_DETAILS_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
