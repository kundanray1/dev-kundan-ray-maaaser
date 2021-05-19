import { all } from "redux-saga/effects";
import createNewPasswordSaga from "./../../screens/auth/CreateNewPassword/saga";
import forgotPasswordSaga from "./../../screens/auth/ForgotPassword/saga";
import loginSaga from "./../../screens/auth/Login/saga";
import signUpSaga from "./../../screens/auth/SignUp/saga";
import verificationSaga from "./../../screens/auth/Verification/saga";
import welcomeSaga from "./../../screens/auth/Welcome/saga";
import postsSaga from "./postsSaga";

export default function* rootSaga() {
	yield all([
		createNewPasswordSaga(),
		forgotPasswordSaga(),
		loginSaga(),
		signUpSaga(),
		verificationSaga(),
		welcomeSaga(),
		postsSaga(),
	]);
}
