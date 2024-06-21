import {
  GET_WORKSPACES_SUCCESS,
  GET_WORKSPACES_FAIL,

  GET_WORKSPACE_DETAIL_SUCCESS,
  GET_WORKSPACE_DETAIL_FAIL,
  
  SET_WORKSPACE_ID
} from "./actionTypes"

const INIT_STATE = {
  workspaceId: 0,
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

    case SET_WORKSPACE_ID:
      return {
        ...state,
        workspaceId: action.payload,
      } 
    
    default:
      return state
  }
}

export default Workspaces
