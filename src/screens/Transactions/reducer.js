import {
  TRANSACTIONS_FAIL,
  TRANSACTIONS_START,
  TRANSACTIONS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  transactions: null,
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
   
    default:
      return state;
  }
};
