import {
  WITHDRAWS_START,
  WITHDRAWS_SUCCESS,
  WITHDRAWS_FAIL,
  WITHDRAWS_SEARCH_START,
WITHDRAWS_SEARCH_SUCCESS,
WITHDRAWS_SEARCH_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  withdraws: null,
  withdrawsSearch:null,
  error: null,
};

export const withdrawsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case WITHDRAWS_START:
    return {
        ...state,
        isLoading: true,
      };
    case WITHDRAWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        withdraws: payload,
      };
    case WITHDRAWS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
      case WITHDRAWS_SEARCH_START:
    return {
        ...state,
        isLoading: true,
      };
    case WITHDRAWS_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        withdrawsSearch: payload,
      };
    case WITHDRAWS_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
