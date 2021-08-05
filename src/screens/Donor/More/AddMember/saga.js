import { call, put, select, takeLatest } from "redux-saga/effects";
import { ADD_MEMBER_START,UPDATE_MEMBER_START } from "./actions";
import { addMemberSuccess, addMemberFail,updateMemberSuccess,
updateMemberFail } from "./actions";
import base from "./../../../../protos/account_rpc_pb";
import APIEndpoints from "./../../../../constants/APIConstants";
import { requestProto } from "../../../../utility/request";
import { showMessage } from "react-native-flash-message";
import API from "./../../../../api/API";
//serializing the payload into binary and submittin data to requestProto function with additional data
export function* addMember({ payload }) {
  try {
    const serializedData = payload.serializeBinary();
    const response = yield call(requestProto, APIEndpoints.EMPLOYEE, {
      method: "POST",
      headers: API.authProtoHeader(),
      body: serializedData,
    });
    const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    console.log("addMember",res);
    if (res.success) {
      yield put(addMemberSuccess(res));
      showMessage({
        message: "New member added successfully",
        type: "success",
      });
    } else {
      yield put(addMemberFail(res));
       showMessage({
        message: res.msg,
        type: "danger",
      });
    }
  } catch (e) {
    yield put(addMemberFail(e));
    console.log("Error")
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}
export function* updateMember({ payload }) {
  try {
    const serializedData = payload.serializeBinary();
    const response = yield call(requestProto, APIEndpoints.EMPLOYEE, {
      method: "PATCH",
      headers: API.authProtoHeader(),
      body: serializedData,
    });
    const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    if (res.success) {
      yield put(updateMemberSuccess(res.msg));
      showMessage({
        message: "Member updated successfully",
        type: "success",
      });
    } else {
      yield put(updateMemberFail(res));
       showMessage({
        message: res.msg,
        type: "danger",
      });
    }
  } catch (e) {
    yield put(updateMemberFail(e));
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}

export default function* addMemberSaga() {
	yield takeLatest(ADD_MEMBER_START, addMember);
  yield takeLatest(UPDATE_MEMBER_START, updateMember);
}
