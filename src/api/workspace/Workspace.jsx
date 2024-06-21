import { del, get, post, put } from "../api_helper"
import { GET_WORKSPACES, GET_WORKSPACE_DETAIL } from "../url_helper"

// Get Workspace
export const getWorkspaces = () => get(GET_WORKSPACES)

// Get Workspace Detail
export const getWorkspaceDetail = id => get(`${GET_WORKSPACE_DETAIL}/${id}`)