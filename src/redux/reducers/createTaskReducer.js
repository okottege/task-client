import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function createTaskReducer(state = initialState.task, action) {
  if (action.type === types.TASK_CREATE_SUCCESSFUL) {
    return { ...action.task };
  }
  return state;
}
