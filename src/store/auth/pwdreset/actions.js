import {
  PASSWORD_RESET,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_ERROR,
} from "./actionTypes"

export const userPasswordReset = (user, history) => {
  return {
    type: PASSWORD_RESET,
    payload: { user, history },
  }
}

export const userPasswordResetSuccess = message => {
  return {
    type: PASSWORD_RESET_SUCCESS,
    payload: message,
  }
}

export const userPasswordResetError = message => {
  return {
    type: PASSWORD_RESET_ERROR,
    payload: message,
  }
}
