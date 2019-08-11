import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore, { history } from "./redux/configureStore";

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
