import {
  CAMPAIGN_COMMENTS_FAIL,
  CAMPAIGN_COMMENTS_START,
  CAMPAIGN_COMMENTS_SUCCESS,
  POST_CAMPAIGN_COMMENTS_FAIL,
  POST_CAMPAIGN_COMMENTS_START,
  POST_CAMPAIGN_COMMENTS_SUCCESS,
  POST_CAMPAIGN_COMMENTS_CLEAR,
  UPDATE_CAMPAIGN_COMMENTS_FAIL,
  UPDATE_CAMPAIGN_COMMENTS_START,
  UPDATE_CAMPAIGN_COMMENTS_SUCCESS,
  UPDATE_CAMPAIGN_COMMENTS_CLEAR,
  DELETE_CAMPAIGN_COMMENTS_FAIL,
  DELETE_CAMPAIGN_COMMENTS_START,
  DELETE_CAMPAIGN_COMMENTS_SUCCESS,
  DELETE_CAMPAIGN_COMMENTS_CLEAR,
} from "./actions";

const initialState = {
  isLoading: true,
  isPostLoading: false,
  isUpdateLoading: false,
  campaignComments: null,
  postCampaignComments: null,
  postCampaignCommentsClear: null,
  updateCampaignComments: null,
  updateCampaignCommentsClear: null,
  deleteCampaignComments: null,
  deleteCampaignCommentsClear: null,
  error: null,
};

export const campaignCommentsReducer = (
  state = initialState,
  { type, payload }
) => {
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
    case POST_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isPostLoading: true,
      };
    case POST_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isPostLoading: false,
        postCampaignComments: payload,
      };
    case POST_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isPostLoading: false,
        error: payload,
      };

    case POST_CAMPAIGN_COMMENTS_CLEAR:
      return initialState;

    case UPDATE_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isUpdateLoading: true,
      };
    case UPDATE_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isUpdateLoading: false,
        updateCampaignComments: payload,
      };
    case UPDATE_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isUpdateLoading: false,
        error: payload,
      };
    case UPDATE_CAMPAIGN_COMMENTS_CLEAR:
      return initialState;

      case DELETE_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteCampaignComments: payload,
      };
    case DELETE_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case DELETE_CAMPAIGN_COMMENTS_CLEAR:
      return initialState;
 

    default:
      return state;
  }
};
