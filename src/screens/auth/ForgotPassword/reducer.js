import {
  FORGOT_PASSWORD_FAIL,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  forgotPassword: null,
  emailPhone:null,
  error: null,
};

export const forgotPasswordReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case FORGOT_PASSWORD_START:
    return {
        ...state,
        isLoading: true,
        emailPhone:payload,
      };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        forgotPassword: payload,
      };
    case FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
      case FORGOT_PASSWORD_CLEAR:
      return initialState
   
    default:
      return state;
  }
};
