import {
  LINKED_ACCOUNTS_START,
  LINKED_ACCOUNTS_SUCCESS,
  LINKED_ACCOUNTS_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  linkedAccounts: null,
  error: null,
};

export const linkedAccountsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LINKED_ACCOUNTS_START:
    return {
        ...state,
        isLoading: true,
      };
    case LINKED_ACCOUNTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linkedAccounts: payload,
      };
    case LINKED_ACCOUNTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
