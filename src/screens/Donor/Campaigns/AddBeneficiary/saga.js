import { call, put, select, takeLatest } from "redux-saga/effects";
import { ADD_BENEFICIARY_START,UPDATE_BENEFICIARY_START } from "./actions";
import { addBeneficiarySuccess, addBeneficiaryFail,updateBeneficiarySuccess,
updateBeneficiaryFail } from "./actions";
import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";
//serializing the payload into binary and submittin data to requestProto function with additional data
export function* addBeneficiary({ payload }) {
  try {
    const serializedData = payload.serializeBinary();
    const response = yield call(requestProto, APIEndpoints.EMPLOYEE, {
      method: "POST",
      headers: API.authProtoHeader(),
      body: serializedData,
    });
    const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    if (res.success) {
      yield put(addBeneficiarySuccess(res.msg));
      showMessage({
        message: "New beneficier added successfully",
        type: "success",
      });
    } else {
      yield put(addBeneficiaryFail(res));
       showMessage({
        message: res.msg,
        type: "danger",
      });
    }
  } catch (e) {
    yield put(addBeneficiaryFail(e));
    console.log("Error")
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}
export function* updateBeneficiary({ payload }) {
  try {
    const serializedData = payload.serializeBinary();
    const response = yield call(requestProto, APIEndpoints.EMPLOYEE, {
      method: "PATCH",
      headers: API.authProtoHeader(),
      body: serializedData,
    });
    const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    if (res.success) {
      yield put(updateBeneficiarySuccess(res.msg));
      showMessage({
        message: "Beneficiary updated successfully",
        type: "success",
      });
    } else {
      yield put(updateBeneficiaryFail(res));
       showMessage({
        message: res.msg,
        type: "danger",
      });
    }
  } catch (e) {
    yield put(updateBeneficiaryFail(e));
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}

export default function* addBeneficiarySaga() {
	yield takeLatest(ADD_BENEFICIARY_START, addBeneficiary);
  yield takeLatest(UPDATE_BENEFICIARY_START, updateBeneficiary);
}
