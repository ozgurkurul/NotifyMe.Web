import { takeEvery, fork, put, all, call } from "redux-saga/effects"

// Workspace Redux States
import { GET_WORKSPACES, GET_WORKSPACE_DETAIL } from "./actionTypes"
import {
  getWorkspacesSuccess,
  getWorkspacesFail,

  getWorkspaceDetailSuccess,
  getWorkspaceDetailFail,
} from "./actions"

//api
import { 
  getWorkspaces, getWorkspaceDetail,
} from "../../api/workspace/Workspace";

//i18n
import i18n from "../../i18n";

function* fetchWorkspaces() {
  try {
    const response = yield call(getWorkspaces)
    yield put(getWorkspacesSuccess(response))
  } catch (error) {
    yield put(getWorkspacesFail(error))
  }
}

function* fetchWorkspaceDetail({ workspaceId }) {
  try {
    const response = yield call(getWorkspaceDetail, workspaceId)
    yield put(getWorkspaceDetailSuccess(response))
  } catch (error) {
    yield put(getWorkspaceDetailFail(error))
  }
}

function* workspaceSaga() {
  yield takeEvery(GET_WORKSPACES, fetchWorkspaces)
  yield takeEvery(GET_WORKSPACE_DETAIL, fetchWorkspaceDetail)
}

export default workspaceSaga
