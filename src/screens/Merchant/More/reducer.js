import {
  MERCHANTMORE_FAIL,
  MERCHANTMORE_START,
  MERCHANTMORE_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  more: null,
  logout: null,
  error: null,
};

export const moreReducerMerchant=(state = initialState, { type, payload }) => {
  switch (type) {
    case MERCHANTMORE_START:
    return {
        ...state,
        isLoading: true,
      };
    case MERCHANTMORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        more: payload,
      };
    case MERCHANTMORE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case LOGOUT_START:
    return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        logout: payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
      case LOGOUT_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
