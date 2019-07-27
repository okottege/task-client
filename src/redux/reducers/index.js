import { combineReducers } from "redux";
import tasks from "./taskReducer";
import apiCallErrors from "./apiCallErrorReducer";

const rootReducer = combineReducers({ tasks, error: apiCallErrors });

export default rootReducer;
