import { call, put, select, takeLatest } from "redux-saga/effects";
import { MEMBERS_START } from "./actions";
import { membersSuccess, membersFail } from "./actions";
import base from "./../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* members({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.GET_EMPLOYEE_LIST}/${payload}`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.AccountBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(membersSuccess(res));
		} else {
			yield put(membersFail(res));
			showMessage({
				message: "members, error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(membersFail(e));
		showMessage({
			message: "members, error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* membersSaga() {
	yield takeLatest(MEMBERS_START, members);
}



