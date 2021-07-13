export const SUB_CAMPAIGNS_START = "SUB_CAMPAIGNS_START";
export const SUB_CAMPAIGNS_SUCCESS = "SUB_CAMPAIGNS_SUCCESS";
export const SUB_CAMPAIGNS_FAIL = "SUB_CAMPAIGNS_FAIL";


export const SUB_CAMPAIGNS_EDIT_START = "SUB_CAMPAIGNS_EDIT_START";
export const SUB_CAMPAIGNS_EDIT_SUCCESS = "SUB_CAMPAIGNS_EDIT_SUCCESS";
export const SUB_CAMPAIGNS_EDIT_FAIL = "SUB_CAMPAIGNS_EDIT_FAIL";


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

export const subCampaignsEditStart = (payload) => {
	return {
		type: SUB_CAMPAIGNS_EDIT_START,
		payload,
	};
};
export const subCampaignsEditSuccess = (payload) => ({
	type: SUB_CAMPAIGNS_EDIT_SUCCESS,
	payload,
});

export const subCampaignsEditFail = (payload) => ({
	type: SUB_CAMPAIGNS_EDIT_FAIL,
	payload,
});


