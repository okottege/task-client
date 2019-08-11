import * as types from "./actionTypes";
import { getTasks, getTask } from "../../api/taskService";

export function createTaskSuccess(task) {
  return { type: types.TASK_CREATE_SUCCESSFUL, task };
}

export function loadTasksSuccess(tasks) {
  return { type: types.TASKS_LOAD_SUCCESSFUL, tasks };
}

export function loadTaskDetailsSuccess(task) {
  return { type: types.TASK_DETAILS_LOAD_SUCCESSFUL, task };
}

export function loadTasksFailure(error) {
  return { type: types.TASKS_LOAD_FAILURE, error };
}

export function createTaskFailure(error) {
  return { type: types.TASK_CREATE_FAILURE, error };
}

export function updateTaskFailure(error) {
  return { type: types.TASK_UPDATE_FAILURE, error };
}

export function serviceErrorResponse(error) {
  return { type: types.SERVICE_ERROR_RESPONSE, error };
}

export function updateTaskSuccess(task) {
  return { type: types.TASK_UPDATE_SUCCESSFUL, task };
}

export function taskDetailsValidationFailure(errors) {
  return { type: types.TASK_DETAILS_VALIDATION_FAILURE, errors };
}

export function beginSaveTask(task) {
  return { type: types.TASK_DETAILS_SAVE, task };
}

export function componentUnmount() {
  return { type: types.COMPONENT_UNMOUNT };
}

export function loadTasks() {
  return dispatch => {
    return getTasks()
      .then(tasks => dispatch(loadTasksSuccess(tasks)))
      .catch(err => dispatch(loadTasksFailure(err)));
  };
}

export function loadTaskDetails(taskId) {
  return dispatch => {
    return getTask(taskId)
      .then(task => dispatch(loadTaskDetailsSuccess(task)))
      .catch(err => dispatch(serviceErrorResponse(err)));
  };
}
