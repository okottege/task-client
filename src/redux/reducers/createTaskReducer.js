import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function createTaskReducer(state = initialState.newTaskId, action) {
  if (action.type === types.TASK_CREATE_SUCCESSFUL) {
    return { taskId: action.taskId };
  }
  return state;
}
