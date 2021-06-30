import {
  RECEIVER_EDIT_PROFILE_FAIL,
  RECEIVER_EDIT_PROFILE_START,
  RECEIVER_EDIT_PROFILE_SUCCESS,
  RECEIVER_EDIT_PROFILE_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  receiverEditProfile: null,
  receiverEditProfileClear: null,
  error: null,
};

export const receiverEditProfileReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVER_EDIT_PROFILE_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVER_EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        receiverEditProfile: payload,
      };
    case RECEIVER_EDIT_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
      case RECEIVER_EDIT_PROFILE_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
