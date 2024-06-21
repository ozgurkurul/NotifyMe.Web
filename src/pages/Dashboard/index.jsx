import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Input,
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem
} from "reactstrap";
//redux
import { useSelector, useDispatch } from "react-redux"

//i18n
import { withTranslation } from "react-i18next"

//Actions
import { getWorkspaceDetail as onGetWorkspaceDetail, getDashboards as onGetDashboards } from "/src/store/actions"
import DashboardCardItem from "./dashboard-card-item"

const Dashboard = () => {
  const dispatch = useDispatch()

  const [selectedWorkspaceId, setSelectedWorkspaceId] = useState(0);

  const stateWorkspaceId = useSelector((state) => state.Workspace.workspaceId);

  const { workspaceDetail } = useSelector(state => ({
    workspaceDetail: state.Workspace.workspaceDetail
  }))
  
  const { dashboards } = useSelector(state => ({
    dashboards: state.Dashboard.dashboards.items
  }))

  useEffect(() => {
    let currentWorkspaceId = localStorage.getItem("WORKSPACE");
    
    if(currentWorkspaceId == null || currentWorkspaceId == "")
      currentWorkspaceId = "0";

    setSelectedWorkspaceId(parseInt(currentWorkspaceId));
  }, [])

  useEffect(() => {
    if(stateWorkspaceId){
      setSelectedWorkspaceId(parseInt(stateWorkspaceId));
    }
  }, [stateWorkspaceId]);

  useEffect(() => {
    if(selectedWorkspaceId){
      dispatch(onGetWorkspaceDetail(selectedWorkspaceId));
      dispatch(onGetDashboards(selectedWorkspaceId));
    }
  }, [selectedWorkspaceId]);

  const workspaceDashboards = [
    {
      id: 1,
      name:  "Özgür 1 Dashboard",
      ownerName: "Özgür"
    },
    {
      id : 2,
      name: "Amine 2 Dashboard",
      ownerName: "Amine"
    },
    {
      id: 3,
      name : "Amine 3 Dashboard",
      ownerName: "Amine"
    },
    {
      id: 4,
      name: "Amine 4 Dashboard",
      ownerName: "Amine"
    }
  ];

  //meta title
  document.title="Dashboard | NotifyMe";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {
            workspaceDetail &&
            <Row>
              <Col lg="12">
                <Card className="mini-stats-wid" key={"_card_workspace_" + workspaceDetail.id}>
                  <CardBody>
                    <Row>
                      <Col lg="4">
                        <div className="d-flex">
                          <div className="me-3">                            
                            <div className="mini-stat-icon avatar-md rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                {workspaceDetail.shortName}
                              </span>
                            </div>
                          </div>
                          <div className="flex-grow-1 align-self-center">
                            <div className="text-muted">
                              <h5 className="mb-2"><span className="text-muted">Welcome to</span> {workspaceDetail.name}</h5>
                              <p className="mb-1"><Badge color="primary">{workspaceDetail.ownerName}</Badge></p>
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col lg="4" className="align-self-center">
                        <div className="text-lg-center mt-4 mt-lg-0">
                          <Row>
                            <Col xs="4">
                              <div>
                                <p className="text-muted text-truncate mb-2">
                                  Total Projects
                                </p>
                                <h5 className="mb-0">48</h5>
                              </div>
                            </Col>
                            <Col xs="4">
                              <div>
                                <p className="text-muted text-truncate mb-2">
                                  Projects
                                </p>
                                <h5 className="mb-0">40</h5>
                              </div>
                            </Col>
                            <Col xs="4">
                              <div>
                                <p className="text-muted text-truncate mb-2">
                                  Clients
                                </p>
                                <h5 className="mb-0">18</h5>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                      <Col lg="4" className="d-none d-lg-block">
                        <div className="clearfix mt-4 mt-lg-0">
                          
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          }

          <Row>
            <DashboardCardItem dashboards={dashboards} key={"_dashboard_card_item"} />
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
}

export default withTranslation()(Dashboard)
