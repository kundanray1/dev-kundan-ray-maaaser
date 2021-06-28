import { call, put, select, takeLatest } from "redux-saga/effects";
import { VERIFICATION_START } from "./actions";
import { verificationSuccess, verificationFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
//serializing the payload into binary and submittin data to requestProto function with additional data
export function* verification({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.CHECK_VERIFICATION_CODE, {
			method: "POST",
			headers: ProtoHeaders, 
			body: serializedData,
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(verificationSuccess(res));
			showMessage({
				message: "Verification completed",
				type: "success",
			});

		} else {
			yield put(verificationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(verificationFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* verificationSaga() {
	yield takeLatest(VERIFICATION_START, verification);
}
