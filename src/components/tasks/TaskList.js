import React from "react";
import PropTypes from "prop-types";
import { Card, Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const TaskList = ({ tasks }) => (
  <>
    <Card>
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <td>Title</td>
              <td>Due</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>
                  <Link to={`/tasks/${task.id}`}>{task.title}</Link>
                </td>
                <td>{task.dueDate}</td>
                <td>
                  <h5>
                    <Badge pill variant="primary">
                      {task.status}
                    </Badge>
                  </h5>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  </>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      status: PropTypes.string,
      dueDate: PropTypes.date
    })
  ).isRequired
};

export default TaskList;
