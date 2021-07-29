import {
  RECEIVER_PROFILE_START,
  RECEIVER_PROFILE_SUCCESS,
  RECEIVER_PROFILE_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  donateViaScan: null,
  error: null,
};

export const donateViaScanReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVER_PROFILE_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVER_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donateViaScan: payload,
      };
    case RECEIVER_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
