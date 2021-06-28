import {
  RECEIVERS_FAIL,
  RECEIVERS_START,
  RECEIVERS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  receivers: null,
  error: null,
};

export const receiversReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case RECEIVERS_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        receivers: payload,
      };
    case RECEIVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
