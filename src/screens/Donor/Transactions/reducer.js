import {
  TRANSACTIONS_FAIL,
  TRANSACTIONS_START,
  TRANSACTIONS_SUCCESS,
  SEARCH_START,
SEARCH_SUCCESS,
SEARCH_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  transactions: null,
  search:null,
  error: null,
};

export const transactionsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case TRANSACTIONS_START:
    return {
        ...state,
        isLoading: true,
      };
    case TRANSACTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactions: payload,
      };
    case TRANSACTIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
      case SEARCH_START:
    return {
        ...state,
        isLoading: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        search: payload,
      };
    case SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
