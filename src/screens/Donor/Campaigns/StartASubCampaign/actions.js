export const START_A_SUB_CAMPAIGN_START = "START_A_SUB_CAMPAIGN_START";
export const START_A_SUB_CAMPAIGN_SUCCESS = "START_A_SUB_CAMPAIGN_SUCCESS";
export const START_A_SUB_CAMPAIGN_FAIL = "START_A_SUB_CAMPAIGN_FAIL";
export const START_A_SUB_CAMPAIGN_CLEAR = "START_A_SUB_CAMPAIGN_CLEAR";

export const startASubCampaignStart = (payload) => {
  return {
    type: START_A_SUB_CAMPAIGN_START,
    payload,
  };
};

export const startASubCampaignSuccess = (payload) => ({
  type: START_A_SUB_CAMPAIGN_SUCCESS,
  payload,
});

export const startASubCampaignFail = (payload) => ({
  type: START_A_SUB_CAMPAIGN_FAIL,
  payload,
});

export const startASubCampaignClear = (payload) => ({
  type: START_A_SUB_CAMPAIGN_CLEAR,
  payload,
});
