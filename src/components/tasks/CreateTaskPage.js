import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert, Card } from "react-bootstrap";
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskForm from "./TaskForm";

const { func, shape } = PropTypes;

const CreateTaskPage = ({ saveNewTask, history }) => {
  const defaultNewTask = { status: "created" };
  const [task, setTask] = useState({ ...defaultNewTask });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");

  const handleSave = e => {
    e.preventDefault();
    setValidated(true);
    saveNewTask(task)
      .then(() => {
        history.push("/tasks");
      })
      .catch(err => setError(err));
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };

  return (
    <>
      {error && <Alert type="danger">{error}</Alert>}
      <Card>
        <Card.Body>
          <h1>Create new task</h1>
          <Card.Text>Please enter the task details below</Card.Text>
          <TaskForm task={task} onSave={handleSave} onChange={handleChange} validated={validated} />
        </Card.Body>
      </Card>
    </>
  );
};

CreateTaskPage.propTypes = {
  saveNewTask: func.isRequired,
  history: shape({
    push: func.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  error: state.error
});
const mapDispatchToProps = {
  saveNewTask: taskActions.saveNewTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskPage);
