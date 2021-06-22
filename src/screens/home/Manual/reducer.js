import {
  MANUAL_FAIL,
  MANUAL_START,
  MANUAL_SUCCESS,
  MANUAL_RECEIVERS_FAIL,
  MANUAL_RECEIVERS_START,
  MANUAL_RECEIVERS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  manual: null,
  manualReceivers: null,
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
    case MANUAL_RECEIVERS_START:
    return {
        ...state,
        isLoading: true,
      };
    case MANUAL_RECEIVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        manualReceivers: payload,
      };
    case MANUAL_RECEIVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
