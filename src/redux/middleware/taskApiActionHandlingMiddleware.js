import { TASK_DETAILS_SAVE } from "../actions/actionTypes";
import { createNewTask, updateTask } from "../../api/taskService";
import {
  updateTaskSuccess,
  createTaskFailure,
  createTaskSuccess,
  updateTaskFailure
} from "../actions/taskActions";

const taskApiActionHandlingMiddleware = ({ dispatch }) => next => action => {
  const { task, type } = action;
  if (type === TASK_DETAILS_SAVE) {
    if (task.id) {
      updateTask(task)
        .then(t => dispatch(updateTaskSuccess(t)))
        .catch(err => updateTaskFailure(err));
    } else {
      createNewTask(task)
        .then(t => dispatch(createTaskSuccess(t)))
        .catch(err => createTaskFailure(err));
    }
  }

  return next(action);
};

export default taskApiActionHandlingMiddleware;
