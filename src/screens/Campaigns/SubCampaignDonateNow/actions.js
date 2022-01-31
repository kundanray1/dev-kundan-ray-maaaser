export const CAMPAIGN_DONOTE_NOW_START = "CAMPAIGN_DONOTE_NOW_START";
export const CAMPAIGN_DONOTE_NOW_SUCCESS = "CAMPAIGN_DONOTE_NOW_SUCCESS";
export const CAMPAIGN_DONOTE_NOW_FAIL = "CAMPAIGN_DONOTE_NOW_FAIL";


export const campaignDonateNowStart = (payload) => {
  return {
    type: CAMPAIGN_DONOTE_NOW_START,
    payload,
  };
};

export const campaignDonateNowSuccess = (payload) => ({
  type: CAMPAIGN_DONOTE_NOW_SUCCESS,
  payload,
});

export const campaignDonateNowFail = (payload) => ({
  type: CAMPAIGN_DONOTE_NOW_FAIL,
  payload,
});
