import { combineReducers } from "redux";
import tasks from "./taskReducer";
import apiCallErrors from "./apiCallErrorReducer";
import manageTaskReducer from "./manageTaskReducer";

const rootReducer = combineReducers({ tasks, error: apiCallErrors, task: manageTaskReducer });

export default rootReducer;
