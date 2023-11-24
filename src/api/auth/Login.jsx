import { del, get, post, put } from "../api_helper"
import * as url from "../url_helper"

// Login Method
const postLogin = data => post(url.POST_LOGIN, data)

export {
    postLogin
}
  