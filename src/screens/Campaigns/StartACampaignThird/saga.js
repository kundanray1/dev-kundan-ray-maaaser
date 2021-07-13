import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	START_A_CAMPAIGN_THIRD_START,
} from "./actions";
import {
	startACampaignThirdSuccess,
	startACampaignThirdFail
} from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* startACampaignThird({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.CAMPAIGN, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(startACampaignThirdSuccess(res));
		} else {
			yield put(startACampaignThirdFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(startACampaignThirdFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* startACampaignThirdSaga() {
	yield takeLatest(START_A_CAMPAIGN_THIRD_START, startACampaignThird);
}
