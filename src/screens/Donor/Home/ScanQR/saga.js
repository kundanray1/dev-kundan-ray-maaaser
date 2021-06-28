import { call, put, select, takeLatest } from "redux-saga/effects";
import { SCAN_QR_START } from "./actions";
import { scanQRSuccess, scanQRFail } from "./actions";
import base from "./../../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../../constants/APIHeader";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* scanQR({ payload }) {
	console.log("payload==", payload);
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.LOGIN, {
			method: "GET",
			headers: ProtoHeaders,
			body: serializedData,
		});
		const res = base.AuthBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.error) {
			yield put(scanQRFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		} else {
			yield put(scanQRSuccess(res.msg));
			showMessage({
				message: "Password changed successfully",
				type: "success",
			});
		}
	} catch (e) {
		yield put(scanQRFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* scanQRSaga() {
	yield takeLatest(SCAN_QR_START, scanQR);
}
