import { takeEvery, fork, put, all, call } from "redux-saga/effects"

// Login Redux States
import { FORGET_PASSWORD } from "./actionTypes"
import { userForgetPasswordSuccess, userForgetPasswordError } from "./actions"

//api
import { postForgetPwd } from "../../../api/auth/Login";
//i18n
import i18n from "../../../i18n";

function* forgetUser({ payload: { user, history } }) {
  try {
    const response = yield call(postForgetPwd, {
      email: user.email,
    });
    if (response) {
      yield put(
        userForgetPasswordSuccess(i18n.t("Reset link are sended to your mailbox!"))
      )
    }
  } catch (error) {
    yield put(userForgetPasswordError(i18n.t(error.response.data.message)))
  }
}

export function* watchUserPasswordForget() {
  yield takeEvery(FORGET_PASSWORD, forgetUser)
}

function* forgetPasswordSaga() {
  yield all([fork(watchUserPasswordForget)])
}

export default forgetPasswordSaga
