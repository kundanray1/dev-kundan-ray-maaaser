export const CAMPAIGN_DONORS_START = "CAMPAIGN_DONORS_START";
export const CAMPAIGN_DONORS_SUCCESS = "CAMPAIGN_DONORS_SUCCESS";
export const CAMPAIGN_DONORS_FAIL = "CAMPAIGN_DONORS_FAIL";

export const campaignDonorsStart = (payload) => {
	return {
		type: CAMPAIGN_DONORS_START,
		payload,
	};
};
export const campaignDonorsSuccess = (payload) => ({
	type: CAMPAIGN_DONORS_SUCCESS,
	payload,
});
export const campaignDonorsFail = (payload) => ({
	type: CAMPAIGN_DONORS_FAIL,
	payload,
});
