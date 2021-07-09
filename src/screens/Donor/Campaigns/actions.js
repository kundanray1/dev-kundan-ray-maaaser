export const CAMPAIGNS_START = "CAMPAIGNS_START";
export const CAMPAIGNS_SUCCESS = "CAMPAIGNS_SUCCESS";
export const CAMPAIGNS_FAIL = "CAMPAIGNS_FAIL";
export const CAMPAIGN_ID = "CAMPAIGN_ID";

export const campaignsStart = (payload) => {
	return {
		type: CAMPAIGNS_START,
		payload,
	};
};
export const campaignsSuccess = (payload) => ({
	type: CAMPAIGNS_SUCCESS,
	payload,
});

export const campaignsFail = (payload) => ({
	type: CAMPAIGNS_FAIL,
	payload,
});


export const campaignId = (payload) => ({
	type: CAMPAIGN_ID,
	payload,
});

