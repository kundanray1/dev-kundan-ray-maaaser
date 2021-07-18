import { call, put, select, takeLatest } from "redux-saga/effects";
import {ALL_CAMPAIGNS_START } from "./actions";
import { allCampaignsSuccess, allCampaignsFail } from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

export function* allCampaigns({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.CAMPAIGN, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(allCampaignsSuccess(res));
		} else {
			yield put(allCampaignsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(allCampaignsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* allCampaignsSaga() {
	yield takeLatest(ALL_CAMPAIGNS_START, allCampaigns);
}
