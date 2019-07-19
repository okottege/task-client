import * as types from './actionTypes';
import * as taskApi from '../../api/taskService';

export function createTask(task) {
  return {type: types.TASK_CREATE, task};
}

export function loadTasksSuccess(tasks) {
  return {type: types.TASKS_LOAD_SUCCESSUL, tasks};
}

export function loadTasks() {
  return dispatch => {
    taskApi.getTasks()
      .then(tasks => dispatch(loadTasksSuccess(tasks)))
      .catch(err => console.log('Error fetching tasks: ', err));
  };
}
