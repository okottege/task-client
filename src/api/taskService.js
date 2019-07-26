import axios from "axios";
import { taskUrl } from "./apiUtils";

export default function getTasks() {
  axios
    .get(taskUrl)
    .then(response => response.data)
    .catch(err => throw new Error(`There was a problem getting tasks, error is: ${err.message})`));
}
