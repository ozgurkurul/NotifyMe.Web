import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"

//jwt
import { jwtDecode } from 'jwt-decode'

function isLoginRequied(){
  let authUserJson = localStorage.getItem("AuthUser")
  if(!authUserJson){
    return true;
  }
  try{
    let authUser = JSON.parse(authUserJson);
    if(!authUser){
      return true;
    }
    const token = authUser["token"];
    if (jwtDecode(token).exp < Date.now() / 1000) {
      localStorage.clear();
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
