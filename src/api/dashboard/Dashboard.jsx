import { del, get, post, put } from "../api_helper"
import { GET_DASHBOARDS, GET_DASHBOARD_DETAIL, GET_DASHBOARD_DETAIL_KANBAN } from "../url_helper"

// Get Workspace
export const getDashboards = id => get(`${GET_DASHBOARDS}`, { id })

// Get Workspace Detail
export const getDashboardDetail = id => get(`${GET_DASHBOARD_DETAIL}/${id}`)

// Get Workspace Detail Kanban Items
export const getDashboardDetailKanban = id => get(GET_DASHBOARD_DETAIL_KANBAN.replace("{id}", id))