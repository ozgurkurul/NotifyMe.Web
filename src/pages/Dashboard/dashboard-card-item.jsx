import React,{Component} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { Badge, Card, CardBody, Col } from "reactstrap";
import images from "/src/assets/images";
import companies from "/src/assets/images/companies";

class DashboardCardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {
          map(this.props.dashboards, (dashboard) => (
            <Col xl="4" sm="6" key={"_dashboard_card_item_" + dashboard.id}>
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="text-truncate font-size-15">
                        <Link to={`/dashboard/${dashboard.id}`} className="text-dark">
                          {dashboard.name}
                        </Link>
                      </h5>
                    <p className="text-muted mb-4">{dashboard.description}</p>
                      <div className="mb-4">
                        <Badge color="info" className="bg-info me-1">{dashboard.stats.backlogs} backlogs</Badge>
                        <Badge color="primary" className="bg-primary me-1">{dashboard.stats.processing} processing</Badge>
                        <Badge color="secondary" className="bg-secondary me-1">{dashboard.stats.aboutToBeLate} about to be late</Badge>
                        <Badge color="warning" className="bg-warning me-1">{dashboard.stats.park} park</Badge>
                        <Badge color="danger" className="bg-danger me-1">{dashboard.stats.delayed} delayed</Badge>
                        <Badge color="success" className="bg-success me-1">{dashboard.stats.completed} completed</Badge>
                      </div>
                    </div>
                  </div>
                </CardBody>
                <div className="px-4 py-3 border-top">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-2">
                      <Badge color="dark" className="bg-dark">{dashboard.ownerName}</Badge>
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
