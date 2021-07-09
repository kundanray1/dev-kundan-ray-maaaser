export const ALL_CAMPAIGNS_START = "ALL_CAMPAIGNS_START";
export const ALL_CAMPAIGNS_SUCCESS = "ALL_CAMPAIGNS_SUCCESS";
export const ALL_CAMPAIGNS_FAIL = "ALL_CAMPAIGNS_FAIL";

//all campaigns
export const allCampaignsStart = (payload) => {
	return {
		type: ALL_CAMPAIGNS_START,
		payload,
	};
};
export const allCampaignsSuccess = (payload) => ({
	type: ALL_CAMPAIGNS_SUCCESS,
	payload,
});
export const allCampaignsFail = (payload) => ({
	type: ALL_CAMPAIGNS_FAIL,
	payload,
});


export const campaignId = (payload) => ({
	type: CAMPAIGN_ID,
	payload,
});

