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
/*
    if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(
        fireBaseBackend.loginUser,
        user.email,
        user.password
      );
      yield put(loginSuccess(response));
    } else if (import.meta.env.VITE_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtLogin, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("AuthUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else if (import.meta.env.VITE_APP_DEFAULTAUTH === "fake") {

      const response = yield call(postFakeLogin, {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("AuthUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    */


    
  } catch (error) {
    if(error.response.status == 401){
      console.log("özgür yetkisiz")
    }
    notifyError("özgür yetkisiz", "başlık 2 ")
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  /*
  try {
    localStorage.removeItem("AuthUser");

    if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.logout);
      yield put(logoutUserSuccess(response));
    }
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
   */
}
/*

function* socialLogin({ payload: { data, history, type } }) {
  try {
    if (import.meta.env.VITE_APP_DEFAULTAUTH === "firebase") {
      const fireBaseBackend = getFirebaseBackend();
      const response = yield call(
        fireBaseBackend.socialLoginUser,
        data,
        type,
      );
      localStorage.setItem("AuthUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    } else {
      const response = yield call(postSocialLogin, data);
      localStorage.setItem("AuthUser", JSON.stringify(response));
      yield put(loginSuccess(response));
    }
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(error));
  }
}

*/
function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
