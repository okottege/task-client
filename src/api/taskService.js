import axios from "axios";
import { taskUrl } from "./apiUtils";

export function getTasks() {
  return axios
    .get(taskUrl)
    .then(response => response.data)
    .catch(err => {
      throw new Error(`There was a problem getting tasks, error is: ${err.message})`);
    });
}

export function createNewTask(task) {
  return axios
    .post(taskUrl, task)
    .then(response => response.data)
    .catch(err => {
      throw new Error(`There was a problem creating a new task, error is: ${err.message}`);
    });
}
