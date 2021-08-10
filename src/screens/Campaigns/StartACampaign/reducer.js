import {
  START_A_CAMPAIGN_FAIL,
  START_A_CAMPAIGN_START,
  START_A_CAMPAIGN_SUCCESS,
  START_A_CAMPAIGN_CLEAR,
  BENEFICIARY_LIST_START,
  BENEFICIARY_LIST_SUCCESS,
  BENEFICIARY_LIST_FAIL,
} from "./actions";

const initialState = {
  isLoading: true,
  startACampaign: null,
  beneficiaryList: null,
  error: null,
};

export const startACampaignReducer = (
  state = initialState,
  { type, payload }
) => {
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

    case BENEFICIARY_LIST_START:
      return {
        ...state,
        isLoading: true,
      };
    case BENEFICIARY_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        beneficiaryList: payload,
      };
    case BENEFICIARY_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};
