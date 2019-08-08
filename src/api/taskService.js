import axios from "axios";
import { taskUrl } from "./apiUtils";

const parseDate = dt => (dt ? new Date(dt).toISOString() : undefined);

const toTaskListItem = task => ({
  ...task,
  dueDate: parseDate(task.dueDate)
});

export function getTasks() {
  return axios
    .get(taskUrl)
    .then(({ data }) => data.map(toTaskListItem))
    .catch(err => {
      throw new Error(`There was a problem getting tasks, error is: ${err.message})`);
    });
}

export function getTask(taskId) {
  return axios
    .get(`${taskUrl}/${taskId}`)
    .then(({ data }) => ({ ...data, dueDate: parseDate(data.dueDate) }))
    .catch(err => {
      throw new Error(`There was an problem getting task details, error: ${err.message}`);
    });
}

export function createNewTask(task) {
  return axios
    .post(taskUrl, task)
    .then(response => response.data.id)
    .catch(err => {
      throw new Error(`There was a problem creating a new task, error is: ${err.message}`);
    });
}

export function updateTask(task) {
  return axios
    .put(`${taskUrl}/${task.id}`, task)
    .then(({ data }) => data)
    .catch(err => {
      throw new Error(`There was a problem updating task, error is: ${err}`);
    });
}
