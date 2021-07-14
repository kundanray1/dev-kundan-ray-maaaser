import {
  SUB_CAMPAIGNS_START,
  SUB_CAMPAIGNS_SUCCESS,
  SUB_CAMPAIGNS_FAIL,
  SUB_CAMPAIGNS_EDIT_START,
  SUB_CAMPAIGNS_EDIT_SUCCESS,
  SUB_CAMPAIGNS_EDIT_FAIL,
} from "./actions";

const initialState = {
  isLoading: true,
  subCampaigns: null,
  subCampaignsEdit: null,
  error: null,
};

export const subCampaignsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SUB_CAMPAIGNS_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUB_CAMPAIGNS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaigns: payload,
      };
    case SUB_CAMPAIGNS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case SUB_CAMPAIGNS_EDIT_START:
      return {
        ...state,
        isLoading: true,
      };
    case SUB_CAMPAIGNS_EDIT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        subCampaignsEdit: payload,
      };
    case SUB_CAMPAIGNS_EDIT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
