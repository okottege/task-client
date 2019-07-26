import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import TaskList from "./TaskList";

class TasksPage extends Component {
  state = {
    tasks: []
  };

  render() {
    return (
      <>
        <h1>Tasks</h1>
        <TaskList tasks={this.state.tasks} />
      </>
    );
  }
}

export default TasksPage;
