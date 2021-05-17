import { call, put, select, takeLatest } from "redux-saga/effects";
import { LOGIN_START } from "./actions";
import { AuthAPI } from "./../../../api/AuthAPI";
import { loginSuccess, loginFail } from "./actions";
const authApi = new AuthAPI();

export function* login({ payload }) {
	try {
		const response = yield call(authApi.login, payload);
		yield put(loginSuccess(response));
	} catch (error) {
		yield put(loginFail(error));
	}
}
// Individual exports for testing
export default function* loginSaga() {
	yield takeLatest(LOGIN_START, login);
}
