import {
  LINK_SCHEDULE_DONATION_FAIL,
  LINK_SCHEDULE_DONATION_START,
  LINK_SCHEDULE_DONATION_SUCCESS,
  RECEIVERS_START,
RECEIVERS_SUCCESS,
RECEIVERS_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  linkScheduleDonation: '',
  receivers:"",
  error: null,
};

export const linkScheduleDonationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case LINK_SCHEDULE_DONATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case LINK_SCHEDULE_DONATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linkScheduleDonation: payload,
      };
    case LINK_SCHEDULE_DONATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case RECEIVERS_START:
    return {
        ...state,
        isLoading: true,
      };
    case RECEIVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        receivers: payload,
      };
    case RECEIVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
