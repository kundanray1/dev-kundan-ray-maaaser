import {
  ADD_MEMBER_FAIL,
  ADD_MEMBER_START,
  ADD_MEMBER_SUCCESS,
  ADD_MEMBER_CLEAR,
  UPDATE_MEMBER_START,
UPDATE_MEMBER_SUCCESS,
UPDATE_MEMBER_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  addMember: null,
  updateMember: null,
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

      case ADD_MEMBER_CLEAR:
      return initialState;

      case UPDATE_MEMBER_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPDATE_MEMBER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        updateMember: payload,
      };
    case UPDATE_MEMBER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
