import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

import { postLogin } from "../../../api/auth/Login";

import { notifyError } from "../../../notify/notify_helper"

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postLogin, {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("AuthUser", JSON.stringify(response));
    yield put(loginSuccess(response));
    history.push("/dashboard");
  } catch (error) {
    if(error.response.status == 401){
      console.log("özgür yetkisiz")
    }
    notifyError("özgür yetkisiz", "başlık 2 ")
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("AuthUser");
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
