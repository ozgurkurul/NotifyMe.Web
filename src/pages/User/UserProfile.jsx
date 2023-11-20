import React from "react"
import {
  Container,
} from "reactstrap"

const UserProfile = () => {
  //meta title
  document.title="User Profile | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>User Profile</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default UserProfile;