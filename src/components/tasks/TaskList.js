import React from "react";
import PropTypes from "prop-types";
import { Card, Table } from "react-bootstrap";

const TaskList = ({ tasks }) => (
  <>
    <Card>
      <Card.Body>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>#</tr>
            <tr>Title</tr>
            <tr>Description</tr>
            <tr>Due</tr>
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
