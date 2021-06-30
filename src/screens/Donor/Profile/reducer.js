import {
  PROFILE_FAIL,
  PROFILE_START,
  PROFILE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  profile: null,
  error: null,
};

export const profileReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case PROFILE_START:
    return {
        ...state,
        isLoading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profile: payload,
      };
    case PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
