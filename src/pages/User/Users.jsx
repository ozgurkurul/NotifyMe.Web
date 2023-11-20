import React from "react"
import {
  Container,
} from "reactstrap"

const Users = () => {
  //meta title
  document.title="Users | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Users</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Users;