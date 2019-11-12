import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Order from './pages/Order';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/order" component={Order} />
    </Switch>
  );
}
