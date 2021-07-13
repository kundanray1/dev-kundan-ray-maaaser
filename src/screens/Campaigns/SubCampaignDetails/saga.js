import { call, put, select, takeLatest } from "redux-saga/effects";
import { SUB_CAMPAIGN_DETAILS_START } from "./actions";
import { subCampaignDetailsSuccess, subCampaignDetailsFail} from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* subCampaignDetails({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.SUB_CAMPAIGN}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(subCampaignDetailsSuccess(res));
		} else {
			yield put(subCampaignDetailsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignDetailsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* subCampaignDetailsSaga() {
	yield takeLatest(SUB_CAMPAIGN_DETAILS_START, subCampaignDetails);
}



