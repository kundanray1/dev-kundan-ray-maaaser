import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGN_DONORS_START } from "./actions";
import { campaignDonorsSuccess, campaignDonorsFail } from "./actions";
import base from "./../../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaignDonors({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.CAMPAIGN_DONORS}/${payload}?medium=3&type=2`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			if (res.transactionsList == undefined) {
				yield put(campaignDonorsSuccess([]));
			} else {
				yield put(campaignDonorsSuccess(res.transactionsList));
			}
		} else {
			yield put(campaignDonorsFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignDonorsFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* campaignDonorsSaga() {
	yield takeLatest(CAMPAIGN_DONORS_START, campaignDonors);
}
