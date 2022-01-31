import {
  SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START,
  SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS,
  SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL,
  SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR,
} from "./actions";

const initialState = {
  isLoading: false,
  subCampaignDonateNowConfirmation: null,
  error: null,
};

export const subCampaignDonateNowConfirmationReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaignDonateNowConfirmation: payload,
      };
    case SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR:
      return initialState;

    default:
      return state;
  }
};
