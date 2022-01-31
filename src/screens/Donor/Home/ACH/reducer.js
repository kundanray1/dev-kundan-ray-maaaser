import {
  ACH_FAIL,
  ACH_START,
  ACH_SUCCESS,
  ACH_UPDATE_STATUS_START,
ACH_UPDATE_STATUS_SUCCESS,
ACH_UPDATE_STATUS_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  ACH: null,
  isUpdateLoading: false,
  ACHUpdateStatus: null,
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

    case ACH_UPDATE_STATUS_START:
    return {
        ...state,
        isUpdateLoading: true,
      };
    case ACH_UPDATE_STATUS_SUCCESS:
      return {
        ...state,
        isUpdateLoading: false,
        ACHUpdateStatus: payload,
      };
    case ACH_UPDATE_STATUS_FAIL:
      return {
        ...state,
        isUpdateLoading: false,
        error: payload,
      };  
   
    default:
      return state;
  }
};
