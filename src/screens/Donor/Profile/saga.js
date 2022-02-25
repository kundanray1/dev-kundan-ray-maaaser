import { call, put, select, takeLatest } from "redux-saga/effects";
import { PROFILE_START } from "./actions";
import { profileSuccess, profileFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* profile({ payload }) {
	try {
		const response = yield call(requestProto, `${APIEndpoints.PROFILE}/${payload}`, {
			method: "GET",
			headers: API.authProtoHeader(),
		});
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {

			console.log(res);
			if(res.loginaccount.employee!==undefined){
			yield put(profileSuccess(res.loginaccount.employee));
			}else{
			yield put(profileSuccess(res.loginaccount.client));
			}
		} else {
			yield put(profileFail(res.msg));
			showMessage({
				message: res.msg,
				type: "danger",
			});
		}
	} catch (e) {
		yield put(profileFail(e));
		showMessage({
			message: "Sorry, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* profileSaga() {
	yield takeLatest(PROFILE_START, profile);
}
