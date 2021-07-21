export const CAMPAIGN_DETAILS_START = "CAMPAIGN_DETAILS_START";
export const CAMPAIGN_DETAILS_SUCCESS = "CAMPAIGN_DETAILS_SUCCESS";
export const CAMPAIGN_DETAILS_FAIL = "CAMPAIGN_DETAILS_FAIL";

export const CAMPAIGN_DETAILS_URL_START = "CAMPAIGN_DETAILS_URL_START";
export const CAMPAIGN_DETAILS_URL_SUCCESS = "CAMPAIGN_DETAILS_URL_SUCCESS";
export const CAMPAIGN_DETAILS_URL_FAIL = "CAMPAIGN_DETAILS_URL_FAIL";

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

export const campaignDetailsURLStart = (payload) => {
	return {
		type: CAMPAIGN_DETAILS_URL_START,
		payload,
	};
};
export const campaignDetailsURLSuccess = (payload) => ({
	type: CAMPAIGN_DETAILS_URL_SUCCESS,
	payload,
});

export const campaignDetailsURLFail = (payload) => ({
	type: CAMPAIGN_DETAILS_URL_FAIL,
	payload,
});
