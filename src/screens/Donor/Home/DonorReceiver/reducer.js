import {
  DONOR_RECEIVER_FAIL,
  DONOR_RECEIVER_START,
  DONOR_RECEIVER_SUCCESS,
  BALANCE_FAIL,
  BALANCE_START,
  BALANCE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  donorReceiver: null,
  balance:null,
  error: null,
};
export const donorReceiverReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONOR_RECEIVER_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONOR_RECEIVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donorReceiver: payload,
      };
    case DONOR_RECEIVER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
       case BALANCE_START:
    return {
        ...state,
        isLoading: true,
      };
    case BALANCE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        balance: payload,
      };
    case BALANCE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
