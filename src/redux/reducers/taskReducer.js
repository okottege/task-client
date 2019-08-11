import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const initialTaskState = { tasks: initialState.tasks, errors: initialState.errors };

export default function taskReducer(state = initialTaskState, action) {
  if (action.type === types.TASKS_LOAD_SUCCESSFUL) {
    return { tasks: [...action.tasks], errors: [] };
  }
  return state;
}
