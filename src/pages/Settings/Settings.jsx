import React from "react"
import {
  Container,
} from "reactstrap"

const Settings = () => {
  //meta title
  document.title="Settings | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Settings</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Settings;