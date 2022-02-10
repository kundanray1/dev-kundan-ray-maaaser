import { call, put, select, takeLatest } from "redux-saga/effects";
import { COMMUNITY_START } from "./actions";
import { communitySuccess, communityFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* community({ payload }) {
	console.log('community call started')
	try {
		
		const response = yield call(requestProto, `${APIEndpoints.PROFILE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
console.log('res success')
			if(res.loginaccount.employee!==undefined){
			yield put(communitySuccess(res.loginaccount.employee));
			}else{
			yield put(communitySuccess(res.loginaccount.client));
			}
		} else {
			yield put(communityFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(communityFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* communitySaga() {
	yield takeLatest(COMMUNITY_START, community);
}
