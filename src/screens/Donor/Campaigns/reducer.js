import {
  CAMPAIGNS_START,
  CAMPAIGNS_SUCCESS,
  CAMPAIGNS_FAIL,
  CAMPAIGN_ID,
} from './actions';

const initialState = {
  isLoading: true,
  campaigns: null,
  campaignId:null,
  error: null,
};

export const campaignsReducer=(state = initialState, { type, payload }) => {
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
    default:
      return state;
  }
};
