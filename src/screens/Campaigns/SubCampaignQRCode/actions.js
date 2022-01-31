export const CAMPAIGN_QR_CODE_START = "CAMPAIGN_QR_CODE_START";
export const CAMPAIGN_QR_CODE_SUCCESS = "CAMPAIGN_QR_CODE_SUCCESS";
export const CAMPAIGN_QR_CODE_FAIL = "CAMPAIGN_QR_CODE_FAIL";

export const campaignQRCodeStart = (payload) => {
	return {
		type: CAMPAIGN_QR_CODE_START,
		payload,
	};
};
export const campaignQRCodeSuccess = (payload) => ({
	type: CAMPAIGN_QR_CODE_SUCCESS,
	payload,
});
export const campaignQRCodeFail = (payload) => ({
	type: CAMPAIGN_QR_CODE_FAIL,
	payload,
});
