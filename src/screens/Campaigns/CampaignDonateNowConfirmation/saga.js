import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	CAMPAIGN_DONATE_NOW_CONFIRMATION_START,
} from "./actions";
import {
	campaignDonateNowConfirmationSuccess,
	campaignDonateNowConfirmationFail
} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaignDonateNowConfirmation({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.TRANSACTION, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(campaignDonateNowConfirmationSuccess(res));
		} else {
			yield put(campaignDonateNowConfirmationFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignDonateNowConfirmationFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* campaignDonateNowConfirmationSaga() {
	yield takeLatest(CAMPAIGN_DONATE_NOW_CONFIRMATION_START, campaignDonateNowConfirmation);
}
