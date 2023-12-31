import { all, fork } from "redux-saga/effects"

//public
import AccountSaga from "./auth/register/saga"
import AuthSaga from "./auth/login/saga"
import ForgetSaga from "./auth/forgetpwd/saga"
import PasswordResetSaga from "./auth/pwdreset/saga"
import ProfileSaga from "./auth/profile/saga"
import LayoutSaga from "./layout/saga"
import DashboardSaga from "./dashboard/saga";
import WorkspaceSaga from "./workspace/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(PasswordResetSaga),
    fork(ProfileSaga),
    fork(LayoutSaga),
    fork(DashboardSaga),
    fork(WorkspaceSaga)
  ])
}
