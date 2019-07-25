import * as types from "./actionTypes";
import getTasks from "../../api/taskService";

export function createTask(task) {
  return { type: types.TASK_CREATE, task };
}

export function loadTasksSuccess(tasks) {
  return { type: types.TASKS_LOAD_SUCCESSUL, tasks };
}

export function loadTasks() {
  return dispatch => {
    getTasks()
      .then(tasks => dispatch(loadTasksSuccess(tasks)))
      .catch(err => console.log("Error fetching tasks: ", err));
  };
}

export function loadEmployees() {
  return dispatch => {};
}
