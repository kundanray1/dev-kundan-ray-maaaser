import {
  RECEIVER_PROFILE_FAIL,
  RECEIVER_PROFILE_START,
  RECEIVER_PROFILE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  receiverProfile: null,
  error: null,
};

export const receiverProfileReducer=(state = initialState, { type, payload }) => {
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
        receiverProfile: payload,
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
