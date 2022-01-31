export const START_A_SUB_CAMPAIGN_START = "START_A_SUB_CAMPAIGN_START";
export const START_A_SUB_CAMPAIGN_SUCCESS = "START_A_SUB_CAMPAIGN_SUCCESS";
export const START_A_SUB_CAMPAIGN_FAIL = "START_A_SUB_CAMPAIGN_FAIL";
export const START_A_SUB_CAMPAIGN_CLEAR = "START_A_SUB_CAMPAIGN_CLEAR";

export const START_A_SUB_CAMPAIGN_EDIT_START = "START_A_SUB_CAMPAIGN_EDIT_START";
export const START_A_SUB_CAMPAIGN_EDIT_SUCCESS = "START_A_SUB_CAMPAIGN_EDIT_SUCCESS";
export const START_A_SUB_CAMPAIGN_EDIT_FAIL = "START_A_SUB_CAMPAIGN_EDIT_FAIL";
export const START_A_SUB_CAMPAIGN_EDIT_CLEAR = "START_A_SUB_CAMPAIGN_EDIT_CLEAR";


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



export const startASubCampaignEditStart = (payload) => {
  return {
    type: START_A_SUB_CAMPAIGN_EDIT_START,
    payload,
  };
};

export const startASubCampaignEditSuccess = (payload) => ({
  type: START_A_SUB_CAMPAIGN_EDIT_SUCCESS,
  payload,
});

export const startASubCampaignEditFail = (payload) => ({
  type: START_A_SUB_CAMPAIGN_EDIT_FAIL,
  payload,
});

export const startASubCampaignEditClear = (payload) => ({
  type: START_A_SUB_CAMPAIGN_EDIT_CLEAR,
  payload,
});
