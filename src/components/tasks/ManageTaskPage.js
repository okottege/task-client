import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Alert, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskForm from "./TaskForm";
import initialState from "../../redux/reducers/initialState";

const { func, shape, string } = PropTypes;

const ManageTaskPage = ({ history, taskId, task, ...props }) => {
  const [taskInState, setTask] = useState({ ...initialState.task });
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const { loadTaskDetails, saveNewTask } = props.actions;

  useEffect(() => {
    if (taskId && taskId !== task.id) {
      loadTaskDetails(taskId).catch(err => setError(err));
    } else {
      setTask({ ...task });
    }
  }, [taskId, task]);

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

ManageTaskPage.propTypes = {
  history: shape({
    push: func.isRequired
  }).isRequired,
  taskId: string,
  task: PropTypes.object.isRequired
};

ManageTaskPage.defaultProps = {
  taskId: null
};

const mapStateToProps = (state, ownProps) => {
  const { taskId } = ownProps.match.params;
  return {
    error: state.error,
    taskId,
    task: taskId && state.task ? state.task : initialState.task
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
)(ManageTaskPage);
