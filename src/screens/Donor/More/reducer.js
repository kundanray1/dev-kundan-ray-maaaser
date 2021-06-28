import {
  MORE_FAIL,
  MORE_START,
  MORE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  more: '',
  error: null,
};

export const moreReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case MORE_START:
    return {
        ...state,
        isLoading: true,
      };
    case MORE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        more: payload,
      };
    case MORE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
