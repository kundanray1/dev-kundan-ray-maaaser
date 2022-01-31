import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGN_COMMENTS_START,POST_CAMPAIGN_COMMENTS_START,UPDATE_CAMPAIGN_COMMENTS_START,DELETE_CAMPAIGN_COMMENTS_START } from "./actions";
import { campaignCommentsSuccess, campaignCommentsFail,postCampaignCommentsSuccess,postCampaignCommentsFail,updateCampaignCommentsSuccess,updateCampaignCommentsFail,deleteCampaignCommentsSuccess,deleteCampaignCommentsFail} from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaignComments({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.GET_ALL_CAMPAIGN_COMMENTS_BY_REFID}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
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

export function* postCampaignComments({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.POST_CAMPAIGN_COMMENTS,
			{
				method: "POST",
				headers: API.authProtoHeader(),
				body: serializedData,
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(postCampaignCommentsSuccess(res));
			showMessage({
				message: "Comment posted successfully!",
				type: "success",
			});
		} else {
			yield put(postCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(postCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* updateCampaignComments({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(
			requestProto,
			APIEndpoints.POST_CAMPAIGN_COMMENTS,
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
			yield put(updateCampaignCommentsSuccess(res));
			showMessage({
				message: "Comment updated successfully!",
				type: "success",
			});
		} else {
			yield put(updateCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(updateCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}



export function* deleteCampaignComments({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.POST_CAMPAIGN_COMMENTS}/${payload}`,
			{
				method: "DELETE",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.CampaignBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(deleteCampaignCommentsSuccess(res));
			showMessage({
				message: "Comment deleted successfully!",
				type: "success",
			});
		} else {
			yield put(deleteCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(deleteCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* campaignCommentsSaga() {
	yield takeLatest(CAMPAIGN_COMMENTS_START, campaignComments);
	yield takeLatest(POST_CAMPAIGN_COMMENTS_START, postCampaignComments);
	yield takeLatest(UPDATE_CAMPAIGN_COMMENTS_START, updateCampaignComments);
	yield takeLatest(DELETE_CAMPAIGN_COMMENTS_START, deleteCampaignComments);
}



