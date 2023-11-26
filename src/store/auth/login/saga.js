import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";
import { apiError, loginSuccess, logoutUserSuccess } from "./actions";

//api
import { postLogin } from "../../../api/auth/Login";

//i18n
import i18n from "../../../i18n";

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(postLogin, {
      email: user.email,
      password: user.password,
    });
    localStorage.setItem("AuthUser", JSON.stringify(response));
    localStorage.setItem("AuthUserToken", 'Bearer ' + response.token);
    yield put(loginSuccess(response));
    history.push("/dashboard");
  } catch (error) {
    yield put(apiError(i18n.t(error.response.data.message)))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("AuthUser");
    localStorage.removeItem("AuthUserToken");
    history.push("/login");
  } catch (error) {
    yield put(apiError(i18n.t("Log Out Error")));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
