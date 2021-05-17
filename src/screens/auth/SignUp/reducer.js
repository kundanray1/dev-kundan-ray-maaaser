import {
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

export const signUpReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_START:
    return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
