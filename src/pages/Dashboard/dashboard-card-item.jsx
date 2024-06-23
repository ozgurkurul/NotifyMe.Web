import React,{Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Badge, Card, CardBody, Col } from "reactstrap";

class DashboardCardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {
          map(this.props.dashboards, (dashboardDetail) => (
            <Col xl="3" sm="4" key={"_dashboard_card_item_" + dashboardDetail.id}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1 overflow-hidden">

                      <h5 className="text-truncate font-size-15">
                        <Link to={`/dashboard/${dashboardDetail.id}`} className="text-dark">
                          {dashboardDetail.name}
                        </Link>
                      </h5>

                      <p className="text-muted mb-2">{dashboardDetail.description}</p>

                      <div className="avatar-group mb-2">
                        <div className="avatar-group-item">
                          <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-success text-white font-size-14">
                              ÖK
                            </span>
                          </div>
                        </div>
                        <div className="avatar-group-item">
                          <div className="avatar-xs">
                            <span className="avatar-title rounded-circle bg-info text-white font-size-14">
                              ÖK
                            </span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Badge color="dark" className="bg-dark me-1">{dashboardDetail.stats.backlogs} backlogs</Badge>
                        <Badge color="info" className="bg-info me-1">{dashboardDetail.stats.toDos} to dos</Badge>
                        <Badge color="primary" className="bg-primary me-1">{dashboardDetail.stats.inProgress} in progress</Badge>
                        <Badge color="secondary" className="bg-secondary me-1">{dashboardDetail.stats.aboutToBeLate} about to be late</Badge>
                        <Badge color="warning" className="bg-warning me-1">{dashboardDetail.stats.parked} parked</Badge>
                        <Badge color="danger" className="bg-danger me-1">{dashboardDetail.stats.delayed} delayed</Badge>
                        <Badge color="success" className="bg-success me-1">{dashboardDetail.stats.completed} completed</Badge>
                      </div>

                    </div>
                  </div>
                </CardBody>
                <div className="px-4 py-3 border-top">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-2">
                      <Badge color="dark" className="bg-dark">{dashboardDetail.ownerName}</Badge>
                    </li>
                    <li className="list-inline-item me-2" id="dueDate">
                      <i className="bx bx-calendar me-1" /> 23.11.2024
                    </li>
                    <li className="list-inline-item me-2" id="comments">
                      <i className="bx bx-comment-dots me-1" /> Waiting response...
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
          ))
        }
      </React.Fragment>
    );
  }
}

DashboardCardItem.propTypes = {
  dashboards: PropTypes.array,
};

export default DashboardCardItem;
