import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './actions';
import API from './../../../api/API'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: null,
};



export const loginReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_START:
    return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
