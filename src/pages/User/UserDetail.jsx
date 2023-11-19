import React from "react"
import {
  Container,
} from "reactstrap"

const UserDetail = () => {
  //meta title
  document.title="User Detail | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>User Detail</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default UserDetail;