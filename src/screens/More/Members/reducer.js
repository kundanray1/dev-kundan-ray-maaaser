import {
  MEMBERS_FAIL,
  MEMBERS_START,
  MEMBERS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  members: '',
  error: null,
};

export const membersReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case MEMBERS_START:
    return {
        ...state,
        isLoading: true,
      };
    case MEMBERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        members: payload,
      };
    case MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
