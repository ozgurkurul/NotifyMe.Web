import { takeEvery, fork, put, all, call } from "redux-saga/effects"

// Login Redux States
import { PASSWORD_RESET } from "./actionTypes"
import { userPasswordResetSuccess, userPasswordResetError } from "./actions"

//Include Both Helper File with needed methods
import { getFirebaseBackend } from "../../../helpers/firebase_helper"
import {
  postFakePwdReset,
  postJwtPwdReset,
} from "../../../helpers/fakebackend_helper"

const fireBaseBackend = getFirebaseBackend()

//If user is send successfully send mail link then dispatch redux action's are directly from here.
function* passwordResetUser({ payload: { user, history } }) {
  try {
    if (process.env.REACT_APP_DEFAULTAUTH === "firebase") {
      const response = yield call(fireBaseBackend.passwordReset, user.email)
      if (response) {
        yield put(
          userPasswordResetSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    } else if (process.env.REACT_APP_DEFAULTAUTH === "jwt") {
      const response = yield call(postJwtPwdReset, "/jwt-pwd-reset", {
        email: user.email,
      })
      if (response) {
        yield put(
          userPasswordResetSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    } else {
      const response = yield call(postFakePwdReset, "/fake-pwd-reset", {
        email: user.email,
      })
      if (response) {
        yield put(
          userPasswordResetSuccess(
            "Reset link are sended to your mailbox, check there first"
          )
        )
      }
    }
  } catch (error) {
    yield put(userPasswordResetError(error))
  }
}

export function* watchUserPasswordReset() {
  yield takeEvery(PASSWORD_RESET, passwordResetUser)
}

function* passwordResetSaga() {
  yield all([fork(watchUserPasswordReset)])
}

export default passwordResetSaga
