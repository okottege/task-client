import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskList from "./TaskList";

const TaskListError = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Unable to load Task List</Alert.Heading>
      <p>There was an error loading tasks. Please try again later</p>
    </Alert>
  );
};

class TasksPage extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.loadTasks();
  }

  redirectToCreateTaskPage = () => this.props.history.push("/tasks/new");

  render() {
    return (
      <Card>
        <Card.Body>
          <h1>Tasks</h1>
          <Card.Text>
            To create a new task please click on{" "}
            <Button variant="primary" onClick={this.redirectToCreateTaskPage}>
              Create new Task
            </Button>
          </Card.Text>
          {this.props.errors.length > 0 ? <TaskListError /> : <TaskList tasks={this.props.tasks} />}
        </Card.Body>
      </Card>
    );
  }
}

TasksPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.shape({
    loadTasks: PropTypes.func.isRequired
  }).isRequired
};
TasksPage.defaultProps = {
  errors: []
};

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => ({
  actions: { loadTasks: bindActionCreators(taskActions.loadTasks, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);
