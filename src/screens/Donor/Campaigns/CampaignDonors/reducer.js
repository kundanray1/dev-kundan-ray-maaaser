import {
  DONATION_RECEIVED_FAIL,
  DONATION_RECEIVED_START,
  DONATION_RECEIVED_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  donationReceived: null,
  error: null,
};

export const donationReceivedReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONATION_RECEIVED_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATION_RECEIVED_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donationReceived: payload,
      };
    case DONATION_RECEIVED_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
