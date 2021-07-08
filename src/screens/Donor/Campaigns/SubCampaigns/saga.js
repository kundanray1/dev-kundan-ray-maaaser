import { call, put, select, takeLatest } from "redux-saga/effects";
import { SUB_CAMPAIGNS_START } from "./actions";
import { subCampaignsSuccess, subCampaignsFail } from "./actions";
import base from "./../../../../protos/campaign_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* subCampaigns({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.SUB_CAMPAIGNS}/${payload}?medium=3&type=2`,
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
				yield put(subCampaignsSuccess([]));
			} else {
				yield put(subCampaignsSuccess(res.transactionsList));
			}
		} else {
			yield put(subCampaignsFail(res));
			showMessage({
				message:
					"Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignsFail(e));
		showMessage({
			message:
				"Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* subCampaignsSaga() {
	yield takeLatest(SUB_CAMPAIGNS_START, subCampaigns);
}
