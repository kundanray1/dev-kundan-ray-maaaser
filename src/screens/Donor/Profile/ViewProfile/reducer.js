import {
  VIEW_PROFILE_FAIL,
  VIEW_PROFILE_START,
  VIEW_PROFILE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  viewProfile: null,
  error: null,
};

export const viewProfileReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case VIEW_PROFILE_START:
    return {
        ...state,
        isLoading: true,
      };
    case VIEW_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        viewProfile: payload,
      };
    case VIEW_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
