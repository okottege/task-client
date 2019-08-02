import React, { useState, useEffect, Component } from "react";
import PropTypes from "prop-types";
import { Alert, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskForm from "./TaskForm";
import initialState from "../../redux/reducers/initialState";

const { func, shape, string } = PropTypes;

const CreateTaskPage = ({ history, taskId, task, ...props }) => {
  console.log("before task passed in prop: ", task);
  const [taskInState, setTask] = useState({ ...initialState.task });
  console.log("after setting task: ", taskInState);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const { loadTaskDetails, saveNewTask } = props.actions;

  useEffect(() => {
    console.log("task.id is ", task.id);
    if (!task.id) {
      loadTaskDetails(taskId).catch(err => setError(err));
    } else {
      console.log("setting task...");
      setTask({ ...task });
    }
  }, [task.id]);

  const handleSave = e => {
    e.preventDefault();
    setValidated(true);
    saveNewTask(taskInState)
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
          <TaskForm
            task={taskInState}
            onSave={handleSave}
            onChange={handleChange}
            validated={validated}
          />
        </Card.Body>
      </Card>
    </>
  );
};

CreateTaskPage.propTypes = {
  history: shape({
    push: func.isRequired
  }).isRequired,
  taskId: string,
  task: PropTypes.object.isRequired
};

CreateTaskPage.defaultProps = {
  taskId: ""
};

const mapStateToProps = (state, ownProps) => {
  const { taskId } = ownProps.match.params;
  const newTask = { status: "created", title: "", description: "" };
  return {
    error: state.error,
    taskId,
    task: taskId && state.task ? state.task : newTask
  };
};
const mapDispatchToProps = dispatch => ({
  actions: {
    saveNewTask: bindActionCreators(taskActions.saveNewTask, dispatch),
    loadTaskDetails: bindActionCreators(taskActions.loadTaskDetails, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTaskPage);
