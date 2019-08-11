import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Alert, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskForm from "./TaskForm";
import initialState from "../../redux/reducers/initialState";

const { func, shape, string, bool } = PropTypes;

const ManageTaskPage = ({ taskId, task, errors, actions, redirect, history }) => {
  const [taskInState, setTask] = useState({ ...initialState.task });
  const [validated, setValidated] = useState(false);
  const [errorsInState, setErrors] = useState([...errors]);
  const { beginSaveTask, loadTaskDetails } = actions;

  useEffect(() => {
    if (taskId && taskId !== task.id) {
      loadTaskDetails(taskId).catch(err => setErrors({ msg: err }));
    } else {
      setTask({ ...task });
    }
  }, [taskId, task]);

  const handleSave = e => {
    e.preventDefault();
    setValidated(true);
    beginSaveTask(taskInState);
  };
  const handleChange = e => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value
    }));
  };
  const shouldRedirect = () => redirect && taskId === task.id;

  const HeadingText = () => (taskInState.id ? "Task Details" : "Create new task");
  if (shouldRedirect()) history.push("/tasks");
  return (
    <>
      {errorsInState.length > 0 && <Alert type="danger">{errorsInState[0]}</Alert>}
      <Card>
        <Card.Body>
          <h1>
            <HeadingText />
          </h1>
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

ManageTaskPage.propTypes = {
  history: shape({
    push: func.isRequired
  }).isRequired,
  taskId: string,
  task: shape({ id: string }).isRequired,
  actions: shape({
    beginSaveTask: func.isRequired,
    loadTaskDetails: func.isRequired
  }).isRequired,
  redirect: bool.isRequired
};

ManageTaskPage.defaultProps = {
  taskId: null
};

const mapStateToProps = (state, ownProps) => {
  const { taskId } = ownProps.match.params;
  const { taskDetails } = state;
  return {
    errors: taskDetails.errors || [],
    taskId,
    task: taskId && taskDetails.task ? taskDetails.task : initialState.task,
    redirect: taskDetails.redirectToList === true
  };
};
const mapDispatchToProps = dispatch => ({
  actions: {
    beginSaveTask: bindActionCreators(taskActions.beginSaveTask, dispatch),
    loadTaskDetails: bindActionCreators(taskActions.loadTaskDetails, dispatch)
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageTaskPage);
