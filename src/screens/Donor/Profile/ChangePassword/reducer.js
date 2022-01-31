import {
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  changePassword: null,
  error: null,
};

export const changePasswordReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PASSWORD_START:
    return {
        ...state,
        isLoading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        changePassword: payload,
      };
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
      case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
       case CHANGE_PASSWORD_CLEAR:
      return initialState
   
    default:
      return state;
  }
};
