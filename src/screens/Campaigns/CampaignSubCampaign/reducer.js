import {
  CAMPAIGN_SUB_CAMPAIGNS_EDIT_START,
  CAMPAIGN_SUB_CAMPAIGNS_EDIT_SUCCESS,
  CAMPAIGN_SUB_CAMPAIGNS_EDIT_FAIL,
  CAMPAIGN_SUB_CAMPAIGNS_EDIT_CLEAR,
  SUB_CAMPAIGN_ID,
} from "./actions";

const initialState = {
  isLoading: false,
  subCampaignsEdit: null,
  subCampaignId: null,
  error: null,
};

export const subCampaignsEditReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case CAMPAIGN_SUB_CAMPAIGNS_EDIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGN_SUB_CAMPAIGNS_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaignsEdit: payload,
      };
    case CAMPAIGN_SUB_CAMPAIGNS_EDIT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CAMPAIGN_SUB_CAMPAIGNS_EDIT_CLEAR:
      return initialState;
    case SUB_CAMPAIGN_ID:
      return {
        ...state,
        isLoading: false,
        subCampaignId: payload,
      };
    default:
      return state;
  }
};
