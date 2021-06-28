import {
  LOAD_FUND_FAIL,
  LOAD_FUND_START,
  LOAD_FUND_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  loadFund: '',
  error: null,
};

export const loadFundReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_FUND_START:
    return {
        ...state,
        isLoading: true,
      };
    case LOAD_FUND_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadFund: payload,
      };
    case LOAD_FUND_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
