import {
  COMMUNITY_FAIL,
  COMMUNITY_START,
  COMMUNITY_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  community: null,
  error: null,
};

export const communityReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case COMMUNITY_START:
    return {
        ...state,
        isLoading: true,
      };
    case COMMUNITY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        community: payload,
      };
    case COMMUNITY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
