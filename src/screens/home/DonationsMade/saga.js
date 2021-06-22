import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONATIONS_MADE_START } from "./actions";
import { donationsMadeSuccess, donationsMadeFail } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donationsMade({ payload }) {
	try {
		const response = yield call(requestProto,`${APIEndpoints.DONATIONS_MADE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("donationsMade res",res);
		if (res.success) {
			console.log("if donationsMade")
			yield put(donationsMadeSuccess(res.transactionsList));
		} else {
			console.log("else donationsMade")
			yield put(donationsMadeFail(res));
			showMessage({
				message: "donationsMade, error from server or check your credentials!",
				type: "success",
			});
		}
	} catch (e) {
		yield put(receiversFail(e));
		showMessage({
			message: "donationsMade, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* donationsMadeSaga() {
	yield takeLatest(DONATIONS_MADE_START, donationsMade);
}
