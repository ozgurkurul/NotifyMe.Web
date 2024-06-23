import React,{Component} from "react";
import PropTypes from "prop-types";
import { Col, Row, Badge, Card, CardBody } from "reactstrap";
import Board from "@lourenci/react-kanban";
import KanbanCardItem from "./kanban-card-item";
import KanbanCardTitle from "./kanban-card-title";

class DashboardDetailKanban extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const content = this.props.board;

    return (
      <React.Fragment>
        {
            <Row className="mb-4">
                <Col>
                    <Board
                        initialBoard={content}
                        disableColumnDrag
                        onCardDragEnd={console.log}
                        renderColumnHeader={({ title }) => (
                            <KanbanCardTitle title={title} />
                        )}
                        renderCard={(data, { dragging }) => (
                            <KanbanCardItem data={data} dragging={dragging}>
                                {data}
                            </KanbanCardItem>
                        )}
                    />
                </Col>
            </Row>
        }
      </React.Fragment>
    );
  }
}

DashboardDetailKanban.propTypes = {
  board: PropTypes.any
};

export default DashboardDetailKanban;