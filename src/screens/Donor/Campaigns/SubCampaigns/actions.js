export const SUB_CAMPAIGNS_START = "SUB_CAMPAIGNS_START";
export const SUB_CAMPAIGNS_SUCCESS = "SUB_CAMPAIGNS_SUCCESS";
export const SUB_CAMPAIGNS_FAIL = "SUB_CAMPAIGNS_FAIL";

export const subCampaignsStart = (payload) => {
	return {
		type: SUB_CAMPAIGNS_START,
		payload,
	};
};
export const subCampaignsSuccess = (payload) => ({
	type: SUB_CAMPAIGNS_SUCCESS,
	payload,
});
export const subCampaignsFail = (payload) => ({
	type: SUB_CAMPAIGNS_FAIL,
	payload,
});
