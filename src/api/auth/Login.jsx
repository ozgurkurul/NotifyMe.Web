import { del, get, post, put } from "../api_helper"
import { POST_LOGIN, POST_PASSWORD_FORGET } from "../url_helper"

// Login Method
const postLogin = data => post(POST_LOGIN, data)

// ForgetPwd
const postForgetPwd = data => post(POST_PASSWORD_FORGET, data)

export {
    postLogin,
    postForgetPwd
}