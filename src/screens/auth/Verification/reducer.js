import {
  VERIFICATION_FAIL,
  VERIFICATION_START,
  VERIFICATION_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  verification: '',
  error: null,
};

export const verificationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case VERIFICATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        verification: payload,
      };
    case VERIFICATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
