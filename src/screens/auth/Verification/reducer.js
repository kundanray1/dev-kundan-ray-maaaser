import {
  CREATE_NEW_PASSWORD_FAIL,
  CREATE_NEW_PASSWORD_START,
  CREATE_NEW_PASSWORD_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  createNewPassword: '',
  error: null,
};

export const createNewPasswordReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_NEW_PASSWORD_START:
    return {
        ...state,
        isLoading: true,
      };
    case CREATE_NEW_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createNewPassword: payload,
      };
    case CREATE_NEW_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
