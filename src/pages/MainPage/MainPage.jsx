import React from "react"
import {
  Container,
} from "reactstrap"

const Mainpage = () => {
  //meta title
  document.title="Mainpage | NotifyMe";
  return (
    <React.Fragment>
    <div className="page-content">
      <Container fluid>
        <h4>Mainpage</h4>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default Mainpage;