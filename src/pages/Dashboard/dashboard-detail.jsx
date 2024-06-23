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
} from "reactstrap"
import { isEmpty, map } from "lodash";
import "/src/assets/scss/dashboard/kanban.scss";
import DashboardDetailKanban from "./dashboard-detail-kanban"

//Imports Breadcrumbs
import Breadcrumbs from "/src/components/Common/Breadcrumb";

//redux
import { useSelector, useDispatch } from "react-redux"

//i18n
import { withTranslation } from "react-i18next"

//Actions
import { getDashboardDetail as onGetDashboardDetail, getDashboardDetailKanban as onGetDashboardDetailKanban } from "/src/store/actions"

const DashboardDetail = (props) => {
    const dispatch = useDispatch()
    const dashboardId = props.match.params.id;

    const { dashboardDetail } = useSelector(state => ({
        dashboardDetail: state.Dashboard.dashboardDetail.item
    }))
    
    const { dashboardDetailKanban } = useSelector(state => ({
        dashboardDetailKanban: state.Dashboard.dashboardDetailKanban.items
    }))

    useEffect(() => {
        if(dashboardId > 0){
          dispatch(onGetDashboardDetail(dashboardId));
          dispatch(onGetDashboardDetailKanban(dashboardId));
        }
    }, [dashboardId]);
    
    //meta title
    document.title="Dashboard | NotifyMe";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    
                    {
                        !isEmpty(dashboardDetail) &&
                        <Row>
                            <Col lg="12">
                                <Card className="mini-stats-wid" key={"_card_dashboard_detail_" + dashboardDetail.id}>
                                    <CardBody>
                                        <Breadcrumbs className="mb-0" breadcrumbItem={dashboardDetail.name} title="Panolar" titlePath={`/dashboard/${dashboardId}`} breadcrumbItemPath="/dashboard" />
                                        
                                        <Row>
                                            <Col lg="6">
                                                <div className="d-flex">
                                                    <div className="flex-grow-1 align-self-center">
                                                        <div className="text-muted">
                                                            <p className="mb-0">{dashboardDetail.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            {
                                                !isEmpty(dashboardDetail.stats) &&
                                                <Col lg="6" className="align-self-center text-lg-end">
                                                    <Badge color="dark" className="bg-dark me-1 font-size-12">{dashboardDetail.stats.backlogs} backlogs</Badge>
                                                    <Badge color="info" className="bg-info me-1 font-size-12">{dashboardDetail.stats.toDos} to dos</Badge>
                                                    <Badge color="primary" className="bg-primary me-1 font-size-12">{dashboardDetail.stats.inProgress} in progress</Badge>
                                                    <Badge color="warning" className="bg-warning me-1 font-size-12">{dashboardDetail.stats.parked} parked</Badge>
                                                    <Badge color="secondary" className="bg-secondary me-1 font-size-12">{dashboardDetail.stats.aboutToBeLate} about to be late</Badge>
                                                    <Badge color="danger" className="bg-danger me-1 font-size-12">{dashboardDetail.stats.delayed} delayed</Badge>
                                                    <Badge color="success" className="bg-success me-1 font-size-12">{dashboardDetail.stats.completed} completed</Badge>
                                                </Col>
                                            }
                                            
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    }

                    {
                        !isEmpty(dashboardDetailKanban) && (<DashboardDetailKanban board={{ columns: dashboardDetailKanban }} />)
                    }

                </Container>
            </div>
        </React.Fragment>
    );
}

export default DashboardDetail;