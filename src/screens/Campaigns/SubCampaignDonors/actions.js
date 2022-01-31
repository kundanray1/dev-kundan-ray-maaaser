export const SUB_CAMPAIGN_DONORS_START = "SUB_CAMPAIGN_DONORS_START";
export const SUB_CAMPAIGN_DONORS_SUCCESS = "SUB_CAMPAIGN_DONORS_SUCCESS";
export const SUB_CAMPAIGN_DONORS_FAIL = "SUB_CAMPAIGN_DONORS_FAIL";

export const subCampaignDonorsStart = (payload) => {
	return {
		type: SUB_CAMPAIGN_DONORS_START,
		payload,
	};
};
export const subCampaignDonorsSuccess = (payload) => ({
	type: SUB_CAMPAIGN_DONORS_SUCCESS,
	payload,
});
export const subCampaignDonorsFail = (payload) => ({
	type: SUB_CAMPAIGN_DONORS_FAIL,
	payload,
});
