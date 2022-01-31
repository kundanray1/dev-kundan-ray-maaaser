export const START_A_CAMPAIGN_THIRD_UPDATE_START = "START_A_CAMPAIGN_THIRD_UPDATE_START";
export const START_A_CAMPAIGN_THIRD_UPDATE_SUCCESS = "START_A_CAMPAIGN_THIRD_UPDATE_SUCCESS";
export const START_A_CAMPAIGN_THIRD_UPDATE_FAIL = "START_A_CAMPAIGN_THIRD_UPDATE_FAIL";
export const START_A_CAMPAIGN_THIRD_UPDATE_CLEAR = "START_A_CAMPAIGN_THIRD_UPDATE_CLEAR";

export const startACampaignThirdUpdateStart = (payload) => {
  return {
    type: START_A_CAMPAIGN_THIRD_UPDATE_START,
    payload,
  };
};

export const startACampaignThirdUpdateSuccess = (payload) => ({
  type: START_A_CAMPAIGN_THIRD_UPDATE_SUCCESS,
  payload,
});

export const startACampaignThirdUpdateFail = (payload) => ({
  type: START_A_CAMPAIGN_THIRD_UPDATE_FAIL,
  payload,
});

export const startACampaignThirdUpdateClear = (payload) => ({
  type: START_A_CAMPAIGN_THIRD_UPDATE_CLEAR,
  payload,
});
