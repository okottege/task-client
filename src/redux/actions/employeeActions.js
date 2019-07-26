import * as types from "./actionTypes";
import getEmployees from "../../api/employeeService";

export function loadEmployeesSuccess(employees) {
  return { type: types.EMPLOYEES_LOAD_SUCCESSFUL, employees };
}

export function loadEmployeesFailure(error) {
  return { type: types.EMPLOYEES_LOAD_FAILURE, error };
}

export default function loadEmployees() {
  return dispatch => {
    getEmployees()
      .then(employees => dispatch(loadEmployeesSuccess(employees)))
      .catch(err => dispatch(loadEmployeesFailure(err)));
  };
}
