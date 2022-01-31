import {
  LETS_GET_STARTED_RECEIVER_START,
  LETS_GET_STARTED_RECEIVER_SUCCESS,
  LETS_GET_STARTED_RECEIVER_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};

export const letsGetStartedReceiverReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LETS_GET_STARTED_RECEIVER_START:
    return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };
    case LETS_GET_STARTED_RECEIVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload,
      };
    case LETS_GET_STARTED_RECEIVER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
