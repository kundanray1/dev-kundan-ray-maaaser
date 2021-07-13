import {
  SUB_CAMPAIGN_DETAILS_START,
  SUB_CAMPAIGN_DETAILS_SUCCESS,
  SUB_CAMPAIGN_DETAILS_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  subCampaignDetails: null,
  error: null,
};

export const subCampaignDetailsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case SUB_CAMPAIGN_DETAILS_START:
    return {
        ...state,
        isLoading: true,
      };
    case SUB_CAMPAIGN_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaignDetails: payload,
      };
    case SUB_CAMPAIGN_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
