import {
  ALL_CAMPAIGNS_START,
  ALL_CAMPAIGNS_SUCCESS,
  ALL_CAMPAIGNS_FAIL,
  ALL_CAMPAIGNS_SEARCH_START,
  ALL_CAMPAIGNS_SEARCH_SUCCESS,
  ALL_CAMPAIGNS_SEARCH_FAIL,
} from "./actions";

const initialState = {
  isLoading: true,
  allCampaigns: null,
  allCampaignsSearch:null,
  error: null,
};

export const allCampaignsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_CAMPAIGNS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ALL_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCampaigns: payload,
      };
    case ALL_CAMPAIGNS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case ALL_CAMPAIGNS_SEARCH_START:
    return {
        ...state,
        isLoading: true,
      };
    case ALL_CAMPAIGNS_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allCampaignsSearch: payload,
      };
    case ALL_CAMPAIGNS_SEARCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
