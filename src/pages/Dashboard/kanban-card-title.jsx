import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Row,
  Col
} from "reactstrap";

class KanbanCardTitle extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="mb-3 kanban-title-width">
            <CardTitle className="h4 d-inline">{this.props.title}</CardTitle>
            <UncontrolledDropdown className="d-inline float-end">
              <DropdownToggle className="arrow-none" tag="a">
                <i className="mdi mdi-dots-vertical m-0 text-muted h5" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem to="#">Edit</DropdownItem>
                <DropdownItem to="#">Delete</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

KanbanCardTitle.propTypes = {
  title: PropTypes.string
};

export default KanbanCardTitle;
