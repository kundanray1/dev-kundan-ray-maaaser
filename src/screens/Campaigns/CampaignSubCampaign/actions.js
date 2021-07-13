export const CAMPAIGN_SUB_CAMPAIGNS_EDIT_START = "CAMPAIGN_SUB_CAMPAIGNS_EDIT_START";
export const CAMPAIGN_SUB_CAMPAIGNS_EDIT_SUCCESS = "CAMPAIGN_SUB_CAMPAIGNS_EDIT_SUCCESS";
export const CAMPAIGN_SUB_CAMPAIGNS_EDIT_FAIL = "CAMPAIGN_SUB_CAMPAIGNS_EDIT_FAIL";
export const CAMPAIGN_SUB_CAMPAIGNS_EDIT_CLEAR = "CAMPAIGN_SUB_CAMPAIGNS_EDIT_CLEAR";
export const SUB_CAMPAIGN_ID = "SUB_CAMPAIGN_ID";


export const campaignSubCampaignsEditStart = (payload) => {
	return {
		type: CAMPAIGN_SUB_CAMPAIGNS_EDIT_START,
		payload,
	};
};
export const campaignSubCampaignsEditSuccess = (payload) => ({
	type: CAMPAIGN_SUB_CAMPAIGNS_EDIT_SUCCESS,
	payload,
});

export const campaignSubCampaignsEditFail = (payload) => ({
	type: CAMPAIGN_SUB_CAMPAIGNS_EDIT_FAIL,
	payload,
});

export const campaignSubCampaignsEditClear = (payload) => ({
	type: CAMPAIGN_SUB_CAMPAIGNS_EDIT_CLEAR,
	payload,
});


export const subCampaignId = (payload) => ({
	type: SUB_CAMPAIGN_ID,
	payload,
});
