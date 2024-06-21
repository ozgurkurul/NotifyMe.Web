import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Dashboard Redux States
import { GET_DASHBOARDS, GET_DASHBOARD_DETAIL } from "./actionTypes"
import {
    getDashboardsSuccess,
    getDashboardsFail,
  
    getDashboardDetailSuccess,
    getDashboardDetailFail,
  } from "./actions"

//api
import { 
    getDashboards, getDashboardDetail,
} from "../../api/dashboard/Dashboard";

function* fetchDashboards({ workspaceId }) {
    try {
        const response = yield call(getDashboards, workspaceId)
        yield put(getDashboardsSuccess(response))
    } catch (error) {
        yield put(getDashboardsFail(error))
    }
}

function* fetchDashboardDetail({ dashboardId }) {
    try {
        const response = yield call(getDashboardDetail, dashboardId)
        yield put(getDashboardDetailSuccess(response))
    } catch (error) {
        yield put(getDashboardDetailFail(error))
    }
}

function* dashboardSaga() {
    yield takeEvery(GET_DASHBOARDS, fetchDashboards)
    yield takeEvery(GET_DASHBOARD_DETAIL, fetchDashboardDetail)
}

export default dashboardSaga;
