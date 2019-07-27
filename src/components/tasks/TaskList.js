import React from "react";
import PropTypes from "prop-types";
import { Card, Table, Badge } from "react-bootstrap";

const TaskList = ({ tasks }) => (
  <>
    <Card>
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Due</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.dueDate}</td>
                <td>
                  <Badge variant="primary">{task.status}</Badge>
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
