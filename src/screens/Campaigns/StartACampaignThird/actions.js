export const START_A_CAMPAIGN_THIRD_START = "START_A_CAMPAIGN_THIRD_START";
export const START_A_CAMPAIGN_THIRD_SUCCESS = "START_A_CAMPAIGN_THIRD_SUCCESS";
export const START_A_CAMPAIGN_THIRD_FAIL = "START_A_CAMPAIGN_THIRD_FAIL";
export const START_A_CAMPAIGN_THIRD_CLEAR = "START_A_CAMPAIGN_THIRD_CLEAR";

export const startACampaignThirdStart = (payload) => {
  return {
    type: START_A_CAMPAIGN_THIRD_START,
    payload,
  };
};

export const startACampaignThirdSuccess = (payload) => ({
  type: START_A_CAMPAIGN_THIRD_SUCCESS,
  payload,
});

export const startACampaignThirdFail = (payload) => ({
  type: START_A_CAMPAIGN_THIRD_FAIL,
  payload,
});

export const startACampaignThirdClear = (payload) => ({
  type: START_A_CAMPAIGN_THIRD_CLEAR,
  payload,
});
