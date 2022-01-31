export const CAMPAIGNS_START = "CAMPAIGNS_START";
export const CAMPAIGNS_SUCCESS = "CAMPAIGNS_SUCCESS";
export const CAMPAIGNS_FAIL = "CAMPAIGNS_FAIL";
export const CAMPAIGN_ID = "CAMPAIGN_ID";

export const CAMPAIGNS_EDIT_START = "CAMPAIGNS_EDIT_START";
export const CAMPAIGNS_EDIT_SUCCESS = "CAMPAIGNS_EDIT_SUCCESS";
export const CAMPAIGNS_EDIT_FAIL = "CAMPAIGNS_EDIT_FAIL";
export const CAMPAIGN_EDIT_CLEAR = "CAMPAIGN_EDIT_CLEAR";


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


export const campaignsEditStart = (payload) => {
	return {
		type: CAMPAIGNS_EDIT_START,
		payload,
	};
};
export const campaignsEditSuccess = (payload) => ({
	type: CAMPAIGNS_EDIT_SUCCESS,
	payload,
});

export const campaignsEditFail = (payload) => ({
	type: CAMPAIGNS_EDIT_FAIL,
	payload,
});

export const campaignsEditClear = (payload) => ({
	type: CAMPAIGNS_EDIT_CLEAR,
	payload,
});

