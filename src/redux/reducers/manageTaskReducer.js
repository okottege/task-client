import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function manageTaskReducer(state = initialState.task, action) {
  switch (action.type) {
    case types.TASK_DETAILS_LOAD_SUCCESSFUL:
    case types.TASK_CREATE_SUCCESSFUL:
    case types.TASK_UPDATE_SUCCESSFUL:
      return { ...action.task };
    default:
      return state;
  }
}
