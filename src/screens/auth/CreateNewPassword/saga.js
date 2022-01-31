
import { call, put, select, takeLatest } from "redux-saga/effects";
import { CREATE_NEW_PASSWORD_START } from "./actions";
import { createNewPasswordSuccess, createNewPasswordFail,createNewPasswordClear } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import {forgotPasswordClear} from "../ForgotPassword/actions";
import {verificationClear} from "../Verification/actions";


//serializing the payload into binary and submittin data to requestProto function with additional data
export function* createNewPassword({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.PASSWORD_RESET, {
			method: "PATCH",
			headers: ProtoHeaders,
			body: serializedData,
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(createNewPasswordSuccess(res));
			yield put(forgotPasswordClear());
			yield put(verificationClear());
			yield put(createNewPasswordClear());
			showMessage({
				message: res.msg,
				type: "success",
			});

		} else {
			yield put(createNewPasswordFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(createNewPasswordFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* createNewPasswordSaga() {
	yield takeLatest(CREATE_NEW_PASSWORD_START, createNewPassword);
}
