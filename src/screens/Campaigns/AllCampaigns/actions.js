export const ALL_CAMPAIGNS_START = "ALL_CAMPAIGNS_START";
export const ALL_CAMPAIGNS_SUCCESS = "ALL_CAMPAIGNS_SUCCESS";
export const ALL_CAMPAIGNS_FAIL = "ALL_CAMPAIGNS_FAIL";

export const ALL_CAMPAIGNS_SEARCH_START = "ALL_CAMPAIGNS_SEARCH_START";
export const ALL_CAMPAIGNS_SEARCH_SUCCESS = "ALL_CAMPAIGNS_SEARCH_SUCCESS";
export const ALL_CAMPAIGNS_SEARCH_FAIL = "ALL_CAMPAIGNS_SEARCH_FAIL";

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

export const allCampaignsSearchStart = (payload) => {
	return {
		type: ALL_CAMPAIGNS_SEARCH_START,
		payload,
	};
};
export const allCampaignsSearchSuccess = (payload) => ({
	type: ALL_CAMPAIGNS_SEARCH_SUCCESS,
	payload,
});
export const allCampaignsSearchFail = (payload) => ({
	type: ALL_CAMPAIGNS_SEARCH_FAIL,
	payload,
});
