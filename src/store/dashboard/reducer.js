import {
    GET_DASHBOARDS_SUCCESS,
    GET_DASHBOARDS_FAIL,

    GET_DASHBOARD_DETAIL_SUCCESS,
    GET_DASHBOARD_DETAIL_FAIL,

    GET_DASHBOARD_DETAIL_KANBAN_SUCCESS,
    GET_DASHBOARD_DETAIL_KANBAN_FAIL
} from "./actionTypes";

const INIT_STATE = {
    dashboards: [],
    dashboardDetail: {},
    dashboardDetailKanban: [],
    error: {},
}

const Dashboard = (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_DASHBOARDS_SUCCESS:
          return {
            ...state,
            dashboards: action.payload,
          }
    
        case GET_DASHBOARDS_FAIL:
          return {
            ...state,
            error: action.payload,
          }
    
        case GET_DASHBOARD_DETAIL_SUCCESS:
          return {
            ...state,
            dashboardDetail: action.payload,
          }
    
        case GET_DASHBOARD_DETAIL_FAIL:
          return {
            ...state,
            error: action.payload,
          }

        case GET_DASHBOARD_DETAIL_KANBAN_SUCCESS:
          return {
            ...state,
            dashboardDetailKanban: action.payload,
          }
    
        case GET_DASHBOARD_DETAIL_KANBAN_FAIL:
          return {
            ...state,
            error: action.payload,
          }

        default:
          return state
      }
}


export default Dashboard;