export const DONATION_DETAILS_START = "DONATION_DETAILS_START";
export const DONATION_DETAILS_SUCCESS = "DONATION_DETAILS_SUCCESS";
export const DONATION_DETAILS_FAIL = "DONATION_DETAILS_FAIL";
export const DONATION_DETAILS_CLEAR = "DONATION_DETAILS_CLEAR";


export const donationDetailsStart = (payload) => {
	return {
		type: DONATION_DETAILS_START,
		payload,
	};
};
export const donationDetailsSuccess = (payload) => ({
	type: DONATION_DETAILS_SUCCESS,
	payload,
});
export const donationDetailsFail = (payload) => ({
	type: DONATION_DETAILS_FAIL,
	payload,
});
export const donationDetailsClear = (payload) => ({
	type: DONATION_DETAILS_CLEAR,
	payload,
});
