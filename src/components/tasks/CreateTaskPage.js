import React, { useState } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskForm from "./TaskForm";

const { func, shape } = PropTypes;

const CreateTaskPage = ({ saveNewTask, history }) => {
  const defaultNewTask = { title: "", description: "" };
  const [task, setTask] = useState({ ...defaultNewTask });
  const [error, setError] = useState("");

  const handleSave = e => {
    e.preventDefault();
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
      <h1>Create new task</h1>
      {error && <Alert type="danger">{error}</Alert>}
      <TaskForm task={task} onSave={handleSave} onChange={handleChange} />
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
  task: state.task,
  error: null
});
const mapDispatchToProps = {
  saveNewTask: taskActions.saveNewTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskPage);
