import { decode as atob, encode as btoa } from "base-64";
import { call, put, takeLatest } from "redux-saga/effects";
import { Platform } from "react-native";
import { LETS_GET_STARTED_DONOR_START, IMAGE_UPLOAD_START } from "./actions";
import {
  letsGetStartedDonorFail,
  letsGetStartedDonorSuccess,
  imageUploadSuccess,
  imageUploadFail,
} from "./actions";
import APIEndpoints from "./../../../constants/APIConstants";
import request, { requestProto } from "../../../utility/request";
import base from "./../../../protos/account_rpc_pb";
import { showMessage } from "react-native-flash-message";
import API from "./../../../api/API";
import { loginSuccess } from "./../Login/actions";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* letsGetStartedDonor({ payload }) {
  try {
    const serializedData = payload.serializeBinary();
    const response = yield call(requestProto, APIEndpoints.SIGNUP, {
      method: "PATCH",
      headers: API.authProtoHeader(),
      body: serializedData,
    });
    const res = base.AccountBaseResponse.deserializeBinary(response).toObject();
    if (res.success) {
      yield put(letsGetStartedDonorSuccess(res));
      showMessage({
        message: "Account created successfully",
        type: "success",
      });
    } else {
      yield put(letsGetStartedDonorFail(res.msg));
      showMessage({
        message: res.msg,
        type: "danger",
      });
    }
  } catch (e) {
    yield put(letsGetStartedDonorFail(e));
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}

export function* imageUpload({ payload }) {
  const formdata = new FormData();
  formdata.append("image", {
    name: "image",
    type: "image/jpeg",
    uri: payload,
  });
  try {
    const res = yield call(request, APIEndpoints.IMAGE, {
      method: "POST",
      headers: API.authHeadersForMultipartFormData(),
      body: formdata,
    });
    if (res.success) {
      yield put(imageUploadSuccess(res.fileUrl));
    } else {
      yield put(imageUploadFail(res.msg));
       showMessage({
      message: "Failed to upload image on server. Try again!",
      type: "danger",
    });
    }
  } catch (e) {
    yield put(imageUploadFail(e));
  }
}

export default function* letsGetStartedDonorSaga() {
  yield takeLatest(LETS_GET_STARTED_DONOR_START, letsGetStartedDonor);
  yield takeLatest(IMAGE_UPLOAD_START, imageUpload);
}
