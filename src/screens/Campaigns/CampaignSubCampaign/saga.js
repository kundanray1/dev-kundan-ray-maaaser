import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGN_SUB_CAMPAIGNS_EDIT_START } from "./actions";
import { campaignSubCampaignsEditSuccess, campaignSubCampaignsEditFail } from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaginSubCampaignsEdit({ payload }) {
	try {
		const response = yield call(
			requestProto,
			APIEndpoints.SUB_CAMPAIGN_STATUS,
			{
				method: "PATCH",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
				yield put(campaignSubCampaignsEditSuccess(res));
		} else {
			yield put(campaignSubCampaignsEditFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignSubCampaignsEditFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* campaignSubCampaignsEditSaga() {
	yield takeLatest(CAMPAIGN_SUB_CAMPAIGNS_EDIT_START, campaginSubCampaignsEdit);
}
