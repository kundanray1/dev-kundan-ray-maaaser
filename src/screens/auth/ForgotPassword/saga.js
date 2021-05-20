import { call, put, select, takeLatest } from "redux-saga/effects";
import { FORGOT_PASSWORD_START } from "./actions";
import { forgotPasswordSuccess, forgotPasswordFail } from "./actions";

export function* forgotPassword({ payload }) {
	try {
		const response = yield call(authApi.forgotPassword, payload);
		yield put(forgotPasswordSuccess(response));
	} catch (error) {
		yield put(forgotPasswordFail(error));
	}
}

// Individual exports for testing
export default function* forgotPasswordSaga() {
	yield takeLatest(FORGOT_PASSWORD_START, forgotPassword);
}
