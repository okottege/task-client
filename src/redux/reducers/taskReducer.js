import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function taskReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.TASKS_LOAD_SUCCESSFUL:
      return action.tasks;
    case types.TASK_CREATE_SUCCESSFUL:
      return [...state, { ...action.task }];
    default:
      return state;
  }
}
