import {
  CAMPAIGNS_START,
  CAMPAIGNS_SUCCESS,
  CAMPAIGNS_FAIL,
  CAMPAIGN_ID,
  CAMPAIGNS_EDIT_START,
  CAMPAIGNS_EDIT_SUCCESS,
  CAMPAIGNS_EDIT_FAIL,
  CAMPAIGN_EDIT_CLEAR,
} from "./actions";

const initialState = {
  isLoading: true,
  campaigns: null,
  campaignsEdit: null,
  campaignId: null,
  error: null,
};

export const campaignsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CAMPAIGNS_START:
      return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGNS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaigns: payload,
      };
    case CAMPAIGNS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CAMPAIGN_ID:
      return {
        ...state,
        isLoading: false,
        campaignId: payload,
      };
    case CAMPAIGNS_EDIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGNS_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaignsEdit: payload,
      };
    case CAMPAIGNS_EDIT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case CAMPAIGN_EDIT_CLEAR:
      return initialState;
    default:
      return state;
  }
};
