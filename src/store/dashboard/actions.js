import {
    GET_DASHBOARDS,
    GET_DASHBOARDS_SUCCESS,
    GET_DASHBOARDS_FAIL,

    GET_DASHBOARD_DETAIL,
    GET_DASHBOARD_DETAIL_SUCCESS,
    GET_DASHBOARD_DETAIL_FAIL
} from "./actionTypes";

export const getDashboards = workspaceId => ({
  type: GET_DASHBOARDS,
  workspaceId
})

export const getDashboardsSuccess = dashboards => ({
  type: GET_DASHBOARDS_SUCCESS,
  payload: dashboards,
})

export const getDashboardsFail = error => ({
  type: GET_DASHBOARDS_FAIL,
  payload: error,
})


export const getDashboardDetail = dashboardId => ({
  type: GET_DASHBOARD_DETAIL,
  dashboardId,
})

export const getDashboardDetailSuccess = dashboard => ({
  type: GET_DASHBOARD_DETAIL_SUCCESS,
  payload: dashboard,
})

export const getDashboardDetailFail = error => ({
  type: GET_DASHBOARD_DETAIL_FAIL,
  payload: error,
})