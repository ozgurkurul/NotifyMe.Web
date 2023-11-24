import { del, get, post, put } from "../api_helper"
import * as url from "../url_helper"

// Login Method
const postLogin = data => post(url.POST_LOGIN, data)

// ForgetPwd
const postForgetPwd = data => post(url.POST_PASSWORD_FORGET, data)

export {
    postLogin,
    postForgetPwd
}
  