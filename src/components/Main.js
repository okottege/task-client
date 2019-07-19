import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TaskList from './tasks/TaskList';
import About from './About';
import NotFound from './NotFound';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={TaskList} />
      <Route exact path="/tasks" component={TaskList} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </main>
);

export default Main;
