import {
  DONATIONS_MADE_FAIL,
  DONATIONS_MADE_START,
  DONATIONS_MADE_SUCCESS,
  DONATIONS_MADE_SEARCH_START,
  DONATIONS_MADE_SEARCH_SUCCESS,
  DONATIONS_MADE_SEARCH_FAIL,
} from './actions';

const initialState = {
  isLoading: false,
  donationsMade: null,
  donationsMadeSearch: null,
  error: null,
};

export const donationsMadeReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case DONATIONS_MADE_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATIONS_MADE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donationsMade: payload,
      };
    case DONATIONS_MADE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case DONATIONS_MADE_SEARCH_START:
    return {
        ...state,
        isLoading: true,
      };
    case DONATIONS_MADE_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        donationsMadeSearch: payload,
      };
    case DONATIONS_MADE_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
