import { call, put, select, takeLatest } from "redux-saga/effects";
import { SIGNUP_START } from "./actions";
import  {AuthAPI} from "./../../../api/AuthAPI";
import { signUpFail, signUpSuccess } from "./actions";
const authApi=new AuthAPI

export function* signUp({ payload }) {
	try {
		const response = yield call(authApi.signUp, payload);
		if (response.error === true) {
			yield put(signUpFail(response));
		} else {
			yield put(signUpSuccess(response));
		}
	} catch (e) {
		yield put(signUpFail(e));
	}
}

// Individual exports for testing
export default function* signUpSaga() {
	yield takeLatest(SIGNUP_START, signUp);
}
