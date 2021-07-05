import {
LINK_SCHEDULE_DONATION_FAIL,
LINK_SCHEDULE_DONATION_START,
LINK_SCHEDULE_DONATION_SUCCESS,
LINK_SCHEDULE_DONATION_CLEAR,

UPDATE_LINK_SCHEDULE_DONATION_START,
UPDATE_LINK_SCHEDULE_DONATION_SUCCESS,
UPDATE_LINK_SCHEDULE_DONATION_FAIL,

DONATION_RECEIVERS_START,
DONATION_RECEIVERS_SUCCESS,
DONATION_RECEIVERS_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  linkScheduleDonation: null,
  donationReceivers:null,
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
    case LINK_SCHEDULE_DONATION_CLEAR:
      return initialState;


    case UPDATE_LINK_SCHEDULE_DONATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LINK_SCHEDULE_DONATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        linkScheduleDonation: payload,
      };
    case UPDATE_LINK_SCHEDULE_DONATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    

    case DONATION_RECEIVERS_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATION_RECEIVERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donationReceivers: payload,
      };
    case DONATION_RECEIVERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
