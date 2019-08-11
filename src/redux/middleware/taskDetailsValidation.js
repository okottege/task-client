import { TASK_DETAILS_SAVE } from "../actions/actionTypes";
import validateTask from "../../components/validators/taskValidator";
import { taskDetailsValidationFailure } from "../actions/taskActions";

const taskDetailsValidation = ({ dispatch }) => next => action => {
  if (action.type === TASK_DETAILS_SAVE) {
    const errors = validateTask(action.task);
    if (errors && errors.length > 0) {
      return dispatch(taskDetailsValidationFailure(errors));
    }
  }
  return next(action);
};

export default taskDetailsValidation;
