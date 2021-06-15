import {
  MANUAL_FAIL,
  MANUAL_START,
  MANUAL_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  manual: '',
  error: null,
};

export const manualReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case MANUAL_START:
    return {
        ...state,
        isLoading: true,
      };
    case MANUAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        manual: payload,
      };
    case MANUAL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
