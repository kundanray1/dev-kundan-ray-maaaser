import {
  SUB_CAMPAIGNS_FAIL,
  SUB_CAMPAIGNS_START,
  SUB_CAMPAIGNS_SUCCESS,
} from './actions';

const initialState = {
  isLoading: false,
  subCampaigns: null,
  error: null,
};

export const subCampaignsReducer=(state = initialState, { type, payload }) => {
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
   
    default:
      return state;
  }
};
