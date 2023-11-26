import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

//jwt
import { jwtDecode } from 'jwt-decode'

function isLoginRequied(){
  let authUserToken = localStorage.getItem("AuthUserToken")
  if(!authUserToken){
    return true;
  }
  try{
    if (jwtDecode(authUserToken).exp < Date.now() / 1000) {
      localStorage.removeItem("AuthUser");
      localStorage.removeItem("AuthUserToken");
      return true;
    }
    return false;
  }
  catch(err){
    return true;
  }
}

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (isAuthProtected) {
        if(isLoginRequied()){
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )
        }        
      }
      else if (!isAuthProtected && props.match.url === '/login') {
        if(!isLoginRequied()){
          return (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: props.location } }}
            />
          )
        }
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any, 
}

export default Authmiddleware;
