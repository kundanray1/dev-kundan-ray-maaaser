import {
  SCHEDULE_DONATION_FAIL,
  SCHEDULE_DONATION_START,
  SCHEDULE_DONATION_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  scheduleDonation: '',
  error: null,
};

export const scheduleDonationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case SCHEDULE_DONATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case SCHEDULE_DONATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        scheduleDonation: payload,
      };
    case SCHEDULE_DONATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
