import {
  CAMPAIGN_DONORS_FAIL,
  CAMPAIGN_DONORS_START,
  CAMPAIGN_DONORS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  campaignDonors: null,
  error: null,
};

export const campaignDonorsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CAMPAIGN_DONORS_START:
    return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGN_DONORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaignDonors: payload,
      };
    case CAMPAIGN_DONORS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
