import {
  DONATION_RECEIVED_FAIL,
  DONATION_RECEIVED_START,
  DONATION_RECEIVED_SUCCESS,
  DONATION_RECEIVED_SEARCH_START,
DONATION_RECEIVED_SEARCH_SUCCESS,
DONATION_RECEIVED_SEARCH_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  donationReceived: null,
  donationReceivedSearch: null,
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

     case DONATION_RECEIVED_SEARCH_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATION_RECEIVED_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donationReceivedSearch: payload,
      };
    case DONATION_RECEIVED_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };  
   
    default:
      return state;
  }
};
