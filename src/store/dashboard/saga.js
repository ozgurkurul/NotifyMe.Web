import { call, put, takeEvery, all, fork } from "redux-saga/effects";

// Dashboard Redux States
import { GET_DASHBOARDS, GET_DASHBOARD_DETAIL, GET_DASHBOARD_DETAIL_KANBAN } from "./actionTypes"
import {
    getDashboardsSuccess,
    getDashboardsFail,
  
    getDashboardDetailSuccess,
    getDashboardDetailFail,

    getDashboardDetailKanbanSuccess,
    getDashboardDetailKanbanFail
  } from "./actions"

//api
import { 
    getDashboards, 
    getDashboardDetail, 
    getDashboardDetailKanban
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

function* fetchDashboardDetailKanban({ dashboardId }) {
    try {
        const response = yield call(getDashboardDetailKanban, dashboardId)
        yield put(getDashboardDetailKanbanSuccess(response))
    } catch (error) {
        yield put(getDashboardDetailKanbanFail(error))
    }
}

function* dashboardSaga() {
    yield takeEvery(GET_DASHBOARDS, fetchDashboards)
    yield takeEvery(GET_DASHBOARD_DETAIL, fetchDashboardDetail)
    yield takeEvery(GET_DASHBOARD_DETAIL_KANBAN, fetchDashboardDetailKanban)
}

export default dashboardSaga;
