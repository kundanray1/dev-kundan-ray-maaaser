import {
  CAMPAIGN_DETAILS_START,
  CAMPAIGN_DETAILS_SUCCESS,
  CAMPAIGN_DETAILS_FAIL,
  CAMPAIGN_DETAILS_URL_START,
CAMPAIGN_DETAILS_URL_SUCCESS,
CAMPAIGN_DETAILS_URL_FAIL,
} from './actions';

const initialState = {
  isLoading: true,
  campaignDetails: null,
  campaignDetailsURL: null,
  campaignDetailsURLLoading: null,
  error: null,
};

export const campaignDetailsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CAMPAIGN_DETAILS_START:
    return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGN_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaignDetails: payload,
      };
    case CAMPAIGN_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

     case CAMPAIGN_DETAILS_URL_START:
    return {
        ...state,
        campaignDetailsURLLoading: true,
      };
    case CAMPAIGN_DETAILS_URL_SUCCESS:
      return {
        ...state,
        campaignDetailsURLLoading: false,
        campaignDetailsURL: payload,
      };
    case CAMPAIGN_DETAILS_URL_FAIL:
      return {
        ...state,
        campaignDetailsURLLoading: false,
        error: payload,
      };  
   
    default:
      return state;
  }
};
