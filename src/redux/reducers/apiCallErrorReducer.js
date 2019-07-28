import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function apiCallErrorReducer(state = initialState.error, action) {
  if (action.type === types.TASKS_LOAD_FAILURE) {
    return "There was a problem loading tasks";
  }
  if (action.type === types.TASK_CREATE_FAILURE) {
    return "There was a problem creating a task.";
  }
  return state;
}
