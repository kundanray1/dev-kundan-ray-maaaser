import { call, put, select, takeLatest } from "redux-saga/effects";
import { CREATE_NEW_PASSWORD_START } from "./actions";
import { AuthAPI } from "./../../../api/AuthAPI";
import { createNewPasswordSuccess, createNewPasswordFail } from "./actions";
const authApi = new AuthAPI();

export function* createNewPassword({ payload }) {
	try {
		const response = yield call(authApi.createNewPassword, payload);
		yield put(createNewPasswordSuccess(response));
	} catch (error) {
		yield put(createNewPasswordFail(error));
	}
}

// Individual exports for testing
export default function* createNewPasswordSaga() {
	yield takeLatest(CREATE_NEW_PASSWORD_START, createNewPassword);
}
