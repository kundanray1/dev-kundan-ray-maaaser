import {
  WELCOME_FAIL,
  WELCOME_START,
  WELCOME_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  welcome: '',
  error: null,
};

export const welcomeReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case WELCOME_START:
    return {
        ...state,
        isLoading: true,
      };
    case WELCOME_SUCCESS:
      return {
        ...state,
        isLoading: false,
        welcome: payload,
      };
    case WELCOME_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
