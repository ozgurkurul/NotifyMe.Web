import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"
import Account from "./auth/register/reducer"
import ForgetPassword from "./auth/forgetpwd/reducer"
import PasswordReset from "./auth/pwdreset/reducer"
import Profile from "./auth/profile/reducer"

//Dashboard 
import Dashboard from "./dashboard/reducer";

//Workspace 
import Workspace from "./workspace/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Login,
  Account,
  ForgetPassword,
  PasswordReset,
  Profile,
  Dashboard,
  Workspace
})

export default rootReducer
