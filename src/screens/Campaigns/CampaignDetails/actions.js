export const CAMPAIGN_DETAILS_START = "CAMPAIGN_DETAILS_START";
export const CAMPAIGN_DETAILS_SUCCESS = "CAMPAIGN_DETAILS_SUCCESS";
export const CAMPAIGN_DETAILS_FAIL = "CAMPAIGN_DETAILS_FAIL";

export const campaignDetailsStart = (payload) => {
	return {
		type: CAMPAIGN_DETAILS_START,
		payload,
	};
};
export const campaignDetailsSuccess = (payload) => ({
	type: CAMPAIGN_DETAILS_SUCCESS,
	payload,
});

export const campaignDetailsFail = (payload) => ({
	type: CAMPAIGN_DETAILS_FAIL,
	payload,
});
