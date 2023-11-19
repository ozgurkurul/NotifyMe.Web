import React from "react"
import {
  Container,
} from "reactstrap"

const Workspace = () => {
  //meta title
  document.title="Workspace | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Workspace</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Workspace;