import React from "react";
import PropTypes from "prop-types";
import { Card, Table } from "react-bootstrap";

const TaskList = ({ tasks }) => (
  <>
    <Card>
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <td>#</td>
              <td>Title</td>
              <td>Description</td>
              <td>Due</td>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.dueDate}</td>
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
      description: PropTypes.string,
      dueDate: PropTypes.date
    })
  ).isRequired
};

export default TaskList;
