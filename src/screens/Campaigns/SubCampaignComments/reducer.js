import {
  SUB_CAMPAIGN_COMMENTS_FAIL,
  SUB_CAMPAIGN_COMMENTS_START,
  SUB_CAMPAIGN_COMMENTS_SUCCESS,
  POST_SUB_CAMPAIGN_COMMENTS_FAIL,
  POST_SUB_CAMPAIGN_COMMENTS_START,
  POST_SUB_CAMPAIGN_COMMENTS_SUCCESS,
  POST_SUB_CAMPAIGN_COMMENTS_CLEAR,
  UPDATE_SUB_CAMPAIGN_COMMENTS_FAIL,
  UPDATE_SUB_CAMPAIGN_COMMENTS_START,
  UPDATE_SUB_CAMPAIGN_COMMENTS_SUCCESS,
  UPDATE_SUB_CAMPAIGN_COMMENTS_CLEAR,
  DELETE_SUB_CAMPAIGN_COMMENTS_FAIL,
  DELETE_SUB_CAMPAIGN_COMMENTS_START,
  DELETE_SUB_CAMPAIGN_COMMENTS_SUCCESS,
  DELETE_SUB_CAMPAIGN_COMMENTS_CLEAR,
} from "./actions";

const initialState = {
  isLoading: true,
  isPostLoading: false,
  isUpdateLoading: false,
  subCampaignComments: null,
  postSubCampaignComments: null,
  postSubCampaignCommentsClear: null,
  updateSubCampaignComments: null,
  updateSubCampaignCommentsClear: null,
  deleteSubCampaignComments: null,
  deleteSubCampaignCommentsClear: null,
  error: null,
};

export const subCampaignCommentsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SUB_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUB_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaignComments: payload,
      };
    case SUB_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case POST_SUB_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isPostLoading: true,
      };
    case POST_SUB_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isPostLoading: false,
        postSubCampaignComments: payload,
      };
    case POST_SUB_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isPostLoading: false,
        error: payload,
      };

    case POST_SUB_CAMPAIGN_COMMENTS_CLEAR:
      return initialState;

    case UPDATE_SUB_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isUpdateLoading: true,
      };
    case UPDATE_SUB_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isUpdateLoading: false,
        updateSubCampaignComments: payload,
      };
    case UPDATE_SUB_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isUpdateLoading: false,
        error: payload,
      };
    case UPDATE_SUB_CAMPAIGN_COMMENTS_CLEAR:
      return initialState;

      case DELETE_SUB_CAMPAIGN_COMMENTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_SUB_CAMPAIGN_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteSubCampaignComments: payload,
      };
    case DELETE_SUB_CAMPAIGN_COMMENTS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case DELETE_SUB_CAMPAIGN_COMMENTS_CLEAR:
      return initialState;
 

    default:
      return state;
  }
};
