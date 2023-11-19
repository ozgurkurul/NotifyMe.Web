import React from "react"
import {
  Container,
} from "reactstrap"

const IssueDetail = () => {
  //meta title
  document.title="Issue Detail | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Issue Detail</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default IssueDetail;