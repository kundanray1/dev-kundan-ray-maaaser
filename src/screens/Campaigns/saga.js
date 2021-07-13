import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGNS_START,CAMPAIGNS_EDIT_START } from "./actions";
import { campaignsSuccess, campaignsFail,campaignsEditSuccess, campaignsEditFail } from "./actions";
import base from "./../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../constants/APIConstants";
import { requestProto } from "../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaigns({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.CAMPAIGN_GET_BY_ACCOUNT_ID}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(campaignsSuccess(res));
		} else {
			yield put(campaignsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* campaignsEdit({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.CAMPAIGN_STATUS,
			{
				method: "PATCH",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("campaignStatus",res);
		if (res.success) {
				yield put(campaignsEditSuccess(res));
		} else {
			yield put(campaignsEditFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignsEditFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* campaignsSaga() {
	yield takeLatest(CAMPAIGNS_START, campaigns);
	yield takeLatest(CAMPAIGNS_EDIT_START, campaignsEdit);
}
