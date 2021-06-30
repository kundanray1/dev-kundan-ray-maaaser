import { call, put, select, takeLatest } from "redux-saga/effects";
import { RECEIVER_EDIT_PROFILE_START } from "./actions";
import { receiverEditProfileSuccess, receiverEditProfileFail } from "./actions";
import { receiverProfileSuccess } from "./../actions";
import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* receiverEditProfile({ payload }) {
	try {
		const serializedData = payload.serializeBinary();
		const response = yield call(requestProto, APIEndpoints.SIGNUP, {
			method: "PATCH",
			headers: API.authProtoHeader(),
			body: serializedData,
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(receiverEditProfileSuccess(res));
			yield put(receiverProfileSuccess(res.client));
			showMessage({
				message: "Profile updated successfully",
				type: "success",
			});
		} else {
			yield put(receiverEditProfileFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(receiverEditProfileFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* receiverEditProfileSaga() {
	yield takeLatest(RECEIVER_EDIT_PROFILE_START, receiverEditProfile);
}
