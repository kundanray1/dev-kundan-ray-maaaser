export const DONATION_RECEIVED_START = "DONATION_RECEIVED_START";
export const DONATION_RECEIVED_SUCCESS = "DONATION_RECEIVED_SUCCESS";
export const DONATION_RECEIVED_FAIL = "DONATION_RECEIVED_FAIL";

export const donationReceivedStart = (payload) => {
	return {
		type: DONATION_RECEIVED_START,
		payload,
	};
};
export const donationReceivedSuccess = (payload) => ({
	type: DONATION_RECEIVED_SUCCESS,
	payload,
});
export const donationReceivedFail = (payload) => ({
	type: DONATION_RECEIVED_FAIL,
	payload,
});
