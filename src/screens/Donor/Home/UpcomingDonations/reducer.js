import {
  UPCOMING_DONATIONS_FAIL,
  UPCOMING_DONATIONS_START,
  UPCOMING_DONATIONS_SUCCESS,
  UPCOMING_DONATIONS_SEARCH_START,
  UPCOMING_DONATIONS_SEARCH_SUCCESS,
  UPCOMING_DONATIONS_SEARCH_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  upcomingDonations: null,
  upcomingDonationsSearch: null,
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

       case UPCOMING_DONATIONS_SEARCH_START:
    return {
        ...state,
        isLoading: true,
      };
    case UPCOMING_DONATIONS_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        upcomingDonationsSearch: payload,
      };
    case UPCOMING_DONATIONS_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
