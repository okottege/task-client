import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function taskReducer(state = initialState.tasks, action) {
  if (action.type === types.TASKS_LOAD_SUCCESSFUL) {
    return action.tasks;
  }
  return state;
}
