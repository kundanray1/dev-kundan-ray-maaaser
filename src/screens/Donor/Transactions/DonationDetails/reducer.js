import {
  DONATION_DETAILS_START,
  DONATION_DETAILS_SUCCESS,
  DONATION_DETAILS_FAIL,
  DONATION_DETAILS_CLEAR,

} from './actions';

const initialState = {
  isLoading: true,
  donationDetails: null,
  error: null,
};

export const donationDetailsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONATION_DETAILS_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATION_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donationDetails: payload,
      };
    case DONATION_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
       case DONATION_DETAILS_CLEAR:
      return initialState;
   
    default:
      return state;
  }
};
