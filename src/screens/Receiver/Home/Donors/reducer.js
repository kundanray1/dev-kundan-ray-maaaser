import {
  DONORS_FAIL,
  DONORS_START,
  DONORS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  donors: null,
  error: null,
};

export const donorsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONORS_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donors: payload,
      };
    case DONORS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
