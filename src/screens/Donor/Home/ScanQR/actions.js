export const SCAN_QR_START = "SCAN_QR_START";
export const SCAN_QR_SUCCESS = "SCAN_QR_SUCCESS";
export const SCAN_QR_FAIL = "SCAN_QR_FAIL";

export const scanQRStart = (payload) => {
	return {
		type: SCAN_QR_START,
		payload,
	};
};
export const scanQRSuccess = (payload) => ({
	type: SCAN_QR_SUCCESS,
	payload,
});
export const scanQRFail = (payload) => ({
	type: SCAN_QR_FAIL,
	payload,
});
