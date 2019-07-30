import { combineReducers } from "redux";
import tasks from "./taskReducer";
import apiCallErrors from "./apiCallErrorReducer";
import createTaskReducer from "./createTaskReducer";

const rootReducer = combineReducers({ tasks, error: apiCallErrors, task: createTaskReducer });

export default rootReducer;
