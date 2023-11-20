import React from "react"
import { Redirect } from "react-router-dom"

import MainPage from "../pages/MainPage/MainPage"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import PwdReset from "../pages/Authentication/PasswordReset"

// WorkSpaces
import Dashboard from "../pages/Dashboard/index"
import Users from "../pages/User/Users"
import UserDetail from "../pages/User/UserDetail"
import WorkSpace from "../pages/Workspaces/WorkSpace"
import MyBoards from "../pages/Workspaces/MyBoards"
import BoardDetail from "../pages/Workspaces/BoardDetail"
import IssueDetail from "../pages/Workspaces/IssueDetail"

const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },
  { path: "/users", component: Users },
  { path: "/user-detail", component: UserDetail },
  { path: "/workspace", component: WorkSpace },
  { path: "/my-boards", component: MyBoards },
  { path: "/board-detail", component: BoardDetail },
  { path: "/issue-detail", component: IssueDetail },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/mainpage" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  { path: "/password-reset", component: PwdReset },
  { path: "/mainpage", component: MainPage },
  { path: "/", exact: true, component: () => <Redirect to="/mainpage" /> },
]

export { publicRoutes, authProtectedRoutes }
