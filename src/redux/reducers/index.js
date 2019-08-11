import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tasks from "./taskReducer";
import apiCallErrors from "./apiCallErrorReducer";
import manageTaskReducer from "./manageTaskReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    taskList: tasks,
    errors: apiCallErrors,
    taskDetails: manageTaskReducer
  });

export default rootReducer;
