import {
  SUB_CAMPAIGN_DONORS_START,
  SUB_CAMPAIGN_DONORS_SUCCESS,
  SUB_CAMPAIGN_DONORS_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  subCampaignDonors: null,
  error: null,
};

export const subCampaignDonorsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case SUB_CAMPAIGN_DONORS_START:
    return {
        ...state,
        isLoading: true,
      };
    case SUB_CAMPAIGN_DONORS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaignDonors: payload,
      };
    case SUB_CAMPAIGN_DONORS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
