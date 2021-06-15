import {
  ACH_FAIL,
  ACH_START,
  ACH_SUCCESS,
  LOAD_AMOUNT_FAIL,
  LOAD_AMOUNT_START,
  LOAD_AMOUNT_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  ACH: '',
  loadAmount:"",
  error: null,
};

export const ACHReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case ACH_START:
    return {
        ...state,
        isLoading: true,
      };
    case ACH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        ACH: payload,
      };
    case ACH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    case LOAD_AMOUNT_START:
    return {
        ...state,
        isLoading: true,
      };
    case LOAD_AMOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        loadAmount: payload,
      };
    case LOAD_AMOUNT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
