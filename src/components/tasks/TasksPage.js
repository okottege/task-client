import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskList from "./TaskList";

class TasksPage extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.loadTasks();
  }

  render() {
    return (
      <>
        <h1>Tasks</h1>
        <TaskList tasks={this.props.tasks} />
      </>
    );
  }
}

TasksPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    loadTasks: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});
const mapDispatchToProps = dispatch => ({
  actions: { loadTasks: bindActionCreators(taskActions.loadTasks, dispatch) }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);
