import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONATION_RECEIVED_START } from "./actions";
import { donationReceivedSuccess, donationReceivedFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donationReceived({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.DONATION_RECEIVED}/${payload}?medium=3&type=2`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if (res.transactionsList == undefined) {
				yield put(donationReceivedSuccess([]));
			} else {
				yield put(donationReceivedSuccess(res.transactionsList));
			}
		} else {
			yield put(donationReceivedFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donationReceivedFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* donationReceivedSaga() {
	yield takeLatest(DONATION_RECEIVED_START, donationReceived);
}
