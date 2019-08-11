import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const initialManageTaskState = { task: initialState.task, errors: initialState.errors };

export default function manageTaskReducer(state = initialManageTaskState, action) {
  switch (action.type) {
    case types.TASK_DETAILS_LOAD_SUCCESSFUL:
      return { task: { ...action.task } };
    case types.TASK_CREATE_SUCCESSFUL:
    case types.TASK_UPDATE_SUCCESSFUL:
      return { task: { ...action.task }, redirectToList: true };
    case types.COMPONENT_UNMOUNT:
      return { ...initialManageTaskState };
    default:
      return state;
  }
}
