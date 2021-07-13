import {
  CAMPAIGN_DONATE_NOW_FAIL,
  CAMPAIGN_DONATE_NOW_START,
  CAMPAIGN_DONATE_NOW_SUCCESS,
 } from './actions';

const initialState = {
  isLoading: false,
  campaignDonateNow: null,
  error: null,
};

export const campaignDonateNowReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CAMPAIGN_DONATE_NOW_START:
    return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGN_DONATE_NOW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaignDonateNow: payload,
      };
    case CAMPAIGN_DONATE_NOW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
