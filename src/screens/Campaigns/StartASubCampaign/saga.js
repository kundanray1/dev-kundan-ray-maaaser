import { call, put, select, takeLatest } from "redux-saga/effects";
import {
	START_A_SUB_CAMPAIGN_START,
	START_A_SUB_CAMPAIGN_EDIT_START
} from "./actions";
import {
	startASubCampaignSuccess,
	startASubCampaignFail,
	startASubCampaignEditSuccess,
	startASubCampaignEditFail
} from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* startASubCampaign({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.SUB_CAMPAIGN, {
			method: "POST",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(startASubCampaignSuccess(res));
		} else {
			yield put(startASubCampaignFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(startASubCampaignFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* startASubCampaignEdit({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.SUB_CAMPAIGN, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(startASubCampaignEditSuccess(res));
		} else {
			yield put(startASubCampaignEditFail(res));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(startASubCampaignEditFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* startASubCampaignSaga() {
	yield takeLatest(START_A_SUB_CAMPAIGN_START, startASubCampaign);
	yield takeLatest(START_A_SUB_CAMPAIGN_EDIT_START, startASubCampaignEdit);
}
