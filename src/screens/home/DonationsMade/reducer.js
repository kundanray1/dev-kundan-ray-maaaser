import {
  DONATIONS_MADE_FAIL,
  DONATIONS_MADE_START,
  DONATIONS_MADE_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  donationsMade: '',
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
   
    default:
      return state;
  }
};
