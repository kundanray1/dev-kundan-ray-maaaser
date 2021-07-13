import { call, put, select, takeLatest } from "redux-saga/effects";
import { CAMPAIGN_DONORS_START } from "./actions";
import { campaignDonorsSuccess, campaignDonorsFail} from "./actions";
import base from "./../../../protos/payment_rpc_pb";
import APIEndpoints from "./../../../constants/APIConstants";
import { requestProto } from "../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* campaignDonors({ payload }) {
	try {
		console.log(payload)
		const response = yield call(
			requestProto,
			`${APIEndpoints.CAMPAIGN_SUBCAMPAIGN_DONATION}/${payload}?type=CAMPAIGN_FUND`,
			// "https://maaser-api.brilltech.com/campaign/donations/ce35d0e310214fc4a74323bacb1150cf?type=CAMPAIGN_FUND",
			{
				method: "GET",
				headers: API.authProtoHeader(),
			}
		);
		const res = base.PaymentBaseResponse.deserializeBinary(
			response
		).toObject();
		console.log("campaignDonors",res);
		if (res.success) {
			yield put(campaignDonorsSuccess(res));
		} else {
			yield put(campaignDonorsFail(res));
			showMessage({
				message: "Error from server or check your credentials!",
				type: "danger",
			});
		}
	} catch (e) {
		yield put(campaignDonorsFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}
export default function* campaignDonorsSaga() {
	yield takeLatest(CAMPAIGN_DONORS_START, campaignDonors);
}



