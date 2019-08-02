import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function createTaskReducer(state = initialState.task, action) {
  switch (action.type) {
    case types.TASK_DETAILS_LOAD_SUCCESSFUL:
    case types.TASK_CREATE_SUCCESSFUL:
      return { ...action.task };
    default:
      return state;
  }
}
