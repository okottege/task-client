import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";
import taskDetailsValidation from "./middleware/taskDetailsValidation";
import taskApiActionHandlingMiddleware from "./middleware/taskApiActionHandlingMiddleware";

export const history = createBrowserHistory();

export default function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(taskDetailsValidation, taskApiActionHandlingMiddleware, thunk))
  );
}
