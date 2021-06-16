import { call, put, select, takeLatest } from "redux-saga/effects";
import { LINK_SCHEDULE_DONATION_START,RECEIVERS_START } from "./actions";
import { linkScheduleDonationSuccess, linkScheduleDonationFail,receiversSuccess,receiversFail } from "./actions";
import base from "./../../../protos/auth_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* linkScheduleDonation({ payload }) {
	console.log("payload==", payload);
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.LOGIN, {
			method: "GET",
			body: serializedData,
		});
		const res = base.AuthBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.error) {
			yield put(linkScheduleDonationSuccess(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		} else {
			yield put(linkScheduleDonationFail(res.msg));
			showMessage({
				message: "Password changed successfully",
				type: "success",
			});
		}
	} catch (e) {
		yield put(linkScheduleDonationFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* receivers({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.RECEIVERSCLIENT, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(receiversSuccess(res.clients));
		} else {
			yield put(receiversFail(res));
			showMessage({
				message: "Sorry0, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(receiversFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* scheduleDonationSaga() {
	yield takeLatest(LINK_SCHEDULE_DONATION_START, linkScheduleDonation);
	yield takeLatest(RECEIVERS_START, receivers);

}
