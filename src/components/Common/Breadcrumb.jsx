import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Row, Col, BreadcrumbItem } from "reactstrap"
import { isEmpty } from "lodash";

const Breadcrumb = props => {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link to={!isEmpty(props.titlePath) ? props.titlePath : "#"}>{props.title}</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link to={!isEmpty(props.breadcrumbItemPath) ? props.breadcrumbItemPath : "#"}>{props.breadcrumbItem}</Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  )
}

Breadcrumb.propTypes = {
  breadcrumbItem: PropTypes.string,
  breadcrumbItemPath: PropTypes.string,
  title: PropTypes.string,
  titlePath: PropTypes.string,
}

export default Breadcrumb
