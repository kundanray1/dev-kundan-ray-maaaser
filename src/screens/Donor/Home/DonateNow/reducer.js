import {
  DONATE_NOW_FAIL,
  DONATE_NOW_START,
  DONATE_NOW_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  donateNow: '',
  error: null,
};

export const donateNowReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONATE_NOW_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATE_NOW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donateNow: payload,
      };
    case DONATE_NOW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
