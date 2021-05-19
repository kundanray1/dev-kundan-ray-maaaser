import { call, put, select, takeLatest } from "redux-saga/effects";
import { WELCOME_START } from "./actions";
import { AuthAPI } from "./../../../api/AuthAPI";
import { welcomeSuccess, welcomeFail } from "./actions";
const authApi = new AuthAPI();
export function* welcome({ payload }) {
	try {
		const response = yield call(authApi.welcome, payload);
		yield put(welcomeSuccess(response));
	} catch (error) {
		yield put(welcomeFail(error));
	}
}

// Individual exports for testing
export default function* welcomeSaga() {
	yield takeLatest(WELCOME_START, welcome);
}
