import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function createTaskReducer(state = initialState.task, action) {
  switch (action.type) {
    case types.TASK_DETAILS_LOAD_SUCCESSFUL:
    case types.TASK_CREATE_SUCCESSFUL:
      console.log("action is: ", action.type);
      return { ...action.task };
    default:
      console.log("default case, state is: ", state);
      return state;
  }
}
