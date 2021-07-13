import {
  CAMPAIGN_COMMENTS_FAIL,
  CAMPAIGN_COMMENTS_START,
  CAMPAIGN_COMMENTS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: true,
  campaignComments: null,
  error: null,
};

export const campaignCommentsReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case CAMPAIGN_COMMENTS_START:
    return {
        ...state,
        isLoading: true,
      };
    case CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        campaignComments: payload,
      };
    case CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
   
    default:
      return state;
  }
};
