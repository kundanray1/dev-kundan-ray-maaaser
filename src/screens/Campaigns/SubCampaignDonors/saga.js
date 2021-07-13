import { call, put, select, takeLatest } from "redux-saga/effects";
import { SUB_CAMPAIGN_DONORS_START } from "./actions";
import { subCampaignDonorsSuccess, subCampaignDonorsFail} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* subCampaignDonors({ payload }) {
	try {
		const response = yield call(
			requestProto,
			`${APIEndpoints.CAMPAIGN_SUBCAMPAIGN_DONATION}/${payload}?type=SUB_CAMPAIGN_FUND`,
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		if (res.success) {
			yield put(subCampaignDonorsSuccess(res));
		} else {
			yield put(subCampaignDonorsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(subCampaignDonorsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* subCampaignDonorsSaga() {
	yield takeLatest(SUB_CAMPAIGN_DONORS_START, subCampaignDonors);
}
