import {
  GET_WORKSPACES_SUCCESS,
  GET_WORKSPACES_FAIL,

  GET_WORKSPACE_DETAIL_SUCCESS,
  GET_WORKSPACE_DETAIL_FAIL,
} from "./actionTypes"

const INIT_STATE = {
  workspaces: [],
  workspaceDetail: {},
  error: {},
}

const Workspaces = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_WORKSPACES_SUCCESS:
      return {
        ...state,
        workspaces: action.payload,
      }

    case GET_WORKSPACES_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    case GET_WORKSPACE_DETAIL_SUCCESS:
      return {
        ...state,
        workspaceDetail: action.payload,
      }

    case GET_WORKSPACE_DETAIL_FAIL:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}

export default Workspaces
