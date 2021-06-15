import { call, put, select, takeLatest } from "redux-saga/effects";
import { SCHEDULE_DONATION_START } from "./actions";
import { scheduleDonationSuccess, scheduleDonationFail } from "./actions";
import base from "./../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { ProtoHeaders } from "./../../../constants/APIHeader";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* scheduleDonation({ payload }) {
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
			yield put(scheduleDonationSuccess(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		} else {
			yield put(scheduleDonationFail(res.msg));
			showMessage({
				message: "Password changed successfully",
				type: "success",
			});
		}
	} catch (e) {
		yield put(scheduleDonationFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* scheduleDonationSaga() {
	yield takeLatest(SCHEDULE_DONATION_START, scheduleDonation);
}
