import React, { Component, useEffect, useState, setState } from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import { map, size } from "lodash"
import { Tooltip } from 'react-tooltip'

class KanbanCardItem extends Component {
  constructor(props) {
    super(props);
    this.state = { tttop: [] };
  }
  render() {
    const { data } = this.props

    return (
      <React.Fragment>
        <Card className="task-box kanban-column">
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
            
            <Tooltip id={"kanban_item_" + data.id + "_user"} />

            <div className="avatar-group float-start">
              {map(
                data.users,
                (username, index) =>
                  index < 4 && (
                    <div className="avatar-group-item"  key={index}>
                      {(
                        <div className="avatar-xxs" id={"kanban_item_" + data.id + "_user_" + index}>
                            <span className="avatar-title rounded-circle bg-dark text-white font-size-14" data-tooltip-id={"kanban_item_" + data.id + "_user"} data-tooltip-content={username} data-tooltip-variant="dark">
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
                  <div className="avatar-xxs">
                    <span className="avatar-title rounded-circle bg-dark text-white font-size-12 text-lg-center">
                      +{size(data.users) - 4}
                    </span>
                  </div>
                </Link>
                </div>
              )}
            </div>

            <div className="align-self-end text-end">
              <p className="mb-0 text-muted">{new Date(data.createdDate).toLocaleDateString('tr-TR')}</p>
              <p className="mb-0 text-muted">{new Date(data.createdDate).toLocaleTimeString('tr-TR')}</p>
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
