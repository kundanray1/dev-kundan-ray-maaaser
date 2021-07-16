export const START_A_CAMPAIGN_START = "START_A_CAMPAIGN_START";
export const START_A_CAMPAIGN_SUCCESS = "START_A_CAMPAIGN_SUCCESS";
export const START_A_CAMPAIGN_FAIL = "START_A_CAMPAIGN_FAIL";
export const START_A_CAMPAIGN_CLEAR = "START_A_CAMPAIGN_CLEAR";

export const startACampaignStart = (payload) => {
  return {
    type: START_A_CAMPAIGN_START,
    payload,
  };
};

export const startACampaignSuccess = (payload) => ({
  type: START_A_CAMPAIGN_SUCCESS,
  payload,
});

export const startACampaignFail = (payload) => ({
  type: START_A_CAMPAIGN_FAIL,
  payload,
});

export const startACampaignClear = (payload) => ({
  type: START_A_CAMPAIGN_CLEAR,
  payload,
});
