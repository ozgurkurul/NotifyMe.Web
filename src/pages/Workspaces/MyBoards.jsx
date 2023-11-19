import React from "react"
import {
  Container,
} from "reactstrap"

const MyBoard = () => {
  //meta title
  document.title="My Board | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>My Board</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default MyBoard;