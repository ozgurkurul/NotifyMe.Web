import {
  PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
} from "./actionTypes"

const initialState = {
  passwordResetSuccessMsg: null,
  passwordResetError: null,
}

const passwordReset = (state = initialState, action) => {
  switch (action.type) {
    case PASSWORD_RESET:
      state = {
        ...state,
        passwordResetSuccessMsg: null,
        passwordResetError: null,
      }
      break
    case PASSWORD_RESET_SUCCESS:
      state = {
        ...state,
        passwordResetSuccessMsg: action.payload,
      }
      break
    case PASSWORD_RESET_ERROR:
      state = { ...state, passwordResetError: action.payload }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default passwordReset
