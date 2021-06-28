import {
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_START,
  EDIT_PROFILE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  editProfile: '',
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
   
    default:
      return state;
  }
};
