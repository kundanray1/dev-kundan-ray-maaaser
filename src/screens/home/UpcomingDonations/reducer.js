import {
  UPCOMING_DONATIONS_FAIL,
  UPCOMING_DONATIONS_START,
  UPCOMING_DONATIONS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  upcomingDonations: '',
  error: null,
};

export const upcomingDonationsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case UPCOMING_DONATIONS_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPCOMING_DONATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        upcomingDonations: payload,
      };
    case UPCOMING_DONATIONS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
