import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGN_DETAILS_START,CAMPAIGN_DETAILS_URL_START } from "./actions";
import { campaignDetailsSuccess, campaignDetailsFail,campaignDetailsURLSuccess, campaignDetailsURLFail} from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaignDetails({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.CAMPAIGN}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(campaignDetailsSuccess(res));
		} else {
			yield put(campaignDetailsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignDetailsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* campaignDetailsURL({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.GENERATE_CAMPAIGN_URL}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(campaignDetailsURLSuccess(res));
		} else {
			yield put(campaignDetailsURLFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignDetailsURLFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* campaignDetailsSaga() {
	yield takeLatest(CAMPAIGN_DETAILS_START, campaignDetails);
	yield takeLatest(CAMPAIGN_DETAILS_URL_START, campaignDetailsURL);
}



