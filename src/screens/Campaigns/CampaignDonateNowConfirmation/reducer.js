import {
  CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL,
  CAMPAIGN_DONATE_NOW_CONFIRMATION_START,
  CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS,
  CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  campaignDonateNowConfirmation:null,
  error: null,
};

export const campaignDonateNowConfirmationReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CAMPAIGN_DONATE_NOW_CONFIRMATION_START:
    return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaignDonateNowConfirmation: payload,
      };
    case CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
