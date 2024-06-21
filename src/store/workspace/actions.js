import {
  GET_WORKSPACES,
  GET_WORKSPACES_SUCCESS,
  GET_WORKSPACES_FAIL,

  GET_WORKSPACE_DETAIL,
  GET_WORKSPACE_DETAIL_SUCCESS,
  GET_WORKSPACE_DETAIL_FAIL,
  
  SET_WORKSPACE_ID
} from "./actionTypes"

export const getWorkspaces = () => ({
  type: GET_WORKSPACES,
})

export const getWorkspacesSuccess = workspaces => ({
  type: GET_WORKSPACES_SUCCESS,
  payload: workspaces,
})

export const getWorkspacesFail = error => ({
  type: GET_WORKSPACES_FAIL,
  payload: error,
})


export const getWorkspaceDetail = workspaceId => ({
  type: GET_WORKSPACE_DETAIL,
  workspaceId,
})

export const getWorkspaceDetailSuccess = workspace => ({
  type: GET_WORKSPACE_DETAIL_SUCCESS,
  payload: workspace,
})

export const getWorkspaceDetailFail = error => ({
  type: GET_WORKSPACE_DETAIL_FAIL,
  payload: error,
})


export const setWorkspaceId = workspaceId => ({
  type: SET_WORKSPACE_ID,
  payload: workspaceId,
})