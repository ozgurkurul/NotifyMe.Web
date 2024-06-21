import { del, get, post, put } from "../api_helper"
import { GET_DASHBOARDS, GET_DASHBOARD_DETAIL } from "../url_helper"

// Get Workspace
export const getDashboards = id => get(`${GET_DASHBOARDS}`, { id })

// Get Workspace Detail
export const getDashboardDetail = id => get(`${GET_DASHBOARD_DETAIL}/${id}`)