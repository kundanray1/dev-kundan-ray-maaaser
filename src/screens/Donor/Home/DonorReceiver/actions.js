export const DONOR_RECEIVER_START = "DONOR_RECEIVER_START";
export const DONOR_RECEIVER_SUCCESS = "DONOR_RECEIVER_SUCCESS";
export const DONOR_RECEIVER_FAIL = "DONOR_RECEIVER_FAIL";

export const BALANCE_START = "BALANCE_START";
export const BALANCE_SUCCESS = "BALANCE_SUCCESS";
export const BALANCE_FAIL = "BALANCE_FAIL";
//donorReceiver 
export const donorReceiverStart = (payload) => {
	return {
		type: DONOR_RECEIVER_START,
		payload,
	};
};
export const donorReceiverSuccess = (payload) => ({
	type: DONOR_RECEIVER_SUCCESS,
	payload,
});
export const donorReceiverFail = (payload) => ({
	type: DONOR_RECEIVER_FAIL,
	payload,
});
//balance
export const balanceStart = (payload) => {
	return {
		type: BALANCE_START,
		payload,
	};
};
export const balanceSuccess = (payload) => ({
	type: BALANCE_SUCCESS,
	payload,
});
export const balanceFail = (payload) => ({
	type: BALANCE_FAIL,
	payload,
});
