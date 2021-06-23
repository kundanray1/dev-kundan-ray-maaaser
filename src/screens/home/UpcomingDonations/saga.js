import { call, put, select, takeLatest } from "redux-saga/effects";
import { UPCOMING_DONATIONS_START } from "./actions";
import { upcomingDonationsSuccess, upcomingDonationsFail } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data

export function* upcomingDonations({ payload }) {
	try {
		const response = yield call(
			requestProto,
			APIEndpoints.UPCOMING_TRANSACTION,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(upcomingDonationsSuccess(res.scheduletransactionsList));
		} else {
			yield put(upcomingDonationsFail(res.msg));
			showMessage({
				message: "upcomingDonations, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {

		yield put(upcomingDonationsFail(e));
		showMessage({
			message: "upcomingDonations, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* upcomingDonationsSaga() {
	yield takeLatest(UPCOMING_DONATIONS_START, upcomingDonations);
}
