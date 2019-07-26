import axios from "axios";
import { taskUrl, getResponse } from "./apiUtils";

export default function getTasks() {
  return axios
    .get(taskUrl)
    .then(getResponse)
    .catch(err => {
      throw new Error(`There was a problem getting tasks, error is: ${err.message})`);
    });
}
