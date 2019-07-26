import axios from "axios";
import { employeeUrl } from "./apiUtils";

export default function getEmployees() {
  axios
    .get(employeeUrl)
    .then(response => response.data)
    .catch(err => throw new Error(`There was an error retrieving employees: ${err.message}`));
}
