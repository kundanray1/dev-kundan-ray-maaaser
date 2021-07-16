import {
  START_A_CAMPAIGN_THIRD_UPDATE_FAIL,
  START_A_CAMPAIGN_THIRD_UPDATE_START,
  START_A_CAMPAIGN_THIRD_UPDATE_SUCCESS,
  START_A_CAMPAIGN_THIRD_UPDATE_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  startACampaignThirdUpdate:null,
  error: null,
};

export const startACampaignThirdUpdateReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case START_A_CAMPAIGN_THIRD_UPDATE_START:
    return {
        ...state,
        isLoading: true,
      };
    case START_A_CAMPAIGN_THIRD_UPDATE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        startACampaignThirdUpdate: payload,
      };
    case START_A_CAMPAIGN_THIRD_UPDATE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case START_A_CAMPAIGN_THIRD_UPDATE_CLEAR:
      return initialState;

    default:
      return state;
  }
};
