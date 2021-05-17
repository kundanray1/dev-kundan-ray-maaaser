import {
  AUTH_FAIL,
  AUTH_START,
  AUTH_SUCCESS
} from './../actions/AuthActions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

export const authReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_START:
    return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };

    case LOGOUT_START:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload,
      };
    case AUTH_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        error: payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...initialState,
      };
    case LOGOUT_FAIL: {
      return {
        ...state
,
        isLoading: false,
        error: payload,
      };
    }
    default:
      return state;
  }
};
