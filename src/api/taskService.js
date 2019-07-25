import axios from "axios";
import { baseUrl } from "./apiUtils";

const apiBaseUrl = `${baseUrl}/tasks`;

export function getTasks() {
  axios.get(apiBaseUrl).then(response => response.data);
}
export function getAllEmployees() {
  axios
    .get(`${baseUrl}/employees`)
    .then(response => response.data)
    .catch(throw new Error("There was an error retrieving employees"));
}
