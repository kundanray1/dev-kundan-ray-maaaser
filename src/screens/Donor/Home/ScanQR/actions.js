export const SCAN_QR_DONATE_START = "SCAN_QR_DONATE_START";
export const SCAN_QR_DONATE_SUCCESS = "SCAN_QR_DONATE_SUCCESS";
export const SCAN_QR_DONATE_FAIL = "SCAN_QR_DONATE_FAIL";
export const SCAN_QR_DONATE_CLEAR = "SCAN_QR_DONATE_CLEAR";

//donate
export const scanQRDonateStart = (payload) => {
	return {
		type: SCAN_QR_DONATE_START,
		payload,
	};
};
export const scanQRDonateSuccess = (payload) => ({
	type: SCAN_QR_DONATE_SUCCESS,
	payload,
});

export const scanQRDonateFail = (payload) => ({
	type: SCAN_QR_DONATE_FAIL,
	payload,
});

export const scanQRDonateClear = (payload) => ({
	type: SCAN_QR_DONATE_CLEAR,
	payload,
});
