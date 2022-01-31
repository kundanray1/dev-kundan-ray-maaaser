export const CAMPAIGN_DONATE_NOW_CONFIRMATION_START = "CAMPAIGN_DONATE_NOW_CONFIRMATION_START";
export const CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS = "CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS";
export const CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL = "CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL";
export const CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR = "CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR";

export const campaginDonateNowConfirmationStart = (payload) => {
  return {
    type: CAMPAIGN_DONATE_NOW_CONFIRMATION_START,
    payload,
  };
};

export const campaignDonateNowConfirmationSuccess = (payload) => ({
  type: CAMPAIGN_DONATE_NOW_CONFIRMATION_SUCCESS,
  payload,
});

export const campaignDonateNowConfirmationFail = (payload) => ({
  type: CAMPAIGN_DONATE_NOW_CONFIRMATION_FAIL,
  payload,
});

export const campaignDonateNowConfirmationClear = (payload) => ({
  type: CAMPAIGN_DONATE_NOW_CONFIRMATION_CLEAR,
  payload,
});
