export const RECEIVER_DETAIL_START = "RECEIVER_DETAIL_START";
export const RECEIVER_DETAIL_SUCCESS = "RECEIVER_DETAIL_SUCCESS";
export const RECEIVER_DETAIL_FAIL = "RECEIVER_DETAIL_FAIL";
export const RECEIVER_DETAIL_CLEAR = "RECEIVER_DETAIL_CLEAR";


export const scheduleDonationReceiverDetailStart = (payload) => {
	return {
		type: RECEIVER_DETAIL_START,
		payload,
	};
};
export const scheduleDonationReceiverDetailSuccess = (payload) => ({
	type: RECEIVER_DETAIL_SUCCESS,
	payload,
});
export const scheduleDonationReceiverDetailFail = (payload) => ({
	type: RECEIVER_DETAIL_FAIL,
	payload,
});
export const scheduleDonationReceiverDetailClear = (payload) => ({
	type: RECEIVER_DETAIL_CLEAR,
	payload,
});
