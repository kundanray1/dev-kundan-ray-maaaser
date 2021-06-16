import { call, put, select, takeLatest } from "redux-saga/effects";
import { SCHEDULE_DONATION_START } from "./actions";
import { scheduleDonationSuccess, scheduleDonationFail } from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* scheduleDonation({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.SCHEDULE_TRANSACTION}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(scheduleDonationSuccess(res.scheduletransactionsList));
		} else {
			yield put(scheduleDonationFail(res.msg));
			showMessage({
				message: "Sorry, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		console.log("4")

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
