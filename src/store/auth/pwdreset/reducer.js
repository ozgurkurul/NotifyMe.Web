import {
  PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
} from "./actionTypes"

const initialState = {
  resetSuccessMsg: null,
  resetError: null,
}

const passwordReset = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET:
      state = {
        ...state,
        resetSuccessMsg: null,
        resetError: null,
      }
      break
    case PASSWORD_RESET_SUCCESS:
      state = {
        ...state,
        resetSuccessMsg: action.payload,
      }
      break
    case PASSWORD_RESET_ERROR:
      state = { ...state, resetError: action.payload }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default passwordReset
