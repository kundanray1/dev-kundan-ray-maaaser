import {
  VERIFICATION_FAIL,
  VERIFICATION_START,
  VERIFICATION_SUCCESS,
  VERIFICATION_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  verification: null,
  code:null,
  error: null,
};

export const verificationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case VERIFICATION_START:

    return {
        ...state,
        code:payload,
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
   case VERIFICATION_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
