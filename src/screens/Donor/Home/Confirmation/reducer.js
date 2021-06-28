import {
  CONFIRMATION_FAIL,
  CONFIRMATION_START,
  CONFIRMATION_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  confirmation: '',
  error: null,
};

export const confirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        confirmation: payload,
      };
    case CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
