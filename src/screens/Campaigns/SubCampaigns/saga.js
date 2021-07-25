import { call, put, select, takeLatest } from "redux-saga/effects";
import { SUB_CAMPAIGNS_START,SUB_CAMPAIGNS_EDIT_START } from "./actions";
import { subCampaignsSuccess, subCampaignsFail,subCampaignsEditSuccess, subCampaignsEditFail } from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* subCampaigns({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.SUB_CAMPAIGN_GET_BY_ACCOUNT_ID}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(subCampaignsSuccess(res));
		} else {
			yield put(subCampaignsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export function* subCampaignsEdit({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.SUB_CAMPAIGN_STATUS,
			{
				method: "PATCH",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
				yield put(subCampaignsEditSuccess(res));
		} else {
			yield put(subCampaignsEditFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignsEditFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* subCampaignsSaga() {
	yield takeLatest(SUB_CAMPAIGNS_START, subCampaigns);
	yield takeLatest(SUB_CAMPAIGNS_EDIT_START, subCampaignsEdit);
}
