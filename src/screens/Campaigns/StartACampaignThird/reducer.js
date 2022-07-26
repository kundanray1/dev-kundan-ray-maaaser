import {
  START_A_CAMPAIGN_THIRD_FAIL,
  START_A_CAMPAIGN_THIRD_START,
  START_A_CAMPAIGN_THIRD_SUCCESS,
  START_A_CAMPAIGN_THIRD_CLEAR,
  START_A_CAMPAIGN_THIRD_DESCRIPTION_START,
  START_A_CAMPAIGN_THIRD_DESCRIPTION_CLEAR,
} from "./actions";

const initialState = {
  isLoading: false,
  startACampaignThird: null,
  startACampaignThirdDescription: null,
  error: null,
};

export const startACampaignThirdReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case START_A_CAMPAIGN_THIRD_START:
      return {
        ...state,
        isLoading: true,
      };
    case START_A_CAMPAIGN_THIRD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        startACampaignThird: payload,
      };
    case START_A_CAMPAIGN_THIRD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case START_A_CAMPAIGN_THIRD_DESCRIPTION_START:
      return {
        ...state,
        isLoading: false,
        startACampaignThirdDescription: payload,
      };

    case START_A_CAMPAIGN_THIRD_DESCRIPTION_CLEAR:
      return {
        ...state,
        isLoading: false,
        startACampaignThirdDescription: null,
      };

    case START_A_CAMPAIGN_THIRD_CLEAR:
      return initialState;

    default:
      return state;
  }
};
