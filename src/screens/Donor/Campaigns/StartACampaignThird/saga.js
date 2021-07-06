import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	START_A_CAMPAIGN_START,
} from "./actions";
import {
	startACampaignSuccess,
	startACampaignFail
} from "./actions";
import base from "./../../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* startACampaign({ payload }) {
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
			yield put(startACampaignSuccess(res));
		} else {
			yield put(startACampaignFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(startACampaignFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* startACampaignSaga() {
	yield takeLatest(START_A_CAMPAIGN_START, startACampaign);
}
