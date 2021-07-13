export const SUB_CAMPAIGN_DETAILS_START = "SUB_CAMPAIGN_DETAILS_START";
export const SUB_CAMPAIGN_DETAILS_SUCCESS = "SUB_CAMPAIGN_DETAILS_SUCCESS";
export const SUB_CAMPAIGN_DETAILS_FAIL = "SUB_CAMPAIGN_DETAILS_FAIL";

export const subCampaignDetailsStart = (payload) => {
	return {
		type: SUB_CAMPAIGN_DETAILS_START,
		payload,
	};
};
export const subCampaignDetailsSuccess = (payload) => ({
	type: SUB_CAMPAIGN_DETAILS_SUCCESS,
	payload,
});

export const subCampaignDetailsFail = (payload) => ({
	type: SUB_CAMPAIGN_DETAILS_FAIL,
	payload,
});

