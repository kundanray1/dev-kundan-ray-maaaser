import {
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_CLEAR,
} from './actions';

const initialState = {
  isLoading: false,
  editProfile: null,
  editProfileClear: null,
  error: null,
};

export const editProfileReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_PROFILE_START:
    return {
        ...state,
        isLoading: true,
      };
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        editProfile: payload,
      };
    case EDIT_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case EDIT_PROFILE_CLEAR:
      return initialState;

    default:
      return state;
  }
};
