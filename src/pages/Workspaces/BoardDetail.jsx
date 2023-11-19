import React from "react"
import {
  Container,
} from "reactstrap"

const BoardDetail = () => {
  //meta title
  document.title="Board Detail | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Board Detail</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default BoardDetail;