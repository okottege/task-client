import React from "react";
import { Switch, Route } from "react-router-dom";
import TasksPage from "./tasks/TasksPage";
import About from "./About";
import NotFound from "./NotFound";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={TasksPage} />
      <Route exact path="/tasks" component={TasksPage} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
