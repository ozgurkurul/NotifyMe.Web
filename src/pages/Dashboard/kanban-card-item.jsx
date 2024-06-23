import React, { Component, useEffect, useState, setState } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Card, CardBody, Tooltip } from "reactstrap"
import { map, size } from "lodash"

class KanbanCardItem extends Component {
  constructor(props) {
    super(props);
    this.state = { tttop: [] };
  }
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Card className="task-box">
          <CardBody className="kanban-item-width">
            <div className="float-end ms-2">
              <span className={"badge rounded-pill badge-soft-secondary font-size-12"}>
                {data.priority}
              </span>
            </div>
            <div>
              <h5 className="font-size-15">
                <Link to="#" className="text-dark">
                  {data.title}
                </Link>
              </h5>
              <p className="text-muted mb-4">{data.issueType}</p>
            </div>

            <div className="avatar-group float-start">
              {map(
                data.users,
                (username, index) =>
                  index < 4 && (
                    <div className="avatar-group-item"  key={index}>
                      <Tooltip placement="top" target={"kanban_item_" + data.id + "_user_" + index} isOpen={ this.state.tttop["kanban_item_" + data.id + "_user_" + index] } toggle={() => this.setState({ tttop: !this.state.tttop["kanban_item_" + data.id + "_user_" + index] }) }>{username}</Tooltip>
                      {(
                        <div className="avatar-xs" id={"kanban_item_" + data.id + "_user_" + index}>
                            <span className="avatar-title rounded-circle bg-primary text-white font-size-16">
                              {username.charAt(0)}
                            </span>
                        </div>
                      )}
                    </div>
                  )
              )}
              {size(data.users) > 4 && (
                <div className="avatar-group-item">
                <Link to="#" className="d-inline-block">
                  <div className="avatar-xs">
                    <span className="avatar-title rounded-circle bg-info text-white font-size-14 text-lg-center">
                      +{size(data.users) - 4}
                    </span>
                  </div>
                </Link>
                </div>
              )}
            </div>

            <div className="text-end">
              <p className="mb-0 text-muted">{data.createdDate}</p>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}

KanbanCardItem.propTypes = {
  data: PropTypes.object
}

export default KanbanCardItem;
