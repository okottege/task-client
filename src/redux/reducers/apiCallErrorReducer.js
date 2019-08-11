import {
  TASKS_LOAD_FAILURE,
  TASK_CREATE_FAILURE,
  TASK_DETAILS_VALIDATION_FAILURE
} from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallErrorReducer(state = initialState.errors, action) {
  switch (action.type) {
    case TASKS_LOAD_FAILURE:
      return [{ msg: "There was a problem loading tasks" }];
    case TASK_CREATE_FAILURE:
      return [{ msg: "There was a problem creating a task." }];
    case TASK_DETAILS_VALIDATION_FAILURE:
      return [...action.errors];
    default:
      return state;
  }
}
