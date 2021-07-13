export const SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START = "SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START";
export const SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS = "SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS";
export const SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL = "SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL";
export const SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR = "SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR";

export const subCampaginDonateNowConfirmationStart = (payload) => {
  return {
    type: SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_START,
    payload,
  };
};

export const subCampaignDonateNowConfirmationSuccess = (payload) => ({
  type: SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS,
  payload,
});

export const subCampaignDonateNowConfirmationFail = (payload) => ({
  type: SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL,
  payload,
});

export const subCampaignDonateNowConfirmationClear = (payload) => ({
  type: SUB_CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR,
  payload,
});
