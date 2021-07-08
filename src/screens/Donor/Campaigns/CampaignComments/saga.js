import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGN_COMMENTS_START } from "./actions";
import { campaignCommentsSuccess, campaignCommentsFail } from "./actions";
import base from "./../../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaignComments({ payload }) {
	try {
		const response = yield call(requestProto, APIEndpoints.CAMPAIGN_COMMENTS, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(campaignCommentsSuccess(res));
		} else {
			yield put(campaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* campaignCommentsSaga() {
	yield takeLatest(CAMPAIGN_COMMENTS_START, campaignComments);
}

