export const DONATION_RECEIVED_START = "DONATION_RECEIVED_START";
export const DONATION_RECEIVED_SUCCESS = "DONATION_RECEIVED_SUCCESS";
export const DONATION_RECEIVED_FAIL = "DONATION_RECEIVED_FAIL";

export const DONATION_RECEIVED_SEARCH_START = "DONATION_RECEIVED_SEARCH_START";
export const DONATION_RECEIVED_SEARCH_SUCCESS = "DONATION_RECEIVED_SEARCH_SUCCESS";
export const DONATION_RECEIVED_SEARCH_FAIL = "DONATION_RECEIVED_SEARCH_FAIL";


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


export const donationReceivedSearchStart = (payload) => {
	return {
		type: DONATION_RECEIVED_SEARCH_START,
		payload,
	};
};
export const donationReceivedSearchSuccess = (payload) => ({
	type: DONATION_RECEIVED_SEARCH_SUCCESS,
	payload,
});
export const donationReceivedSearchFail = (payload) => ({
	type: DONATION_RECEIVED_SEARCH_FAIL,
	payload,
});
