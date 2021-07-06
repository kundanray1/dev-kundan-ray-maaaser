import {
  START_A_CAMPAIGN_FAIL,
  START_A_CAMPAIGN_START,
  START_A_CAMPAIGN_SUCCESS,
  START_A_CAMPAIGN_CLEAR
} from './actions';

const initialState = {
  isLoading: false,
  startACampaign:null,
  error: null,
};

export const startACampaignReducer=(state = initialState, { type, payload }) => {
  switch (type) {
    case START_A_CAMPAIGN_START:
    return {
        ...state,
        isLoading: true,
      };
    case START_A_CAMPAIGN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        startACampaign: payload,
      };
    case START_A_CAMPAIGN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

case START_A_CAMPAIGN_CLEAR:
      return initialState;

    default:
      return state;
  }
};
