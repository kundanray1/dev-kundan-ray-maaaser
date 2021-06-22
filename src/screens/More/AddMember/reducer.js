import {
  ADD_MEMBER_FAIL,
  ADD_MEMBER_START,
  ADD_MEMBER_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  addMember: null,
  error: null,
};

export const addMemberReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MEMBER_START:
    return {
        ...state,
        isLoading: true,
      };
    case ADD_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addMember: payload,
      };
    case ADD_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
