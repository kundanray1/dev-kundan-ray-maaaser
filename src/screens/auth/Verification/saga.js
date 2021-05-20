import { call, put, select, takeLatest } from "redux-saga/effects";
import { VERIFICATION_START } from "./actions";
import { verificationSuccess, verificationFail } from "./actions";

export function* verification({ payload }) {
	try {
		const response = yield call(authApi.verification, payload);
		yield put(verificationSuccess(response));
	} catch (error) {
		yield put(verificationFail(error));
	}
}

// Individual exports for testing
export default function* verificationSaga() {
	yield takeLatest(VERIFICATION_START, verification);
}
