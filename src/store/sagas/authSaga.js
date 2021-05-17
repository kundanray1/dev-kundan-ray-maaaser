import {
	all,
	take,
	put,
	call,
	race,
	delay,
	fork,
	spawn,
	cancel,
} from "redux-saga/effects";
import {
	authSuccess,
	authFail,
	logoutSuccess,
	logoutFail,
	AUTH_START,
	LOGOUT_START
} from "./../actions/AuthActions";
import { AuthAPI } from './../../api/AuthAPI';
const authApi = new AuthAPI;


function* authenticate({ identifier, password }) {
	try {
		const data = yield call(authApi.loginUser, { identifier, password });
		yield put(authSuccess(data.user));
		return data.user;
	} catch (error) {
		yield put(authFail(error.message));
	}
}

function* logout() {
	try {
		yield call(authApi.logoutUser);
		yield put(logoutSuccess());
		console.log("logoutSuccess");
	} catch (error) {
		yield put(logoutFail());
	}
}

function* throwErrorSaga() {
	yield delay(1000);
	yield call(() => {
		throw Error("Random Error");
	});
}

function* longRunningYield() {
	yield delay(5000);
}

function*  authFlow() {
	while (true) {
		const { payload } = yield take(AUTH_START);
		const user = yield call(authenticate, payload);
		const forkedTask = yield fork(longRunningYield);
		// yield spawn(throwErrorSaga);
		if (user) {
			yield take(LOGOUT_START);
			yield call(logout);
			yield cancel(forkedTask);
		}
	}
}

export default function* authSaga() {
	yield all([authFlow()]);
}
