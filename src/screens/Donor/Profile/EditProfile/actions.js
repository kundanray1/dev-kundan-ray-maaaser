export const EDIT_PROFILE_START = "EDIT_PROFILE_START";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";
export const EDIT_PROFILE_CLEAR = "EDIT_PROFILE_CLEAR";


export const EDIT_EMPLOYEE_PROFILE_START = "EDIT_EMPLOYEE_PROFILE_START";
export const EDIT_EMPLOYEE_PROFILE_SUCCESS = "EDIT_EMPLOYEE_PROFILE_SUCCESS";
export const EDIT_EMPLOYEE_PROFILE_FAIL = "EDIT_EMPLOYEE_PROFILE_FAIL";
export const EDIT_EMPLOYEE_PROFILE_CLEAR = "EDIT_EMPLOYEE_PROFILE_CLEAR";


export const editProfileStart = (payload) => {
	return {
		type: EDIT_PROFILE_START,
		payload,
	};
};
export const editProfileSuccess = (payload) => ({
	type: EDIT_PROFILE_SUCCESS,
	payload,
});

export const editProfileFail = (payload) => ({
	type: EDIT_PROFILE_FAIL,
	payload,
});


export const editProfileClear = (payload) => ({
	type: EDIT_PROFILE_CLEAR,
	payload,
});




export const editEmployeeProfileStart = (payload) => {
	return {
		type: EDIT_EMPLOYEE_PROFILE_START,
		payload,
	};
};
export const editEmployeeProfileSuccess = (payload) => ({
	type: EDIT_EMPLOYEE_PROFILE_SUCCESS,
	payload,
});

export const editEmployeeProfileFail = (payload) => ({
	type: EDIT_EMPLOYEE_PROFILE_FAIL,
	payload,
});


export const editEmployeeProfileClear = (payload) => ({
	type: EDIT_EMPLOYEE_PROFILE_CLEAR,
	payload,
});


