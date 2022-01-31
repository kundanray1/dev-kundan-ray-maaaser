import {
  START_A_SUB_CAMPAIGN_FAIL,
  START_A_SUB_CAMPAIGN_START,
  START_A_SUB_CAMPAIGN_SUCCESS,
  START_A_SUB_CAMPAIGN_CLEAR,
  START_A_SUB_CAMPAIGN_EDIT_START,
  START_A_SUB_CAMPAIGN_EDIT_SUCCESS,
  START_A_SUB_CAMPAIGN_EDIT_FAIL,
  START_A_SUB_CAMPAIGN_EDIT_CLEAR,
} from "./actions";

const initialState = {
  isLoading: false,
  startASubCampaign: null,
  error: null,
};

export const startASubCampaignReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case START_A_SUB_CAMPAIGN_START:
      return {
        ...state,
        isLoading: true,
      };
    case START_A_SUB_CAMPAIGN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        startASubCampaign: payload,
      };
    case START_A_SUB_CAMPAIGN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case START_A_SUB_CAMPAIGN_CLEAR:
      return initialState;

    case START_A_SUB_CAMPAIGN_EDIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case START_A_SUB_CAMPAIGN_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        startASubCampaign: payload,
      };
    case START_A_SUB_CAMPAIGN_EDIT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    case START_A_SUB_CAMPAIGN_EDIT_CLEAR:
      return initialState;

    default:
      return state;
  }
};
