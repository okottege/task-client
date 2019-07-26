import * as types from "./actionTypes";
import getTasks from "../../api/taskService";

export function createTask(task) {
  return { type: types.TASK_CREATE_SUCCESSFUL, task };
}

export function loadTasksSuccess(tasks) {
  return { type: types.TASKS_LOAD_SUCCESSFUL, tasks };
}

export function loadTasksFailure(error) {
  return { type: types.TASKS_LOAD_FAILURE, error };
}

export function loadTasks() {
  return dispatch => {
    getTasks()
      .then(tasks => dispatch(loadTasksSuccess(tasks)))
      .catch(err => dispatch(loadTasksFailure(err)));
  };
}
