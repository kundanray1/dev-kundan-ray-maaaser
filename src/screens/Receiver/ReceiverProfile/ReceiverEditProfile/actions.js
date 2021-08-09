export const RECEIVER_EDIT_PROFILE_START = "RECEIVER_EDIT_PROFILE_START";
export const RECEIVER_EDIT_PROFILE_SUCCESS = "RECEIVER_EDIT_PROFILE_SUCCESS";
export const RECEIVER_EDIT_PROFILE_FAIL = "RECEIVER_EDIT_PROFILE_FAIL";
export const RECEIVER_EDIT_PROFILE_CLEAR = "RECEIVER_EDIT_PROFILE_CLEAR";




export const RECEIVER_EDIT_EMPLOYEE_PROFILE_START = "RECEIVER_EDIT_EMPLOYEE_PROFILE_START";
export const RECEIVER_EDIT_EMPLOYEE_PROFILE_SUCCESS = "RECEIVER_EDIT_EMPLOYEE_PROFILE_SUCCESS";
export const RECEIVER_EDIT_EMPLOYEE_PROFILE_FAIL = "RECEIVER_EDIT_EMPLOYEE_PROFILE_FAIL";
export const RECEIVER_EDIT_EMPLOYEE_PROFILE_CLEAR = "RECEIVER_EDIT_EMPLOYEE_PROFILE_CLEAR";


export const receiverEditProfileStart = (payload) => {
	return {
		type: RECEIVER_EDIT_PROFILE_START,
		payload,
	};
};
export const receiverEditProfileSuccess = (payload) => ({
	type: RECEIVER_EDIT_PROFILE_SUCCESS,
	payload,
});
export const receiverEditProfileFail = (payload) => ({
	type: RECEIVER_EDIT_PROFILE_FAIL,
	payload,
});


export const receiverEditProfileClear = (payload) => ({
	type: RECEIVER_EDIT_PROFILE_CLEAR,
	payload,
});



export const receiverEditEmployeeProfileStart = (payload) => {
	return {
		type: RECEIVER_EDIT_EMPLOYEE_PROFILE_START,
		payload,
	};
};
export const receiverEditEmployeeProfileSuccess = (payload) => ({
	type: RECEIVER_EDIT_EMPLOYEE_PROFILE_SUCCESS,
	payload,
});

export const receiverEditEmployeeProfileFail = (payload) => ({
	type: RECEIVER_EDIT_EMPLOYEE_PROFILE_FAIL,
	payload,
});


export const receiverEditEmployeeProfileClear = (payload) => ({
	type: RECEIVER_EDIT_EMPLOYEE_PROFILE_CLEAR,
	payload,
});