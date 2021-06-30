import {
  RECEIVER_VIEW_PROFILE_FAIL,
  RECEIVER_VIEW_PROFILE_START,
  RECEIVER_VIEW_PROFILE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  receiverViewProfile: null,
  error: null,
};

export const receiverViewProfileReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVER_VIEW_PROFILE_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVER_VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        receiverViewProfile: payload,
      };
    case RECEIVER_VIEW_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
