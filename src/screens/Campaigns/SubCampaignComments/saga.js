import { call, put, select, takeLatest } from "redux-saga/effects";
import { SUB_CAMPAIGN_COMMENTS_START,POST_SUB_CAMPAIGN_COMMENTS_START,UPDATE_SUB_CAMPAIGN_COMMENTS_START,DELETE_SUB_CAMPAIGN_COMMENTS_START } from "./actions";
import { subCampaignCommentsSuccess, subCampaignCommentsFail,postSubCampaignCommentsSuccess,postSubCampaignCommentsFail,updateSubCampaignCommentsSuccess,updateSubCampaignCommentsFail,deleteSubCampaignCommentsSuccess,deleteSubCampaignCommentsFail} from "./actions";
import base from "./../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* subCampaignComments({ payload }) {
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
			yield put(subCampaignCommentsSuccess(res));
		} else {
			yield put(subCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* postSubCampaignComments({ payload }) {
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
			yield put(postSubCampaignCommentsSuccess(res));
			showMessage({
				message: "Comment posted successfully!",
				type: "success",
			});
		} else {
			yield put(postSubCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(postSubCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* updateSubCampaignComments({ payload }) {
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
			yield put(updateSubCampaignCommentsSuccess(res));
			showMessage({
				message: "Comment updated successfully!",
				type: "success",
			});
		} else {
			yield put(updateSubCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(updateSubCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export function* deleteSubCampaignComments({ payload }) {
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
			yield put(deleteSubCampaignCommentsSuccess(res));
			showMessage({
				message: "Comment deleted successfully!",
				type: "success",
			});
		} else {
			yield put(deleteSubCampaignCommentsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(deleteSubCampaignCommentsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* subSubCampaignCommentsSaga() {
	yield takeLatest(SUB_CAMPAIGN_COMMENTS_START, subCampaignComments);
	yield takeLatest(POST_SUB_CAMPAIGN_COMMENTS_START, postSubCampaignComments);
	yield takeLatest(UPDATE_SUB_CAMPAIGN_COMMENTS_START, updateSubCampaignComments);
	yield takeLatest(DELETE_SUB_CAMPAIGN_COMMENTS_START, deleteSubCampaignComments);
}



