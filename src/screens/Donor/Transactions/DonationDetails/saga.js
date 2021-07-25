import { call, put, select, takeLatest } from "redux-saga/effects";
import { DONATION_DETAILS_START } from "./actions";
import { donationDetailsSuccess, donationDetailsFail } from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";
//serializing the payload into binary and submittin data to requestProto function with additional data
export function* donationDetails({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.TRANSACTION}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(donationDetailsSuccess(res));
		} else {
			yield put(donationDetailsFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(donationDetailsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* donationDetailsSaga() {
	yield takeLatest(DONATION_DETAILS_START, donationDetails);
}
